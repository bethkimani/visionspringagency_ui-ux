import { site } from '../data/site';

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function serviceWhatsappLink(topic: string): string {
  return whatsappLink(
    `Hello VisionSpring Agency, I am interested in your ${topic} services. Please share more information.`
  );
}

export const generalWhatsappLink = whatsappLink(
  'Hello VisionSpring Agency, I would like to discuss a project with you.'
);