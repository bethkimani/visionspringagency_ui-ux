import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { blogPosts } from '../../data/blog';
import { easeOut } from '../../utils/motion';

export function Blog() {
  const scrollerRef = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('li');
    const step = card ? card.getBoundingClientRect().width + 24 : 360;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section id="blog" aria-labelledby="blog-title" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="blog-title"
            label="Blog & Business Insights"
            title="Practical advice for growing your business online." />
          
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous articles"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 bg-white text-ink transition-colors duration-150 hover:bg-navy hover:text-white">
              
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next articles"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 bg-white text-ink transition-colors duration-150 hover:bg-navy hover:text-white">
              
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={scrollerRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-4 md:px-8 xl:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        
        {blogPosts.map((post, i) =>
        <motion.li
          key={post.id}
          className="w-[300px] shrink-0 snap-start sm:w-[360px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.3, ease: easeOut, delay: Math.min(i, 3) * 0.05 }}>
          
            <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card">
              <img src={post.image} alt="" className="aspect-[3/2] w-full object-cover" loading="lazy" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-ocean">{post.category}</span>
                  <span className="rounded-full bg-mist px-2.5 py-1 text-[11px] font-medium text-muted">Demo article</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink">{post.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{post.excerpt}</p>
                <p className="mt-auto pt-5 text-sm font-semibold text-muted">Full article publishing soon</p>
              </div>
            </article>
          </motion.li>
        )}
      </ul>

      <div className="mx-auto mt-8 max-w-7xl px-4 md:px-8">
        <button
          type="button"
          onClick={() => scroll(1)}
          className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-ocean">
          
          Explore Our Insights
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>);

}