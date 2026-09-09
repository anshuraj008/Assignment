export type Theme = 'dark' | 'light';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  iconName: string;
  colSpan?: string; // For bento grid layout
  badgeColor?: string;
  previewType?: 'chart' | 'code' | 'nodes' | 'tasks' | 'insights' | 'security';
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
}

export interface SolutionItem {
  role: string;
  icon: string;
  headline: string;
  description: string;
  keyOutcomes: string[];
  quote: {
    text: string;
    author: string;
    company: string;
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  metric: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
