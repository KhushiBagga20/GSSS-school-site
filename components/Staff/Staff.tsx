'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { staffMembers } from '@/data/school';
import { zoomIn, zoomDelayed } from '@/lib/motionVariants';


export default function Staff() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="staff"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg)' }}
      aria-labelledby="staff-heading"
    >
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '900px' }}>

        {/* ── Centered heading ────────────────────────── */}
        <motion.div
          className="text-center mb-10"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Decorative triangle */}
          <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
            <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--color-border)' }} />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <polygon points="6,1 11,11 1,11" stroke="var(--color-terracotta)" strokeWidth="1" fill="none" />
            </svg>
            <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--color-border)' }} />
          </div>

          <p className="section-label mb-3">{t('staff.sectionTitle')}</p>

          <h2
            id="staff-heading"
            className="mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 700,
              color: 'var(--color-dark)',
              lineHeight: 1.15,
            }}
          >
            {t('staff.heading')}
          </h2>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 mt-4">
            {[t('staff.totalStaff'), t('staff.maleStaff'), t('staff.femaleStaff')].map((stat, i) => (
              <span key={stat} className="flex items-center gap-2" style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                {i > 0 && <span style={{ color: 'var(--color-border)' }}>·</span>}
                {stat}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Staff — centered grid with zoom ─────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mt-14" style={{ maxWidth: '560px', margin: '3.5rem auto 0' }}>
          {staffMembers.map((member, i) => (
            <motion.div
              key={member.id}
              variants={zoomDelayed(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              className="flex flex-col items-center text-center"
            >
              {/* Avatar — circle */}
              <div
                className="relative mb-4 overflow-hidden"
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                }}
              >
                {member.imageSrc ? (
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="90px"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-cream)' }}
                    aria-hidden="true"
                  >
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--color-muted)' }}>
                      {(lang === 'hi' ? member.nameHi : member.name).charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Thin accent line */}
              <div style={{ width: '20px', height: '1px', backgroundColor: 'var(--color-terracotta)', marginBottom: '8px' }} aria-hidden="true" />

              {/* Name */}
              <p className="mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-dark)', lineHeight: 1.3 }}>
                {lang === 'hi' ? member.nameHi : member.name}
              </p>

              {/* Designation */}
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--color-muted)' }}>
                {lang === 'hi' ? member.designationHi : member.designation}
              </p>

              {/* Subject */}
              {member.subject && (
                <p className="mt-1" style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--color-olive)', fontWeight: 600 }}>
                  {lang === 'hi' ? member.subjectHi : member.subject}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
