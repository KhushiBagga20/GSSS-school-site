'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { principal } from '@/data/school';
import { fadeUp } from '@/lib/motionVariants';

export default function Leadership() {
  const { lang, t } = useLanguage();

  const message = lang === 'hi' ? principal.messageHi : principal.message;
  const designation = lang === 'hi' ? principal.designationHi : principal.designation;

  return (
    <section
      id="leadership"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-brand-bg)' }}
      aria-labelledby="leadership-heading"
    >
      <div className="mx-auto px-5" style={{ maxWidth: '1200px' }}>
        {/* Section label */}
        <motion.p
          className="section-label mb-3 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t('leadership.sectionTitle')}
        </motion.p>

        <motion.h2
          id="leadership-heading"
          className="text-center mb-14"
          variants={fadeUp}
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
          {t('leadership.heading')}
        </motion.h2>

        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: '#fff',
            border: '1px solid var(--color-brand-border)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}
          aria-label={`Leadership: ${principal.name}, ${principal.designation}`}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Photo side */}
            <div
              className="flex-shrink-0 flex flex-col items-center justify-center p-8 lg:p-10"
              style={{
                backgroundColor: 'var(--color-brand-green-light)',
                minWidth: '220px',
                borderRight: '1px solid var(--color-brand-border)',
              }}
            >
              {/* [PLACEHOLDER] Replace with actual principal photo */}
              <div
                className="rounded-full mb-4 overflow-hidden flex items-center justify-center"
                style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: 'var(--color-brand-border)',
                  border: '3px solid var(--color-brand-green)',
                }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 80 80" fill="none" width="80" height="80" aria-hidden="true">
                  <circle cx="40" cy="30" r="16" fill="#84B88A" opacity="0.6" />
                  <ellipse cx="40" cy="66" rx="24" ry="16" fill="#84B88A" opacity="0.4" />
                </svg>
              </div>
              <p
                className="font-bold text-center"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  color: 'var(--color-brand-dark)',
                }}
              >
                {principal.name}
              </p>
              <p
                className="text-sm text-center mt-1"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-brand-muted)' }}
              >
                {designation}
              </p>
              <p
                className="text-xs text-center mt-1 font-medium px-3 py-1 rounded-full"
                style={{
                  backgroundColor: 'rgba(132,184,138,0.2)',
                  color: '#4a8c52',
                  fontFamily: 'var(--font-body)',
                  marginTop: '8px',
                }}
              >
                [PLACEHOLDER] — Add photo
              </p>
            </div>

            {/* Message side */}
            <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
              <h3
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-brand-orange)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {t('leadership.principalMessage')}
              </h3>

              {/* Opening quote mark */}
              <div
                aria-hidden="true"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '4rem',
                  lineHeight: 0.5,
                  color: 'var(--color-brand-border)',
                  marginBottom: '16px',
                  userSelect: 'none',
                }}
              >
                &ldquo;
              </div>

              <blockquote
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                  color: 'var(--color-brand-dark)',
                  lineHeight: 1.85,
                  fontStyle: 'italic',
                }}
              >
                {/* [PLACEHOLDER] Message — replace in data/school.ts */}
                {message}
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div
                  className="h-px flex-1"
                  style={{ backgroundColor: 'var(--color-brand-border)' }}
                  aria-hidden="true"
                />
                <span
                  className="text-sm font-semibold"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-brand-dark)' }}
                >
                  — {principal.name}
                </span>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
