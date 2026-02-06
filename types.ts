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