# 承古堂网站说明

TraditionalChineseMedicine.online 现在默认以简体中文呈现，整合经方、本草、养生功法与名医故事等专题内容，并维持现代化的视觉设计。

## 主要页面
- **index.html**：首页，汇集本草精选、经典书单与常见问题。
- **famous-tcm-doctors.html**：历代名医概览，可进入各人物详细传记。
- **ba-duan-jin.html**：八段锦气功教学与影音推荐。
- **babu-jingang-gong.html**：八部金刚功进阶训练笔记。
- **ni-haixia.html**：倪海厦医师专页，介绍生平与研习资源。
- **zhongyao.html**：神农本草精要，可快速检索药性与等级。

## 开发备注
- 页面加载时会动态载入 OpenCC，将原有繁体内容转换为简体中文，并统一 `lang="zh-Hans"` 设置。
- 首页本草数据来源于 `data/shennong-herbs.js`，目前收录 24 味药材，可依需求扩充。
- 导航、常见问题展开、平滑滚动等互动功能集中于 `script.js`。

开发者可直接在浏览器开启 `index.html` 进行检视，无需额外建置流程。
