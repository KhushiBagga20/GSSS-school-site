'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { amenities } from '@/data/school';
import { zoomIn, zoomDelayed } from '@/lib/motionVariants';

type InfrastructureTab = 'all' | 'academics' | 'utilities' | 'recreation';

export default function Amenities() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<InfrastructureTab>('all');

  const categories: Record<InfrastructureTab, string[]> = {
    all: ['library', 'playground', 'classrooms', 'electricity', 'water', 'sanitation'],
    academics: ['library', 'classrooms'],
    utilities: ['electricity', 'water', 'sanitation'],
    recreation: ['playground'],
  };

  const filteredAmenities = amenities.filter((item) =>
    categories[activeTab].includes(item.id)
  );

  // Custom infographic details for each facility
  const getInfographicDetails = (id: string) => {
    switch (id) {
      case 'library':
        return {
          metric: '1,498',
          label: lang === 'hi' ? 'पुस्तकों का संग्रह' : 'Volumes Cataloged',
          subtext: lang === 'hi' ? 'कहानियां, विज्ञान और संदर्भ पुस्तकें' : 'Fiction, sciences, & reference guides',
          color: 'var(--color-terracotta)',
          visual: (
            <div className="flex gap-1 items-end h-8 w-20 border-b border-border pb-1">
              <div className="bg-terracotta w-3 h-4" />
              <div className="bg-terracotta/70 w-3 h-6" />
              <div className="bg-terracotta/40 w-3 h-5" />
              <div className="bg-terracotta/90 w-3 h-7" />
            </div>
          ),
        };
      case 'playground':
        return {
          metric: '100%',
          label: lang === 'hi' ? 'समर्पित खेल क्षेत्र' : 'Dedicated Area',
          subtext: lang === 'hi' ? 'क्रिकेट, एथलेटिक्स और वॉलीबॉल' : 'Cricket, athletics, & volleyball courts',
          color: 'var(--color-olive)',
          visual: (
            <div className="relative w-16 h-8 border border-dashed border-olive/60 flex items-center justify-center">
              <div className="absolute inset-y-0 left-1/2 w-[1px] bg-olive/30" />
              <div className="w-4 h-4 rounded-full border border-olive/50" />
            </div>
          ),
        };
      case 'classrooms':
        return {
          metric: '03',
          label: lang === 'hi' ? 'अध्यापन कक्ष' : 'Academic Halls',
          subtext: lang === 'hi' ? 'उचित वेंटिलेशन और बोर्ड' : 'Fully ventilated & structured layouts',
          color: '#8B7355',
          visual: (
            <div className="grid grid-cols-3 gap-1 w-16">
              <div className="h-6 border border-muted/40 bg-muted/10" />
              <div className="h-6 border border-muted/40 bg-muted/10" />
              <div className="h-6 border border-muted/40 bg-muted/10" />
            </div>
          ),
        };
      case 'electricity':
        return {
          metric: '24/7',
          label: lang === 'hi' ? 'विद्युत आपूर्ति' : 'Power Grid Uptime',
          subtext: lang === 'hi' ? 'पूर्ण विद्युतीकृत विद्यालय भवन' : 'Fully electrified classroom network',
          color: 'var(--color-terracotta-dark)',
          visual: (
            <div className="w-16 bg-border h-1.5 relative">
              <div className="absolute inset-y-0 left-0 bg-terracotta-dark w-full" />
            </div>
          ),
        };
      case 'water':
        return {
          metric: 'Safe',
          label: lang === 'hi' ? 'पेयजल फिल्टरेशन' : 'Filtration Standard',
          subtext: lang === 'hi' ? 'स्वच्छ पेयजल आपूर्ति' : 'Tested and certified tap water supply',
          color: 'var(--color-olive-light)',
          visual: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-olive-light)" strokeWidth="1.5">
              <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z" />
            </svg>
          ),
        };
      case 'sanitation':
        return {
          metric: 'Separate',
          label: lang === 'hi' ? 'स्वच्छता सुविधाएं' : 'Gendered Blocks',
          subtext: lang === 'hi' ? 'छात्रों और छात्राओं के लिए अलग शौचालय' : 'Separate designated hygiene structures',
          color: '#7A7468',
          visual: (
            <div className="flex gap-4 text-xs font-semibold text-muted">
              <span>B</span>
              <span className="text-border">|</span>
              <span>G</span>
            </div>
          ),
        };
      default:
        return { metric: '', label: '', subtext: '', color: '#000', visual: null };
    }
  };

  return (
    <section
      id="amenities"
      className="section-padding overflow-hidden"
      style={{ backgroundColor: 'var(--color-cream)' }}
      aria-labelledby="amenities-heading"
    >
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1200px' }}>
        {/* ── Heading ─────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="section-label mb-3">{t('amenities.sectionTitle')}</p>
          <h2
            id="amenities-heading"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              color: 'var(--color-dark)',
              lineHeight: 1.15,
            }}
          >
            {t('amenities.heading')}
          </h2>
          <div className="mx-auto mt-4" style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-terracotta)' }} aria-hidden="true" />
        </motion.div>

        {/* ── Interactive Category Filters ──────────────── */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-16" role="tablist">
          {([
            { id: 'all', label: lang === 'hi' ? 'सभी सुविधाएं' : 'All Facilities' },
            { id: 'academics', label: lang === 'hi' ? 'अकादमिक ब्लॉक' : 'Academic Wing' },
            { id: 'utilities', label: lang === 'hi' ? 'मूलभूत सुविधाएं' : 'Utility & Wellness' },
            { id: 'recreation', label: lang === 'hi' ? 'खेल व मनोरंजन' : 'Physical & Sports' },
          ] as const).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              className="px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 border"
              style={{
                fontFamily: 'var(--font-body)',
                backgroundColor: activeTab === tab.id ? 'var(--color-dark)' : 'transparent',
                color: activeTab === tab.id ? '#fff' : 'var(--color-muted)',
                borderColor: activeTab === tab.id ? 'var(--color-dark)' : 'var(--color-border)',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Infographic Panel Grid ──────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredAmenities.map((item, i) => {
              const details = getInfographicDetails(item.id);
              return (
                <motion.div
                  key={item.id}
                  layout
                  variants={zoomDelayed(i * 0.05)}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  viewport={{ once: true }}
                  className="group relative p-8 flex flex-col justify-between"
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid var(--color-border)',
                    minHeight: '260px',
                  }}
                >
                  {/* Decorative corner lines */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-border group-hover:border-terracotta transition-colors duration-300" aria-hidden="true" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-border group-hover:border-terracotta transition-colors duration-300" aria-hidden="true" />

                  {/* Top line with category number and visual diagram */}
                  <div className="flex justify-between items-start">
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2rem',
                        fontWeight: 300,
                        color: `${details.color}25`,
                        lineHeight: 1,
                      }}
                    >
                      {item.icon}
                    </span>
                    <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      {details.visual}
                    </div>
                  </div>

                  {/* Center stats metric */}
                  <div className="my-6">
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        color: details.color,
                        lineHeight: 1,
                      }}
                    >
                      {details.metric}
                    </div>
                    <div
                      className="mt-1"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--color-dark)',
                      }}
                    >
                      {t(item.titleKey as Parameters<typeof t>[0])}
                    </div>
                  </div>

                  {/* Bottom descriptive block */}
                  <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '12px' }} className="flex justify-between items-end gap-4">
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8rem',
                        color: 'var(--color-muted)',
                        lineHeight: 1.5,
                      }}
                      className="flex-1"
                    >
                      {details.subtext}
                    </p>
                    <span className="text-[8px] font-mono text-muted/20 select-none tracking-widest hidden sm:inline whitespace-nowrap">
                      [30.54°N]
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
