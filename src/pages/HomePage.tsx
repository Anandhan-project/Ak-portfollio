import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ContactSection } from '../components/sections/ContactSection';
import { useScrollReveal } from '../hooks/useScrollReveal';

const RevealBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {children}
    </div>
  );
};

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-4 sm:space-y-12">
      <HeroSection />
      <RevealBlock>
        <AboutSection />
      </RevealBlock>
      <RevealBlock>
        <SkillsSection />
      </RevealBlock>
      <RevealBlock>
        <ProjectsSection />
      </RevealBlock>
      <RevealBlock>
        <ExperienceSection />
      </RevealBlock>
      <RevealBlock>
        <ContactSection />
      </RevealBlock>
    </div>
  );
};
