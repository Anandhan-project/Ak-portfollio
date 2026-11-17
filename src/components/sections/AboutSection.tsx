import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { Download, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
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

  return (
    <section
      id="about"
      aria-label="About Anandhan"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10"
    >
      <div className="mb-16 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          01 // ABOUT
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 dark:text-white editorial-title">
          Philosophy, Practice & Craft
        </h2>
        <p className="text-base text-zinc-400 max-w-2xl">
          A developer focused on simplicity, thoughtful systems, and the elimination of superfluous complexity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4 text-base sm:text-lg text-zinc-300 dark:text-zinc-300 leading-relaxed font-normal">
            {personalInfo.editorialBio.map((paragraph, idx) => (
              <p key={idx} className="text-balance">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="pt-6 border-t border-zinc-800/80 space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
              Approach to Problem-Solving
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {personalInfo.approach.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h4 className="text-sm font-semibold text-zinc-100 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8 lg:pl-4 lg:border-l border-zinc-800/80">
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
              Development Interests
            </h3>
            <ul className="space-y-2">
              {personalInfo.interests.map((interest, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I Enjoy Building */}
          <div className="space-y-3 pt-6 border-t border-zinc-800/80">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
              What I Enjoy Building
            </h3>
            <ul className="space-y-2.5">
              {personalInfo.whatIEnjoyBuilding.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <span className="text-zinc-500 font-mono text-xs mt-0.5">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Highlights */}
          <div className="space-y-4 pt-6 border-t border-zinc-800/80">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
              Career Highlights
            </h3>
            <div className="space-y-3">
              {personalInfo.highlights.map((highlight, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xs font-semibold text-zinc-200">
                    {highlight.title}
                  </div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    {highlight.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Resume Action */}
          <div className="pt-4">
            <button
              onClick={handleDownloadResume}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 hover:bg-zinc-900 text-xs font-medium text-zinc-200 transition-all"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Resume File Generated & Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-zinc-400" />
                  <span>Download Curriculum Vitae (.md)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
