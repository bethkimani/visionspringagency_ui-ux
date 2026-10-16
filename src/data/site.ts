import type { NavLink, SocialLink } from '../types/content';

export const site = {
  name: 'VisionSpring Agency',
  tagline: 'Digital Solutions. Real Growth.',
  email: 'visionspringagency@gmail.com',
  phoneDisplay: '0112 280 703',
  phoneHref: 'tel:+254112280703',
  whatsappNumber: '254112280703',
  /** Add the physical location once confirmed. */
  location: '',
  logo: "/WhatsApp_Image_2026-10-16_at_2.58.41_PM.jpg",
  description:
  'VisionSpring Agency helps businesses build their digital presence through website development, web applications, SEO, social media management, digital advertising, and creative branding.'
};

/** Paste the official profile URLs here. Platforms without a URL stay hidden. */
export const socialLinks: SocialLink[] = [
{ platform: 'facebook', label: 'Facebook', url: '' },
{ platform: 'instagram', label: 'Instagram', url: '' },
{ platform: 'tiktok', label: 'TikTok', url: '' },
{ platform: 'linkedin', label: 'LinkedIn', url: '' },
{ platform: 'youtube', label: 'YouTube', url: '' }];


export const navLinks: NavLink[] = [
{ label: 'Home', href: '#top' },
{ label: 'About Us', href: '#about' },
{ label: 'Services', href: '#services' },
{ label: 'Portfolio', href: '#portfolio' },
{ label: 'Social Media', href: '#social-media' },
{ label: 'Our Process', href: '#process' },
{ label: 'Blog', href: '#blog' },
{ label: 'Contact Us', href: '#contact' }];