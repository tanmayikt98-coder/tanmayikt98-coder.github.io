# TANMAYI K T — CINEMATIC DEVELOPER PORTFOLIO

A complete, premium, cinematic, scroll-driven personal developer portfolio for **Tanmayi K T**, engineered with React, TypeScript, Vite, GSAP, Lenis, and CSS 3D transforms.

> **“Turning ‘what if?’ into ‘what’s next?’” ✨**

---

## 📽️ Project Overview

This website is crafted with an editorial art direction inspired by cinematic title sequences and interactive short films:
- **Cinematic Preloader:** Animated numerical counter (00–100%) with split-screen reveal curtain and glowing accent blade. Never hangs indefinitely.
- **3D Character Stage:** Responsive viewport canvas layer featuring Tanmayi K T's authentic photograph (with optimized WebP pipeline and mobile variants), animated depth, warm rim lighting, mouse parallax, and scene-driven blade transitions.
- **Scroll Engine:** Synchronized Lenis smooth scroll (`lerp: 0.075`, `smoothWheel: true`, `wheelMultiplier: 0.9`, `touchMultiplier: 1.4`) driven by GSAP's ticker.
- **Strict Factual Accuracy:** Centralized in `src/data.ts`. No fabricated statistics, fake contest ranks, or unverified claims.
- **Selected Projects:** All 6 genuine GitHub projects showcased with custom interactive visual previews, technology badges, and direct repository links.
- **Achievements & Recognition:** Prominent featured layout for **Runner-Up — EVOX 1.0** (Team Technova, DETOX / Unstop), **Data Analytics Hackathon Participant** (Gradient Learnings), and verified **Completed Learning** achievements in HTML5, CSS3, and JavaScript (September 14, 2026).

---

## 🎨 Design System & Color Palette

- **Warm Off-White:** `#F7F6F0` (Base Canvas)
- **Dark Charcoal:** `#252923` (High-contrast Display Text & Glass Elements)
- **Muted Grey:** `#74776F` (Metadata, Subtitles, & Secondary Badges)
- **Sage Green:** `#879B83` (Hero Accent, Active Markers, & Edge Glows)
- **Pale Sage:** `#E6EBE2` (Ambient Radial Lighting & Depth Highlights)

### Typography
- **Display Headlines:** `Anton`
- **Body Text:** `Inter Tight`
- **Labels, Code, & Metadata:** `JetBrains Mono`

---

## 🛠️ Technology Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Bundler & Dev Server:** Vite 5 (base set to `./` for universal hosting)
- **Scroll Engine:** Lenis v1.1
- **Animation Orchestrator:** GSAP 3.12 (Ticker sync)
- **Styling:** Vanilla CSS 3D Transforms, Custom Glassmorphism, & Hardware Acceleration
- **Typography Packages:** `@fontsource/anton`, `@fontsource-variable/inter-tight`, `@fontsource/jetbrains-mono`
- **Icons:** `lucide-react`

---

## 📂 Project Architecture

```text
tanmayi-cinematic-portfolio/
├── dist/                     # Optimized production bundle
├── public/
│   ├── character/            # Tanmayi K T verified character assets
│   │   ├── tanmayi-hero.png       # Transparent cut-out (Full body)
│   │   ├── tanmayi-hero.webp      # High-res WebP
│   │   ├── tanmayi-hero-mobile.webp # Mobile optimized WebP
│   │   ├── tanmayi-portrait.webp  # Portrait crop
│   │   ├── tanmayi-work.webp      # Laptop workspace crop
│   │   └── tanmayi-about.webp     # Editorial crop
│   └── favicon.svg           # TK Monogram Favicon
├── src/
│   ├── components/
│   │   ├── Chrome.tsx        # Sticky nav, active section indicator, progress bar, & mobile drawer
│   │   ├── CustomCursor.tsx  # Smooth trailing cursor dot & expanding ring (desktop)
│   │   ├── Odometer.tsx      # Mechanical rolling digit counter
│   │   ├── Preloader.tsx     # Numerical counter & split-screen reveal
│   │   ├── Stage.tsx         # Fixed character 3D layer with rim flare & blade sweep
│   │   └── TiltCard.tsx      # CSS 3D perspective card with reactive light glare
│   ├── engine/
│   │   ├── director.ts       # 7-scene camera, scale, rotation, and blade glow orchestrator
│   │   ├── frames.ts         # Manifest player & progressive frame blend engine
│   │   └── hooks.ts          # Lenis GSAP ticker sync, mouse parallax, and media queries
│   ├── scenes/
│   │   ├── Hero.tsx          # Section 01: Introduction & Call-to-actions
│   │   ├── About.tsx         # Section 02: Curious by Nature & 3 Pillars (IMAGINE, ENGINEER, EVOLVE)
│   │   ├── Work.tsx          # Section 03: 6 Selected Projects with visual previews
│   │   ├── Journey.tsx       # Section 04: Academic Timeline & Milestones
│   │   ├── Skills.tsx        # Section 05: Toolkit (General vs. Project-specific)
│   │   ├── Awards.tsx        # Section 06: EVOX 1.0 Runner-Up & Learning Achievements
│   │   └── Contact.tsx       # Section 07: Direct email, GitHub, LinkedIn, & Footer
│   ├── data.ts               # Single source of truth for all verified data
│   ├── styles.css            # Complete Vanilla CSS design system & responsive tokens
│   ├── App.tsx               # Main scene graph composition
│   └── main.tsx              # Application entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Local Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build

```bash
npm run build
```

This compiles a fully optimized production build into the `dist/` directory with relative asset paths ready to deploy to GitHub Pages, Vercel, Netlify, or any static hosting service.

---

## 📋 Verified Information Checklist

- [x] **Full Name:** Tanmayi K T
- [x] **Role:** Student Developer | AI & Software Enthusiast
- [x] **College:** B. N. M. Institute of Technology (BNMIT), Bengaluru
- [x] **Degree:** B.E. in Information Science and Engineering
- [x] **Current Academic Level:** Third semester (Expected Graduation: 2029)
- [x] **Tagline:** “Turning ‘what if?’ into ‘what’s next?’”
- [x] **Email:** [tanmayikt98@gmail.com](mailto:tanmayikt98@gmail.com)
- [x] **GitHub:** [https://github.com/tanmayikt98-coder](https://github.com/tanmayikt98-coder)
- [x] **LinkedIn:** [https://www.linkedin.com/in/tanmayi-kt-665871385](https://www.linkedin.com/in/tanmayi-kt-665871385)
- [x] **Projects Showcased:**
  1. [Smart Timetable Optimization Engine](https://github.com/tanmayikt98-coder/Smart-Timetable-Optimization)
  2. [PalmPilot AI / GesturePlay AI](https://github.com/tanmayikt98-coder/GesturePlay-AI-)
  3. [3D Stealth Horror Game](https://github.com/tanmayikt98-coder/3d-stealth-horror-game-1-)
  4. [AI Virtual Assistant](https://github.com/tanmayikt98-coder/VIRTUAL-AI-BOT)
  5. [AI Business and Financial Decision Optimization Engine](https://github.com/tanmayikt98-coder/artifacts)
  6. [VoltRelay Data Analysis](https://github.com/tanmayikt98-coder/VoltRelay-Data-Analysis)
- [x] **Achievements:**
  - **Runner-Up — EVOX 1.0** (Team Technova, DETOX / Unstop)
  - **Data Analytics Hackathon Participant** (Gradient Learnings)
  - **Completed Learning Achievements** (HTML5 — The Language, CSS3, JavaScript - September 14, 2026)
- [x] **Résumé:** Omitted gracefully until official PDF is supplied.
