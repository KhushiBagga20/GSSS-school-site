'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { principal } from '@/data/school';
import { fadeUp, slideInLeft, slideInRight } from '@/lib/motionVariants';

export default function PrincipalMessage() {
  const { lang, t } = useLanguage();

  const message = lang === 'hi' ? principal.messageHi : principal.message;
  const designation = lang === 'hi' ? principal.designationHi : principal.designation;

  return (
    <section
      id="principal"
      className="section-padding"
      style={{ backgroundColor: '#fff' }}
      aria-labelledby="principal-heading"
    >
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1200px' }}>
        <motion.p
          className="section-label mb-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t('principalMessage.sectionTitle')}
        </motion.p>

        <motion.h2
          id="principal-heading"
          className="mb-4"
          variants={fadeUp}
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
          {t('principalMessage.heading')}
        </motion.h2>

        <motion.div
          variants={fadeUp}
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

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Photo side */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 relative"
            style={{
              aspectRatio: '3/4',
              border: '1px solid var(--color-border)',
              overflow: 'hidden',
            }}
          >
            {principal.imageSrc ? (
              <Image
                src={principal.imageSrc}
                alt={principal.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-cream)' }}
              >
                <svg viewBox="0 0 80 80" fill="none" width="80" height="80">
                  <circle cx="40" cy="30" r="16" fill="var(--color-border)" />
                  <ellipse cx="40" cy="66" rx="24" ry="16" fill="var(--color-border)" />
                </svg>
              </div>
            )}

            {/* Name overlay at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 p-5"
              style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                {principal.name}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {designation}
              </p>
            </div>
          </motion.div>

          {/* Message side */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 flex flex-col justify-center p-8 lg:p-12"
            style={{
              border: '1px solid var(--color-border)',
              borderLeft: 'none',
              backgroundColor: 'var(--color-bg)',
            }}
          >
            {/* Opening quote mark */}
            <div
              aria-hidden="true"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '5rem',
                lineHeight: 0.5,
                color: 'var(--color-border)',
                marginBottom: '24px',
                userSelect: 'none',
              }}
            >
              &ldquo;
            </div>

            <blockquote
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                color: 'var(--color-dark)',
                lineHeight: 1.9,
                fontStyle: 'italic',
                marginBottom: '2rem',
              }}
            >
              {message}
            </blockquote>

            {/* Signature line */}
            <div className="flex items-center gap-4">
              <div
                style={{
                  width: '40px',
                  height: '1px',
                  backgroundColor: 'var(--color-terracotta)',
                }}
                aria-hidden="true"
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--color-dark)',
                }}
              >
                {principal.name}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
