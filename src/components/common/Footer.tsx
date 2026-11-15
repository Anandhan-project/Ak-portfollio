import React from 'react';
import { Mail, ArrowUp, Code2, Sparkles, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-purple-500/10 glass-panel mt-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-mono text-lg font-bold text-white">
                {personalInfo.name}
                <span className="text-purple-400">.dev</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {personalInfo.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs text-purple-400 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Plasma Motion Simulation Engine</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills & Tech Stack</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition-colors">Featured Projects</a></li>
              <li><a href="#experience" className="hover:text-purple-400 transition-colors">Career Timeline</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-slate-800/80 group-hover:bg-purple-600/30 transition-colors">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <span>GitHub Profile</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-slate-800/80 group-hover:bg-purple-600/30 transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <span>LinkedIn Network</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-slate-800/80 group-hover:bg-purple-600/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5">
            Designed & Engineered by <span className="text-slate-300 font-medium">{personalInfo.name}</span> with
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current inline" />
            using React, TypeScript & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card text-slate-400 hover:text-purple-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
