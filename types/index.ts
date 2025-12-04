export interface CursorPosition {
  x: number;
  y: number;
}

export type CursorVariant = 'default' | 'hover';

export interface NavItem {
  label: string;
  href: string;
}

export interface Offering {
  text: string;
}

export interface ManifestoWord {
  text: string;
  color: string;
}

export interface Social {
  name: string;
  icon: string;
  color: string;
  rotation: number;
  url: string;
}

export interface ToggleContent {
  title: string;
  description: string;
}