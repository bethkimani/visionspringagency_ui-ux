import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { values } from '../../data/company';
import { easeOut } from '../../utils/motion';

const VALUE_TONES = ['bg-sky/15 text-ocean', 'bg-mint/15 text-mint-deep', 'bg-ocean/10 text-ocean', 'bg-mint/15 text-mint-deep'];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/e3e87ae8-7635-4ad5-8094-dcf639d553f3.jpg"
              alt="A creative and technology team collaborating on website wireframes"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy" />
            
          </div>
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-white p-5 shadow-lift sm:left-6 sm:right-auto sm:max-w-[320px]">
            <p className="font-display text-base font-bold text-ink">Technology · Creativity · Strategy</p>
            <div className="mt-3 flex h-1.5 overflow-hidden rounded-full">
              <span className="flex-1 bg-navy" />
              <span className="flex-1 bg-sky" />
              <span className="flex-1 bg-mint" />
            </div>
            <p className="mt-3 text-sm text-muted">Practical digital solutions, tailored to your goals.</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            id="about-title"
            label="About VisionSpring"
            title="We Turn Business Ideas Into Digital Experiences."
            description="VisionSpring Agency is a digital marketing and technology agency helping businesses, institutions, startups, and entrepreneurs establish their online presence and connect with their audiences. We combine technology, creativity, and digital strategy to deliver practical solutions tailored to our clients’ goals." />
          

          <ul className="mt-12 grid gap-x-10 sm:grid-cols-2">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.li
                  key={value.title}
                  className="flex gap-4 border-t border-line py-6"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.3, ease: easeOut, delay: i * 0.05 }}>
                  
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${VALUE_TONES[i]}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{value.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">{value.description}</p>
                  </div>
                </motion.li>);

            })}
          </ul>
        </div>
      </div>
    </section>);

}