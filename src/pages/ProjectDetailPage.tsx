import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';
import { ArrowLeft, ExternalLink, CheckCircle2, Cpu, Lightbulb, AlertTriangle, Layers, ChevronRight, Sparkles } from 'lucide-react';
import { GithubIcon } from '../components/common/Icons';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
        <p className="text-slate-400 mb-6">The requested case study could not be located.</p>
        <Link
          to="/"
          className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-colors"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  // Find next project for seamless sequential browsing
  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <article className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-white mb-8 border border-white/10 hover:border-purple-500/40 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Projects</span>
      </button>

      {/* Hero Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 text-xs font-mono uppercase tracking-wider border border-purple-500/30">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-mono uppercase tracking-wider border border-amber-400/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Case Study
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          {project.title}
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
          {project.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card text-white text-xs font-semibold hover:border-purple-500/40 transition-all hover:scale-105"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source on GitHub</span>
          </a>

          {project.liveDemoUrl.startsWith('http') ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 transition-all hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Application</span>
            </a>
          ) : (
            <Link
              to="/#hero"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Experience Live on Hero Canvas</span>
            </Link>
          )}
        </div>
      </div>

      {/* Visual Mockup & Stats Banner */}
      <div className={`w-full rounded-3xl bg-gradient-to-tr ${project.imageGradient} p-8 sm:p-12 mb-12 shadow-2xl relative overflow-hidden border border-white/10`}>
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-200">System Architecture</span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-3">Architectural Highlights</h3>
            <p className="text-sm text-slate-200/90 leading-relaxed font-mono">
              {project.architecture}
            </p>
          </div>

          {project.stats && (
            <div className="flex flex-row md:flex-col gap-4 shrink-0">
              {project.stats.map((s, idx) => (
                <div key={idx} className="glass-card px-4 py-3 rounded-2xl border border-white/20 text-center min-w-[120px]">
                  <div className="text-xl font-extrabold font-mono text-white">{s.value}</div>
                  <div className="text-[11px] text-slate-300 uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Grid: Problem, Solution, Challenges, Outcomes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Problem */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10">
          <div className="flex items-center gap-3 text-purple-400 font-bold mb-4">
            <div className="p-2 rounded-xl bg-purple-600/20">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="text-lg text-white">The Challenge & Problem</h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">{project.problem}</p>
        </div>

        {/* Solution */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10">
          <div className="flex items-center gap-3 text-cyan-400 font-bold mb-4">
            <div className="p-2 rounded-xl bg-cyan-600/20">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg text-white">Engineered Solution</h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">{project.solution}</p>
        </div>

        {/* Technical Obstacles & Challenges */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10">
          <div className="flex items-center gap-3 text-amber-400 font-bold mb-4">
            <div className="p-2 rounded-xl bg-amber-600/20">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-lg text-white">Technical Complexities Overcome</h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">{project.challenges}</p>
        </div>

        {/* Measurable Outcomes */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10">
          <div className="flex items-center gap-3 text-emerald-400 font-bold mb-4">
            <div className="p-2 rounded-xl bg-emerald-600/20">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg text-white">Impact & Quantified Outcomes</h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">{project.outcomes}</p>
        </div>
      </div>

      {/* Key Features Breakdown */}
      <div className="glass-panel p-8 rounded-3xl border border-white/10 mb-12">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Layers className="w-5 h-5 text-purple-400" />
          <span>Core Feature Specifications</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.keyFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl glass-card border border-white/5">
              <span className="w-6 h-6 rounded-full bg-purple-600/20 text-purple-300 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">
                0{idx + 1}
              </span>
              <span className="text-sm text-slate-200">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Specs */}
      <div className="glass-panel p-8 rounded-3xl border border-white/10 mb-16">
        <h3 className="text-base font-bold text-white mb-4">Technologies & Libraries Utilized</h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-xl bg-slate-900 text-purple-300 text-xs font-mono border border-purple-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Next Project Footer Bar */}
      <div className="pt-8 border-t border-white/10 flex items-center justify-between">
        <Link
          to="/"
          className="text-sm text-slate-400 hover:text-white transition-colors"
        >
          ← Return to All Projects
        </Link>

        {nextProject && (
          <Link
            to={`/project/${nextProject.id}`}
            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 font-semibold group"
          >
            <span>Next Project: {nextProject.title}</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </article>
  );
};
