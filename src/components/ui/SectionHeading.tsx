import React from 'react';
import { Reveal } from './Reveal';

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  id?: string;
};

export function SectionHeading({ label, title, description, tone = 'light', align = 'left', id }: SectionHeadingProps) {
  const dark = tone === 'dark';
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p
        className={`mb-4 inline-flex items-center gap-2 text-sm font-semibold ${dark ? 'text-sky' : 'text-ocean'}`}>
        
        <span className={`h-0.5 w-6 rounded-full ${dark ? 'bg-mint' : 'bg-mint-deep'}`} aria-hidden="true" />
        {label}
      </p>
      <h2
        id={id}
        className={`font-display text-3xl font-extrabold leading-[1.12] tracking-tight md:text-[44px] ${dark ? 'text-white' : 'text-ink'}`}>
        
        {title}
      </h2>
      {description &&
      <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-white/75' : 'text-muted'}`}>{description}</p>
      }
    </Reveal>);

}