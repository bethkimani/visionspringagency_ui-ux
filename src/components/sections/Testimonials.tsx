import React from 'react';
import { QuoteIcon, MessageSquareQuoteIcon, BuildingIcon, FileTextIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { BrandIcon } from '../ui/BrandIcon';
import { whatsappLink } from '../../utils/whatsapp';

const SLOTS = [
{ label: 'Client feedback', icon: MessageSquareQuoteIcon },
{ label: 'Client-approved logos', icon: BuildingIcon },
{ label: 'Case studies', icon: FileTextIcon }];


const feedbackLink = whatsappLink(
  'Hello VisionSpring Agency, I worked with you and I would like to share feedback about my project.'
);

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-white py-24 lg:py-28">
      <Reveal className="mx-auto max-w-4xl px-4 text-center md:px-8">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-ocean">
          <QuoteIcon className="h-6 w-6" />
        </span>
        <h2 id="testimonials-title" className="mt-6 font-display text-3xl font-extrabold text-ink md:text-4xl">
          Client stories are on the way.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          We only publish genuine reviews and case studies, shared with our clients’ permission. They’ll appear here
          as they’re approved.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {SLOTS.map((slot) => {
            const Icon = slot.icon;
            return (
              <li
                key={slot.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-navy/20 px-4 py-8 text-sm font-medium text-muted">
                
                <Icon className="h-5 w-5 text-ocean" />
                {slot.label}
              </li>);

          })}
        </ul>

        <a
          href={feedbackLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-mint-deep transition-colors duration-150 hover:text-ink">
          
          <BrandIcon name="whatsapp" className="h-4 w-4" />
          Worked with us? Share your feedback
        </a>
      </Reveal>
    </section>);

}