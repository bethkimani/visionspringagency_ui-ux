import React, { useEffect, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { site } from '../data/site';
import { easeOut } from '../utils/motion';

type IntroSplashProps = {
  onDone: () => void;
};

const SPARK_COLORS = ['#00B2EC', '#00C389', '#0A6EBD', '#0B8457'];
const SPARK_COUNT = 32;

export function IntroSplash({ onDone }: IntroSplashProps) {
  const reduceMotion = useReducedMotion();

  const sparks = useMemo(
    () =>
    Array.from({ length: SPARK_COUNT }, (_, i) => {
      const angle = i / SPARK_COUNT * Math.PI * 2 + i % 3 * 0.08;
      const distance = 170 + i * 53 % 130;
      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance * 0.72,
        rotate: angle * 180 / Math.PI,
        color: SPARK_COLORS[i % SPARK_COLORS.length],
        streak: i % 3 === 0,
        size: 4 + i % 3 * 2,
        delay: 0.45 + i % 6 * 0.035
      };
    }),
    []
  );

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(onDone, reduceMotion ? 700 : 2700);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previous;
    };
  }, [onDone, reduceMotion]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.3, ease: easeOut }}
      onClick={onDone}
      role="status"
      aria-label="Loading VisionSpring Agency">
      
      <div className="relative flex items-center justify-center">
        {!reduceMotion &&
        sparks.map((s, i) =>
        <motion.span
          key={i}
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: s.streak ? 18 : s.size,
            height: s.streak ? 3 : s.size,
            marginLeft: s.streak ? -9 : -s.size / 2,
            marginTop: s.streak ? -1.5 : -s.size / 2,
            backgroundColor: s.color,
            rotate: s.streak ? s.rotate : 0
          }}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.6 }}
          animate={{ x: s.x, y: s.y, opacity: [0, 1, 0], scale: [0.6, 1, 0.3] }}
          transition={{ duration: 1.2, delay: s.delay, ease: easeOut }} />

        )}

        {!reduceMotion &&
        <>
            <motion.span
            aria-hidden="true"
            className="absolute h-56 w-56 rounded-full border-2 border-sky"
            initial={{ scale: 0.5, opacity: 0.7 }}
            animate={{ scale: 2.1, opacity: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: easeOut }} />
          
            <motion.span
            aria-hidden="true"
            className="absolute h-56 w-56 rounded-full border-2 border-mint"
            initial={{ scale: 0.5, opacity: 0.7 }}
            animate={{ scale: 1.7, opacity: 0 }}
            transition={{ duration: 1.1, delay: 0.55, ease: easeOut }} />
          
          </>
        }

        <motion.img
          src={site.logo}
          alt="VisionSpring Agency"
          className="relative w-[300px] md:w-[420px]"
          initial={{ opacity: 0, scale: 0.94, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: easeOut }} />
        
      </div>

      <div className="absolute bottom-12 left-1/2 h-1 w-40 -translate-x-1/2 overflow-hidden rounded-full bg-line">
        <motion.div
          className="h-full origin-left rounded-full bg-mint"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: reduceMotion ? 0.6 : 2.5, ease: 'linear' }} />
        
      </div>
    </motion.div>);

}