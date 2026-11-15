import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-8">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};
