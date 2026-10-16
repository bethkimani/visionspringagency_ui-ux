import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, InfoIcon, ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { BrandIcon } from '../ui/BrandIcon';
import { services } from '../../data/services';
import { serviceWhatsappLink } from '../../utils/whatsapp';
import { requestService } from '../../utils/enquiry';
import { easeOut } from '../../utils/motion';

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = services[activeIndex];
  const ActiveIcon = active.icon;

  const select = (index: number) => {
    const next = (index + services.length) % services.length;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
    tabRefs.current[next]?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      select(activeIndex + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      select(activeIndex - 1);
    }
  };

  return (
    <section id="services" aria-labelledby="services-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            id="services-title"
            label="Our Services"
            title="Everything your business needs to grow online."
            description="Choose a service to see exactly what’s included — explained in plain language, without the jargon." />
          
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-10">
          <div
            role="tablist"
            aria-label="Services"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
            
            {services.map((service, i) => {
              const Icon = service.icon;
              const selected = i === activeIndex;
              return (
                <button
                  key={service.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`service-tab-${service.id}`}
                  aria-selected={selected}
                  aria-controls="service-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveIndex(i)}
                  className={`flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean ${
                  selected ? 'bg-navy text-white' : 'text-ink hover:bg-mist'}`
                  }>
                  
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-150 ${
                    selected ? 'bg-mint text-navy' : 'bg-mist text-ocean'}`
                    }>
                    
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="whitespace-nowrap text-sm font-semibold">{service.name}</span>
                </button>);

            })}
          </div>

          <div className="relative min-h-[560px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                id="service-panel"
                role="tabpanel"
                aria-labelledby={`service-tab-${active.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: easeOut }}
                className="flex h-full flex-col rounded-3xl bg-mist p-6 sm:p-10">
                
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-mint">
                    <ActiveIcon className="h-7 w-7" />
                  </span>
                  <p className="text-sm font-semibold text-ocean">{active.name}</p>
                </div>

                <h3 className="mt-6 max-w-2xl font-display text-2xl font-extrabold leading-tight text-ink sm:text-[34px]">
                  {active.headline}
                </h3>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{active.description}</p>
                {active.benefit &&
                <p className="mt-4 max-w-2xl border-l-2 border-mint pl-4 text-[15px] font-medium text-ink">
                    {active.benefit}
                  </p>
                }

                <p className="mt-8 text-sm font-semibold text-ink">What’s included</p>
                <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {active.deliverables.map((item, i) =>
                  <motion.li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-ink"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, ease: easeOut, delay: 0.05 + i * 0.03 }}>
                    
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint/20 text-mint-deep">
                        <CheckIcon className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {item}
                    </motion.li>
                  )}
                </ul>

                {active.note &&
                <p className="mt-8 flex gap-3 rounded-2xl bg-white p-4 text-sm leading-relaxed text-muted">
                    <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-ocean" />
                    {active.note}
                  </p>
                }

                <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => requestService(active.name)}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-ocean">
                    
                    {active.cta}
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </button>
                  <a
                    href={serviceWhatsappLink(active.whatsappTopic)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-150 hover:border-mint-deep hover:text-mint-deep">
                    
                    <BrandIcon name="whatsapp" className="h-4 w-4" />
                    Ask on WhatsApp
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}