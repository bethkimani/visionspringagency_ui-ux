import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon, HourglassIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { projects } from '../../data/projects';
import { easeOut } from '../../utils/motion';

const AUTOPLAY_MS = 6500;

export function Portfolio() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const project = projects[index];

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setIndex((next + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion || projects.length < 2) return;
    const t = window.setTimeout(() => go(index + 1, 1), AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [index, paused, reduceMotion, go]);

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="portfolio-title"
            tone="dark"
            label="Featured Portfolio"
            title="Real websites we’ve designed and launched."
            description="Explore live projects for brands in beauty, e-commerce, and renewable energy." />
          
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(index - 1, -1)}
              aria-label="Previous project"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-150 hover:bg-white hover:text-navy">
              
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1, 1)}
              aria-label="Next project"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-150 hover:bg-white hover:text-navy">
              
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className="mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Portfolio projects">
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={project.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -32 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="grid items-center gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${projects.length}: ${project.name}`}>
              
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-3xl bg-navy-soft"
                aria-label={`Visit ${project.name} live website`}>
                
                <img
                  src={project.image}
                  alt={`${project.name} website shown on laptop and mobile`}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
                
              </a>
              <div>
                <p className="text-sm font-semibold text-sky">{project.category}</p>
                <h3 className="mt-3 font-display text-3xl font-extrabold text-white md:text-4xl">{project.name}</h3>
                <p className="mt-4 text-lg leading-relaxed text-white/75">{project.description}</p>
                <p className="mt-6 text-sm text-white/60">{project.domain}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3.5 text-sm font-semibold text-navy transition-colors duration-150 hover:bg-white">
                  
                  View Live Project
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-8 flex gap-2" role="tablist" aria-label="Choose project">
            {projects.map((p, i) =>
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${p.name}`}
              onClick={() => go(i, i > index ? 1 : -1)}
              className="relative h-1.5 w-12 overflow-hidden rounded-full bg-white/20">
              
                {i === index &&
              <motion.span
                key={`${p.id}-${paused}`}
                className="absolute inset-0 origin-left rounded-full bg-mint"
                initial={{ scaleX: paused || reduceMotion ? 1 : 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: paused || reduceMotion ? 0 : AUTOPLAY_MS / 1000, ease: 'linear' }} />

              }
              </button>
            )}
          </div>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) =>
          <li key={p.id}>
              <button
              type="button"
              onClick={() => go(i, i > index ? 1 : -1)}
              className={`flex w-full items-center gap-4 rounded-2xl p-3 text-left transition-colors duration-150 ${
              i === index ? 'bg-white/10 ring-1 ring-mint' : 'bg-white/5 hover:bg-white/10'}`
              }>
              
                <img src={p.image} alt="" className="h-14 w-20 shrink-0 rounded-lg object-cover" loading="lazy" />
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-white">{p.name}</span>
                  <span className="block truncate text-xs text-white/60">{p.category}</span>
                </span>
              </button>
            </li>
          )}
          <li className="flex items-center gap-4 rounded-2xl border border-dashed border-white/25 p-3">
            <span className="flex h-14 w-20 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sky">
              <HourglassIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-white">More projects</span>
              <span className="block text-xs text-white/60">Launching soon</span>
            </span>
          </li>
        </ul>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-3xl bg-white p-8 md:flex-row md:items-center md:p-10">
          <p className="font-display text-2xl font-extrabold text-ink md:text-3xl">
            Have a Project in Mind? Let’s Build It Together.
          </p>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-semibold text-white transition-colors duration-150 hover:bg-ocean">
            
            Start Your Project
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>);

}