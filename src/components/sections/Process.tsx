import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { processSteps } from '../../data/company';
import { easeOut } from '../../utils/motion';

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          id="process-title"
          label="Our Process"
          title="From first conversation to launch, in four clear steps."
          align="center" />
        

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <span aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 bg-line md:block" />
          <motion.span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 origin-left bg-mint md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }} />
          

          {processSteps.map((step, i) =>
          <motion.li
            key={step.title}
            className="relative flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.3, ease: easeOut, delay: 0.1 + i * 0.12 }}>
            
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy font-display text-lg font-extrabold text-white ring-8 ring-white">
                {i + 1}
              </span>
              <div className="md:mt-6">
                <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 max-w-[260px] text-[15px] leading-relaxed text-muted md:mx-auto">{step.description}</p>
              </div>
            </motion.li>
          )}
        </ol>

        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-semibold text-white transition-colors duration-150 hover:bg-ocean">
            
            Start Your Project Today
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>);

}