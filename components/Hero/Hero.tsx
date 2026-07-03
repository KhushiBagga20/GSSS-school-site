'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { schoolInfo } from '@/data/school';

export default function Hero() {
  const { t } = useLanguage();

  const handleScroll = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100svh' }}
      aria-label="Hero section"
    >
      {/* Background — placeholder for school image */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#1a2e1a' }}
        aria-hidden="true"
      >
        {/* [PLACEHOLDER] Replace this div with an <Image> of the school building */}
        {/* Example:
            <Image
              src="/images/hero-bg.webp"
              alt="GSSS Trilokpur school building"
              fill
              className="object-cover"
              priority
            />
        */}

        {/* Placeholder visual — subtle topographic / nature pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #84B88A 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #F4B66A 0%, transparent 40%),
                              radial-gradient(circle at 60% 80%, #84B88A 0%, transparent 40%)`,
          }}
        />

        {/* Mountain silhouette SVG (Himachal Pradesh reference) */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full opacity-30"
          viewBox="0 0 1440 280"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0,280 L0,180 L120,100 L240,150 L360,60 L480,120 L600,40 L720,110 L840,50 L960,130 L1080,70 L1200,140 L1320,80 L1440,160 L1440,280 Z"
            fill="#84B88A"
            opacity="0.5"
          />
          <path
            d="M0,280 L0,220 L180,160 L360,200 L540,140 L720,180 L900,130 L1080,170 L1260,120 L1440,200 L1440,280 Z"
            fill="#FAF8F4"
            opacity="0.08"
          />
        </svg>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,20,10,0.55)' }} />
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center px-5 flex flex-col items-center"
        style={{ maxWidth: '800px' }}
      >
        {/* Emblem pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              backgroundColor: 'rgba(244,182,106,0.18)',
              border: '1px solid rgba(244,182,106,0.5)',
              color: '#F4B66A',
              fontFamily: 'var(--font-heading)',
            }}
          >
            <span aria-hidden="true">🏛️</span>
            {schoolInfo.management}
          </span>
        </motion.div>

        {/* School name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white font-bold mb-3"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 6vw, 3.75rem)',
            lineHeight: 1.15,
            textShadow: '0 2px 24px rgba(0,0,0,0.4)',
          }}
        >
          {schoolInfo.fullName}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6 font-medium tracking-wider"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
            color: '#F4B66A',
            letterSpacing: '0.12em',
          }}
          aria-label={`Motto: ${t('hero.tagline')}`}
        >
          {t('hero.tagline')}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10"
          style={{
            color: 'rgba(255,255,255,0.82)',
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            maxWidth: '560px',
          }}
        >
          {t('hero.description')}
        </motion.p>

        {/* Scroll down indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          onClick={handleScroll}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md p-2"
          aria-label={t('hero.scrollDown')}
        >
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-heading)', fontSize: '10px' }}>
            {t('hero.scrollDown')}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' as const }}
            aria-hidden="true"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
