import {
  LayersIcon,
  SlidersHorizontalIcon,
  MonitorSmartphoneIcon,
  CpuIcon,
  MessageSquareTextIcon,
  FileCheck2Icon,
  RocketIcon,
  LifeBuoyIcon,
  LightbulbIcon,
  SparklesIcon,
  BadgeCheckIcon,
  TrendingUpIcon } from
'lucide-react';
import type { Benefit, ProcessStep, ShowcaseItem } from '../types/content';

export const values: Benefit[] = [
{ title: 'Innovation', description: 'Modern solutions for evolving business needs.', icon: LightbulbIcon },
{ title: 'Creativity', description: 'Engaging digital experiences that communicate your brand.', icon: SparklesIcon },
{ title: 'Quality', description: 'Thoughtful design, reliable development, and attention to detail.', icon: BadgeCheckIcon },
{ title: 'Growth', description: 'Digital strategies focused on helping businesses reach more customers.', icon: TrendingUpIcon }];


export const benefits: Benefit[] = [
{ title: 'Multiple services, one agency', description: 'Websites, apps, marketing and branding without juggling vendors.', icon: LayersIcon },
{ title: 'Tailored to your business', description: 'Solutions shaped around your goals, audience and budget.', icon: SlidersHorizontalIcon },
{ title: 'Professional, responsive websites', description: 'Experiences that look sharp and work well on every device.', icon: MonitorSmartphoneIcon },
{ title: 'Technology + marketing together', description: 'What we build is designed to be found, used and shared.', icon: CpuIcon },
{ title: 'Clear communication', description: 'You always know where your project stands.', icon: MessageSquareTextIcon },
{ title: 'Transparent scope', description: 'Agreed deliverables in writing before work begins.', icon: FileCheck2Icon },
{ title: 'Flexible for any stage', description: 'Right-sized for startups and established organisations alike.', icon: RocketIcon },
{ title: 'Ongoing support options', description: 'Maintenance and marketing support where agreed.', icon: LifeBuoyIcon }];


export const processSteps: ProcessStep[] = [
{ title: 'Tell Us Your Goals', description: 'Share your business, challenges, budget, and the results you want.' },
{ title: 'Get a Tailored Proposal', description: 'We discuss the best solution, scope, timeline, and estimated cost.' },
{ title: 'Design and Deliver', description: 'We create, develop, test, and present the agreed solution.' },
{ title: 'Launch and Improve', description: 'We launch and discuss ongoing support, maintenance, or marketing improvements.' }];


export const showcaseItems: ShowcaseItem[] = [
{ kind: 'instagram', label: 'Instagram post' },
{ kind: 'calendar', label: 'Monthly content calendar' },
{ kind: 'google-ad', label: 'Google search ad' },
{ kind: 'brand', label: 'Brand identity' },
{ kind: 'facebook', label: 'Facebook business page' },
{ kind: 'seo', label: 'SEO keyword report' },
{ kind: 'promo', label: 'Promotional graphic' },
{ kind: 'ecommerce', label: 'E-commerce promotion' }];