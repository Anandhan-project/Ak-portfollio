# Anandhan — Personal Portfolio Website ⚡
> Modern, High-Performance React + TypeScript Portfolio featuring a Real-Time Procedural **Plasma Motion** Background Canvas Engine.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6.svg)
![Vite](https://img.shields.io/badge/Vite-6.0-646cff.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg)
![Vitest](https://img.shields.io/badge/Tests-Vitest%20%2B%20RTL-fcc72b.svg)

---

## 🌌 Live Demo & Deployment
- **Live Deployed Portfolio:** [https://anandhan.github.io/my-portfolio/](https://anandhan.github.io/my-portfolio/) *(Replace with actual repository name upon deployment)*
- **GitHub Repository:** [https://github.com/anandhan/my-portfolio](https://github.com/anandhan/my-portfolio)

---

## 🚀 Guiding Concept & Project Brief
This portfolio is engineered to answer four core questions within the first 60 seconds:
1. **Who am I?** Anandhan, a Frontend & Full-Stack Engineer focused on TypeScript, React architecture, and creative canvas animation.
2. **What can I do?** Architect accessible, strictly-typed web apps with modular components, fluid responsive layouts, and 60 FPS visual experiences.
3. **What have I built?** Real-world applications including the *Plasma Motion Studio*, *PulseFlow DevDesk*, *OmniCart Storefront*, *Zenith Priority Matrix*, and *CyberDoc Platform*.
4. **How to contact me?** Direct links via Email, LinkedIn, GitHub, plus a validated interactive message form.

---

## ✨ Standout Features & Enhancements

### 1. Real-Time Procedural Plasma Motion Background
- **Zero-Dependency Trigonometric Synthesis:** Mathematical multi-frequency sinusoidal plasma engine implemented with pure HTML5 Canvas API and `requestAnimationFrame`.
- **Dynamic Themes:** 5 switchable palettes:
  - 🌌 *Cosmic Purple*
  - 🌊 *Cyber Cyan*
  - 🔥 *Solar Ember*
  - 🌿 *Aurora Matrix*
  - 💖 *Neon Synth*
- **Interactive Controls Panel:** Tweak wave speed, wave complexity density, floating quantum particles, and live FPS telemetry.
- **Accessibility Compliance:** Respects `prefers-reduced-motion` media queries with pause/resume controls.

### 2. Strict TypeScript Architecture
- **Zero `any` Policy:** Strongly-typed interfaces for projects, skills, timelines, and form states.
- Clean component separation with atomic responsibilities.

### 3. Deep Project Case Study Routes (`/project/:id`)
- Each project includes detailed Problem Statements, Solutions, Technical Challenges Overcome, Measurable Outcomes, Architecture Highlights, and Tech Stack pills.
- Quick preview modal dialogs with keyboard `Escape` support.

### 4. Interactive Skills System
- Filterable by domain (*Frontend*, *Canvas & Graphics*, *Backend & APIs*, *Testing & Tooling*).
- Real-time search query filtering with percentage progress metrics.

### 5. Career & Education Timeline
- Chronological milestone tracker with tags for internships, university degree, and professional certifications.
- Mentor and peer recommendations.

### 6. Interactive Contact System
- Direct clipboard copy for email.
- Real-time client-side form validation with accessible feedback states (idle, loading spinner, verified success confirmation, and error alerts).

### 7. Dark/Light Theme Switching
- Theme selection persisted in `localStorage` and synchronized with system defaults.

---

## 🛠️ Mandatory Tech Stack

| Technology | Purpose | Implementation Detail |
|------------|---------|-----------------------|
| **React 18** | UI Library | Functional components, custom hooks (`usePlasmaEngine`, `useTheme`) |
| **TypeScript 5** | Type System | Strict mode enabled, zero `any` usage, fully typed props & events |
| **Vite 6** | Build Tool | Fast HMR, optimized production chunks, relative asset paths |
| **React Router v6** | Client Routing | HashRouter for flawless 404-free GitHub Pages static deployment |
| **Tailwind CSS 3** | Styling | Custom plasma palette, glassmorphism utilities, dark mode classes |
| **Vitest + RTL** | Testing | Automated component tests for Navbar, ProjectCard, Form validation & Plasma engine |
| **Lucide React** | Icons | Crisp SVG iconography with accessible ARIA labels |

---

## 📂 Project Directory Structure

```text
src/
├── assets/             # Static graphics and icons
├── components/
│   ├── common/         # Navbar, Footer
│   ├── plasma/         # PlasmaBackground, PlasmaControls
│   ├── projects/       # ProjectCard, ProjectModal
│   └── sections/       # HeroSection, AboutSection, SkillsSection, ProjectsSection, ExperienceSection, ContactSection
├── data/               # Strongly-typed data models (portfolioData.ts)
├── hooks/              # Custom React hooks (usePlasmaEngine.ts, useTheme.ts)
├── layouts/            # RootLayout with persistent Navbar, Footer, and Canvas
├── pages/              # HomePage, ProjectDetailPage, NotFoundPage
├── routes/             # AppRoutes definition with HashRouter
├── styles/             # Tailwind directives & glassmorphic styling (index.css)
├── tests/              # Vitest + React Testing Library test suites
├── types/              # TypeScript interface definitions (index.ts)
├── App.tsx             # Root application component
└── main.tsx            # Entry point mounting to DOM
```

---

## 💻 Local Development Setup

### Prerequisites
- Node.js version 18.0.0 or higher
- npm version 9.0.0 or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/anandhan/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start local development server with Vite HMR
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🧪 Running Unit & Integration Tests

```bash
# Run all unit tests with Vitest
npm run test
```

Test coverage includes:
- **`Navbar.test.tsx`**: Navigation link rendering, mobile drawer toggles, and theme switcher.
- **`ProjectCard.test.tsx`**: Card metadata display, tags, and overview modal trigger.
- **`ContactSection.test.tsx`**: Empty field validation, email regex format checks, and submission feedback states.
- **`usePlasmaEngine.test.ts`**: Preset transitions, wave speed modifications, and pause toggling.

---

## 🏗️ Production Build

```bash
# Typecheck and compile production bundle
npm run build

# Preview production build locally
npm run preview
```

Output is emitted into the `./dist` folder with minified assets and hashed filenames.

---

## 🚢 Automated GitHub Pages Deployment (CI/CD)

This repository includes a production-ready GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Deployment Steps:
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio release with plasma motion background"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Navigate to your repository on GitHub:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. The automated workflow triggers on every push to `main`:
   - Checks out repository
   - Installs dependencies via `npm ci`
   - Executes Vitest test suite (`npm run test`)
   - Builds optimized production bundle (`npm run build`)
   - Deploys static build to GitHub Pages!

---

## 📄 License
Released under the [MIT License](LICENSE). Built with clean code and passion by Anandhan.
