'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';

const navKeys = [
  { labelKey: 'nav.home' as const, href: '#home' },
  { labelKey: 'nav.vision' as const, href: '#vision' },
  { labelKey: 'nav.gallery' as const, href: '#gallery' },
  { labelKey: 'nav.amenities' as const, href: '#amenities' },
  { labelKey: 'nav.staff' as const, href: '#staff' },
  { labelKey: 'nav.principal' as const, href: '#principal' },
  { labelKey: 'nav.contact' as const, href: '#contact' },
];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Start on dark (hero)
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Detect which section is visible to set text color
  useEffect(() => {
    const darkSections = ['home']; // Sections with dark backgrounds
    const allSectionIds = ['home', 'vision', 'gallery', 'amenities', 'staff', 'principal', 'contact'];

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          const id = entry.target.id;
          setIsDark(darkSections.includes(id));
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: '-40% 0px -55% 0px',
      threshold: [0.1, 0.3, 0.5],
    });

    const timer = setTimeout(() => {
      allSectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observerRef.current?.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Always-visible pill: dark translucent on hero, frosted cream on light bg
  const textColor   = isDark ? '#fff'                      : 'var(--color-dark)';
  const mutedColor  = isDark ? 'rgba(255,255,255,0.5)'     : 'rgba(100,90,80,0.6)';
  const pillBg      = isDark ? 'rgba(10,10,10,0.45)'       : 'rgba(253,250,246,0.95)';
  const pillBorder  = isDark ? 'rgba(255,255,255,0.15)'    : 'rgba(200,185,170,0.7)';
  const dividerCol  = isDark ? 'rgba(255,255,255,0.18)'    : 'rgba(200,185,170,0.8)';

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ pointerEvents: 'none' }}
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="mx-auto flex items-center justify-between px-6 md:px-10"
          style={{ maxWidth: '1400px', height: '72px', pointerEvents: 'auto' }}
        >
          {/* Left spacer */}
          <div />

          {/* Right controls — always-visible pill */}
          <div
            className="flex items-center gap-1 px-3 py-1.5 transition-all duration-300"
            style={{
              backgroundColor: pillBg,
              border: `1px solid ${pillBorder}`,
              borderRadius: '999px',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            {/* Language Toggle */}
            <div
              className="flex items-center gap-0.5 pr-3"
              role="group"
              aria-label="Language selector"
              style={{ borderRight: `1px solid ${dividerCol}` }}
            >
              {(['en', 'hi'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-2 py-0.5 text-xs font-semibold tracking-wide transition-all duration-200"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: lang === l ? textColor : mutedColor,
                    borderBottom: lang === l ? `2px solid var(--color-terracotta)` : '2px solid transparent',
                  }}
                  aria-pressed={lang === l}
                  aria-label={l === 'en' ? 'English' : 'Hindi'}
                >
                  {l === 'en' ? 'EN' : 'हिं'}
                </button>
              ))}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="p-2 transition-colors duration-200"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              style={{ color: textColor }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <line x1="4" y1="7"  x2="20" y2="7"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen nav overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center"
            style={{ backgroundColor: 'rgba(30, 30, 30, 0.97)' }}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <line x1="6" y1="6" x2="22" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                <line x1="22" y1="6" x2="6" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </button>

            {/* Nav links */}
            <nav className="flex flex-col items-center gap-1" aria-label="Main navigation">
              {navKeys.map(({ labelKey, href }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => handleNavClick(href)}
                  className="px-6 py-3 text-white/80 hover:text-white transition-colors duration-200"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                  }}
                >
                  {t(labelKey)}
                </motion.button>
              ))}
            </nav>

            {/* Language toggle in overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-10 flex items-center gap-4"
            >
              {(['en', 'hi'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-3 py-1 text-sm font-semibold tracking-wider transition-all duration-200"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: lang === l ? '#fff' : 'rgba(255,255,255,0.4)',
                    borderBottom: lang === l ? '2px solid var(--color-terracotta)' : '2px solid transparent',
                  }}
                  aria-pressed={lang === l}
                >
                  {l === 'en' ? 'English' : 'हिंदी'}
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
