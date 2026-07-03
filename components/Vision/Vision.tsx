'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { visionValues } from '@/data/school';
import { fadeUpStaggered } from '@/lib/motionVariants';

export default function Vision() {
  const { t } = useLanguage();

  return (
    <section
      id="vision"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg)' }}
      aria-labelledby="vision-heading"
    >
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1200px' }}>
        {/* Section header */}
        <motion.p
          className="section-label mb-3"
          variants={fadeUpStaggered}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t('vision.sectionTitle')}
        </motion.p>

        <motion.h2
          id="vision-heading"
          className="mb-6"
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
          {t('vision.heading')}
        </motion.h2>

        {/* Thin horizontal rule */}
        <motion.div
          variants={fadeUpStaggered}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            width: '60px',
            height: '1px',
            backgroundColor: 'var(--color-terracotta)',
            marginBottom: '3.5rem',
          }}
          aria-hidden="true"
        />

        {/* Mission & Vision — two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            variants={fadeUpStaggered}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8"
            style={{
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-cream)',
            }}
          >
            <h3
              className="mb-3"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--color-terracotta-dark)',
              }}
            >
              {t('vision.mission')}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--color-dark)',
                lineHeight: 1.8,
              }}
            >
              {t('vision.missionText')}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpStaggered}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8"
            style={{
              border: '1px solid var(--color-border)',
              backgroundColor: '#fff',
            }}
          >
            <h3
              className="mb-3"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--color-olive)',
              }}
            >
              {t('vision.visionLabel')}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--color-dark)',
                lineHeight: 1.8,
              }}
            >
              {t('vision.visionText')}
            </p>
          </motion.div>
        </div>

        {/* Vertical tiles — values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {visionValues.map((value, i) => (
            <motion.div
              key={value.id}
              custom={i + 5}
              variants={fadeUpStaggered}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative p-8 transition-colors duration-300"
              style={{
                borderLeft: i === 0 ? '1px solid var(--color-border)' : 'none',
                borderRight: '1px solid var(--color-border)',
                borderTop: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
                backgroundColor: '#fff',
                minHeight: '280px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--color-cream)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = '#fff';
              }}
            >
              {/* Number */}
              <p
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  fontWeight: 300,
                  color: 'var(--color-border)',
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                {value.number}
              </p>

              {/* Title */}
              <h3
                className="mb-3"
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

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  color: 'var(--color-muted)',
                  lineHeight: 1.7,
                }}
              >
                {t(value.descriptionKey as Parameters<typeof t>[0])}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: 'var(--color-terracotta)' }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
