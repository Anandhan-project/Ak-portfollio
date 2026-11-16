import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import { ArrowRight, Eye } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

interface ProjectCardProps {
  project: Project;
  onPreview: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPreview }) => {
  return (
    <article
      data-testid="project-card"
      className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      <div>
        <div className="relative w-full h-48 bg-zinc-950 border-b border-zinc-800/80 flex flex-col overflow-hidden">
          <div className="h-7 px-3.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
            </div>

            <div className="text-[10px] font-mono text-zinc-500 px-3 py-0.5 rounded-md bg-zinc-950/60 border border-zinc-800 truncate max-w-[160px]">
            </div>

            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
              Preview
            </span>
          </div>

          <div className="relative flex-1 p-5 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 via-zinc-950 to-black group-hover:scale-105 transition-transform duration-500 ease-out" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider border border-zinc-700 bg-zinc-800/80 text-zinc-300">
                {project.category}
              </span>

              {project.featured && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                  Featured
                </span>
              )}
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                {project.tagline}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono border border-zinc-800 bg-zinc-900/60 text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 border-t border-zinc-800/60 flex items-center justify-between gap-2 mt-4">
        <button
          onClick={() => onPreview(project)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
          aria-label={`Quick overview of ${project.title}`}
        >
          <Eye className="w-3.5 h-3.5 text-zinc-400" />
          <span>Overview</span>
        </button>

        <div className="flex items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`GitHub repo for ${project.title}`}
            className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <Link
            to={`/project/${project.id}`}
            aria-label={`Read full case study for ${project.title}`}
            className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};
