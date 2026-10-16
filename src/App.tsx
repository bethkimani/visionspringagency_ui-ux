import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { IntroSplash } from './components/IntroSplash';
import { Navbar } from './components/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { SocialShowcase } from './components/showcase/SocialShowcase';
import { WhyChoose } from './components/sections/WhyChoose';
import { Process } from './components/sections/Process';
import { Packages } from './components/sections/Packages';
import { Testimonials } from './components/sections/Testimonials';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

type AppProps = {
  showIntro?: boolean;
  showTestimonials?: boolean;
};

export function App({ showIntro = true, showTestimonials = true }: AppProps) {
  const [introDone, setIntroDone] = useState(!showIntro);
  const finishIntro = useCallback(() => setIntroDone(true), []);

  useEffect(() => {
    document.title = 'VisionSpring Agency | Websites, SEO, Social Media & Digital Marketing in Kenya';
    const meta =
    document.querySelector<HTMLMetaElement>('meta[name="description"]') ??
    Object.assign(document.createElement('meta'), { name: 'description' });
    meta.content =
    'VisionSpring Agency helps businesses build their digital presence through website development, web applications, SEO, social media management, digital advertising, and creative branding.';
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{!introDone && <IntroSplash key="intro" onDone={finishIntro} />}</AnimatePresence>
      <div className="min-h-screen w-full bg-white font-sans text-ink">
        <Navbar />
        <main>
          <Hero ready={introDone} />
          <About />
          <Services />
          <Portfolio />
          <SocialShowcase />
          <WhyChoose />
          <Process />
          <Packages />
          {showTestimonials && <Testimonials />}
          <Blog />
          <Contact />
        </main>
        <Footer />
        {introDone && <WhatsAppFloat />}
      </div>
    </MotionConfig>);

}