import React, { useState, useMemo } from 'react';
import { projectsData } from '../../data/portfolioData';
import { Project, ProjectCategory } from '../../types';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectModal } from '../projects/ProjectModal';
import { FolderGit2 } from 'lucide-react';

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'interactive', label: 'Canvas / Interactive' },
  { id: 'frontend', label: 'Frontend UI' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'tools', label: 'Dev Tools' },
];

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="projects"
      aria-label="Projects Portfolio"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-purple-400 mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>03 // WORK & ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Featured Projects & <span className="text-gradient">Case Studies</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl text-base">
          Real-world applications built with strict TypeScript safety, responsive layouts, 60 FPS graphics, and zero boilerplate compromise.
        </p>

        {/* Filter Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === 'all'
                ? projectsData.length
                : projectsData.filter((p) => p.category === cat.id).length;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-purple-600/30 text-purple-200 border border-purple-500/50 shadow-lg shadow-purple-600/20'
                    : 'glass-card text-slate-400 hover:text-slate-200 hover:border-white/20'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-purple-500/40 text-white' : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onPreview={(proj) => setModalProject(proj)}
          />
        ))}
      </div>

      {/* Modal View */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
};
