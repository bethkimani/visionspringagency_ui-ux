import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { HeroVisual } from './HeroVisual';
import { BrandIcon } from '../ui/BrandIcon';
import { generalWhatsappLink } from '../../utils/whatsapp';
import { easeOut } from '../../utils/motion';

type HeroProps = {
  ready: boolean;
};

const SERVICE_TAGS = ['Websites', 'Web Apps', 'SEO', 'Social Media', 'Google Ads', 'Meta Ads', 'Branding', 'Mobile Apps'];

export function Hero({ ready }: HeroProps) {
  const item = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.3, ease: easeOut, delay }
  });

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: 'radial-gradient(rgba(11,36,71,0.09) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent)'
        }} />
      

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-12 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-20">
        <div>
          <motion.p {...item(0)} className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-ocean">
            <span className="h-2 w-2 rounded-full bg-mint" aria-hidden="true" />
            Digital Solutions Designed Around Your Business Goals.
          </motion.p>

          <motion.h1
            {...item(0.06)}
            id="hero-title"
            className="font-display text-[40px] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl xl:text-[64px]">
            
            Your Vision.
            <br />
            Our Digital Expertise.
            <br />
            <span className="bg-gradient-to-r from-ocean via-[#0791B5] to-mint-deep bg-clip-text text-transparent">
              Your Business Growth.
            </span>
          </motion.h1>

          <motion.p {...item(0.12)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            From professional websites and powerful web applications to SEO, social media management, digital
            advertising, and creative branding, we help businesses build a strong online presence, reach more
            customers, and grow with confidence.
          </motion.p>

          <motion.div {...item(0.18)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-base font-semibold text-white transition-colors duration-150 hover:bg-ocean">
              
              Get a Free Consultation
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-navy/20 px-7 py-4 text-base font-semibold text-ink transition-colors duration-150 hover:border-navy hover:bg-mist">
              
              Explore Our Services
            </a>
          </motion.div>

          <motion.a
            {...item(0.22)}
            href={generalWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-mint-deep transition-colors duration-150 hover:text-ink">
            
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mint/15">
              <BrandIcon name="whatsapp" className="h-4 w-4" />
            </span>
            Chat With Us on WhatsApp
          </motion.a>

          <motion.ul {...item(0.28)} className="mt-10 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-6" aria-label="Our services">
            {SERVICE_TAGS.map((tag) =>
            <li key={tag} className="text-sm font-medium text-muted">
                {tag}
              </li>
            )}
          </motion.ul>
        </div>

        <HeroVisual ready={ready} />
      </div>

      <div className="brand-line h-1 w-full" aria-hidden="true" />
    </section>);

}