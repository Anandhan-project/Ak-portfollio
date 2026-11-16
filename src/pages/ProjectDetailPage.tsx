import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';
import { ArrowLeft, ExternalLink, CheckCircle2, Lightbulb, Trophy, ChevronRight } from 'lucide-react';
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
        <h2 className="text-2xl font-bold text-white mb-2">Project Not Found</h2>
        <p className="text-zinc-400 mb-6 text-sm">The requested case study could not be located.</p>
        <Link
          to="/"
          className="px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-950 font-medium text-xs hover:bg-white transition-colors"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <article className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-xs font-medium text-zinc-300 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Projects</span>
      </button>

      {/* Case Study Header */}
      <div className="mb-12 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 text-[10px] font-mono uppercase tracking-wider">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono">
              Featured Case Study
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 dark:text-white editorial-title">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
          {project.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-xs font-medium text-zinc-200 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source on GitHub</span>
          </a>

          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white text-xs font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Launch Live Application</span>
          </a>
        </div>
      </div>

      {/* Key Metrics Strip if present */}
      {project.stats && (
        <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 mb-12">
          {project.stats.map((s, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="text-xl sm:text-2xl font-bold font-mono text-zinc-100">
                {s.value}
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Narrative Sections */}
      <div className="space-y-12">
        {/* Abstract & Summary */}
        <section className="space-y-3">
          <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
            01 // Architectural Overview
          </h2>
          <p className="text-base text-zinc-300 leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* Problem & Solution Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
              <Lightbulb className="w-4 h-4 text-zinc-400" />
              <span>The Problem</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
              <Trophy className="w-4 h-4 text-zinc-400" />
              <span>Engineered Solution</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>

        {/* My Contribution */}
        <section className="space-y-3">
          <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
            02 // My Engineering Contribution
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {project.contribution}
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
            03 // Key Features & Capabilities
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 p-3 rounded-xl border border-zinc-800/80 bg-zinc-900/20">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack Pills */}
        <section className="space-y-3 pt-4 border-t border-zinc-800/80">
          <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
            04 // Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-mono border border-zinc-800 bg-zinc-900 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Next Project Footer */}
      <div className="mt-16 pt-8 border-t border-zinc-800/80 flex items-center justify-between">
        <Link
          to="/"
          className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
        >
          ← Return to All Projects
        </Link>

        <Link
          to={`/project/${nextProject.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-200 hover:text-white transition-colors"
        >
          <span>Next Project: {nextProject.title}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
