import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import { ExternalLink, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

interface ProjectCardProps {
  project: Project;
  onPreview: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPreview }) => {
  return (
    <article
      data-testid="project-card"
      className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col h-full group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/10"
    >
      {/* Decorative Visual Banner simulating Project Visual / Architecture */}
      <div className={`h-48 w-full bg-gradient-to-tr ${project.imageGradient} relative p-6 flex flex-col justify-between overflow-hidden`}>
        {/* Abstract geometric mesh / ambient glow */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
        
        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono uppercase tracking-wider border border-white/20">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2.5 py-1 rounded-full bg-amber-400/90 text-slate-950 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
              <Sparkles className="w-3 h-3 fill-current" />
              Featured
            </span>
          )}
        </div>

        {/* Title over banner */}
        <div className="relative z-10">
          <h3 className="text-xl font-extrabold text-white tracking-tight drop-shadow-md group-hover:text-cyan-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-200/90 line-clamp-1 mt-1 font-medium">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Problem & Contribution Highlights */}
          <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="space-y-2 mb-5 text-xs text-slate-400">
            <div>
              <strong className="text-slate-300">Problem:</strong> {project.problem}
            </div>
            <div>
              <strong className="text-slate-300">My Contribution:</strong> {project.contribution}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-purple-300 text-[11px] font-mono border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
          {/* Quick Preview Modal Button */}
          <button
            onClick={() => onPreview(project)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white glass-panel hover:bg-white/10 transition-colors"
            aria-label={`Quick overview of ${project.title}`}
          >
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            <span>Overview</span>
          </button>

          {/* External Links */}
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`GitHub repo for ${project.title}`}
              className="p-2 rounded-xl glass-card text-slate-400 hover:text-white hover:border-purple-500/40 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {project.liveDemoUrl.startsWith('http') ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="p-2 rounded-xl glass-card text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <a
                href={project.liveDemoUrl}
                aria-label={`Interact with ${project.title} live on this page`}
                className="p-2 rounded-xl glass-card text-cyan-400 hover:text-cyan-200 hover:border-cyan-500/40 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
              </a>
            )}

            {/* Deep-dive Link to Route */}
            <Link
              to={`/project/${project.id}`}
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 text-xs font-semibold border border-purple-500/40 transition-all hover:scale-105"
            >
              <span>Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
