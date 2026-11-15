import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { User, GraduationCap, Target, Sparkles, Download, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'philosophy' | 'goals'>('story');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadResume = () => {
    // Generate an authentic professional CV markdown file for download
    const resumeContent = `# ANANDHAN
Frontend & Full-Stack Engineer | React, TypeScript & Canvas Visuals
Email: ${personalInfo.email} | Location: ${personalInfo.location}
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

===================================================================
SUMMARY
===================================================================
${personalInfo.shortBio}

===================================================================
TECHNICAL SKILLS
===================================================================
- Languages & Core: TypeScript, JavaScript (ES6+), HTML5 Semantic, CSS3, Modern Layouts
- Frontend: React.js 18+, React Router v6, Tailwind CSS, Vite, Redux/Zustand, Context API
- Graphics & Interactive: HTML5 Canvas 2D API, Procedural Plasma/Shaders, Micro-interactions
- Testing & Quality: Jest, Vitest, React Testing Library, ESLint, Prettier, WCAG 2.1 AA A11y
- Backend & Tooling: Node.js, Express, Axios, REST APIs, Git, GitHub Actions CI/CD

===================================================================
EXPERIENCE
===================================================================
Frontend Engineer Intern | CogniSync Technologies (2023 - 2024)
- Architected 25+ reusable TypeScript components adhering to strict accessibility standards.
- Optimized bundle splitting, cutting initial page load times by 38%.
- Integrated RESTful services with Axios and maintained 86% unit test coverage using Vitest/RTL.

Open Source Contributor | Web UI & Canvas Community (2022 - Present)
- Developed lightweight 60fps canvas animation hooks and procedural plasma background engines.
- Resolved 30+ accessibility and rendering bugs across React community packages.

===================================================================
EDUCATION
===================================================================
B.Tech in Computer Science & Engineering (2020 - 2024)
Anna University Affiliated College of Engineering
Graduated with First Class with Distinction (8.6 CGPA)

===================================================================
CERTIFICATIONS
===================================================================
- Meta Certified Front-End Developer (Meta / Coursera)
- TypeScript & Modern React Software Architecture (Frontend Masters)
`;

    const blob = new Blob([resumeContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Anandhan_Frontend_Engineer_Resume.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-purple-400 mb-3">
          <User className="w-3.5 h-3.5" />
          <span>01 // ABOUT ME</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Architecting with <span className="text-gradient">Precision & Passion</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl text-base">
          Discover the story, principles, and engineering disciplines that power my work.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Visual Profile Card */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group">
          {/* Subtle decorative glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Avatar representation with plasma halo */}
          <div className="relative mx-auto w-36 h-36 mb-6">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600 via-cyan-500 to-pink-500 animate-spin-slow opacity-80 blur-sm" />
            <div className="relative w-full h-full rounded-3xl bg-slate-900 border-2 border-white/20 flex flex-col items-center justify-center text-white overflow-hidden p-2">
              <span className="font-mono text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-cyan-300">
                A.
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 mt-1">
                DEV_READY
              </span>
            </div>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
            <p className="text-sm text-purple-400 font-medium">{personalInfo.role}</p>
            <p className="text-xs text-slate-400 mt-1">{personalInfo.location}</p>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
            <div className="flex items-center justify-between py-1 text-slate-300">
              <span className="text-slate-400 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                Degree:
              </span>
              <span className="font-medium text-slate-200">B.Tech in Computer Science</span>
            </div>
            <div className="flex items-center justify-between py-1 text-slate-300">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-cyan-400" />
                Specialization:
              </span>
              <span className="font-medium text-slate-200">React & Interactive WebGL/Canvas</span>
            </div>
            <div className="flex items-center justify-between py-1 text-slate-300">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                Experience:
              </span>
              <span className="font-medium text-slate-200">3+ Years Building Web Apps</span>
            </div>
          </div>

          {/* Download Resume Action */}
          <div className="mt-8 pt-4 border-t border-white/10">
            <button
              onClick={handleDownloadResume}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-purple-600/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
            >
              <Download className="w-4 h-4" />
              <span>Download Verified Resume (.MD)</span>
            </button>
            {downloadSuccess && (
              <p className="text-xs text-emerald-400 flex items-center justify-center gap-1 mt-2.5 animate-in fade-in">
                <CheckCircle className="w-3.5 h-3.5" />
                Resume downloaded successfully!
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Tabbed Narrative */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
          {/* Tab Headers */}
          <div className="flex items-center gap-2 pb-4 border-b border-white/10 overflow-x-auto">
            <button
              onClick={() => setActiveTab('story')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'story'
                  ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              Background & Story
            </button>

            <button
              onClick={() => setActiveTab('philosophy')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'philosophy'
                  ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              Core Philosophy & Strengths
            </button>

            <button
              onClick={() => setActiveTab('goals')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'goals'
                  ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              Interests & Career Goals
            </button>
          </div>

          {/* Tab Content */}
          <div className="pt-6 min-h-[280px]">
            {activeTab === 'story' && (
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed animate-in fade-in duration-300">
                {personalInfo.fullBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            )}

            {activeTab === 'philosophy' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="glass-card p-4 rounded-2xl border border-white/5">
                    <h4 className="text-sm font-bold text-purple-300 mb-1">Strict TypeScript Safety</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Zero-compromise approach: avoiding 'any', leveraging strict compiler modes, generic constraints, and discriminated unions for resilient codebases.
                    </p>
                  </div>
                  <div className="glass-card p-4 rounded-2xl border border-white/5">
                    <h4 className="text-sm font-bold text-cyan-300 mb-1">Performance by Default</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      60 FPS animations with HTML5 Canvas, lightweight state management, memoized rendering paths, and minimal bundle sizes.
                    </p>
                  </div>
                  <div className="glass-card p-4 rounded-2xl border border-white/5">
                    <h4 className="text-sm font-bold text-pink-300 mb-1">Accessibility First (a11y)</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Semantic HTML structure, full keyboard navigability, high color contrast ratios, and screen-reader compliant ARIA landmarks.
                    </p>
                  </div>
                  <div className="glass-card p-4 rounded-2xl border border-white/5">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">Modular Component Systems</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Atomic, reusable component trees with predictable props interfaces and dedicated test suites using Vitest and React Testing Library.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'goals' && (
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed animate-in fade-in duration-300">
                <p>
                  <strong className="text-white">Career Vision:</strong> I aim to join a high-impact engineering team building product-defining web applications, developer tooling, or creative interactive platforms. I aspire to deepen my expertise in WebGL/WebGPU and frontend performance architecture.
                </p>
                <p>
                  <strong className="text-white">Continuous Growth:</strong> Every week, I commit to learning emerging frontend standards, experimenting with creative coding math, and contributing to open-source developer libraries.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 text-xs font-mono border border-purple-500/30">
                    #WebGPU
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cyan-600/20 text-cyan-300 text-xs font-mono border border-cyan-500/30">
                    #CreativeCoding
                  </span>
                  <span className="px-3 py-1 rounded-full bg-pink-600/20 text-pink-300 text-xs font-mono border border-pink-500/30">
                    #DesignSystems
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-600/20 text-emerald-300 text-xs font-mono border border-emerald-500/30">
                    #Accessibility
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
