import { Project, SkillCategory, TimelineItem } from '../types';

export const personalInfo = {
  name: "Anandhan",
  role: "Creative Frontend & Full-Stack Engineer",
  tagline: "Crafting fluid, high-performance web applications with React, TypeScript & generative canvas visuals.",
  shortBio: "I specialize in transforming intricate designs and ambitious ideas into accessible, resilient, and engaging web experiences. Focused on clean architecture, strong typing, and delightful user interactions.",
  fullBio: [
    "Hello! I'm Anandhan, a Frontend and Full-Stack Developer with a deep obsession for craft, performance, and interactive web visual systems. I enjoy working at the intersection of aesthetic design and robust software engineering.",
    "Over the past several years, I've engineered responsive single-page applications, design systems, and real-time dashboards utilizing React, TypeScript, and modern styling frameworks. My work emphasizes modular component design, zero-any TypeScript discipline, and 60fps micro-animations.",
    "When I am not coding, you can find me experimenting with canvas shaders and procedural graphics, exploring developer productivity tooling, or contributing to open-source developer ecosystems."
  ],
  location: "Tamil Nadu, India",
  email: "anandhan.codes@gmail.com",
  github: "https://github.com/anandhan",
  linkedin: "https://linkedin.com/in/anandhan",
  availability: "Open to full-time roles & exciting freelance collaborations",
  resumeUrl: "#resume",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Code Commits", value: "1,200+" },
    { label: "Lighthouse Score", value: "98/100" }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Architecture",
    icon: "Layout",
    description: "Core frontend building blocks focused on typed safety, accessibility, and high render efficiency.",
    skills: [
      { name: "React.js 18+", level: 95, badge: "Expert", highlight: true },
      { name: "TypeScript", level: 92, badge: "Advanced", highlight: true },
      { name: "React Router v6", level: 90, badge: "Advanced" },
      { name: "Tailwind CSS", level: 95, badge: "Expert", highlight: true },
      { name: "HTML5 / Semantic A11y", level: 94, badge: "Advanced" },
      { name: "CSS3 / Modern Layouts", level: 92, badge: "Advanced" },
      { name: "State (Zustand / Context)", level: 88, badge: "Advanced" }
    ]
  },
  {
    id: "interactive",
    name: "Canvas & Interactive Graphics",
    icon: "Sparkles",
    description: "Generative visuals, procedural animations, dynamic shaders, and motion design.",
    skills: [
      { name: "HTML5 Canvas API", level: 90, badge: "Advanced", highlight: true },
      { name: "Generative Shaders & Plasma", level: 88, badge: "Proficient", highlight: true },
      { name: "CSS Keyframe Animations", level: 92, badge: "Advanced" },
      { name: "Responsive SVG Manipulations", level: 86, badge: "Proficient" },
      { name: "Performance / 60 FPS Tuning", level: 89, badge: "Advanced" }
    ]
  },
  {
    id: "backend-tools",
    name: "Backend, APIs & Databases",
    icon: "Server",
    description: "APIs, server runtimes, data storage, and external service integrations.",
    skills: [
      { name: "Node.js & Express", level: 85, badge: "Proficient" },
      { name: "RESTful APIs / Axios / Fetch", level: 92, badge: "Advanced", highlight: true },
      { name: "PostgreSQL & SQLite", level: 82, badge: "Proficient" },
      { name: "MongoDB", level: 80, badge: "Proficient" },
      { name: "JSON Web Tokens & Auth Flow", level: 84, badge: "Proficient" }
    ]
  },
  {
    id: "devtools",
    name: "Testing, DevOps & Tooling",
    icon: "Wrench",
    description: "Modern developer workflows, unit testing, bundling, and CI/CD automation.",
    skills: [
      { name: "Vite Bundler & Config", level: 94, badge: "Advanced", highlight: true },
      { name: "Jest & React Testing Library", level: 88, badge: "Proficient", highlight: true },
      { name: "Git & GitHub Actions", level: 90, badge: "Advanced" },
      { name: "ESLint & Prettier Linting", level: 92, badge: "Advanced" },
      { name: "Chrome DevTools Auditing", level: 90, badge: "Advanced" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "plasma-motion-studio",
    title: "Plasma Motion Studio",
    tagline: "High-performance generative visual canvas with real-time shader mathematical simulation",
    description: "An interactive creative coding web application that simulates fluid dynamic plasma waves using pure HTML5 Canvas and procedural multi-frequency trigonometric synthesis. Features multi-palette color gradients, real-time mouse perturbation, speed controls, and presets export.",
    problem: "Most visual backgrounds on the modern web rely on heavy video files or complex unoptimized WebGL libraries that slow down initial page loads and drain mobile batteries.",
    solution: "Engineered an ultra-lightweight mathematical plasma engine utilizing per-pixel procedural wave formulas, requestAnimationFrame batching, adaptive resolution scaling, and responsive pointer tracking.",
    contribution: "Sole architect and developer. Authored mathematical wave equation models, React custom hooks for rendering lifecycle, dynamic theme palette interpolators, and accessibility pause triggers.",
    category: "interactive",
    techStack: ["React 18", "TypeScript", "HTML5 Canvas API", "Tailwind CSS", "Vite", "Vitest"],
    keyFeatures: [
      "Procedural real-time plasma wave mathematical synthesizer",
      "Interactive pointer distortion field with fluid momentum",
      "5 hand-crafted color palettes (Cosmic Purple, Cyber Cyan, Solar Ember, Aurora Matrix, Neon Synth)",
      "Adaptive frame-rate throttle with prefers-reduced-motion compliance",
      "Zero external heavyweight graphics libraries dependency"
    ],
    architecture: "Stateful custom React hook (`usePlasmaEngine`) that manages an offscreen computation buffer and renders directly to a high-DPI canvas element with RAF loops.",
    challenges: "Balancing pixel computation intensity on mobile devices while maintaining 60 frames per second without UI thread locking.",
    outcomes: "Achieved sustained 60 FPS across desktop and mobile browsers with less than 12KB bundle size footprint.",
    githubUrl: "https://github.com/anandhan/plasma-motion-studio",
    liveDemoUrl: "#hero",
    featured: true,
    imageGradient: "from-purple-600 via-indigo-600 to-cyan-500",
    stats: [
      { label: "Rendering Rate", value: "60 FPS" },
      { label: "Engine Size", value: "<12 KB" },
      { label: "Palettes", value: "5 Themes" }
    ]
  },
  {
    id: "pulseflow-developer-hub",
    title: "PulseFlow DevDesk",
    tagline: "Comprehensive developer productivity suite with live telemetry and task orchestration",
    description: "A centralized dashboard designed for software engineers to track sprint progress, monitor GitHub repository status, store reusable snippets with syntax formatting, and visualize daily output analytics.",
    problem: "Developers frequently switch between 5+ browser tabs for ticket tracking, code snippets, notes, and repository stats, fracturing focus and reducing daily velocity.",
    solution: "Built a unified single-page dashboard with modular widget architecture, local-first offline synchronization, and rapid keyboard command palette navigation.",
    contribution: "Designed UI/UX, implemented custom state synchronization via reactive local store, integrated GitHub REST API with Axios, and wrote full suite of RTL component tests.",
    category: "fullstack",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Axios", "React Router", "Lucide Icons"],
    keyFeatures: [
      "Kanban board with optimistic UI updates and persistent state",
      "Live GitHub repository statistics and commit velocity charts",
      "Snippet locker with syntax highlighting and instant clipboard copy",
      "Global shortcut command palette (Ctrl+K / Cmd+K)"
    ],
    architecture: "Modular widget layout system powered by React compound components, centralized context for state persistence, and decoupled API service layer.",
    challenges: "Handling rate limits from external APIs while ensuring instantaneous local UI reactivity.",
    outcomes: "Streamlined daily workflow for 200+ beta testers with zero data loss reported across browser sessions.",
    githubUrl: "https://github.com/anandhan/pulseflow-devdesk",
    liveDemoUrl: "https://pulseflow.demo.example.com",
    featured: true,
    imageGradient: "from-blue-600 via-cyan-600 to-emerald-500",
    stats: [
      { label: "Active Users", value: "200+" },
      { label: "Test Coverage", value: "91%" },
      { label: "Lighthouse", value: "99/100" }
    ]
  },
  {
    id: "omnicart-commerce",
    title: "OmniCart Modern Storefront",
    tagline: "High-performance headless e-commerce experience with faceted filtering and instant checkout",
    description: "A snappy, accessibility-compliant e-commerce web application featuring dynamic catalog filtering by category, price, and rating, cart state persistence with drawer animation, and validation-ready checkout.",
    problem: "Traditional online storefronts suffer from clunky multi-second page reloads during filtering and jarring checkout validation errors.",
    solution: "Created an optimistic client-side catalog with instant URL-synchronized search parameters, accessible modal dialogs, and robust client-side validation.",
    contribution: "Constructed the end-to-end component hierarchy, custom filter hooks, cart reducer logic, and mobile-optimized slide-over drawer.",
    category: "frontend",
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "React Router", "Vitest"],
    keyFeatures: [
      "Multi-dimensional product filtering with URL query param sync",
      "Slide-out animated cart drawer with instant quantity modification",
      "Product detail modal and standalone deep-linkable product pages",
      "Keyboard navigable dropdowns and full ARIA accessibility"
    ],
    architecture: "State management via useReducer + Context API, memoized selector patterns to prevent unnecessary child re-renders.",
    challenges: "Ensuring zero layout shifts and seamless navigation history when applying nested filter combinations.",
    outcomes: "Loaded product listings in under 350ms, achieving perfect 100/100 Accessibility score on Google Lighthouse.",
    githubUrl: "https://github.com/anandhan/omnicart-storefront",
    liveDemoUrl: "https://omnicart.demo.example.com",
    featured: true,
    imageGradient: "from-amber-500 via-rose-600 to-purple-600",
    stats: [
      { label: "Catalog Load", value: "<350ms" },
      { label: "A11y Score", value: "100/100" },
      { label: "Cart Speed", value: "0ms latency" }
    ]
  },
  {
    id: "zenith-task-matrix",
    title: "Zenith Priority Matrix",
    tagline: "Eisenhower-matrix based intelligent goal prioritization and habit tracker",
    description: "An intuitive web application that assists teams and individuals in categorizing tasks by urgency and importance (Do First, Schedule, Delegate, Don't Do), with visual completion heatmaps.",
    problem: "Simple to-do lists fail to communicate true priority, leading to time spent on urgent but unimportant distractions.",
    solution: "A dynamic four-quadrant visual matrix that reorganizes items dynamically based on deadlines, effort estimation, and project impact tags.",
    contribution: "Designed visual quadrant layout, implemented localStorage sync with schema migration, and crafted interactive summary charts.",
    category: "tools",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons", "Jest"],
    keyFeatures: [
      "Interactive 4-quadrant Eisenhower prioritization grid",
      "Due date countdown tags and color-coded urgency badges",
      "Weekly productivity telemetry with interactive bar statistics",
      "Export data to JSON / CSV for offline backup"
    ],
    architecture: "Clean architecture with separate domain entities, storage repository adapters, and decoupled presentation components.",
    challenges: "Building a responsive grid that seamlessly adapts between desktop quad-view and mobile tabbed-quadrant view.",
    outcomes: "Adopted by 5 student engineering clubs for semester milestone tracking.",
    githubUrl: "https://github.com/anandhan/zenith-task-matrix",
    liveDemoUrl: "https://zenith-matrix.demo.example.com",
    featured: false,
    imageGradient: "from-emerald-600 via-teal-600 to-blue-600",
    stats: [
      { label: "Clubs Using", value: "5 Teams" },
      { label: "Offline First", value: "100%" }
    ]
  },
  {
    id: "cyberdoc-platform",
    title: "CyberDoc Documentation Platform",
    tagline: "Clean, markdown-driven developer documentation portal with live playground components",
    description: "A modern developer documentation engine offering instant full-text search, dark/light theme switching, interactive code preview sandboxes, and breadcrumb navigation.",
    problem: "Reading dense technical documentation is often tedious without clear table of contents, searchable indexes, or copyable code snippets.",
    solution: "Engineered a lightning-fast documentation framework with client-side indexing, smooth anchor scrolling, and syntax-highlighted code blocks.",
    contribution: "Developed search indexing algorithm, responsive sidebar with active scroll spy, and copy-to-clipboard code blocks.",
    category: "frontend",
    techStack: ["React", "TypeScript", "Tailwind CSS", "React Router", "Vite"],
    keyFeatures: [
      "Sub-millisecond fuzzy search across all documentation articles",
      "Interactive component playground with real-time prop toggling",
      "Automatic table of contents generator with active section highlight",
      "Printable cheatsheet export formatting"
    ],
    architecture: "Statically indexed JSON document tree with dynamic route mapping and lazy loaded doc fragments.",
    challenges: "Optimizing search index build time and memory usage for large technical articles.",
    outcomes: "Average search lookup time under 5ms with zero external search SaaS dependency.",
    githubUrl: "https://github.com/anandhan/cyberdoc-platform",
    liveDemoUrl: "https://cyberdoc.demo.example.com",
    featured: false,
    imageGradient: "from-pink-600 via-purple-600 to-indigo-600",
    stats: [
      { label: "Search Index", value: "<5ms" },
      { label: "Articles", value: "40+" }
    ]
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: "exp-1",
    type: "experience",
    role: "Frontend Engineer Intern",
    organization: "CogniSync Technologies",
    location: "Chennai, India",
    period: "2023 - 2024",
    isCurrent: false,
    summary: "Built responsive client portals and reusable React design system components used across 4 production web products.",
    highlights: [
      "Architected 25+ reusable TypeScript components conforming to strict WCAG 2.1 AA accessibility guidelines.",
      "Accelerated dashboard initial load time by 38% through lazy route splitting and memoized render caching.",
      "Collaborated closely with product designers in Figma to bridge the gap between design tokens and Tailwind utility classes.",
      "Authored automated unit and integration tests using Jest and React Testing Library, lifting test coverage to 86%."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Jest", "Git"]
  },
  {
    id: "exp-2",
    type: "experience",
    role: "Open Source Developer & Core Contributor",
    organization: "Web UI & Graphics Community",
    location: "Remote",
    period: "2022 - Present",
    isCurrent: true,
    summary: "Active contributor to open-source UI libraries, canvas interactive utilities, and developer productivity tools.",
    highlights: [
      "Authored lightweight canvas background presets with over 500+ GitHub stars across creative repositories.",
      "Resolved 30+ complex accessibility and state synchronization issues in popular community React components.",
      "Mentored junior developers on TypeScript best practices, avoiding 'any', and crafting maintainable folder architectures."
    ],
    technologies: ["TypeScript", "Canvas API", "WebGL", "React Router", "GitHub Actions"]
  },
  {
    id: "edu-1",
    type: "education",
    role: "Bachelor of Technology in Computer Science & Engineering",
    organization: "Anna University Affiliated College of Engineering",
    location: "Tamil Nadu, India",
    period: "2020 - 2024",
    isCurrent: false,
    summary: "Comprehensive academic foundation in data structures, algorithms, computer networks, database systems, and modern web software engineering.",
    highlights: [
      "Graduated with Distinction (First Class with Distinction - 8.6 CGPA).",
      "Led the college Web Development & Innovation Club, organizing 6 hands-on frontend bootcamps for 250+ students.",
      "Final Year Capstone Project: 'Interactive Algorithmic Visualization & Performance Sandbox in React' awarded Best Project."
    ],
    technologies: ["Data Structures", "Algorithms", "Software Engineering", "Web Architecture", "Database Systems"]
  },
  {
    id: "cert-1",
    type: "certification",
    role: "Meta Certified Front-End Developer",
    organization: "Meta / Coursera",
    location: "Online Credential",
    period: "2023",
    isCurrent: false,
    summary: "Comprehensive 9-course professional certification covering advanced React, JavaScript/TypeScript, UI/UX principles, and testing.",
    highlights: [
      "Demonstrated mastery of React state management, hooks, and component lifecycle.",
      "Built and deployed full capstone responsive restaurant booking web app with full test suite."
    ],
    technologies: ["React", "TypeScript", "Jest", "CSS3", "UX Principles"],
    certificateUrl: "https://coursera.org/verify/meta-frontend"
  },
  {
    id: "cert-2",
    type: "certification",
    role: "TypeScript & Modern React Software Architecture",
    organization: "Frontend Masters",
    location: "Online Credential",
    period: "2023",
    isCurrent: false,
    summary: "Advanced specialization covering typed generics, type guards, compound components, and scalable code structures.",
    highlights: [
      "Zero 'any' policy enforcement using strict tsconfig flags and lint rules.",
      "Custom hook design patterns and decoupled API layer integration."
    ],
    technologies: ["TypeScript Generics", "React 18", "Design Systems"],
    certificateUrl: "https://frontendmasters.com/certificates"
  }
];

export const testimonialsData = [
  {
    id: "t1",
    name: "Karthik Subramanian",
    role: "Engineering Lead, CogniSync",
    quote: "Anandhan brings exceptional curiosity and attention to detail. His ability to build seamless, high-performance React components with zero typing compromises made a noticeable impact on our sprint delivery speed.",
    avatar: "KS"
  },
  {
    id: "t2",
    name: "Dr. R. Meenakshi",
    role: "Head of Dept, Computer Science",
    quote: "One of the most dedicated and creative frontend developers I have mentored. His capstone project demonstrated profound understanding of web visualization and responsive software architecture.",
    avatar: "RM"
  }
];
