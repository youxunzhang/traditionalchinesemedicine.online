# Heritage TCM Website

An English-language refresh of the TraditionalChineseMedicine.online project. The site highlights classical formulas, trusted practitioners, movement practices, and nutrition ideas in a modern layout.

## Key pages
- **index.html** – Landing page with herbal spotlights, recommended reading, and FAQs.
- **famous-tcm-doctors.html** – Profiles of influential TCM physicians with links to detailed biographies.
- **ba-duan-jin.html** – English guide to the Eight Brocades qigong sequence with video recommendations.
- **babu-jingang-gong.html** – Advanced practice notes for Ba Bu Jingang Gong.
- **ni-haixia.html** – Tribute page to Dr. Ni Hai-Xia and his teaching legacy.
- **food-nutrition.html** – TCM-inspired meal planning tips and seasonal guidance.
- **zhongyao.html** – Materia medica highlights (see the homepage herb search for quick access).

## Development notes
- All copy has been rewritten in English to suit an international audience.
- Herbal data for the homepage lives in `data/shennong-herbs.js` and currently covers 24 herbs spanning the superior, medium, and regular classes. Add new entries to extend it further.
- Global interactions (navigation, FAQ toggles, smooth scrolling) are handled in `script.js`.

To explore locally, open `index.html` in your browser and follow the navigation links. No build step is required.
