'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { amenities } from '@/data/school';
import { zoomIn, zoomDelayed } from '@/lib/motionVariants';

type InfrastructureTab = 'all' | 'benefits' | 'facilities';

export default function Amenities() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<InfrastructureTab>('all');

  const filteredAmenities = amenities.filter((item) =>
    activeTab === 'all' ? true : item.category === activeTab
  );

  // Custom infographic details for each facility
  const getInfographicDetails = (item: typeof amenities[number]) => {
    const isBenefit = item.category === 'benefits';
    
    // Choose beautiful color palettes
    const colors = isBenefit 
      ? ['var(--color-terracotta)', 'var(--color-terracotta-dark)', '#A0522D', '#CD853F', '#D2691E']
      : ['var(--color-olive)', 'var(--color-olive-light)', '#556B2F', '#6B8E23', '#8B7355'];
      
    const hash = item.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const color = colors[hash % colors.length];

    // Let's define the metric to render
    const metric = lang === 'hi' ? item.valueHi : item.value;
    
    // Description translation
    const subtext = t(item.descKey as Parameters<typeof t>[0]);

    // Let's design a modern clean visual representation using CSS shapes and micro-animations
    const visual = (
      <div 
        className="relative w-16 h-8 flex items-center justify-center border border-dashed rounded transition-colors duration-300" 
        style={{ borderColor: `${color}40` }}
      >
        <div 
          className="absolute inset-0 flex items-center justify-center opacity-10 font-mono text-[8px] uppercase tracking-wider pointer-events-none"
          style={{ color }}
        >
          {item.category === 'benefits' ? 'benefit' : 'facility'}
        </div>
        <span className="text-lg transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
      </div>
    );

    return {
      metric,
      subtext,
      color,
      visual,
    };
  };

  return (
    <section
      id="amenities"
      className="section-padding overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
      aria-labelledby="amenities-heading"
    >
      <div className="mx-auto px-3 md:px-5" style={{ maxWidth: '1200px' }}>
        {/* ── Heading ─────────────────────────────────── */}
        <motion.div
          className="text-center mb-6"
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
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
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
        <div className="flex justify-center flex-wrap gap-2 md:gap-3 mb-8" role="tablist">
          {([
            { id: 'all', label: lang === 'hi' ? 'सभी' : 'All' },
            { id: 'benefits', label: lang === 'hi' ? 'शिक्षा व लाभ' : 'Education & Benefits' },
            { id: 'facilities', label: lang === 'hi' ? 'विकास व सुविधाएं' : 'Development & Facilities' },
          ] as const).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              className="px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 border rounded-lg"
              style={{
                fontFamily: 'var(--font-body)',
                backgroundColor: activeTab === tab.id ? 'var(--color-dark)' : 'transparent',
                color: activeTab === tab.id ? '#fff' : 'var(--color-muted)',
                borderColor: activeTab === tab.id ? 'var(--color-dark)' : 'var(--color-border)',
                borderRadius: '8px',
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
              const details = getInfographicDetails(item);
              return (
                <motion.div
                  key={item.id}
                  layout
                  variants={zoomDelayed(i * 0.05)}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  viewport={{ once: true }}
                  className="group relative p-8 flex flex-col justify-between rounded-xl"
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
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
                  <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '12px' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8rem',
                        color: 'var(--color-muted)',
                        lineHeight: 1.5,
                      }}
                    >
                      {details.subtext}
                    </p>
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
