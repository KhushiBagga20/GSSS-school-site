'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { schoolInfo } from '@/data/school';
import { fadeUp } from '@/lib/motionVariants';

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="section-padding"
      style={{ backgroundColor: '#fff' }}
      aria-labelledby="about-heading"
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
          {t('about.sectionTitle')}
        </motion.p>

        {/* Heading */}
        <motion.h2
          id="about-heading"
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
          {t('about.heading')}
        </motion.h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              aspectRatio: '4/3',
              backgroundColor: 'var(--color-brand-green-light)',
              border: '1px solid var(--color-brand-border)',
            }}
          >
            {/* [PLACEHOLDER] Replace with school building image:
                <Image
                  src="/images/school-building.webp"
                  alt="GSSS Trilokpur school building"
                  fill
                  className="object-cover"
                />
            */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
              <div
                className="rounded-full flex items-center justify-center text-white font-bold"
                style={{
                  width: '72px',
                  height: '72px',
                  background: 'linear-gradient(135deg, #F4B66A 0%, #e09a4a 100%)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '28px',
                }}
                aria-hidden="true"
              >
                G
              </div>
              <p
                className="text-center font-semibold"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-brand-muted)',
                  fontSize: '13px',
                }}
              >
                [PLACEHOLDER] School photo
              </p>
              <p
                className="text-center text-xs"
                style={{ color: 'var(--color-brand-muted)', fontFamily: 'var(--font-body)' }}
              >
                Replace with /public/images/school-building.webp
              </p>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-brand-dark)', lineHeight: 1.8 }}>
              {t('about.p1')}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-brand-muted)', lineHeight: 1.8 }}>
              {t('about.p2')}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-brand-muted)', lineHeight: 1.8 }}>
              {t('about.p3')}
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: 'var(--color-brand-orange-light)',
                  border: '1px solid rgba(244,182,106,0.3)',
                }}
              >
                <h3
                  className="font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', color: '#c07c30' }}
                >
                  {t('about.mission')}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-brand-dark)', lineHeight: 1.7 }}>
                  {t('about.missionText')}
                </p>
              </div>
              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: 'var(--color-brand-green-light)',
                  border: '1px solid rgba(132,184,138,0.3)',
                }}
              >
                <h3
                  className="font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', color: '#4a8c52' }}
                >
                  {t('about.vision')}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-brand-dark)', lineHeight: 1.7 }}>
                  {t('about.visionText')}
                </p>
              </div>
            </div>

            {/* Key facts */}
            <div
              className="flex flex-wrap gap-3 mt-1"
              aria-label="School key facts"
            >
              {[
                `Est. ${schoolInfo.established}`,
                `UDISE: ${schoolInfo.udiseCode}`,
                `${schoolInfo.academics.medium} Medium`,
                `${schoolInfo.academics.board}`,
                `${schoolInfo.infrastructure.libraryBooks} Library Books`,
              ].map((fact) => (
                <span
                  key={fact}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: 'var(--color-brand-bg)',
                    border: '1px solid var(--color-brand-border)',
                    color: 'var(--color-brand-muted)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {fact}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
