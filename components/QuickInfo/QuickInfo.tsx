'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { quickStats } from '@/data/school';
import { fadeUpStaggered } from '@/lib/motionVariants';

export default function QuickInfo() {
  const { t } = useLanguage();

  return (
    <section
      id="quick-info"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-brand-bg)' }}
      aria-label="Quick school information"
    >
      <div className="mx-auto px-5" style={{ maxWidth: '1200px' }}>
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {quickStats.map((stat, i) => (
            <motion.div
              key={stat.id}
              custom={i}
              variants={fadeUpStaggered}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col items-center text-center rounded-2xl p-6 md:p-7"
              style={{
                backgroundColor: '#fff',
                border: '1px solid var(--color-brand-border)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.045)',
              }}
            >
              <span className="text-3xl mb-3" aria-hidden="true">{stat.icon}</span>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{
                  color: 'var(--color-brand-orange)',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.12em',
                }}
              >
                {t(stat.labelKey as Parameters<typeof t>[0])}
              </p>
              <p
                className="font-bold mb-1"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: 'var(--color-brand-dark)',
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </p>
              {stat.subValue && (
                <p
                  className="text-xs"
                  style={{ color: 'var(--color-brand-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {stat.subValue}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
