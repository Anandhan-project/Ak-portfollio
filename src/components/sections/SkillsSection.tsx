import React, { useState, useMemo } from 'react';
import { skillCategories } from '../../data/portfolioData';
import { Cpu, Search, Sparkles, Layout, Server, Wrench } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-purple-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-cyan-400" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
  Wrench: <Wrench className="w-5 h-5 text-amber-400" />,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = useMemo(() => {
    return skillCategories
      .map((cat) => {
        // Filter skills within the category
        const filteredSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.badge.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return {
          ...cat,
          skills: filteredSkills,
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
      aria-label="Skills and Technical Stack"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-cyan-400 mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>02 // CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Technical Skills & <span className="text-gradient-cyan">Modern Stack</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl text-base">
          Categorized toolset focused on modular TypeScript engineering, high-performance rendering, and robust test coverage.
        </p>

        {/* Search & Category Filter Controls */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl">
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, Canvas)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-card text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-white/10"
              aria-label="Filter skills by keyword"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm'
                  : 'glass-card text-slate-400 hover:text-slate-200'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm'
                    : 'glass-card text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10">
                {ICON_MAP[category.icon] || <Cpu className="w-5 h-5 text-purple-400" />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{category.name}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{category.description}</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="font-medium text-slate-200 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                      {skill.name}
                      {skill.highlight && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      )}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] font-mono text-slate-400 border border-slate-700">
                        {skill.badge}
                      </span>
                      <span className="font-mono text-slate-400">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden p-0.5 border border-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transition-all duration-700 group-hover:from-cyan-400 group-hover:to-pink-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-12 glass-panel rounded-2xl max-w-md mx-auto">
          <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-3 text-xs text-cyan-400 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
};
