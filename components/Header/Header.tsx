'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { schoolInfo } from '@/data/school';

const navKeys = [
  { labelKey: 'nav.home' as const, href: '#home' },
  { labelKey: 'nav.about' as const, href: '#about' },
  { labelKey: 'nav.leadership' as const, href: '#leadership' },
  { labelKey: 'nav.gallery' as const, href: '#gallery' },
  { labelKey: 'nav.contact' as const, href: '#contact' },
];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(250,248,244,0.97)' : 'rgba(250,248,244,0.92)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none',
        borderBottom: scrolled ? '1px solid #E5E0D8' : '1px solid transparent',
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        className="mx-auto flex items-center justify-between px-5 transition-all duration-300"
        style={{
          maxWidth: '1200px',
          height: scrolled ? '60px' : '72px',
        }}
      >
        {/* Logo + Name */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-orange)] rounded-md"
          aria-label="Go to home section"
        >
          {/* School emblem placeholder */}
          <div
            className="flex items-center justify-center rounded-full text-white font-bold text-sm flex-shrink-0 transition-all duration-300"
            style={{
              width: scrolled ? '36px' : '42px',
              height: scrolled ? '36px' : '42px',
              background: 'linear-gradient(135deg, #F4B66A 0%, #e09a4a 100%)',
              fontSize: scrolled ? '14px' : '16px',
            }}
            aria-hidden="true"
          >
            G
          </div>
          <div className="text-left leading-tight">
            <p
              className="font-bold text-[var(--color-brand-dark)] transition-all duration-300"
              style={{ fontFamily: 'var(--font-heading)', fontSize: scrolled ? '14px' : '15px' }}
            >
              {schoolInfo.name}
            </p>
            <p
              className="text-[var(--color-brand-muted)] hidden sm:block transition-all duration-300"
              style={{ fontSize: scrolled ? '10px' : '11px' }}
            >
              {schoolInfo.location.district}, {schoolInfo.location.state}
            </p>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navKeys.map(({ labelKey, href }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="px-4 py-2 rounded-md text-sm font-medium text-[var(--color-brand-muted)] hover:text-[var(--color-brand-dark)] hover:bg-[var(--color-brand-border)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-orange)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {t(labelKey)}
            </button>
          ))}

          {/* Language Toggle */}
          <div
            className="ml-3 flex items-center rounded-full p-1"
            style={{ backgroundColor: 'var(--color-brand-border)', gap: '2px' }}
            role="group"
            aria-label="Language selector"
          >
            {(['en', 'hi'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-orange)]"
                style={{
                  fontFamily: 'var(--font-heading)',
                  backgroundColor: lang === l ? 'var(--color-brand-orange)' : 'transparent',
                  color: lang === l ? '#fff' : 'var(--color-brand-muted)',
                }}
                aria-pressed={lang === l}
                aria-label={l === 'en' ? 'English' : 'Hindi'}
              >
                {l === 'en' ? 'EN' : 'हिं'}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <div
            className="flex items-center rounded-full p-1"
            style={{ backgroundColor: 'var(--color-brand-border)', gap: '2px' }}
            role="group"
            aria-label="Language selector"
          >
            {(['en', 'hi'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="px-2 py-1 rounded-full text-xs font-semibold transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-heading)',
                  backgroundColor: lang === l ? 'var(--color-brand-orange)' : 'transparent',
                  color: lang === l ? '#fff' : 'var(--color-brand-muted)',
                }}
                aria-pressed={lang === l}
              >
                {l === 'en' ? 'EN' : 'हिं'}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 rounded-md text-[var(--color-brand-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-orange)]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              {menuOpen ? (
                <>
                  <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: 'rgba(250,248,244,0.98)',
              borderTop: '1px solid var(--color-brand-border)',
            }}
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col px-5 pb-4 pt-2 gap-1">
              {navKeys.map(({ labelKey, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className="w-full text-left px-4 py-3 rounded-md text-sm font-medium text-[var(--color-brand-dark)] hover:bg-[var(--color-brand-orange-light)] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {t(labelKey)}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
