// ============================================
// TYPES DU PORTFOLIO
// ============================================

export type Category = 'WEB' | 'MOBILE' | 'UIUX' | 'DATA_IA' | 'DEVOPS';
export type ArticleType = 'BLOG' | 'TP' | 'RETEX';
export type Status = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
export type CertIssuer = 'Oracle' | 'AWS' | 'IBM' | 'Meta' | 'Coursera' | 'Autre';

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  startYear: number;
  endYear?: number;
  current: boolean;
  mention?: string;
  description: string;
  tags: string[];
  order: number;
}

export interface Skill {
  id: string;
  category: string;
  items: string[];
  order: number;
}

export interface SkillDomain {
  id: string;
  number: string;         // "01", "02"...
  title: string;
  subtitle: string;
  icon: string;           // Material Symbols name
  color: 'primary' | 'secondary' | 'tertiary' | 'error';
  items: string[];
}

export interface Certification {
  id: string;
  slug: string;
  title: string;
  issuer: CertIssuer;
  issuerLabel: string;
  description: string;
  pdfUrl: string;
  badgeUrl?: string;
  date?: string;
  skills: string[];
  featured: boolean;
  status: Status;
  createdAt: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  coverImage: string;
  screenshots: string[];
  category: Category;
  tags: string[];
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
  status: Status;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  type: ArticleType;
  tags: string[];
  pdfUrl?: string;
  publishedAt?: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
}

