import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './ui/Logo';
import { BrandIcon } from './ui/BrandIcon';
import { navLinks } from '../data/site';
import { generalWhatsappLink } from '../utils/whatsapp';
import { easeOut } from '../utils/motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow duration-200 ${scrolled ? 'shadow-[0_1px_0_#E1E9F1,0_8px_24px_-16px_rgba(11,36,71,0.25)]' : ''}`}>
      
      <nav aria-label="Main" className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 md:px-8">
        <a href="#top" aria-label="VisionSpring Agency — home" className="shrink-0">
          <Logo />
        </a>

        <ul className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) =>
          <li key={link.href}>
              <a
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-ink/80 transition-colors duration-150 hover:text-ocean">
              
                {link.label}
              </a>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden whitespace-nowrap rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-ocean md:inline-flex">
            
            <span className="hidden 2xl:inline">Get a&nbsp;</span>Free Consultation
          </a>
          <a
            href={generalWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Us"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-mint px-4 py-2.5 text-sm font-semibold text-navy transition-colors duration-150 hover:bg-[#00AE7A]">
            
            <BrandIcon name="whatsapp" className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp Us</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors duration-150 hover:bg-mist xl:hidden">
            
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          id="mobile-menu"
          className="border-t border-line bg-white xl:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: easeOut }}>
          
            <ul className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:grid-cols-2 md:px-8">
              {navLinks.map((link) =>
            <li key={link.href}>
                  <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors duration-150 hover:bg-mist">
                
                    {link.label}
                  </a>
                </li>
            )}
            </ul>
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 pb-5 sm:flex-row md:px-8">
              <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-white">
              
                Get a Free Consultation
              </a>
              <a
              href={generalWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-mint px-5 py-3 text-sm font-semibold text-navy">
              
                <BrandIcon name="whatsapp" className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}