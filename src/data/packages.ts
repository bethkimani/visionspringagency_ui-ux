import type { PackageOption } from '../types/content';

export const packages: PackageOption[] = [
{
  id: 'website',
  name: 'Website Development',
  serviceName: 'Website Design & Development',
  bestFor: 'Businesses, schools and personal brands that need a credible online presence.',
  includes: ['Page structure & design', 'Mobile-responsive build', 'Enquiry & WhatsApp setup', 'Basic on-page SEO']
},
{
  id: 'seo',
  name: 'SEO',
  serviceName: 'Search Engine Optimization (SEO)',
  bestFor: 'Websites that need to be found by more relevant customers on Google.',
  includes: ['SEO audit', 'Keyword research', 'On-page & technical fixes', 'Monthly monitoring']
},
{
  id: 'social',
  name: 'Social Media Management',
  serviceName: 'Social Media Management',
  bestFor: 'Brands that want consistent, professional social media without the daily workload.',
  includes: ['Content calendar', 'Designed posts & captions', 'Publishing & engagement', 'Monthly report']
},
{
  id: 'ads',
  name: 'Google Ads & Meta Ads Management',
  serviceName: 'Google Ads Management',
  bestFor: 'Businesses ready to reach customers through paid search and social campaigns.',
  includes: ['Campaign strategy', 'Ad creative & copy', 'Targeting & tracking', 'Performance reports']
},
{
  id: 'branding',
  name: 'Branding & Graphic Design',
  serviceName: 'Branding & Graphic Design',
  bestFor: 'New and growing businesses that need a recognisable visual identity.',
  includes: ['Logo & brand identity', 'Business stationery', 'Marketing materials', 'Merchandise designs']
},
{
  id: 'web-app',
  name: 'Custom Web Application',
  serviceName: 'Web Application Development',
  bestFor: 'Organisations that want to simplify operations with a tailored system.',
  includes: ['Requirements discovery', 'Interface design', 'Development & testing', 'Launch support']
},
{
  id: 'growth',
  name: 'Combined Digital Growth',
  serviceName: 'Combined Digital Growth Package',
  bestFor: 'Businesses that want website, marketing and branding handled by one team.',
  includes: ['Website or redesign', 'SEO foundation', 'Social media & ads', 'Ongoing strategy']
}];