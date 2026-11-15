import React, { useEffect } from 'react';
import { Project } from '../../types';
import { X, ExternalLink, CheckCircle2, ArrowRight, Layers, Lightbulb, Trophy } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { Link } from 'react-router-dom';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-purple-500/30 p-6 sm:p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-full glass-card text-slate-400 hover:text-white hover:border-purple-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <span className="px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 text-xs font-mono uppercase tracking-wider border border-purple-500/30">
            {project.category}
          </span>
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white mt-3">
            {project.title}
          </h2>
          <p className="text-sm text-cyan-400 font-medium mt-1">{project.tagline}</p>
        </div>

        {/* Overview & Problem/Solution */}
        <div className="space-y-6 text-sm text-slate-300">
          <p className="leading-relaxed">{project.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-purple-300 font-semibold mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{project.problem}</p>
            </div>

            <div className="glass-card p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold mb-2">
                <Trophy className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              Key Features & Architectural Highlights
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-800 text-purple-300 text-xs font-mono border border-purple-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-slate-200 hover:text-white text-xs font-semibold transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Code</span>
            </a>

            {project.liveDemoUrl.startsWith('http') && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600/30 text-cyan-200 hover:bg-cyan-600/50 text-xs font-semibold border border-cyan-500/40 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Website</span>
              </a>
            )}
          </div>

          <Link
            to={`/project/${project.id}`}
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 transition-all hover:scale-105"
          >
            <span>Full Project Details Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
