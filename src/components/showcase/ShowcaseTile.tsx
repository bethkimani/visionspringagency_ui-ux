import React from 'react';
import {
  HeartIcon,
  MessageCircleIcon,
  SendIcon,
  BookmarkIcon,
  ShoppingBagIcon,
  TrendingUpIcon,
  StoreIcon,
  SearchIcon } from
'lucide-react';
import type { ShowcaseItem } from '../../types/content';

type ShowcaseTileProps = {
  item: ShowcaseItem;
};

const CALENDAR_POSTS: Record<number, string> = {
  1: 'bg-sky',
  3: 'bg-mint',
  5: 'bg-ocean',
  8: 'bg-mint',
  10: 'bg-sky',
  12: 'bg-ocean',
  15: 'bg-mint',
  17: 'bg-sky',
  19: 'bg-ocean',
  22: 'bg-mint',
  24: 'bg-sky',
  26: 'bg-ocean',
  29: 'bg-mint'
};

const KEYWORDS = [
{ term: 'plumber near me', width: '82%' },
{ term: 'best salon nairobi', width: '64%' },
{ term: 'solar installers kenya', width: '71%' },
{ term: 'school website design', width: '48%' }];


export function ShowcaseTile({ item }: ShowcaseTileProps) {
  return (
    <figure className="w-[270px] shrink-0">
      <div className="h-[320px] overflow-hidden rounded-3xl border border-line bg-white shadow-card">
        {item.kind === 'instagram' &&
        <div className="flex h-full flex-col p-3">
            <div className="flex items-center gap-2 px-1 pb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-[9px] font-bold text-white">YB</span>
              <span className="text-xs font-semibold text-ink">yourbrand</span>
              <span className="ml-auto text-xs text-muted">Sponsored</span>
            </div>
            <div className="flex flex-1 flex-col justify-between rounded-2xl bg-navy p-5">
              <span className="h-1 w-10 rounded-full bg-mint" />
              <div>
                <p className="font-display text-2xl font-extrabold leading-tight text-white">New season. New look.</p>
                <span className="mt-3 inline-block rounded-full bg-mint px-3 py-1 text-[11px] font-semibold text-navy">Shop now</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-1 pt-3 text-ink">
              <HeartIcon className="h-4 w-4" />
              <MessageCircleIcon className="h-4 w-4" />
              <SendIcon className="h-4 w-4" />
              <BookmarkIcon className="ml-auto h-4 w-4" />
            </div>
          </div>
        }

        {item.kind === 'facebook' &&
        <div className="flex h-full flex-col">
            <div className="h-24 bg-ocean" />
            <div className="-mt-8 px-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-navy font-display text-sm font-bold text-white">YB</span>
              <p className="mt-2 font-display text-base font-bold text-ink">Your Business</p>
              <p className="text-xs text-muted">Local business · Open now</p>
              <div className="mt-3 flex gap-2">
                <span className="flex-1 rounded-lg bg-ocean py-1.5 text-center text-xs font-semibold text-white">Message</span>
                <span className="flex-1 rounded-lg bg-mist py-1.5 text-center text-xs font-semibold text-ink">Follow</span>
              </div>
            </div>
            <div className="mt-4 flex-1 border-t border-line px-4 pt-3">
              <span className="block h-2 w-4/5 rounded-full bg-line" />
              <span className="mt-2 block h-2 w-3/5 rounded-full bg-line" />
              <div className="mt-3 h-16 rounded-xl bg-sky/15" />
            </div>
          </div>
        }

        {item.kind === 'calendar' &&
        <div className="flex h-full flex-col p-5">
            <p className="font-display text-sm font-bold text-ink">Content calendar</p>
            <p className="text-xs text-muted">Monthly plan</p>
            <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[9px] font-semibold text-muted">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) =>
            <span key={i}>{d}</span>
            )}
            </div>
            <div className="mt-1 grid flex-1 grid-cols-7 gap-1">
              {Array.from({ length: 35 }, (_, i) =>
            <span key={i} className="flex flex-col justify-end rounded-md bg-mist p-1">
                  {CALENDAR_POSTS[i] && <span className={`h-1.5 rounded-full ${CALENDAR_POSTS[i]}`} />}
                </span>
            )}
            </div>
            <div className="mt-3 flex gap-3 text-[10px] text-muted">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-sky" />Post</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-mint" />Reel</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-ocean" />Story</span>
            </div>
          </div>
        }

        {item.kind === 'promo' &&
        <div className="flex h-full flex-col justify-between bg-mint p-6">
            <ShoppingBagIcon className="h-10 w-10 text-navy" />
            <div>
              <p className="text-xs font-semibold text-navy/80">This weekend only</p>
              <p className="mt-1 font-display text-3xl font-extrabold leading-tight text-navy">New arrivals in store.</p>
              <span className="mt-4 inline-block rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white">Visit us today</span>
            </div>
          </div>
        }

        {item.kind === 'google-ad' &&
        <div className="flex h-full flex-col p-5">
            <div className="flex items-center gap-2 rounded-full border border-line px-3 py-2">
              <SearchIcon className="h-3.5 w-3.5 text-muted" />
              <span className="text-xs text-ink">plumber in nairobi</span>
            </div>
            <div className="mt-5">
              <p className="text-[11px] font-bold text-ink">Sponsored</p>
              <p className="text-[11px] text-ink">www.yourbusiness.co.ke</p>
              <p className="mt-1 text-[15px] font-medium leading-snug text-[#1A0DAB]">
                Reliable Plumbing Services in Nairobi | Book a Visit Today
              </p>
              <p className="mt-1.5 text-[11px] leading-relaxed text-muted">
                Licensed team, transparent quotes. Call or WhatsApp to schedule.
              </p>
              <div className="mt-2 flex gap-3 text-[11px] text-[#1A0DAB]">
                <span>Services</span><span>Contact</span><span>Reviews</span>
              </div>
            </div>
            <div className="mt-auto space-y-2 border-t border-line pt-4">
              <span className="block h-2 w-2/3 rounded-full bg-line" />
              <span className="block h-2 w-5/6 rounded-full bg-line" />
            </div>
          </div>
        }

        {item.kind === 'seo' &&
        <div className="flex h-full flex-col p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-sm font-bold text-ink">Keyword tracking</p>
                <p className="text-xs text-muted">Monthly report</p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-mint/15 text-mint-deep">
                <TrendingUpIcon className="h-4 w-4" />
              </span>
            </div>
            <ul className="mt-5 space-y-4">
              {KEYWORDS.map((k) =>
            <li key={k.term}>
                  <p className="text-xs font-medium text-ink">{k.term}</p>
                  <div className="mt-1.5 h-2 rounded-full bg-mist">
                    <span className="block h-full rounded-full bg-ocean" style={{ width: k.width }} />
                  </div>
                </li>
            )}
            </ul>
            <div className="mt-auto flex h-12 items-end gap-1">
              {[30, 42, 38, 55, 50, 68, 74, 88].map((h, i) =>
            <span key={i} className="flex-1 rounded-t bg-sky/60" style={{ height: `${h}%` }} />
            )}
            </div>
          </div>
        }

        {item.kind === 'brand' &&
        <div className="flex h-full flex-col p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy font-display text-lg font-extrabold text-mint">YB</span>
              <div>
                <p className="font-display text-sm font-bold text-ink">Your Brand</p>
                <p className="text-xs text-muted">Identity guidelines</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-4 gap-2">
              {['bg-navy', 'bg-ocean', 'bg-sky', 'bg-mint'].map((c) =>
            <span key={c} className={`aspect-square rounded-lg ${c}`} />
            )}
            </div>
            <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
              <p className="font-display text-5xl font-extrabold text-ink">Aa</p>
              <p className="text-right text-xs text-muted">Montserrat<br />Inter</p>
            </div>
            <div className="mt-auto rounded-xl bg-navy p-3">
              <span className="block h-1.5 w-16 rounded-full bg-mint" />
              <span className="mt-2 block h-1.5 w-24 rounded-full bg-white/40" />
            </div>
          </div>
        }

        {item.kind === 'ecommerce' &&
        <div className="flex h-full flex-col p-4">
            <div className="flex items-center gap-2 rounded-xl bg-navy px-3 py-2 text-[11px] font-semibold text-white">
              <StoreIcon className="h-3.5 w-3.5 text-mint" />
              Now available online
            </div>
            <div className="mt-3 flex flex-1 items-center justify-center rounded-2xl bg-mist">
              <ShoppingBagIcon className="h-14 w-14 text-ocean" />
            </div>
            <p className="mt-3 font-display text-sm font-bold text-ink">Signature Collection</p>
            <p className="text-xs text-muted">Order today, delivered to your door</p>
            <span className="mt-3 rounded-full bg-mint py-2 text-center text-xs font-semibold text-navy">Add to cart</span>
          </div>
        }
      </div>
      <figcaption className="mt-3 px-1 text-sm font-medium text-muted">{item.label}</figcaption>
    </figure>);

}