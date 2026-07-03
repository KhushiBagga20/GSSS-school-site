'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { amenities } from '@/data/school';
import { fadeUpStaggered } from '@/lib/motionVariants';

export default function Amenities() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="amenities"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-cream)' }}
      aria-labelledby="amenities-heading"
    >
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1200px' }}>
        <motion.p
          className="section-label mb-3"
          variants={fadeUpStaggered}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t('amenities.sectionTitle')}
        </motion.p>

        <motion.h2
          id="amenities-heading"
          className="mb-4"
          variants={fadeUpStaggered}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 700,
            color: 'var(--color-dark)',
          }}
        >
          {t('amenities.heading')}
        </motion.h2>

        <motion.div
          variants={fadeUpStaggered}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            width: '60px',
            height: '1px',
            backgroundColor: 'var(--color-olive)',
            marginBottom: '3.5rem',
          }}
          aria-hidden="true"
        />

        {/* Amenities grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
          {amenities.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i + 3}
              variants={fadeUpStaggered}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group flex flex-col items-center justify-center text-center p-8 md:p-10 transition-colors duration-300"
              style={{
                border: '1px solid var(--color-border)',
                backgroundColor: '#fff',
                marginTop: '-1px',
                marginLeft: '-1px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--color-bg)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = '#fff';
              }}
            >
              <span className="text-3xl mb-4" aria-hidden="true">{item.icon}</span>
              <h3
                className="mb-2"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--color-dark)',
                }}
              >
                {t(item.titleKey as Parameters<typeof t>[0])}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: 'var(--color-muted)',
                  lineHeight: 1.5,
                }}
              >
                {lang === 'hi' ? item.valueHi : item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
