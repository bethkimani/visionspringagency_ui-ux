import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, InfoIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { packages } from '../../data/packages';
import { requestService } from '../../utils/enquiry';
import { easeOut } from '../../utils/motion';

export function Packages() {
  return (
    <section id="packages" aria-labelledby="packages-title" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          id="packages-title"
          label="Packages & Pricing"
          title="Find the right package, then get a clear quote."
          description="Compare what each package typically covers. Timelines and pricing are confirmed in your tailored proposal." />
        

        <div className="mt-14 overflow-hidden rounded-3xl bg-white shadow-card">
          <div
            className="hidden grid-cols-[1.4fr_1.8fr_0.9fr_0.9fr_auto] gap-6 border-b border-line bg-navy px-8 py-4 text-xs font-semibold text-white/80 lg:grid"
            aria-hidden="true">
            
            <span>Package</span>
            <span>Typically includes</span>
            <span>Timeline</span>
            <span>Investment</span>
            <span className="w-[150px]" />
          </div>

          <ul>
            {packages.map((pkg, i) =>
            <motion.li
              key={pkg.id}
              className="grid gap-4 border-b border-line px-6 py-7 last:border-b-0 sm:px-8 lg:grid-cols-[1.4fr_1.8fr_0.9fr_0.9fr_auto] lg:items-center lg:gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, ease: easeOut, delay: i * 0.04 }}>
              
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{pkg.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{pkg.bestFor}</p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {pkg.includes.map((inc) =>
                <li key={inc} className="rounded-full bg-mist px-3 py-1.5 text-xs font-medium text-ink">
                      {inc}
                    </li>
                )}
                </ul>
                <div className="flex gap-6 text-sm lg:contents">
                  <p>
                    <span className="block text-xs text-muted lg:hidden">Timeline</span>
                    <span className="font-medium text-ink">Set in proposal</span>
                  </p>
                  <p>
                    <span className="block text-xs text-muted lg:hidden">Investment</span>
                    <span className="font-medium text-ink">Quote on request</span>
                  </p>
                </div>
                <button
                type="button"
                onClick={() => requestService(pkg.serviceName)}
                className="group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-ink transition-colors duration-150 hover:border-navy hover:bg-navy hover:text-white sm:w-auto lg:w-[150px]">
                
                  Request a Quote
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                </button>
              </motion.li>
            )}
          </ul>
        </div>

        <p className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-muted">
          <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-ocean" />
          Final quotations depend on your project requirements, scope, and agreed deliverables. Advertising spend on
          Google and Meta is paid separately from our management fees.
        </p>
      </div>
    </section>);

}