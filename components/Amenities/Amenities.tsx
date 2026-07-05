'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { amenities } from '@/data/school';
import { zoomIn, zoomDelayed } from '@/lib/motionVariants';


export default function Amenities() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="amenities"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-cream)' }}
      aria-labelledby="amenities-heading"
    >
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '900px' }}>

        {/* ── Centered heading block ─────────────────── */}
        <motion.div
          className="text-center mb-16"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Decorative hexagon line */}
          <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
            <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--color-border)' }} />
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <polygon points="7,1 13,4 13,10 7,13 1,10 1,4" stroke="var(--color-olive)" strokeWidth="1" fill="none" />
            </svg>
            <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--color-border)' }} />
          </div>

          <p className="section-label mb-3">{t('amenities.sectionTitle')}</p>

          <h2
            id="amenities-heading"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 700,
              color: 'var(--color-dark)',
              lineHeight: 1.15,
            }}
          >
            {t('amenities.heading')}
          </h2>
        </motion.div>

        {/* ── Amenities — vertical centered list ─────── */}
        <div className="flex flex-col items-center">
          {amenities.map((item, i) => (
            <motion.div
              key={item.id}
              variants={zoomDelayed(i * 0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              className="w-full flex items-center gap-6 md:gap-10 py-7"
              style={{
                maxWidth: '560px',
                borderBottom: i < amenities.length - 1 ? '1px solid var(--color-border)' : 'none',
              }}
            >
              {/* Icon in a circle */}
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                  backgroundColor: '#fff',
                }}
              >
                <span className="text-xl" aria-hidden="true">{item.icon}</span>
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--color-dark)',
                  }}
                >
                  {t(item.titleKey as Parameters<typeof t>[0])}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                  {lang === 'hi' ? item.valueHi : item.value}
                </p>
              </div>

              {/* Right decorative dash */}
              <div className="hidden sm:block" aria-hidden="true" style={{ width: '24px', height: '1px', backgroundColor: 'var(--color-terracotta)' }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative */}
        <motion.div
          variants={zoomDelayed(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mt-10"
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <polygon points="7,1 13,4 13,10 7,13 1,10 1,4" stroke="var(--color-olive)" strokeWidth="1" fill="none" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
