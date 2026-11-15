export type Theme = 'dark' | 'light';

export type PlasmaPreset = 
  | 'cosmic-purple' 
  | 'cyber-cyan' 
  | 'solar-ember' 
  | 'aurora-matrix' 
  | 'neon-synth';

export interface PlasmaConfig {
  preset: PlasmaPreset;
  speed: number;
  complexity: number;
  colorIntensity: number;
  showParticles: boolean;
  interactiveMouse: boolean;
  paused: boolean;
}

export type ProjectCategory = 'all' | 'frontend' | 'fullstack' | 'interactive' | 'tools';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  contribution: string;
  category: Exclude<ProjectCategory, 'all'>;
  techStack: string[];
  keyFeatures: string[];
  architecture: string;
  challenges: string;
  outcomes: string;
  githubUrl: string;
  liveDemoUrl: string;
  featured: boolean;
  imageGradient: string;
  stats?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  badge: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export type TimelineType = 'experience' | 'education' | 'certification';

export interface TimelineItem {
  id: string;
  type: TimelineType;
  role: string;
  organization: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
  certificateUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormFeedback {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}
