'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { galleryImages } from '@/data/school';
import type { GalleryImage } from '@/types';

function PlaceholderImage({ image, onClick }: { image: GalleryImage; onClick: () => void }) {
  const { t } = useLanguage();
  const colors = ['#EEF5EF', '#FDF1E0', '#F0F4FF', '#FFF5EE', '#F5F0FF', '#EEFAF5'];
  const idx = parseInt(image.id.replace('g', '')) - 1;
  const bg = colors[idx % colors.length];

  return (
    <button
      onClick={onClick}
      className="w-full rounded-xl overflow-hidden relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-orange)]"
      style={{
        aspectRatio: image.span === 'tall' ? '3/4' : '4/3',
        backgroundColor: bg,
        border: '1px solid var(--color-brand-border)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '8px',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      aria-label={`Open gallery image: ${t(image.altKey as Parameters<typeof t>[0])}`}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.02)';
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
        (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
      }}
    >
      <span className="text-2xl" aria-hidden="true">📷</span>
      <span
        className="text-xs font-medium text-center px-3"
        style={{ color: 'var(--color-brand-muted)', fontFamily: 'var(--font-body)' }}
      >
        {t(image.altKey as Parameters<typeof t>[0])}
      </span>
      <span
        className="text-xs text-center px-3"
        style={{ color: 'rgba(107,114,128,0.6)', fontFamily: 'var(--font-body)' }}
      >
        [PLACEHOLDER]
      </span>
    </button>
  );
}

export default function Gallery() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : null));
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  return (
    <section
      id="gallery"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-brand-bg)' }}
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto px-5" style={{ maxWidth: '1200px' }}>
        <motion.p
          className="section-label mb-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('gallery.sectionTitle')}
        </motion.p>

        <motion.h2
          id="gallery-heading"
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            fontWeight: 700,
            color: 'var(--color-brand-dark)',
          }}
        >
          {t('gallery.heading')}
        </motion.h2>

        {/* Masonry grid */}
        <div className="masonry-grid" role="list" aria-label="School gallery">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              className="masonry-item"
              role="listitem"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <PlaceholderImage image={image} onClick={() => setLightboxIndex(i)} />
            </motion.div>
          ))}
        </div>

        <p
          className="text-center mt-6 text-xs"
          style={{ color: 'var(--color-brand-muted)', fontFamily: 'var(--font-body)' }}
        >
          Gallery images are placeholders. Add real school photos to <code>/public/images/gallery/</code>
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous image"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '600px', width: '90vw' }}
            >
              <div
                className="w-full rounded-2xl flex items-center justify-center flex-col gap-3"
                style={{
                  aspectRatio: '4/3',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <span className="text-4xl" aria-hidden="true">📷</span>
                <p className="text-white/80 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  {t(galleryImages[lightboxIndex].altKey as Parameters<typeof t>[0])}
                </p>
                <p className="text-white/40 text-xs">[PLACEHOLDER — Add real image]</p>
              </div>
              <p className="text-white/50 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
                {lightboxIndex + 1} / {galleryImages.length}
              </p>
            </motion.div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next image"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
