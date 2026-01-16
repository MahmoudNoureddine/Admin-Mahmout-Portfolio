export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  status: 'SUCCESS' | 'COMPLETE' | 'IN_PROGRESS';
  tags: string[];
  link?: string;
}

export interface Article {
  title: string;
  description: string;
  date: string;
  url: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certification {
  name: string;
  status: 'Completed' | 'In Progress' | 'Targeting';
  date?: string;
  issuer?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  impact: string[];
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  SKILLS = 'skills',
  CERTS = 'certs',
  PROJECTS = 'projects',
  ARTICLES = 'articles',
  CONTACT = 'contact'
}
