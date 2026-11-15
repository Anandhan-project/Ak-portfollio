import React, { useState } from 'react';
import { timelineData, testimonialsData } from '../../data/portfolioData';
import { TimelineType } from '../../types';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, Quote } from 'lucide-react';

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
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-cyan-400 mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>04 // CAREER & EDUCATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Experience, Education & <span className="text-gradient-cyan">Milestones</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl text-base">
          A verifiable record of professional internships, engineering education, and industry certifications.
        </p>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              filter === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm'
                : 'glass-card text-slate-400 hover:text-slate-200'
            }`}
          >
            All Milestones
          </button>
          <button
            onClick={() => setFilter('experience')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              filter === 'experience'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm'
                : 'glass-card text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Experience</span>
          </button>
          <button
            onClick={() => setFilter('education')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              filter === 'education'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm'
                : 'glass-card text-slate-400 hover:text-slate-200'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </button>
          <button
            onClick={() => setFilter('certification')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              filter === 'certification'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm'
                : 'glass-card text-slate-400 hover:text-slate-200'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Certifications</span>
          </button>
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto mb-24">
        {/* Central Vertical Glowing Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-transparent -translate-x-1/2 hidden sm:block" />

        <div className="space-y-12">
          {filteredItems.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                } gap-8 group`}
              >
                {/* Timeline node icon */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-slate-900 border-2 border-cyan-400/80 items-center justify-center z-10 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:border-purple-400 transition-all duration-300">
                  {item.type === 'experience' && <Briefcase className="w-4 h-4 text-purple-400" />}
                  {item.type === 'education' && <GraduationCap className="w-4 h-4 text-cyan-400" />}
                  {item.type === 'certification' && <Award className="w-4 h-4 text-amber-400" />}
                </div>

                {/* Content Box */}
                <div className="w-full sm:w-[calc(50%-2rem)]">
                  <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-slate-800 text-[11px] font-mono text-cyan-300 border border-cyan-500/20 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      {item.isCurrent && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/40 animate-pulse">
                          Active
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-purple-300 mb-1">{item.organization}</div>
                    <div className="text-xs text-slate-400 flex items-center gap-1 mb-4">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>

                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">{item.summary}</p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5 text-xs text-slate-400">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {item.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-slate-900/60 text-slate-400 text-[10px] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonials / Recommendations Sub-section */}
      <div className="pt-12 border-t border-white/10">
        <h3 className="text-xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
          <Quote className="w-5 h-5 text-purple-400" />
          <span>Mentors & Peer Endorsements</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="glass-card p-6 rounded-3xl border border-white/10 relative flex flex-col justify-between"
            >
              <p className="text-sm text-slate-300 italic mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center font-bold text-xs text-white shadow-md">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
