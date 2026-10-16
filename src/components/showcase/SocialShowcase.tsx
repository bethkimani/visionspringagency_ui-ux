import React from 'react';
import { TargetIcon, CalendarDaysIcon, ImageIcon, WalletIcon, ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { BrandIcon } from '../ui/BrandIcon';
import { ShowcaseTile } from './ShowcaseTile';
import { showcaseItems } from '../../data/company';
import { serviceWhatsappLink } from '../../utils/whatsapp';
import { requestService } from '../../utils/enquiry';

const FACTORS = [
{ title: 'Your goals', description: 'Awareness, enquiries, sales or community.', icon: TargetIcon },
{ title: 'Posting frequency', description: 'From a few posts a week to daily activity.', icon: CalendarDaysIcon },
{ title: 'Content needs', description: 'Graphics, reels, captions, and campaigns.', icon: ImageIcon },
{ title: 'Your budget', description: 'Packages sized to what makes sense for you.', icon: WalletIcon }];


const rowOne = showcaseItems.slice(0, 4);
const rowTwo = showcaseItems.slice(4);

export function SocialShowcase() {
  return (
    <section id="social-media" aria-labelledby="social-title" className="overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          id="social-title"
          label="Social Media & Digital Marketing"
          title="Your Brand Deserves to Be Seen, Heard, and Remembered."
          description="A look at the kind of work included in our social media, advertising, SEO, and branding services." />
        
      </div>

      <div className="mt-14 space-y-6">
        {[rowOne, rowTwo].map((row, r) =>
        <div key={r} className="marquee relative">
            <div className={`marquee-track flex w-max ${r === 1 ? 'reverse' : ''}`}>
              {[...row, ...row, ...row, ...row].map((item, i) =>
            <div key={`${item.kind}-${i}`} className="pr-6" aria-hidden={i >= row.length ? true : undefined}>
                  <ShowcaseTile item={item} />
                </div>
            )}
            </div>
          </div>
        )}
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="mt-6 text-xs text-muted">
          Previews are illustrative concepts showing the type of work included — not live client accounts or results.
        </p>

        <Reveal className="mt-16 grid gap-10 rounded-3xl bg-mist p-8 md:p-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <h3 className="font-display text-2xl font-extrabold leading-tight text-ink md:text-3xl">
              Social media packages, tailored to your business.
            </h3>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              There’s no one-size-fits-all plan. We shape each package around what you want to achieve and how much
              support you need — then agree the deliverables before we start.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <button
                type="button"
                onClick={() => requestService('Social Media Management')}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-ocean">
                
                Get a Social Media Management Quote
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </button>
              <a
                href={serviceWhatsappLink('social media management')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-150 hover:border-mint-deep hover:text-mint-deep">
                
                <BrandIcon name="whatsapp" className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <ul className="grid gap-x-8 sm:grid-cols-2">
            {FACTORS.map((f) => {
              const Icon = f.icon;
              return (
                <li key={f.title} className="flex gap-4 border-t border-line py-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-ocean">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-ink">{f.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{f.description}</p>
                  </div>
                </li>);

            })}
          </ul>
        </Reveal>
      </div>
    </section>);

}