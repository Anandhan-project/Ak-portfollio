import React, { useEffect } from 'react';
import { Project } from '../../types';
import { X, CheckCircle2, ArrowRight, Layers, Lightbulb, Trophy } from 'lucide-react';
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
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6 pr-8 space-y-2">
          <span className="px-2.5 py-1 rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 text-[10px] font-mono uppercase tracking-wider">
            {project.category}
          </span>
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-white pt-1">
            {project.title}
          </h2>
          <p className="text-sm text-zinc-400">{project.tagline}</p>
        </div>

        <div className="space-y-6 text-sm text-zinc-300">
          <p className="leading-relaxed">{project.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
              <div className="flex items-center gap-2 text-zinc-200 font-semibold mb-1.5 text-xs font-mono uppercase tracking-wider">
                <Lightbulb className="w-3.5 h-3.5 text-zinc-400" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
              <div className="flex items-center gap-2 text-zinc-200 font-semibold mb-1.5 text-xs font-mono uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5 text-zinc-400" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-zinc-400" />
              Key Features & Architectural Highlights
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md border border-zinc-800 bg-zinc-900 text-[11px] font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-xs font-medium text-zinc-200 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
          </div>

          <Link
            to={`/project/${project.id}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <span>Full Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
