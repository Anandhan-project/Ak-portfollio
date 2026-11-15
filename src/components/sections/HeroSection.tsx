import React from 'react';
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { personalInfo } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Hero Overview"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-purple-500/30 text-xs font-medium text-purple-300 mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{personalInfo.availability}</span>
        </div>

        {/* Main Title & Role */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-pulse-glow">
            {personalInfo.name}
          </span>
          <br />
          <span className="text-3xl sm:text-5xl lg:text-6xl text-slate-200 font-bold block mt-2">
            {personalInfo.role}
          </span>
        </h1>

        {/* Short Introduction */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 font-normal">
          {personalInfo.tagline}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel hover:bg-white/10 text-slate-200 hover:text-white font-semibold text-sm border border-white/15 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            <span>Get in Touch</span>
          </a>

          <a
            href="#about"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl glass-card text-slate-300 hover:text-white font-medium text-sm transition-colors"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>View Resume</span>
          </a>
        </div>

        {/* Plasma Motion Interactive Hint Banner */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-purple-500/20 text-xs text-slate-400 backdrop-blur-md mb-12">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          <span>Interactive Plasma Field Active: move your cursor or tap to perturb live energy waves</span>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-4 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Icons Quick Row */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-full glass-card text-slate-400 hover:text-white hover:border-purple-500/40 transition-all duration-200 hover:scale-110"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-full glass-card text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all duration-200 hover:scale-110"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send Email"
            className="p-3 rounded-full glass-card text-slate-400 hover:text-white hover:border-pink-500/40 transition-all duration-200 hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
