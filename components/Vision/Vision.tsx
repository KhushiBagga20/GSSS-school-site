'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { visionValues } from '@/data/school';
import { zoomIn, zoomDelayed } from '@/lib/motionVariants';


export default function Vision() {
  const { t } = useLanguage();

  return (
    <section
      id="vision"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg)' }}
      aria-labelledby="vision-heading"
    >
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '900px' }}>

        {/* ── Centered heading block ─────────────────────── */}
        <motion.div
          className="text-center mb-16"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Decorative line + diamond */}
          <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
            <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--color-border)' }} />
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><rect x="6" y="0" width="8.49" height="8.49" transform="rotate(45 6 0)" stroke="var(--color-terracotta)" strokeWidth="1" fill="none" /></svg>
            <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--color-border)' }} />
          </div>

          <p className="section-label mb-3">{t('vision.sectionTitle')}</p>

          <h2
            id="vision-heading"
            className="mb-5"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 700,
              color: 'var(--color-dark)',
              lineHeight: 1.15,
            }}
          >
            {t('vision.heading')}
          </h2>

          {/* Thin accent line below heading */}
          <div className="mx-auto" style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-terracotta)' }} aria-hidden="true" />
        </motion.div>

        {/* ── Mission & Vision — stacked centered blocks ── */}
        <div className="flex flex-col items-center gap-12 mb-20">
          {/* Mission */}
          <motion.div
            variants={zoomDelayed(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="text-center"
            style={{ maxWidth: '640px' }}
          >
            <div className="flex items-center justify-center gap-3 mb-4" aria-hidden="true">
              <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--color-terracotta)' }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-terracotta-dark)', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>
                {t('vision.mission')}
              </span>
              <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--color-terracotta)' }} />
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-dark)', lineHeight: 1.9 }}>
              {t('vision.missionText')}
            </p>
          </motion.div>

          {/* Decorative separator */}
          <motion.div
            variants={zoomDelayed(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            aria-hidden="true"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><line x1="10" y1="0" x2="10" y2="20" stroke="var(--color-border)" strokeWidth="1" /><line x1="0" y1="10" x2="20" y2="10" stroke="var(--color-border)" strokeWidth="1" /></svg>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={zoomDelayed(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="text-center"
            style={{ maxWidth: '640px' }}
          >
            <div className="flex items-center justify-center gap-3 mb-4" aria-hidden="true">
              <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--color-olive)' }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-olive)', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>
                {t('vision.visionLabel')}
              </span>
              <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--color-olive)' }} />
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-dark)', lineHeight: 1.9 }}>
              {t('vision.visionText')}
            </p>
          </motion.div>
        </div>

        {/* ── Values — centered vertical stack ────────── */}
        <div className="flex flex-col items-center gap-0">
          {visionValues.map((value, i) => (
            <motion.div
              key={value.id}
              variants={zoomDelayed(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="w-full text-center py-12 relative"
              style={{ maxWidth: '640px' }}
            >
              {/* Top decorative line (except first) */}
              {i > 0 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{ width: '1px', height: '40px', backgroundColor: 'var(--color-border)' }} aria-hidden="true" />
              )}

              {/* Number in a circle */}
              <div
                className="mx-auto mb-5 flex items-center justify-center"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                }}
                aria-hidden="true"
              >
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 300, color: 'var(--color-muted)' }}>
                  {value.number}
                </span>
              </div>

              <h3
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: 'var(--color-dark)',
                }}
              >
                {t(value.titleKey as Parameters<typeof t>[0])}
              </h3>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
                {t(value.descriptionKey as Parameters<typeof t>[0])}
              </p>
            </motion.div>
          ))}

          {/* Bottom decorative element */}
          <motion.div
            variants={zoomDelayed(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 pt-4"
            aria-hidden="true"
          >
            <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--color-border)' }} />
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><rect x="6" y="0" width="8.49" height="8.49" transform="rotate(45 6 0)" stroke="var(--color-terracotta)" strokeWidth="1" fill="none" /></svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
