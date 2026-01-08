# SEO 规范：主页与十二时辰页面

本规范用于统一站内 Title/Description、canonical 与站内链接策略，避免与现有 `meridian-clock.html` 重复，并确保 sitemap/robots 收录规划一致。

## 1. Title / Description 规范

### 主页（/）
- **Title 格式**：`承古堂｜传统中医与节律养生指南`
- **Description 模板**：
  - `承古堂提供子午流注、十二时辰与中医养生内容，涵盖作息节律、功法练习与经典导读，帮助你建立可执行的日常调养计划。`
- **长度建议**：Title 28–36 字；Description 70–120 字。

### 十二时辰子页（12 页）
- **页面命名建议**：
  - `meridian-zi.html`、`meridian-chou.html`、`meridian-yin.html`、`meridian-mao.html`、`meridian-chen.html`、`meridian-si.html`、`meridian-wu.html`、`meridian-wei.html`、`meridian-shen.html`、`meridian-you.html`、`meridian-xu.html`、`meridian-hai.html`
- **Title 模板**：
  - `子时（23:00-01:00）｜胆经调养重点｜十二时辰`
  - 替换为对应时辰、经络与时段即可。
- **Description 模板**：
  - `子时对应胆经运行高峰，适合收心入睡与储备气血。本页整理当令经络特点、作息建议与食饮提示。`
  - 替换为对应时辰、经络要点与调养建议。
- **长度建议**：Title 28–40 字；Description 70–120 字。

> 说明：12 页描述需与 `meridian-clock.html` 保持主题差异（聚焦单一时辰），避免重复摘要。

## 2. Canonical 规则（避免与 `meridian-clock.html` 重复）

- **`meridian-clock.html`**：自引用 canonical 指向自身。
- **十二时辰子页**：
  - 每页 canonical 指向自身（例如 `https://traditionalchinesemedicine.online/meridian-zi.html`）。
  - 不指向 `meridian-clock.html`，避免被合并为同一主内容。
- **URL 统一规范**：
  - 统一使用 `.html` 结尾与非 `www` 域。
  - 避免同页面存在多种参数或锚点变体进入索引。

## 3. Sitemap / Robots 规划

- **sitemap.xml 必须包含**：
  - 主页 `/`
  - `meridian-clock.html`（主入口页）
  - 十二时辰 12 个子页
- **新增 12 页时的动作清单**：
  1. 在 `sitemap.xml` 增加 12 个 `<url>` 节点（loc、lastmod、changefreq、priority）。
  2. 确认 `robots.txt` 仍指向 `https://traditionalchinesemedicine.online/sitemap.xml`。
  3. 发布后重新提交 sitemap（Search Console）。

## 4. 导航与站内链接指向策略

- **主入口**：
  - 全站导航保留 `meridian-clock.html` 作为「子午流注 / 十二时辰」主入口。
- **子页互链**：
  - 12 个子页提供「上一个时辰 / 下一个时辰」串联链接。
  - 子页顶部或底部提供返回 `meridian-clock.html` 的明显入口。
- **主页与专区推荐**：
  - 主页与相关专题页（如 `organ-clock.html`）推荐 12 页入口时，优先链接到 `meridian-clock.html`，避免分散权重。
- **锚点策略**：
  - 若主入口页提供 12 时辰速览，可用锚点导航，但子页仍需独立 URL 与 canonical。

