'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { galleryEvents } from '@/data/school';
import { fadeUp, overlayVariants, modalVariants } from '@/lib/motionVariants';
import type { GalleryEvent } from '@/types';

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
          {/* Geotag */}
          <span
            className="absolute bottom-3 left-3 px-2 py-1 text-xs font-medium"
            style={{
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: '#fff',
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
            }}
          >
            {event.geoTag}
          </span>
        </div>

        {/* Content */}
        <div className="p-8">
          <p
            className="mb-2"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-terracotta)',
            }}
          >
            {t(event.dateKey as Parameters<typeof t>[0])}
          </p>
          <h3
            className="mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--color-dark)',
            }}
          >
            {t(event.titleKey as Parameters<typeof t>[0])}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--color-muted)',
              lineHeight: 1.7,
            }}
          >
            {t(event.descriptionKey as Parameters<typeof t>[0])}
          </p>
          <p
            className="mt-4"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              color: 'var(--color-olive)',
              fontWeight: 600,
            }}
          >
            📍 {event.location}
          </p>
        </div>

        {/* Close button */}
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

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const closeModal = useCallback(() => setSelectedEvent(null), []);

  // Prevent body scroll when modal open
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
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1200px' }}>
        <motion.p
          className="section-label mb-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t('gallery.sectionTitle')}
        </motion.p>

        <motion.h2
          id="gallery-heading"
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
          {t('gallery.heading')}
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
            marginBottom: '3rem',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Horizontal carousel */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div
          ref={scrollContainerRef}
          className="gallery-scroll flex gap-5 overflow-x-auto px-6 md:px-10 pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
          role="list"
          aria-label="Gallery carousel"
        >
          {galleryEvents.map((event, i) => (
            <motion.button
              key={event.id}
              role="listitem"
              onClick={() => setSelectedEvent(event)}
              className="group flex-shrink-0 relative overflow-hidden transition-all duration-300"
              style={{
                width: 'clamp(260px, 30vw, 340px)',
                aspectRatio: '3/4',
                border: '1px solid var(--color-border)',
                scrollSnapAlign: 'start',
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              aria-label={`View: ${t(event.titleKey as Parameters<typeof t>[0])}`}
            >
              {/* Image */}
              <Image
                src={event.imageSrc}
                alt={t(event.titleKey as Parameters<typeof t>[0])}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="340px"
              />

              {/* Overlay gradient — bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
                }}
                aria-hidden="true"
              />

              {/* Geotag — top left */}
              <span
                className="absolute top-3 left-3 px-2 py-1 text-xs"
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: 'rgba(255,255,255,0.9)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                {event.geoTag}
              </span>

              {/* Title — bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-terracotta)',
                  }}
                >
                  {t(event.dateKey as Parameters<typeof t>[0])}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#fff',
                    lineHeight: 1.3,
                  }}
                >
                  {t(event.titleKey as Parameters<typeof t>[0])}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Event detail modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventDetailModal event={selectedEvent} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}
