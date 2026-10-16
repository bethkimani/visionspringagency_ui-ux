import React from 'react';
import { site } from '../../data/site';

type LogoProps = {
  className?: string;
};

/** Crops the whitespace around the uploaded logo so it reads clearly at small sizes. */
export function Logo({ className = 'h-[68px] w-[102px]' }: LogoProps) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <img
        src={site.logo}
        alt="VisionSpring Agency — Digital Solutions. Real Growth."
        className="h-full w-full scale-[1.22] object-cover" />
      
    </span>);

}