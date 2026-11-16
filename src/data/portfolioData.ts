import { Project, SkillCategory, TimelineItem } from '../types';

export const personalInfo = {
  name: "Anandha Krishnan TM",
  role: "Full Stack Developer",
  tagline: "just Building moving with the flow.",
  shortBio: "I specialize in transforming intricate designs and ambitious ideas into accessible, resilient, and engaging web experiences. Focused on clean architecture, strong typing, and delightful user interactions.",
  editorialBio: [
    "Hello! I'm Anandhan, a Frontend and Full-Stack Developer with a deep obsession for craft, performance, and minimal web experiences. I operate at the intersection of aesthetic editorial design and robust software engineering.",
    "Over the past several years, I've engineered responsive applications, design systems, and developer tooling utilizing React, TypeScript, and modern styling architectures. My work emphasizes modular component design, zero-'any' TypeScript discipline, and 60fps micro-animations.",
    "I believe great software is defined by what you leave out: unnecessary visual noise, heavy dependencies, and clunky user flows. When I'm not coding, you can find me experimenting with canvas graphics, exploring developer productivity workflows, or contributing to open-source developer ecosystems."
  ],
  location: "Kerala, India",
  email: "anandhakrishnant@outlook.com",
  github: "https://github.com/anandhan-project",
  linkedin: "https://linkedin.com/in/anandha-krishnan-t-m-384288388/",
  availability: "Available for opportunities",
  resumeUrl: "#resume",
  stats: [
    { label: "Years Experience", value: "0" },
    { label: "Projects Completed", value: "2+" },
    { label: "Leetcode Completed", value: "32" },
    { label: "Code Commits", value: "100+" }
  ],
  interests: [
    "High-Performance Web Architecture",
    "Design Systems & Editorial Typography",
    "Developer Tooling & Ergonomics (DX)",
    "Micro-interactions & Perceptual Speed",
    "Generative Canvas & Shader Graphics"
  ],
  approach: [
    {
      title: "First-Principles Thinking",
      description: "Break complex product requirements down to their fundamental truths before writing a single line of code."
    },
    {
      title: "Performance by Default",
      description: "Zero unnecessary dependencies, lightweight bundle sizes, instant client-side rendering, and 60 FPS interactions."
    },
    {
      title: "Defensive & Typed Architecture",
      description: "Strict TypeScript discipline, clear domain boundaries, and comprehensive unit test coverage."
    },
    {
      title: "Accessible & Editorial Aesthetics",
      description: "Editorial whitespace, harmonious typography, WCAG AA compliance, and respect for prefers-reduced-motion."
    }
  ],
  whatIEnjoyBuilding: [
    "Minimal, content-first portfolios and digital publications",
    "Real-time collaborative developer tools and telemetry dashboards",
    "Type-safe component libraries with strict accessibility standards",
    "Fluid, responsive micro-interactions that feel tangible"
  ],
  highlights: [
    {
      title: "Bachelore in Computer Application",
      description: "BCA with 7.9 CGPA from Yenepoya (Deemed to be University)affiliated institution."
    },
    {
      title: "Full-stack Development",
      description: "Professional specialization in modern React architecture, testing, and responsive UI engineering."
    },
    {
      title: "Active Open-Source Contributor",
      description: "Authored lightweight canvas background utilities with over 10+ GitHub stars across repositories."
    },
    {
      title: "Data Scince And Machine Learning",
      description: "Passionate about Data Science, Machine Learning, and AI-driven solutions."
    }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: "Layout",
    description: "Core frontend building blocks focused on typed safety, accessibility, and high render efficiency.",
    skills: [
      { name: "React.js 18+", level: 95, badge: "Advanced", highlight: true },
      { name: "TypeScript", level: 92, badge: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: 95, badge: "Advanced", highlight: true },
      { name: "Next.js", level: 88, badge: "Advanced", highlight: true },
      { name: "HTML5 & Semantic A11y", level: 94, badge: "Advanced" },
      { name: "CSS3 & Modern Layouts", level: 92, badge: "Advanced" },
      { name: "React Router v6", level: 90, badge: "Advanced" },
    ]
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: "Server",
    description: "Server runtimes, RESTful microservices, GraphQL, authentication, and API integrations.",
    skills: [
      { name: "Node.js", level: 88, badge: "Advanced", highlight: true },
      { name: "Express.js", level: 86, badge: "Advanced", highlight: true },
      { name: "RESTful API Architecture", level: 92, badge: "Advanced", highlight: true },

    ]
  },
  {
    id: "languages",
    name: "Programming Languages",
    icon: "Code2",
    description: "Primary programming languages utilized for web platforms, algorithms, and tooling.",
    skills: [
      { name: "TypeScript", level: 94, badge: "Expert", highlight: true },
      { name: "JavaScript (ES6+)", level: 95, badge: "Advanced", highlight: true },
      { name: "Python", level: 82, badge: "Proficient" },
      { name: "SQL", level: 85, badge: "Advanced", highlight: true },
      { name: "HTML5 / CSS3", level: 95, badge: "Expert" }
    ]
  },

  {
    id: "tools",
    name: "Tools and Technologies",
    icon: "Wrench",
    description: "Developer workflows, testing frameworks, bundling, containerization, and CI/CD pipelines.",
    skills: [
      { name: "Vite Bundler", level: 94, badge: "Expert", highlight: true },
      { name: "Git & GitHub Actions", level: 90, badge: "Advanced", highlight: true },
      { name: "Vitest & Jest", level: 88, badge: "Advanced", highlight: true },
      { name: "React Testing Library", level: 90, badge: "Advanced", highlight: true },
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "House Price Prediction",
    title: "House Price Prediction",
    tagline: "Predicting house prices using data-driven machine learning.",
    description: "A machine learning project that predicts house prices based on important features such as location, area, number of bedrooms, bathrooms, and other property details.",
    problem: "Determining the right price of a house can be difficult due to variations in location, property size, amenities, and market conditions.",
    solution: "Developed a machine learning model that analyzes housing data and estimates property prices based on user-provided features.",
    contribution: "Collected and explored housing datasets.Performed data cleaning and preprocessing.Conducted exploratory data analysis (EDA).Selected relevant features for prediction.Trained and evaluated machine learning models.",
    category: "python",
    techStack: ["Python","Pandas","Numpy","matplotlib","Scikit-learn"],
    keyFeatures: [
      "House price prediction based on property details.",
      "Data preprocessing and cleaning.",
      "Exploratory data visualization.",
      "Feature selection and analysis.",
      "Regression-based price estimation."
    ],
    architecture: "Data Collection → Preprocessing → EDA → Feature Selection → Model Training → Evaluation → Prediction.",
    challenges: "Handling missing data, selecting relevant features, and improving prediction accuracy.",
    outcomes: "Built a regression model to predict house prices using property features.",
    githubUrl: "https://github.com/Anandhan-project/House-price-prediction",
    liveDemoUrl: "#hero",
    featured: true,
    imageGradient: "from-zinc-800 via-zinc-900 to-black",
    stats: [
      { label: "Language", value: "Python" },
      { label: "Enviorment", value: "jupyter notebook" },
      { label: "Status", value: "97% Completed" }
    ]
  },
  {
    id: "spam-email",
    title: "Spam Email Detection",
    tagline: "Detecting spam emails using machine learning and NLP.",
    description: "A machine learning project that classifies emails as spam or legitimate (ham) using text analysis and natural language processing.",
    problem: "Spam emails often contain fraudulent links, unwanted advertisements, and misleading content, making email filtering essential.",
    solution: "Developed a machine learning model that analyzes email content and automatically identifies spam messages.",
    contribution: "Collected and explored email datasets. Cleaned and preprocessed text data. Applied text vectorization techniques. Trained and evaluated classification models. Improved spam detection performance.",
    category: "python",
    techStack: ["Pyhton","NLTK"],
    keyFeatures: [
      "Automatic spam email classification.",
      "Text preprocessing and cleaning.",
      "Spam and ham detection.",
      "Model performance evaluation."
    ],
    architecture: "Data Collection → Text Preprocessing → Feature Extraction → Model Training → Evaluation → Spam Prediction.",
    challenges: "Handling text noise, extracting meaningful features, and reducing false spam classifications.",
    outcomes: "Built a machine learning model that automatically classifies emails as spam or legitimate.",
    githubUrl: "https://github.com/Anandhan-project/spam-email",
    liveDemoUrl: "#hero",
    featured: true,
    imageGradient: "from-zinc-900 via-neutral-900 to-zinc-950",
    stats: [
      { label: "Data Size", value: "200+" },
      { label: "Language", value: "Python" },
      { label: "Status", value: "Basic Project" }
    ]
  },
  {
    id: "basic-chatbot",
    title: "Basic Chatbot",
    tagline: "A simple text-based chatbot powered by NLP and machine learning.",
    description: "A basic Python chatbot that uses CountVectorizer and cosine similarity to understand user inputs and generate responses based on predefined questions and answers.",
    problem: "Traditional rule-based chatbots struggle to recognize different variations of user queries and provide relevant responses.",
    solution: "Developed a chatbot that uses text vectorization and cosine similarity to match user inputs with predefined questions and return appropriate responses.",
    contribution: "Designed predefined questions and responses. Implemented text vectorization. Applied cosine similarity for query matching. Developed an interactive conversation loop.",
    category: "python",
    techStack: ["Python","Scikit-learn","CountVectorizer"],
    keyFeatures: [
      "Interactive text-based conversation.",
      "Similarity-based question matching.",
      "Automated predefined responses.",
      "Unknown query handling."
    ],
    architecture: "User Input → Text Vectorization → Cosine Similarity → Best Match Selection → Chatbot Response.",
    challenges: "Matching different user queries, handling unknown inputs, and improving response relevance.",
    outcomes: "Built a basic NLP-powered chatbot that matches user queries with predefined questions and generates relevant responses.",
    githubUrl: "https://github.com/Anandhan-project/basic-chatbot/blob/main/CHATBOT.py",
    liveDemoUrl: "#hero",
    featured: true,
    imageGradient: "from-neutral-900 via-zinc-900 to-stone-950",
    stats: [
      { label: "Catalog Load", value: "<350ms" },
      { label: "A11y Score", value: "100/100" },
      { label: "Cart Speed", value: "0ms latency" }
    ]
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: "exp-1",
    type: "education",
    role: "Full-stack Developer",
    organization: "Edushektra",
    location: "Kochi, India",
    period: "2026 - Present",
    isCurrent: true,
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
    type: "certification",
    role: "Reseach Paper",
    organization: "INCON-SDG 2026",
    location: "Bangalore",
    period: "2025 - 2026",
    isCurrent: false,
    summary: "A Study on Self-Uncertainty Detection in AI System Using Unsupervised Learning Techniques",
    highlights: [
      "Designed and implemented unsupervised learning models for original research on AI self-uncertainty detection, evaluating system confidence and reliability in decision-making.",
      "Authored and presented a research paper demonstrating novel techniques for uncertainty quantification in AI, contributing to advancements in trustworthy and explainable machine learning systems.",
    ],
    technologies: ["Python","Unsupervised Learning"]
  },
    {
    id: "edu-4",
    type: "education",
    role: "Bachelor in Computer Application",
    organization: "Yenepoya (deemed to be University)",
    location: "Bangalore, India",
    period: "2023 - 2026",
    isCurrent: false,
    summary: "BCA graduate from Bangalore with an interest in software development, Data Science, and Machine Learning.",
    highlights: [
      "Graduated(7.9 CGPA).",
      "Introducted to AI, Data Science, and ML.",
    ],
    technologies: ["Python","C","HTML/CSS","JAVA","SQL"]
  },
  
  {
    id: "edu-1",
    type: "education",
    role: "Plus Two",
    organization: "GHSS Chembuchira",
    location: "Kerala, India",
    period: "2021 - 2023",
    isCurrent: false,
    summary: "Comprehensive academic foundation in Computer Science fundamentals, algorithms, Programming Language",
    highlights: [
      "Graduated(69% Score).",
      "Collected konwledges in Computer Science, physics,Mathematics",
    ],
    technologies: ["C++","HTML","Maths","Physics","Chemistry"]
  },
  {
    id: "cert-1",
    type: "education",
    role: "High School",
    organization: "GHSS Chembuchira",
    location: "Kerala,India",
    period: "2020 - 2021",
    isCurrent: false,
    summary: "Kerala State Board, with a willingness to learn new skills, develop knowledge, and explore opportunities for personal and professional growth.",
    highlights: [
      "Completed SSLC (Class 10), Kerala State Board.",
      "Good communication and teamwork skills."
    ],
    technologies: ["Basic Computer knowledge","Scratch","Communication Skill"]
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
