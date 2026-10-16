import type { LucideIcon } from 'lucide-react';

export type SocialPlatform = 'facebook' | 'instagram' | 'tiktok' | 'linkedin' | 'youtube';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  /** Leave empty until the official profile exists — empty links are hidden. */
  url: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  name: string;
  headline: string;
  description: string;
  deliverables: string[];
  cta: string;
  whatsappTopic: string;
  icon: LucideIcon;
  benefit?: string;
  note?: string;
}

export interface Project {
  id: string;
  name: string;
  url: string;
  domain: string;
  category: string;
  description: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
}

export interface PackageOption {
  id: string;
  name: string;
  serviceName: string;
  bestFor: string;
  includes: string[];
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export type ShowcaseKind =
'instagram' |
'facebook' |
'calendar' |
'promo' |
'google-ad' |
'seo' |
'brand' |
'ecommerce';

export interface ShowcaseItem {
  kind: ShowcaseKind;
  label: string;
}