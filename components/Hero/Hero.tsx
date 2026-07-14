'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { schoolInfo } from '@/data/school';

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax: image moves slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  const handleScroll = () => {
    const el = document.querySelector('#vision');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex items-end overflow-hidden"
      style={{ minHeight: '100svh' }}
      aria-label="Hero section"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
        aria-hidden="true"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="GSSS Trilokpur school building front entrance"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(10, 15, 10, 0.62)' }}
        />
      </motion.div>

      {/* Content — left aligned, bottom area */}
      <motion.div
        className="relative z-10 px-6 md:px-10 pb-20 md:pb-28 pt-40"
        style={{
          maxWidth: '800px',
          opacity: contentOpacity,
          y: contentY,
        }}
      >
        {/* Established label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#E5A988',
          }}
        >
          {t('hero.established')} · {t('hero.location')}
        </motion.p>

        {/* School name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#FAF7F2',
          }}
        >
          {schoolInfo.fullName}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'rgba(255, 255, 255, 0.9)',
            letterSpacing: '0.03em',
          }}
        >
          {t('hero.tagline')}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            color: '#FAF7F2',
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
            maxWidth: '520px',
            lineHeight: 1.7,
          }}
        >
          {t('hero.description')}
        </motion.p>
      </motion.div>

      {/* Scroll down indicator — centered at bottom */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-300"
        aria-label={t('hero.scrollDown')}
      >
        <span
          className="tracking-widest uppercase"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '9px',
            fontWeight: 600,
            letterSpacing: '0.2em',
          }}
        >
          {t('hero.scrollDown')}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
          </svg>
        </motion.div>
      </motion.button>
    </section>
  );
}
