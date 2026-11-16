import React, { useState } from 'react';
import { timelineData } from '../../data/portfolioData';
import { TimelineType } from '../../types';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | TimelineType>('all');

  const filteredItems = timelineData.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section
      id="experience"
      aria-label="Experience and Education Timeline"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10"
    >
      <div className="mb-12 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          04 // TIMELINE
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 dark:text-white editorial-title">
          Experience, Education & Milestones
        </h2>
        <p className="text-base text-zinc-400 max-w-2xl">
          A progressive record of academic rigor, open-source work, and professional certifications.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-zinc-800/80" role="tablist" aria-label="Timeline filter">
        <button
          onClick={() => setFilter('all')}
          role="tab"
          aria-selected={filter === 'all'}
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            filter === 'all'
              ? 'bg-zinc-100 text-zinc-950 dark:bg-white dark:text-zinc-900 shadow-sm font-semibold'
              : 'border border-zinc-800/80 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
          }`}
        >
          All Milestones
        </button>

        <button
          onClick={() => setFilter('experience')}
          role="tab"
          aria-selected={filter === 'experience'}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            filter === 'experience'
              ? 'bg-zinc-100 text-zinc-950 dark:bg-white dark:text-zinc-900 shadow-sm font-semibold'
              : 'border border-zinc-800/80 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
          }`}
        >
          <Briefcase className="w-3.5 h-3.5 text-current" />
          <span>Experience</span>
        </button>

        <button
          onClick={() => setFilter('education')}
          role="tab"
          aria-selected={filter === 'education'}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            filter === 'education'
              ? 'bg-zinc-100 text-zinc-950 dark:bg-white dark:text-zinc-900 shadow-sm font-semibold'
              : 'border border-zinc-800/80 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5 text-current" />
          <span>Education</span>
        </button>

        <button
          onClick={() => setFilter('certification')}
          role="tab"
          aria-selected={filter === 'certification'}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            filter === 'certification'
              ? 'bg-zinc-100 text-zinc-950 dark:bg-white dark:text-zinc-900 shadow-sm font-semibold'
              : 'border border-zinc-800/80 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
          }`}
        >
          <Award className="w-3.5 h-3.5 text-current" />
          <span>Certifications</span>
        </button>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l border-zinc-800/80 space-y-12">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Marker Node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-zinc-950 bg-zinc-400 dark:border-zinc-950 dark:bg-zinc-400 group-hover:bg-white group-hover:scale-125 transition-all" />

            {/* Header: Period & Type */}
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                {item.period}
              </span>

              {item.isCurrent && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                  Current
                </span>
              )}

              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border border-zinc-800 bg-zinc-900/60 text-zinc-500">
                {item.type}
              </span>
            </div>

            {/* Role & Organization */}
            <div className="space-y-1 mb-3">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-100 dark:text-white">
                {item.role}
              </h3>
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <span className="font-medium text-zinc-300">{item.organization}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-xs text-zinc-500">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-300 dark:text-zinc-400 leading-relaxed mb-4 max-w-3xl">
              {item.summary}
            </p>
            <div className="space-y-2 mb-4">
              {item.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400 max-w-3xl">
                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-[11px] font-mono border border-zinc-800/80 bg-zinc-900/40 text-zinc-400"
                >
                  {tech}
                </span>
              ))}

              {item.certificateUrl && (
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 ml-2 text-xs font-mono text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
