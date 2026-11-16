import React, { useState } from 'react';
import { ArrowRight, Download, Mail, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { personalInfo } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();

    const resumeContent = `# ${personalInfo.name.toUpperCase()}
${personalInfo.role}
Email: ${personalInfo.email} | Location: ${personalInfo.location}
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

===================================================================
SUMMARY
===================================================================
${personalInfo.tagline}

===================================================================
CORE TECHNICAL SKILLS
===================================================================
- Frontend: React 18+, TypeScript, Tailwind CSS, Next.js, HTML5 Semantic A11y, Modern CSS
- Backend: Node.js, Express, RESTful APIs, GraphQL, Serverless Functions
- Languages: TypeScript, JavaScript (ES6+), SQL, Python
- Databases: PostgreSQL, MongoDB, SQLite, Redis, Supabase
- Tooling & DevOps: Vite, Git, GitHub Actions CI/CD, Vitest, Jest, Chrome DevTools

===================================================================
EDUCATION
===================================================================
BCA (2023 - 2026)
Yenepoya University Affiliated College of Engineering
7.9 GPA
`;

    const blob = new Blob([resumeContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${personalInfo.name}_Resume.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10"
    >
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 dark:bg-zinc-900/80 text-xs font-mono text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-300 dark:text-zinc-300">{personalInfo.availability}</span>
        </div>

        <div className="space-y-3">
          <p className="text-sm sm:text-base font-mono text-zinc-400 tracking-wide uppercase">
            Hello, I'm
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-zinc-100 dark:text-white editorial-title">
            {personalInfo.name}
          </h1>
          <p className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-400 dark:text-zinc-400">
            {personalInfo.role}
          </p>
        </div>

        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 dark:text-zinc-400 leading-relaxed font-normal">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-100 text-zinc-950 hover:bg-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-medium text-sm transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300 hover:text-white dark:border-zinc-800 dark:hover:border-zinc-700 font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {downloadSuccess ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Resume Downloaded</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-zinc-400" />
                <span>Download Resume</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2 sm:ml-4 pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l border-zinc-800/80 sm:pl-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-full border border-zinc-800/80 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-full border border-zinc-800/80 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send direct email"
              className="p-3 rounded-full border border-zinc-800/80 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800/60 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-zinc-100 dark:text-zinc-100">
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
