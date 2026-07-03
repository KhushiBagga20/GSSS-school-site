'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';

export default function Quote() {
  const { t } = useLanguage();

  return (
    <section
      id="quote"
      aria-label="Inspirational quote"
      style={{ backgroundColor: 'var(--color-brand-orange-light)' }}
    >
      <div
        className="mx-auto px-5 py-16 md:py-20 flex flex-col items-center justify-center text-center"
        style={{ maxWidth: '780px' }}
      >
        {/* Decorative quote mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '6rem',
            lineHeight: 0.6,
            color: 'rgba(244,182,106,0.5)',
            marginBottom: '1.5rem',
            userSelect: 'none',
          }}
        >
          &ldquo;
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          cite="Nelson Mandela"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.15rem, 2.5vw, 1.6rem)',
            fontWeight: 600,
            color: 'var(--color-brand-dark)',
            lineHeight: 1.6,
            fontStyle: 'italic',
            marginBottom: '1.5rem',
          }}
        >
          {t('quote.text')}
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'var(--color-brand-muted)',
          }}
        >
          {t('quote.attribution')}
        </motion.p>
      </div>
    </section>
  );
}
