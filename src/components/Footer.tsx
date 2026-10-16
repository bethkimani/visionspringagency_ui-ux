import React from 'react';
import { MailIcon, PhoneIcon, ExternalLinkIcon } from 'lucide-react';
import { Logo } from './ui/Logo';
import { BrandIcon } from './ui/BrandIcon';
import { navLinks, site, socialLinks } from '../data/site';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { generalWhatsappLink } from '../utils/whatsapp';
import { requestService } from '../utils/enquiry';

export function Footer() {
  const activeSocials = socialLinks.filter((s) => s.url);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      <div className="brand-line h-1 w-full" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.1fr_1fr]">
          <div>
            <a href="#top" aria-label="VisionSpring Agency — back to top" className="inline-block rounded-2xl bg-white px-3 py-1">
              <Logo className="h-[84px] w-[126px]" />
            </a>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">{site.description}</p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {activeSocials.map((s) =>
              <li key={s.platform}>
                  <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`VisionSpring Agency on ${s.label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors duration-150 hover:bg-white hover:text-navy">
                  
                    <BrandIcon name={s.platform} className="h-4 w-4" />
                  </a>
                </li>
              )}
              <li>
                <a
                  href={generalWhatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with VisionSpring Agency on WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-mint text-navy transition-colors duration-150 hover:bg-white">
                  
                  <BrandIcon name="whatsapp" className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Quick links">
            <h2 className="font-display text-sm font-bold">Quick links</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) =>
              <li key={l.href}>
                  <a href={l.href} className="text-[15px] text-white/70 transition-colors duration-150 hover:text-sky">
                    {l.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold">Services</h2>
            <ul className="mt-5 space-y-3">
              {services.map((s) =>
              <li key={s.id}>
                  <button
                  type="button"
                  onClick={() => requestService(s.name)}
                  className="text-left text-[15px] text-white/70 transition-colors duration-150 hover:text-sky">
                  
                    {s.name}
                  </button>
                </li>
              )}
            </ul>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="font-display text-sm font-bold">Portfolio</h2>
              <ul className="mt-5 space-y-3">
                {projects.map((p) =>
                <li key={p.id}>
                    <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[15px] text-white/70 transition-colors duration-150 hover:text-sky">
                    
                      {p.name}
                      <ExternalLinkIcon className="h-3.5 w-3.5" />
                    </a>
                  </li>
                )}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-sm font-bold">Contact</h2>
              <ul className="mt-5 space-y-3 text-[15px] text-white/70">
                <li>
                  <a href={`mailto:${site.email}`} className="flex items-center gap-2 break-all transition-colors duration-150 hover:text-sky">
                    <MailIcon className="h-4 w-4 shrink-0" />
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.phoneHref} className="flex items-center gap-2 transition-colors duration-150 hover:text-sky">
                    <PhoneIcon className="h-4 w-4 shrink-0" />
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={generalWhatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-colors duration-150 hover:text-sky">
                    
                    <BrandIcon name="whatsapp" className="h-4 w-4 shrink-0" />
                    WhatsApp us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} VisionSpring Agency. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#privacy-policy" className="transition-colors duration-150 hover:text-white">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms" className="transition-colors duration-150 hover:text-white">Terms and Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>);

}