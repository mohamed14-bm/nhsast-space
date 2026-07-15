import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  count: number;
}

export enum PageState {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  RESOURCES = 'RESOURCES',
  EVENTS = 'EVENTS',
  CONTACT = 'CONTACT'
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: string;
  type: 'Article' | 'Tutorial' | 'Guide';
  readTime: string;
  description: string;
  content: string;
  icon: ReactNode;
  color: string;
  // Project specific fields
  components?: string[];
  projectImage?: string;
  videoLinks?: { title: string; url: string }[];
}

export type CycleId = 'prep' | 'aes' | 'rasd' | 'usnc';
export type ViewMode = 'prep' | 'specs';

export interface ResourceItem {
  title: string;
  link: string; // URL to the specific PDF/Folder
}

export interface Module {
  id: string;
  name: string;
  code?: string;
  coeff: number;
  credits: number;
  objectives?: string;
  icon?: ReactNode;
  resources?: {
    courses?: ResourceItem[];
    tds?: ResourceItem[];
    exams?: ResourceItem[];
  };
}

export interface Semester {
  id: string;
  title: string;
  modules: Module[];
}

export interface CycleData {
  id: CycleId;
  label: string;
  description: string;
  semesters: Semester[];
  advice?: string[];
}