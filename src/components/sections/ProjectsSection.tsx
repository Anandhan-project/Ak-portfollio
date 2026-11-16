import React, { useState, useMemo } from 'react';
import { projectsData } from '../../data/portfolioData';
import { Project, ProjectCategory } from '../../types';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectModal } from '../projects/ProjectModal';

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'interactive', label: 'pyhton' },
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
      aria-label="Featured Projects Portfolio"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10"
    >
      {/* Section Header */}
      <div className="mb-12 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          03 // WORK
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 dark:text-white editorial-title">
          Featured Projects & Case Studies
        </h2>
        <p className="text-base text-zinc-400 max-w-2xl">
          Real-world web applications constructed with typed safety, modular architectures, strict accessibility, and measurable performance results.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-zinc-800/80" role="tablist" aria-label="Project category filter">
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onPreview={setModalProject}
          />
        ))}
      </div>

      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
};
