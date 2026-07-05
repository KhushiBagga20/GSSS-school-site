'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/lib/i18n';
import { visionValues } from '@/data/school';
import { zoomIn, zoomDelayed } from '@/lib/motionVariants';

const PALETTE = [
  { accent: 'var(--color-terracotta)', bg: '#FDF3EE' },
  { accent: 'var(--color-olive)',       bg: '#F2F5EF' },
  { accent: '#8B7355',                  bg: '#F6F1EA' },
  { accent: 'var(--color-terracotta-dark)', bg: '#FAF7F2' },
];

export default function Vision() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.6], ['0%', '100%']);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="section-padding overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg)' }}
      aria-labelledby="vision-heading"
    >
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1100px' }}>

        {/* ── Centered heading ──────────────────────── */}
        <motion.div
          className="text-center mb-20"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="section-label mb-3">{t('vision.sectionTitle')}</p>
          <h2
            id="vision-heading"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              color: 'var(--color-dark)',
              lineHeight: 1.15,
            }}
          >
            {t('vision.heading')}
          </h2>

          {/* Animated horizontal line */}
          <div className="relative mx-auto mt-5" style={{ width: '120px', height: '1px', backgroundColor: 'var(--color-border)' }}>
            <motion.div
              className="absolute inset-y-0 left-0"
              style={{ backgroundColor: 'var(--color-terracotta)', width: lineWidth }}
            />
          </div>
        </motion.div>

        {/* ── Mission / Vision — split horizontal ───── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-24">
          {[
            {
              label: t('vision.mission'),
              text: t('vision.missionText'),
              accent: 'var(--color-terracotta)',
              num: '01',
            },
            {
              label: t('vision.visionLabel'),
              text: t('vision.visionText'),
              accent: 'var(--color-olive)',
              num: '02',
            },
          ].map((card, i) => (
            <motion.div
              key={card.num}
              variants={zoomDelayed(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="relative p-10 md:p-12"
              style={{
                borderLeft: `3px solid ${card.accent}`,
                borderTop: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
                borderRight: i === 0 ? 'none' : '1px solid var(--color-border)',
                backgroundColor: i === 0 ? 'var(--color-cream)' : '#fff',
              }}
            >
              {/* Large background number */}
              <span
                className="absolute top-6 right-8 select-none pointer-events-none"
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '5rem',
                  fontWeight: 700,
                  color: card.accent,
                  opacity: 0.07,
                  lineHeight: 1,
                }}
              >
                {card.num}
              </span>

              <p
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: card.accent,
                }}
              >
                {card.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: 'var(--color-dark)',
                  lineHeight: 2,
                }}
              >
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Values infographic ────────────────────── */}
        {/* Desktop: horizontal timeline strip; Mobile: stacked */}
        <div className="hidden md:flex items-stretch gap-0">
          {visionValues.map((value, i) => {
            const pal = PALETTE[i];
            return (
              <motion.div
                key={value.id}
                variants={zoomDelayed(i * 0.12)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="flex-1 flex flex-col relative"
                style={{
                  borderTop: `3px solid ${pal.accent}`,
                  borderLeft: '1px solid var(--color-border)',
                  borderBottom: '1px solid var(--color-border)',
                  borderRight: i === visionValues.length - 1 ? '1px solid var(--color-border)' : 'none',
                  backgroundColor: pal.bg,
                  minHeight: '320px',
                }}
              >
                {/* Top connector dot */}
                <div
                  className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                  style={{ backgroundColor: pal.accent, border: `2px solid ${pal.bg}`, outline: `1px solid ${pal.accent}` }}
                  aria-hidden="true"
                />

                <div className="p-8 flex flex-col h-full">
                  {/* Big number */}
                  <div
                    className="mb-6 inline-block"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: pal.accent,
                      borderBottom: `1px solid ${pal.accent}`,
                      paddingBottom: '4px',
                    }}
                  >
                    {value.number}
                  </div>

                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--color-dark)',
                      lineHeight: 1.3,
                    }}
                  >
                    {t(value.titleKey as Parameters<typeof t>[0])}
                  </h3>

                  <p
                    className="flex-1"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      color: 'var(--color-muted)',
                      lineHeight: 1.8,
                    }}
                  >
                    {t(value.descriptionKey as Parameters<typeof t>[0])}
                  </p>

                  {/* Bottom icon */}
                  <div className="mt-6 pt-4" style={{ borderTop: `1px solid ${pal.accent}22` }} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect x="1" y="1" width="18" height="18" stroke={pal.accent} strokeWidth="1" fill="none" strokeDasharray="3 3" />
                      <circle cx="10" cy="10" r="3" fill={pal.accent} opacity="0.5" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: accordion-style stack */}
        <div className="flex flex-col md:hidden gap-0">
          {visionValues.map((value, i) => {
            const pal = PALETTE[i];
            return (
              <motion.div
                key={value.id}
                variants={zoomDelayed(i * 0.12)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-20px' }}
                className="flex gap-6 p-6"
                style={{
                  borderLeft: `3px solid ${pal.accent}`,
                  borderBottom: '1px solid var(--color-border)',
                  backgroundColor: pal.bg,
                }}
              >
                {/* Number column */}
                <div
                  className="flex-shrink-0 flex items-start pt-1"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 300, color: pal.accent, width: '32px' }}
                  aria-hidden="true"
                >
                  {value.number}
                </div>
                <div>
                  <h3
                    className="mb-2"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-dark)' }}
                  >
                    {t(value.titleKey as Parameters<typeof t>[0])}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                    {t(value.descriptionKey as Parameters<typeof t>[0])}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
