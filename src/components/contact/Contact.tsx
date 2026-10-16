import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';
import { Reveal } from '../ui/Reveal';
import { BrandIcon } from '../ui/BrandIcon';
import { site, socialLinks } from '../../data/site';
import { generalWhatsappLink } from '../../utils/whatsapp';

export function Contact() {
  const activeSocials = socialLinks.filter((s) => s.url);

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-24 lg:py-32">
      <Reveal className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid overflow-hidden rounded-[32px] shadow-lift lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col bg-navy p-8 text-white md:p-12">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-sky">
              <span className="h-0.5 w-6 rounded-full bg-mint" aria-hidden="true" />
              Contact Us
            </p>
            <h2 id="contact-title" className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-[40px]">
              Let’s Talk About Growing Your Business.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              Tell us what you need, and let’s explore the right digital solution for your goals.
            </p>

            <a
              href={generalWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex items-center gap-4 rounded-2xl bg-mint p-5 text-navy transition-colors duration-150 hover:bg-white">
              
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-mint">
                <BrandIcon name="whatsapp" className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm font-medium">Fastest response</span>
                <span className="block font-display text-lg font-bold">WhatsApp {site.phoneDisplay}</span>
              </span>
            </a>

            <ul className="mt-8 space-y-5">
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-4 transition-colors duration-150 hover:text-sky">
                  <MailIcon className="h-5 w-5 shrink-0 text-sky" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-4 transition-colors duration-150 hover:text-sky">
                  <PhoneIcon className="h-5 w-5 shrink-0 text-sky" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <MapPinIcon className="h-5 w-5 shrink-0 text-sky" />
                <span className={site.location ? '' : 'text-white/60'}>{site.location || 'Kenya · Serving clients locally and internationally'}</span>
              </li>
            </ul>

            <div className="mt-auto pt-10">
              {activeSocials.length > 0 ?
              <ul className="flex gap-3">
                  {activeSocials.map((s) =>
                <li key={s.platform}>
                      <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`VisionSpring Agency on ${s.label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors duration-150 hover:bg-white hover:text-navy">
                    
                        <BrandIcon name={s.platform} className="h-4 w-4" />
                      </a>
                    </li>
                )}
                </ul> :

              <p className="text-sm text-white/60">Social media profiles coming soon.</p>
              }
            </div>
          </div>

          <div className="bg-white p-8 md:p-12">
            <EnquiryForm />
          </div>
        </div>
      </Reveal>
    </section>);

}