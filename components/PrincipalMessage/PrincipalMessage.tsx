'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { principal } from '@/data/school';
import { zoomIn, zoomSlow } from '@/lib/motionVariants';


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
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '800px' }}>

        {/* ── Centered heading ────────────────────────── */}
        <motion.div
          className="text-center mb-14"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Decorative line + circle */}
          <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
            <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--color-border)' }} />
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="4" stroke="var(--color-terracotta)" strokeWidth="1" fill="none" />
            </svg>
            <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--color-border)' }} />
          </div>

          <p className="section-label mb-3">{t('principalMessage.sectionTitle')}</p>

          <h2
            id="principal-heading"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 700,
              color: 'var(--color-dark)',
              lineHeight: 1.15,
            }}
          >
            {t('principalMessage.heading')}
          </h2>
        </motion.div>

        {/* ── Portrait — centered, zooms in ──────────── */}
        <motion.div
          className="flex flex-col items-center mb-12"
          variants={zoomSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Photo — circle */}
          <div
            className="relative overflow-hidden mb-5"
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              border: '1px solid var(--color-border)',
            }}
          >
            {principal.imageSrc ? (
              <Image
                src={principal.imageSrc}
                alt={principal.name}
                fill
                className="object-cover"
                sizes="160px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-cream)' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--color-muted)' }}>
                  {principal.name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* Thin vertical line */}
          <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--color-border)' }} aria-hidden="true" />

          {/* Name & designation */}
          <div className="text-center mt-3">
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-dark)' }}>
              {principal.name}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-muted)', marginTop: '2px' }}>
              {designation}
            </p>
          </div>
        </motion.div>

        {/* ── Message — centered blockquote ────────────── */}
        <motion.div
          className="text-center"
          variants={zoomSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Opening quote mark */}
          <div
            aria-hidden="true"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '4rem',
              lineHeight: 0.6,
              color: 'var(--color-border)',
              marginBottom: '20px',
              userSelect: 'none',
            }}
          >
            &ldquo;
          </div>

          <blockquote
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
              color: 'var(--color-dark)',
              lineHeight: 2,
              fontStyle: 'italic',
              maxWidth: '620px',
              margin: '0 auto 2rem',
            }}
          >
            {message}
          </blockquote>

          {/* Signature line */}
          <div className="flex items-center justify-center gap-3">
            <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--color-terracotta)' }} aria-hidden="true" />
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-dark)', letterSpacing: '0.05em' }}>
              {principal.name}
            </span>
            <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--color-terracotta)' }} aria-hidden="true" />
          </div>
        </motion.div>

        {/* Bottom decorative */}
        <motion.div
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mt-14"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2">
            <div style={{ width: '1px', height: '30px', backgroundColor: 'var(--color-border)' }} />
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="4" stroke="var(--color-terracotta)" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
