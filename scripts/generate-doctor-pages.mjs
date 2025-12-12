import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import famousDoctors from '../data/famous-doctors.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.resolve(__dirname, '..', 'famous-doctors');

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

function createSlug(doctor) {
  return `doctor-${doctor.id}`;
}

function buildMetaDescription(doctor) {
  const parts = [doctor.contribution];
  if (doctor.specialties?.length) {
    parts.push(`專長：${doctor.specialties.join('、')}`);
  }
  if (doctor.notableWorks?.length) {
    parts.push(`代表著作：${doctor.notableWorks.join('、')}`);
  }
  return parts.join('｜');
}

function buildJsonLd(doctor, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: doctor.name,
    jobTitle: '中醫名家',
    description: doctor.contribution,
    url,
    areaServed: 'Traditional Chinese Medicine',
    knowsAbout: doctor.specialties,
    worksFor: {
      '@type': 'Organization',
      name: 'TCM 傳統醫學館',
      url: 'https://traditionalchinesemedicine.online'
    },
    mainEntityOfPage: url,
    sameAs: doctor.notableWorks.map(work => `https://traditionalchinesemedicine.online/famous-tcm-doctors#${encodeURIComponent(work)}`)
  };
}

async function generatePage(doctor) {
  const slug = createSlug(doctor);
  const fileName = `${slug}.html`;
  const filePath = path.join(outputDir, fileName);
  const canonicalUrl = `https://traditionalchinesemedicine.online/famous-doctors/${fileName}`;
  const metaDescription = escapeHtml(buildMetaDescription(doctor));
  const jsonLd = JSON.stringify(buildJsonLd(doctor, canonicalUrl), null, 2);

  const specialties = (doctor.specialties || []).map(item => `<li>${escapeHtml(item)}</li>`).join('\n                ');
  const works = (doctor.notableWorks || []).map(item => `<li><em>${escapeHtml(item)}</em></li>`).join('\n                ');

  const article = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Language" content="zh-CN">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(doctor.name)}｜中醫名家詳解</title>
    <meta name="description" content="${metaDescription}">
    <link rel="canonical" href="${canonicalUrl}">
    <meta name="robots" content="index, follow">
    <link rel="stylesheet" href="../styles.css">
    <script type="application/ld+json">
${jsonLd}
    </script>
</head>
<body class="master-profile">
    <a class="back-link" href="../famous-tcm-doctors.html">←<span>返回名醫索引</span></a>
    <main class="profile-container">
        <header>
            <p class="profile-era">${escapeHtml(doctor.era)}｜${escapeHtml(doctor.period)}</p>
            <h1>${escapeHtml(doctor.name)}</h1>
            <p class="profile-tagline">${escapeHtml(doctor.contribution)}</p>
        </header>
        <section>
            <h2>專長領域</h2>
            <ul>
                ${specialties}
            </ul>
        </section>
        <section>
            <h2>代表著作</h2>
            <ul>
                ${works}
            </ul>
        </section>
        <section>
            <h2>醫學觀點</h2>
            <p>${escapeHtml(doctor.contribution)}</p>
        </section>
        <section class="profile-meta">
            <div>
                <h3>歷史背景</h3>
                <p>時期：${escapeHtml(doctor.period)}｜年代：${escapeHtml(doctor.era)}</p>
            </div>
            <div>
                <h3>關鍵詞</h3>
                <p>${escapeHtml([...new Set([...(doctor.specialties || []), ...(doctor.notableWorks || [])])].join('、'))}</p>
            </div>
        </section>
        <footer>回到 <a href="../index.html">TCM 首頁</a> · <a href="../famous-tcm-doctors.html">名醫列表</a></footer>
    </main>
    <script src="../script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/opencc-js@1.0.4/dist/umd/full.js" defer></script>
    <script src="../simplify.js" defer></script>
</body>
</html>
`;

  await fs.writeFile(filePath, article, 'utf8');
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  await Promise.all(famousDoctors.map(generatePage));
  console.log(`Generated ${famousDoctors.length} doctor pages in ${outputDir}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
