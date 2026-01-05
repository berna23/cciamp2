
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Professional {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string[];
  education: string[];
  image: string;
  licenseNumber: string;
  curiosities: string[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
}

export enum AppRoute {
  Home = 'home',
  Services = 'services',
  Research = 'research',
  About = 'about',
  Contact = 'contact',
  ProfessionalProfile = 'professional-profile'
}
