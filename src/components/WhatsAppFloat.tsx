import React from 'react';
import { motion } from 'framer-motion';
import { BrandIcon } from './ui/BrandIcon';
import { generalWhatsappLink } from '../utils/whatsapp';
import { easeOut } from '../utils/motion';

export function WhatsAppFloat() {
  return (
    <motion.a
      href={generalWhatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with VisionSpring Agency on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 md:bottom-7 md:right-7"
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, ease: easeOut, delay: 0.6 }}>
      
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lift transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Chat with VisionSpring Agency
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mint text-navy shadow-lift transition-transform duration-150 group-hover:scale-105 group-active:scale-95">
        <BrandIcon name="whatsapp" className="h-7 w-7" />
      </span>
    </motion.a>);

}