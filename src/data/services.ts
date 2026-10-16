import {
  GlobeIcon,
  LayoutDashboardIcon,
  SearchIcon,
  MessagesSquareIcon,
  MousePointerClickIcon,
  TargetIcon,
  PaletteIcon,
  SmartphoneIcon } from
'lucide-react';
import type { Service } from '../types/content';

export const services: Service[] = [
{
  id: 'websites',
  name: 'Website Design & Development',
  headline: 'Give Your Business a Professional Online Presence.',
  description:
  'We create modern, responsive, user-friendly websites that help businesses present their services, build credibility, and attract enquiries.',
  deliverables: [
  'Business and corporate websites',
  'School and institutional websites',
  'Portfolio and personal brand websites',
  'Landing pages for campaigns',
  'E-commerce websites',
  'Website redesign and maintenance'],

  cta: 'Build My Website',
  whatsappTopic: 'website development',
  icon: GlobeIcon
},
{
  id: 'web-apps',
  name: 'Web Application Development',
  headline: 'Simplify Your Operations With Smart Digital Solutions.',
  description:
  'We develop custom web applications that solve business problems, improve efficiency, and help organisations manage their operations.',
  deliverables: [
  'School management systems',
  'Booking and reservation platforms',
  'Business management dashboards',
  'E-commerce marketplaces',
  'Customer portals and administration systems',
  'Workflow automation and custom platforms'],

  cta: 'Discuss My Application',
  whatsappTopic: 'web application development',
  icon: LayoutDashboardIcon
},
{
  id: 'seo',
  name: 'Search Engine Optimization (SEO)',
  headline: 'Help More Customers Find Your Business on Google.',
  description:
  'Practical SEO that improves your website’s visibility, relevance, technical performance, and organic search opportunities.',
  deliverables: [
  'SEO audits',
  'Keyword research',
  'On-page SEO',
  'Technical SEO',
  'Website speed optimisation',
  'Local SEO & Google Business Profile',
  'Content optimisation',
  'Search performance monitoring'],

  benefit: 'Make it easier for potential customers to discover your products and services online.',
  note: 'SEO is a long-term effort. We follow proven best practices and never promise guaranteed rankings.',
  cta: 'Improve My Google Visibility',
  whatsappTopic: 'SEO',
  icon: SearchIcon
},
{
  id: 'social-media',
  name: 'Social Media Management',
  headline: 'Turn Your Social Media Into a Stronger Business Presence.',
  description:
  'We help you keep an attractive, consistent, and professional presence across the platforms your customers use.',
  deliverables: [
  'Facebook page management',
  'Instagram account management',
  'TikTok content planning & management',
  'LinkedIn business page management',
  'Social media content calendars',
  'Post and promotional graphic design',
  'Caption writing and publishing',
  'Community engagement & comment monitoring',
  'Brand consistency & audience growth strategy',
  'Monthly performance reports'],

  cta: 'Manage My Social Media',
  whatsappTopic: 'social media management',
  icon: MessagesSquareIcon
},
{
  id: 'google-ads',
  name: 'Google Ads Management',
  headline: 'Reach People Actively Searching for Your Services.',
  description:
  'We plan, launch, and optimise Google advertising campaigns around your objectives, audience, and budget.',
  deliverables: [
  'Campaign planning',
  'Keyword and audience research',
  'Search advertising',
  'Ad copy creation',
  'Conversion tracking setup where supported',
  'Campaign monitoring and optimisation',
  'Performance reporting'],

  note: 'Our management fee is separate from your advertising spend, which is paid directly to Google at a budget you approve.',
  cta: 'Launch My Google Ads',
  whatsappTopic: 'Google Ads management',
  icon: MousePointerClickIcon
},
{
  id: 'meta-ads',
  name: 'Facebook & Instagram Ads',
  headline: 'Put Your Business in Front of the Right Audience.',
  description:
  'We create and manage paid campaigns on Meta platforms to support brand awareness, lead generation, enquiries, and sales.',
  deliverables: [
  'Campaign strategy',
  'Audience targeting',
  'Creative advertising content',
  'Lead generation campaigns',
  'Retargeting where appropriate',
  'Campaign performance analysis'],

  note: 'Ad spend is paid directly to Meta, separate from our management fee. Results depend on your offer, audience, and budget — we don’t guarantee specific sales.',
  cta: 'Promote My Business',
  whatsappTopic: 'Facebook and Instagram advertising',
  icon: TargetIcon
},
{
  id: 'branding',
  name: 'Branding & Graphic Design',
  headline: 'Make Your Brand Easy to Recognise and Remember.',
  description: 'We help businesses establish a consistent, professional visual identity across every touchpoint.',
  deliverables: [
  'Logo design and brand identity',
  'Business cards and company profiles',
  'Marketing posters & promotional graphics',
  'Social media graphics',
  'Flyers, brochures, and banners',
  'Branded T-shirts, bags & merchandise'],

  cta: 'Build My Brand',
  whatsappTopic: 'branding and graphic design',
  icon: PaletteIcon
},
{
  id: 'mobile-apps',
  name: 'Mobile App Development',
  headline: 'Bring Your Ideas to Mobile Devices.',
  description: 'We develop mobile app experiences tailored to your business needs and your customers’ expectations.',
  deliverables: [
  'Android application development',
  'Cross-platform app development',
  'Business and service applications',
  'Application interface design',
  'API & database integration where required',
  'Testing and deployment support'],

  benefit: 'A practical way to explore digital products that make it more convenient for customers to reach you.',
  cta: 'Discuss My App Idea',
  whatsappTopic: 'mobile application development',
  icon: SmartphoneIcon
}];


export const serviceOptions: string[] = [
'Website Design & Development',
'Web Application Development',
'Search Engine Optimization (SEO)',
'Social Media Management',
'Google Ads Management',
'Facebook & Instagram Ads',
'Branding & Graphic Design',
'Mobile App Development',
'Combined Digital Growth Package',
'Not sure yet — I need advice'];