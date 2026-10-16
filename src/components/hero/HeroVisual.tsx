import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, MessageCircleIcon, SendIcon, SearchIcon, TrendingUpIcon, ArrowUpRightIcon } from 'lucide-react';
import { easeOut } from '../../utils/motion';

type HeroVisualProps = {
  ready: boolean;
};

const BARS = [38, 52, 44, 66, 58, 78, 72, 92];

function float(delay: number) {
  return {
    animate: { y: [0, -8, 0] },
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const, delay }
  };
}

export function HeroVisual({ ready }: HeroVisualProps) {
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 20, scale: 0.97 },
    animate: ready ? { opacity: 1, y: 0, scale: 1 } : {},
    transition: { duration: 0.3, ease: easeOut, delay }
  });

  return (
    <div className="relative mx-auto h-[400px] w-full max-w-[600px] sm:h-[480px] lg:h-[520px]" aria-hidden="true">
      {/* Website preview */}
      <motion.div {...enter(0.15)} className="absolute left-0 top-8 w-[84%]">
        <motion.div {...float(0)} className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
          <div className="flex items-center gap-2 border-b border-line bg-mist px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-3 rounded-full bg-white px-3 py-1 text-[11px] text-muted">yourbusiness.com</span>
          </div>
          <div className="bg-navy px-6 pb-8 pt-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="h-2 w-16 rounded-full bg-white/80" />
              <div className="flex gap-3">
                <span className="h-1.5 w-8 rounded-full bg-white/30" />
                <span className="h-1.5 w-8 rounded-full bg-white/30" />
                <span className="h-1.5 w-8 rounded-full bg-white/30" />
              </div>
            </div>
            <p className="font-display text-xl font-bold leading-tight text-white sm:text-2xl">
              Grow online with
              <br />
              confidence.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-mint px-4 py-1.5 text-[11px] font-semibold text-navy">Get started</span>
              <span className="rounded-full border border-white/30 px-4 py-1.5 text-[11px] font-semibold text-white">
                Our services
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 p-5">
            {['bg-sky/15', 'bg-mint/15', 'bg-ocean/10'].map((c) =>
            <div key={c} className="space-y-2">
                <div className={`h-14 rounded-lg ${c}`} />
                <span className="block h-1.5 w-4/5 rounded-full bg-line" />
                <span className="block h-1.5 w-3/5 rounded-full bg-line" />
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Social post on phone */}
      <motion.div {...enter(0.3)} className="absolute right-0 top-0 w-[128px] sm:w-[160px]">
        <motion.div {...float(1.2)} className="rounded-[28px] border-[5px] border-navy bg-white p-2 shadow-lift">
          <div className="mb-2 flex items-center gap-1.5 px-1">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy text-[7px] font-bold text-white">
              YB
            </span>
            <span className="text-[9px] font-semibold text-ink">yourbrand</span>
          </div>
          <div className="flex aspect-square flex-col justify-between rounded-xl bg-ocean p-3">
            <ArrowUpRightIcon className="h-5 w-5 text-mint" />
            <p className="font-display text-[11px] font-bold leading-tight text-white sm:text-[13px]">
              Your brand, seen every day.
            </p>
          </div>
          <div className="mt-2 flex items-center gap-2 px-1 pb-1 text-ink">
            <HeartIcon className="h-3.5 w-3.5 fill-[#E0245E] text-[#E0245E]" />
            <MessageCircleIcon className="h-3.5 w-3.5" />
            <SendIcon className="h-3.5 w-3.5" />
          </div>
        </motion.div>
      </motion.div>

      {/* Campaign dashboard */}
      <motion.div {...enter(0.45)} className="absolute bottom-6 right-0 w-[60%] sm:bottom-10">
        <motion.div {...float(0.6)} className="rounded-2xl border border-line bg-white p-4 shadow-lift sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-medium text-muted">Campaign overview</p>
              <p className="font-display text-sm font-bold text-ink">Reach & engagement</p>
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-mint/15 text-mint-deep">
              <TrendingUpIcon className="h-4 w-4" />
            </span>
          </div>
          <div className="flex h-24 items-end gap-1.5 sm:h-28">
            {BARS.map((h, i) =>
            <motion.span
              key={i}
              className={`flex-1 origin-bottom rounded-t-md ${i === BARS.length - 1 ? 'bg-mint' : i % 2 ? 'bg-ocean' : 'bg-sky'}`}
              style={{ height: `${h}%` }}
              initial={{ scaleY: 0 }}
              animate={ready ? { scaleY: 1 } : {}}
              transition={{ duration: 0.3, ease: easeOut, delay: 0.7 + i * 0.05 }} />

            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Search chip */}
      <motion.div {...enter(0.6)} className="absolute bottom-0 left-2 sm:left-6">
        <motion.div
          {...float(1.8)}
          className="flex items-center gap-3 rounded-full border border-line bg-white py-2.5 pl-4 pr-2.5 shadow-card">
          
          <SearchIcon className="h-4 w-4 text-ocean" />
          <span className="text-xs font-medium text-ink sm:text-sm">web design agency in Kenya</span>
          <span className="rounded-full bg-navy px-2.5 py-1 text-[10px] font-semibold text-white">Found you</span>
        </motion.div>
      </motion.div>
    </div>);

}