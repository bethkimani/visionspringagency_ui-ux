import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { BrandIcon } from '../ui/BrandIcon';
import { benefits } from '../../data/company';
import { generalWhatsappLink } from '../../utils/whatsapp';
import { easeOut } from '../../utils/motion';

export function WhyChoose() {
  return (
    <section aria-labelledby="why-title" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="why-title"
            label="Why VisionSpring"
            title="A Digital Partner Focused on Your Business Goals."
            description="Whether you need a simple business website, a custom application, social media management, or a complete digital marketing strategy — you can come to us." />
          
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-ocean">
              
              Talk to Us
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>
            <a
              href={generalWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-150 hover:border-mint-deep hover:text-mint-deep">
              
              <BrandIcon name="whatsapp" className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <ul className="grid gap-x-10 sm:grid-cols-2">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.li
                key={b.title}
                className="border-t border-navy/10 py-7"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.3, ease: easeOut, delay: i % 2 * 0.06 }}>
                
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${i % 2 ? 'bg-mint/15 text-mint-deep' : 'bg-white text-ocean'}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{b.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{b.description}</p>
              </motion.li>);

          })}
        </ul>
      </div>
    </section>);

}