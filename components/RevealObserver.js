'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      root.classList.add('ready');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    root.classList.add('ready');
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
