# 承古堂网站说明

TraditionalChineseMedicine.online 现在默认以简体中文呈现，整合经方、养生功法与生活调理等专题内容，并维持现代化的视觉设计。

## 主要页面
- **index.html**：首页，汇集经典书单与常见问题。
- **ba-duan-jin.html**：八段锦气功教学与影音推荐。
- **babu-jingang-gong.html**：八部金刚功进阶训练笔记。
- **ni-haixia.html**：倪海厦医师专页，介绍生平与研习资源。

## 开发备注
- 页面加载时会动态载入 OpenCC，将原有繁体内容转换为简体中文，并统一 `lang="zh-Hans"` 设置。
- 导航、常见问题展开、平滑滚动等互动功能集中于 `script.js`。

开发者可直接在浏览器开启 `index.html` 进行检视，无需额外建置流程。
