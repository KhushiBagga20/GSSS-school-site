'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { galleryEvents } from '@/data/school';
import { zoomIn, zoomDelayed, overlayVariants, modalVariants } from '@/lib/motionVariants';
import type { GalleryEvent } from '@/types';


/* ─── Event Detail Modal ─────────────────────────────────── */
function EventDetailModal({
  event,
  onClose,
}: {
  event: GalleryEvent;
  onClose: () => void;
}) {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
      style={{ backgroundColor: 'rgba(0,0,0,0.88)' }}
      role="dialog"
      aria-modal="true"
      aria-label={t('gallery.eventDetail')}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full overflow-hidden"
        style={{
          maxWidth: '700px',
          backgroundColor: 'var(--color-bg)',
          border: '1px solid var(--color-border)',
        }}
      >
        {/* Image */}
        <div className="relative" style={{ aspectRatio: '16/9' }}>
          <Image
            src={event.imageSrc}
            alt={t(event.titleKey as Parameters<typeof t>[0])}
            fill
            className="object-cover"
            sizes="700px"
          />
          <span
            className="absolute bottom-3 left-3 px-2 py-1 text-xs font-medium"
            style={{ backgroundColor: 'rgba(0,0,0,0.7)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '11px' }}
          >
            {event.geoTag}
          </span>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="mb-2" style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-terracotta)' }}>
            {t(event.dateKey as Parameters<typeof t>[0])}
          </p>
          <h3 className="mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-dark)' }}>
            {t(event.titleKey as Parameters<typeof t>[0])}
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
            {t(event.descriptionKey as Parameters<typeof t>[0])}
          </p>
          <p className="mt-4" style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-olive)', fontWeight: 600 }}>
            📍 {event.location}
          </p>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors duration-200"
          aria-label={t('gallery.close')}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ─── Gallery Component ──────────────────────────────────── */
export default function Gallery() {
  const { t } = useLanguage();
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);

  const closeModal = useCallback(() => setSelectedEvent(null), []);

  useEffect(() => {
    document.body.style.overflow = selectedEvent ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedEvent]);

  return (
    <section
      id="gallery"
      className="section-padding"
      style={{ backgroundColor: '#fff' }}
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1100px' }}>

        {/* ── Centered heading ───────────────────────────── */}
        <motion.div
          className="text-center mb-14"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
            <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--color-border)' }} />
            <svg width="8" height="8" viewBox="0 0 8 8" fill="var(--color-terracotta)" aria-hidden="true"><circle cx="4" cy="4" r="3" /></svg>
            <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--color-border)' }} />
          </div>

          <p className="section-label mb-3">{t('gallery.sectionTitle')}</p>
          <h2
            id="gallery-heading"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 700,
              color: 'var(--color-dark)',
              lineHeight: 1.15,
            }}
          >
            {t('gallery.heading')}
          </h2>
        </motion.div>

        {/* ── Gallery grid — staggered collage tiles with zoom ──── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {galleryEvents.map((event, i) => {
            const designs = [
              { aspect: 'aspect-[4/3]', offset: 'lg:-translate-y-6' },
              { aspect: 'aspect-[1/1]', offset: 'lg:translate-y-8' },
              { aspect: 'aspect-[3/4]', offset: 'lg:-translate-y-4' },
              { aspect: 'aspect-[3/4]', offset: 'lg:translate-y-6' },
              { aspect: 'aspect-[4/3]', offset: 'lg:-translate-y-8' },
              { aspect: 'aspect-[1/1]', offset: 'lg:translate-y-4' },
            ];
            const design = designs[i % designs.length];
            return (
              <motion.button
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                variants={zoomDelayed(i * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`group relative overflow-hidden text-left ${design.aspect} ${design.offset} transition-transform duration-300`}
                style={{ border: '1px solid var(--color-border)' }}
                aria-label={`View: ${t(event.titleKey as Parameters<typeof t>[0])}`}
              >
                <Image
                  src={event.imageSrc}
                  alt={t(event.titleKey as Parameters<typeof t>[0])}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)', opacity: 0.7 }} aria-hidden="true" />

                {/* Geotag */}
                <span className="absolute top-3 left-3 px-2 py-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.05em' }}>
                  {event.geoTag}
                </span>

                {/* Corner accent lines */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M20 0v10M10 0h10" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                  </svg>
                </div>

                {/* Text at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="mb-1" style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#E5A988' }}>
                    {t(event.dateKey as Parameters<typeof t>[0])}
                  </p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>
                    {t(event.titleKey as Parameters<typeof t>[0])}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Event detail modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventDetailModal event={selectedEvent} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}
