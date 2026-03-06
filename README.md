# Corecleen Solutions Ltd — Responsive Landing Page

> A responsive landing page built for **Corecleen Solutions Ltd**, a professional cleaning company based in Kampala, Uganda. This project was developed as part of the KCL / Kanzu Code Software Engineer entry test.

---

## 🔗 Live Preview

> _(Add your GitHub Pages / Netlify / Vercel link here)_

---

## 📋 Project Brief

The task required building a fully responsive landing page using **only plain HTML, CSS, and Vanilla JavaScript** — no frameworks, no libraries, no Bootstrap, no Tailwind, no React. All content was derived from the Corecleen Solutions Ltd business profile document, including branding colours, services, contact details, and company information.

---

## ✅ Features Implemented

### HTML
- Semantic HTML5 structure using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<blockquote>`, and `<footer>`
- Hero section with company name, tagline, and CTA button
- Services/Features section with 9 feature cards (icons, titles, descriptions)
- Testimonials section with reviewer names and quotes
- Footer with full contact info, physical address, and social media links

### CSS
- Plain CSS — zero frameworks
- Fully responsive across **mobile**, **tablet**, and **desktop** breakpoints using media queries
- Brand colours extracted from the Corecleen profile:
  - **Primary:** `#1A237E` (Dark Blue)
  - **Secondary:** `#00B0FF` (Light Blue)
- Google Fonts: **Montserrat** (headings) + **Open Sans** (body)
- Hover effects on all buttons, links, and cards
- CSS custom properties (variables) for consistent theming throughout

### JavaScript (Vanilla)
- **Scroll-to-top button** — appears after scrolling 400px, smooth scroll on click
- **Modal popup** — opens on CTA button click, contains a booking request form
  - Closes on outside click, close icon click, or `Escape` key
  - Form submission with visual confirmation state
- **Sticky navbar** — changes style on scroll
- **Hamburger menu** — animated toggle for mobile navigation
- **Bonus: Feature card fade-in animations** on scroll using `IntersectionObserver` with staggered delays per column

---

## 📁 Project Structure
```
corecleen-landing-page/
├── index.html       # Main HTML file (semantic structure)
├── styles.css       # All styling (responsive, no frameworks)
└── script.js        # Vanilla JS (modal, scroll, animations, nav)
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling, responsiveness, animations |
| Vanilla JavaScript (ES6+) | Interactivity and DOM manipulation |
| Google Fonts | Montserrat + Open Sans |
| IntersectionObserver API | Scroll-triggered card animations |

---

## 🚀 Running Locally

No build tools or dependencies required. Just clone and open:
```bash
git clone https://github.com/your-username/corecleen-landing-page.git
cd corecleen-landing-page
open index.html   # or double-click the file
```

---

## 📸 Sections Overview

| Section | Description |
|---|---|
| **Hero** | Full-screen intro with tagline, stats, and CTA |
| **About** | Mission, vision, and company values |
| **Services** | 9 animated service cards with icons |
| **Testimonials** | 3 client quotes on a dark background |
| **Team** | 4 team member cards |
| **Footer** | Contact info, address, and social links |

---

## 🏢 About Corecleen Solutions Ltd

Corecleen Solutions Ltd is a professional cleaning company based in Kampala, Uganda, offering residential, commercial, and industrial cleaning services. Their tagline: **"Breathe In A Clean Space."**

📍 Plot 97 Bukoto Street, opp. Bin It Services, P.O. Box 116729, Kampala  
📞 +256 (0) 707 265 146  
✉️ corecleensolutions@gmail.com  
🌐 [www.corecleensolutions.com](https://www.corecleensolutions.com)

---

## 👨‍💻 Author

Built by Fareed Wahib as part of the Kanzu Code Engineering Entry Test.
