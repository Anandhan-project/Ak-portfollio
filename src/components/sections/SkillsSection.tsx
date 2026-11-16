import React, { useState, useMemo } from 'react';
import { skillCategories } from '../../data/portfolioData';
import { Layout, Server, Code2, Database, Wrench, Search } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  frontend: Layout,
  backend: Server,
  languages: Code2,
  databases: Database,
  tools: Wrench,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = useMemo(() => {
    return skillCategories
      .map((cat) => {
        const matchingSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.badge.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter((cat) => {
        const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
        const hasSkills = cat.skills.length > 0;
        return matchesCategory && hasSkills;
      });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="skills"
      aria-label="Technical Capabilities and Stack"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10"
    >
      {/* Section Header */}
      <div className="mb-12 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          02 // SKILLS
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 dark:text-white editorial-title">
          Technical Capabilities & Stack
        </h2>
        <p className="text-base text-zinc-400 max-w-2xl">
          A disciplined toolkit focused on typed safety, high-throughput systems, zero-layout-shift interfaces, and resilient developer workflows.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-800/80">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Skill category filter">
          <button
            onClick={() => setSelectedCategory('all')}
            role="tab"
            aria-selected={selectedCategory === 'all'}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-zinc-100 text-zinc-950 dark:bg-white dark:text-zinc-900 shadow-sm font-semibold'
                : 'border border-zinc-800/80 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
            }`}
          >
            All Skills
          </button>

          {skillCategories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id] || Layout;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                role="tab"
                aria-selected={isSelected}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-zinc-100 text-zinc-950 dark:bg-white dark:text-zinc-900 shadow-sm font-semibold'
                    : 'border border-zinc-800/80 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-current" />
                <span>{cat.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skill (e.g. React, SQL)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-400"
            aria-label="Filter skills by keyword"
          />
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="space-y-10">
        {filteredCategories.map((category) => {
          const Icon = CATEGORY_ICONS[category.id] || Layout;

          return (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-2 text-zinc-200">
                <Icon className="w-4 h-4 text-zinc-400" />
                <h3 className="text-base font-semibold tracking-tight text-zinc-100 dark:text-white">
                  {category.name}
                </h3>
                <span className="text-xs font-mono text-zinc-500 ml-1">
                  ({category.skills.length})
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-zinc-200">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-zinc-800 bg-zinc-800/40 text-zinc-400">
                        {skill.badge}
                      </span>
                    </div>

                    {/* Minimal hairline progress indicator */}
                    <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-zinc-300 dark:bg-zinc-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-sm text-zinc-500">
            No technical skills matched "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};
