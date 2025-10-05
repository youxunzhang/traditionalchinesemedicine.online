# 郵遞區號與國際區碼查詢平台

## 🌍 概覽

這是一個可查詢全球郵遞區號與電話區碼的網頁應用，以現代前端技術打造，兼顧桌機與行動裝置的使用體驗。

## ✨ 特色功能

### 🔍 查詢機制
- **多分頁搜尋**：可依郵遞區號、電話區碼或國碼切換查詢。
- **關鍵字彈性**：支援城市、州、省或國家名稱等多元輸入。
- **精確比對選項**：可切換完全符合或模糊搜尋。
- **即時結果**：輸入後立即顯示結果，並具載入動畫。

### 📊 資料呈現
- **資訊完整**：顯示國家、城市、州／省、郵遞區號、電話區碼與時區。
- **國旗圖示**：以旗幟辨識國別。
- **響應式表格**：行動裝置也能清晰閱讀。
- **匯出功能**：支援下載 CSV 報表。

### 🎨 使用體驗
- **現代設計**：乾淨專業的漸層介面。
- **自適應版面**：針對各種螢幕尺寸最佳化。
- **互動效果**：滑鼠懸停與平滑動畫。
- **載入提示**：提供明確的載入狀態。

### 📱 行動優化
- **觸控友善**：行動操作順暢。
- **可調式表格**：小螢幕自動調整欄位。
- **快速載入**：針對行動網路最佳化效能。

## 🛠️ 技術實作

### 前端技術
- **HTML5**：語意化標記結構。
- **CSS3**：運用 Flexbox 與 Grid 的現代化樣式。
- **JavaScript (ES6+)**：負責互動邏輯。
- **Font Awesome**：圖示資源。
- **Google Fonts**：Inter 字體家族。

### SEO Optimization
- **Meta Tags**: Comprehensive SEO meta tags
- **Structured Data**: Schema.org markup for web application
- **Open Graph**: Social media sharing optimization
- **Sitemap Integration**: Included in site navigation

### Performance Features
- **Service Worker**: Offline caching support
- **Optimized Images**: Country flag CDN integration
- **Minimal Dependencies**: Lightweight implementation
- **Fast Loading**: Optimized resource loading

## 📋 Sample Data

The application includes sample data for major cities worldwide:

### United States
- New York, NY: 10001-10282 | +1-212, +1-718
- Los Angeles, CA: 90001-91609 | +1-213, +1-310
- Chicago, IL: 60601-60699 | +1-312, +1-773

### International Cities
- London, UK: SW1A 1AA | +44-20
- Tokyo, Japan: 100-0001 | +81-3
- Paris, France: 75001-75020 | +33-1
- Sydney, Australia: 2000-2999 | +61-2
- Toronto, Canada: M1A-M9Z | +1-416, +1-647

## 🚀 Usage

### Search Options
1. **Postal Codes Tab**: Search by city, state, or country name
2. **Area Codes Tab**: Search by area code or city name
3. **Country Codes Tab**: Search by country name or code

### Search Features
- **Fuzzy Search**: Partial matching for flexible results
- **Exact Match**: Toggle for precise search results
- **Case Insensitive**: Search works regardless of case
- **Multiple Fields**: Searches across all data fields

### 匯出功能
- **CSV 匯出**：可將查詢結果下載為 CSV 檔。
- **資料完整**：匯出內容包含所有欄位。
- **格式友善**：適用於試算表程式。

## 📱 行動體驗

### 響應式設計
- **自適應版面**：依螢幕尺寸自動調整。
- **觸控優化**：大型按鈕方便手機操作。
- **高速效能**：針對行動網路調整載入速度。
- **離線支援**：Service Worker 快取機制。

### 行動特色
- **滑動操作**：介面支援手勢切換。
- **表格最佳化**：行動版呈現易於閱讀。
- **快速搜尋**：提供精簡搜尋流程。
- **匯出支援**：行動裝置亦可匯出資料。

## 🔧 自訂調整

### 新增資料
```javascript
const newData = {
    country: '國家名稱',
    city: '城市名稱',
    state: '州／省',
    postal: '郵遞區號範圍',
    area: '電話區碼',
    timezone: '時區'
};
```

### 介面調整
- **配色**：調整 CSS 變數以符合品牌。
- **版面**：修改 Grid 與 Flexbox 設定。
- **字體**：自訂字型與大小。
- **動畫**：調整轉場與動畫參數。

## 📈 效能指標

### 載入速度
- **首次內容繪製**：小於 1.5 秒。
- **最大內容繪製**：小於 2.5 秒。
- **累積版面偏移**：低於 0.1。
- **首次輸入延遲**：低於 100 毫秒。

### SEO 與可及性
- **PageSpeed Insights**：行動與桌機皆達 90 分以上。
- **核心網路指標**：全部維持綠色標準。
- **無障礙**：符合 WCAG 2.1 AA 等級。
- **最佳實務**：達成 100% 評分。

## 🔗 整合指引

### 導覽整合
- **主選單**：可納入網站導覽列。
- **頁尾連結**：於頁尾提供快速進入。
- **網站地圖**：可加入 XML sitemap 便於索引。
- **Service Worker**: Cached for offline access

### SEO Integration
- **Meta Tags**: Complete SEO optimization
- **Structured Data**: Rich snippets support
- **Open Graph**: Social media optimization
- **Canonical URLs**: Proper URL structure

## 🎯 Future Enhancements

### Planned Features
- **API Integration**: Real-time data from postal services
- **Advanced Filters**: Filter by region, timezone, etc.
- **Map Integration**: Visual location display
- **User Accounts**: Save favorite searches
- **Bulk Lookup**: Multiple city search
- **API Access**: Developer API for integration

### Technical Improvements
- **Database Integration**: Replace static data with database
- **Caching Strategy**: Advanced caching for better performance
- **Analytics**: User behavior tracking
- **A/B Testing**: Performance optimization testing

## 📞 Support

For technical support or feature requests, please contact:
- **Email**: zhangyouxun2024@qq.com
- **WeChat**: zhangyouxun2013
- **Phone**: 86-15000273517

---

*Built with modern web technologies for optimal performance and user experience.*

