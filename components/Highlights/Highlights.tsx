'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { highlights } from '@/data/school';
import { fadeUpStaggered } from '@/lib/motionVariants';

export default function Highlights() {
  const { t } = useLanguage();

  return (
    <section
      id="highlights"
      className="section-padding"
      style={{ backgroundColor: '#fff' }}
      aria-labelledby="highlights-heading"
    >
      <div className="mx-auto px-5" style={{ maxWidth: '1200px' }}>
        <motion.p
          className="section-label mb-3 text-center"
          variants={fadeUpStaggered}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t('highlights.sectionTitle')}
        </motion.p>

        <motion.h2
          id="highlights-heading"
          className="text-center mb-14"
          variants={fadeUpStaggered}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            fontWeight: 700,
            color: 'var(--color-brand-dark)',
          }}
        >
          {t('highlights.heading')}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i + 2}
              variants={fadeUpStaggered}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl p-7 transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-brand-bg)',
                border: '1px solid var(--color-brand-border)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--color-brand-orange-light)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(244,182,106,0.4)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(244,182,106,0.15)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--color-brand-bg)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-brand-border)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              <span className="text-3xl mb-4 block" aria-hidden="true">{item.icon}</span>
              <h3
                className="font-bold mb-2"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  color: 'var(--color-brand-dark)',
                }}
              >
                {t(item.titleKey as Parameters<typeof t>[0])}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--color-brand-muted)',
                  lineHeight: 1.75,
                }}
              >
                {t(item.descriptionKey as Parameters<typeof t>[0])}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
