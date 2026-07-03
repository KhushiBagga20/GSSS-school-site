'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { staffMembers } from '@/data/school';
import { fadeUp, fadeUpStaggered } from '@/lib/motionVariants';

export default function Staff() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="staff"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg)' }}
      aria-labelledby="staff-heading"
    >
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1200px' }}>
        <motion.p
          className="section-label mb-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t('staff.sectionTitle')}
        </motion.p>

        <motion.h2
          id="staff-heading"
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
          {t('staff.heading')}
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
            marginBottom: '1.5rem',
          }}
          aria-hidden="true"
        />

        {/* Staff stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {[
            t('staff.totalStaff'),
            t('staff.maleStaff'),
            t('staff.femaleStaff'),
          ].map((stat) => (
            <span
              key={stat}
              className="px-3 py-1 text-xs font-medium"
              style={{
                border: '1px solid var(--color-border)',
                color: 'var(--color-muted)',
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.05em',
              }}
            >
              {stat}
            </span>
          ))}
        </motion.div>

        {/* Staff grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {staffMembers.map((member, i) => (
            <motion.div
              key={member.id}
              custom={i}
              variants={fadeUpStaggered}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div
                className="relative mb-4 overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
                style={{
                  width: '100px',
                  height: '100px',
                  border: '1px solid var(--color-border)',
                }}
              >
                {member.imageSrc ? (
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-cream)' }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 60 60" fill="none" width="40" height="40">
                      <circle cx="30" cy="22" r="10" fill="var(--color-border)" />
                      <ellipse cx="30" cy="50" rx="18" ry="12" fill="var(--color-border)" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Name */}
              <p
                className="mb-1"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--color-dark)',
                  lineHeight: 1.3,
                }}
              >
                {lang === 'hi' ? member.nameHi : member.name}
              </p>

              {/* Designation */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: 'var(--color-muted)',
                }}
              >
                {lang === 'hi' ? member.designationHi : member.designation}
              </p>

              {/* Subject */}
              {member.subject && (
                <p
                  className="mt-1"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    color: 'var(--color-olive)',
                    fontWeight: 600,
                  }}
                >
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
