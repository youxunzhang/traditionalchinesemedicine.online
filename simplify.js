(function () {
  const ATTRIBUTE_LIST = [
    'title',
    'placeholder',
    'alt',
    'aria-label',
    'aria-description',
    'aria-valuetext',
    'aria-valuenow',
    'aria-describedby'
  ];
  const META_SELECTORS = [
    'meta[name="description"]',
    'meta[name="keywords"]',
    'meta[property="og:title"]',
    'meta[property="og:description"]',
    'meta[name="twitter:title"]',
    'meta[name="twitter:description"]'
  ];
  const SKIP_NODES = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME']);
  let convertText = null;

  function createConverter() {
    if (convertText) {
      return convertText;
    }
    if (!window.OpenCC || typeof window.OpenCC.Converter !== 'function') {
      console.warn('[simplify] OpenCC 未载入，将以原文显示。');
      convertText = value => value;
      return convertText;
    }
    try {
      const converter = window.OpenCC.Converter({ from: 'tw', to: 'cn' });
      convertText = value => {
        if (!value) return value;
        try {
          const converted = converter(value);
          return converted;
        } catch (error) {
          console.warn('[simplify] 转换失败：', error);
          return value;
        }
      };
    } catch (error) {
      console.warn('[simplify] 无法建立转换器：', error);
      convertText = value => value;
    }
    return convertText;
  }

  function convertNodeText(node, converter) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const original = node.nodeValue;
    if (!original || !original.trim()) return;
    const converted = converter(original);
    if (converted !== original) {
      node.nodeValue = converted;
    }
  }

  function convertAttributes(element, converter) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return;
    ATTRIBUTE_LIST.forEach(attr => {
      if (element.hasAttribute(attr)) {
        const original = element.getAttribute(attr);
        if (!original) return;
        const converted = converter(original);
        if (converted !== original) {
          element.setAttribute(attr, converted);
        }
      }
    });
    if (element.tagName === 'META' && element.hasAttribute('content')) {
      const original = element.getAttribute('content');
      if (original) {
        const converted = converter(original);
        if (converted !== original) {
          element.setAttribute('content', converted);
        }
      }
    }
  }

  function traverse(node, converter) {
    if (!node) return;
    if (node.nodeType === Node.TEXT_NODE) {
      convertNodeText(node, converter);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (SKIP_NODES.has(node.tagName)) return;

    convertAttributes(node, converter);
    node.childNodes.forEach(child => traverse(child, converter));
  }

  function convertMeta(converter) {
    META_SELECTORS.forEach(selector => {
      document.querySelectorAll(selector).forEach(meta => convertAttributes(meta, converter));
    });
    if (document.title) {
      const converted = converter(document.title);
      if (converted !== document.title) {
        document.title = converted;
      }
    }
  }

  function handleMutations(mutations, converter) {
    mutations.forEach(mutation => {
      if (mutation.type === 'characterData') {
        convertNodeText(mutation.target, converter);
        return;
      }
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          convertNodeText(node, converter);
        } else {
          traverse(node, converter);
        }
      });
    });
  }

  function ensureLanguageMetadata() {
    const html = document.documentElement;
    if (html && html.lang !== 'zh-CN') {
      html.lang = 'zh-CN';
    }
    const meta = document.querySelector('meta[http-equiv="Content-Language"]');
    if (meta) {
      if (meta.getAttribute('content') !== 'zh-CN') {
        meta.setAttribute('content', 'zh-CN');
      }
    } else {
      const languageMeta = document.createElement('meta');
      languageMeta.setAttribute('http-equiv', 'Content-Language');
      languageMeta.setAttribute('content', 'zh-CN');
      const head = document.head || document.querySelector('head');
      if (head) {
        head.prepend(languageMeta);
      }
    }
  }

  function initialize() {
    const converter = createConverter();
    if (!converter) return;
    ensureLanguageMetadata();
    const applyConversion = () => {
      if (document.body) {
        traverse(document.body, converter);
      }
      convertMeta(converter);
    };
    applyConversion();

    if (window.MutationObserver && document.body) {
      const observer = new MutationObserver(mutations => handleMutations(mutations, converter));
      observer.observe(document.body, {
        characterData: true,
        subtree: true,
        childList: true
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
