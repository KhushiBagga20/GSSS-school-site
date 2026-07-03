'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n';
import { schoolInfo } from '@/data/school';

const navLinks = [
  { labelKey: 'nav.home' as const, href: '#home' },
  { labelKey: 'nav.vision' as const, href: '#vision' },
  { labelKey: 'nav.gallery' as const, href: '#gallery' },
  { labelKey: 'nav.amenities' as const, href: '#amenities' },
  { labelKey: 'nav.staff' as const, href: '#staff' },
  { labelKey: 'nav.principal' as const, href: '#principal' },
];

export default function Footer() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentYear = mounted ? new Date().getFullYear() : 2026;
  const lastUpdated = mounted
    ? new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  const handleNavClick = (href: string) => {

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: '#2C3427',
        color: '#d4cfc6',
      }}
      aria-label="School contact information and footer"
    >
      <div
        className="mx-auto px-6 md:px-10 py-16"
        style={{ maxWidth: '1200px' }}
      >
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 mb-12">
          {/* School identity */}
          <div className="flex flex-col gap-4">
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#FAF7F2',
              }}
            >
              {schoolInfo.name}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                color: '#9a9588',
                lineHeight: 1.7,
              }}
            >
              {t('footer.managedBy')}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: '#7a7468',
              }}
            >
              UDISE: {schoolInfo.udiseCode}
            </p>

            {/* Quick nav links */}
            <nav className="flex flex-wrap gap-x-4 gap-y-2 mt-2" aria-label="Footer navigation">
              {navLinks.map(({ labelKey, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className="text-xs transition-colors duration-200 hover:text-[#FAF7F2]"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: '#9a9588',
                    fontWeight: 500,
                  }}
                >
                  {t(labelKey)}
                </button>
              ))}
            </nav>
          </div>

          {/* Address */}
          <address
            className="not-italic flex flex-col gap-4"
            aria-label="School address"
          >
            <h3
              className="text-sm"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                color: '#FAF7F2',
                letterSpacing: '0.05em',
              }}
            >
              Address
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: '#9a9588',
                lineHeight: 1.7,
              }}
            >
              {t('footer.address')}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${schoolInfo.contact.phone.replace(/\s/g, '')}`}
                className="text-sm transition-colors duration-200 hover:text-[#FAF7F2]"
                style={{ fontFamily: 'var(--font-body)', color: '#9a9588' }}
              >
                📞 {schoolInfo.contact.phone}
              </a>
              <a
                href={`mailto:${schoolInfo.contact.email}`}
                className="text-sm transition-colors duration-200 hover:text-[#FAF7F2]"
                style={{ fontFamily: 'var(--font-body)', color: '#9a9588' }}
              >
                ✉️ {schoolInfo.contact.email}
              </a>
            </div>
          </address>

          {/* Office Hours */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-sm"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                color: '#FAF7F2',
                letterSpacing: '0.05em',
              }}
            >
              {t('footer.officeHours')}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: '#9a9588',
              }}
            >
              {schoolInfo.contact.officeHours}
            </p>

            {/* Info chips */}
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                `Classes VI–XII`,
                `Co-educational`,
                `Hindi Medium`,
              ].map((chip) => (
                <span
                  key={chip}
                  className="text-xs px-2 py-1"
                  style={{
                    border: '1px solid rgba(143,160,126,0.3)',
                    color: 'var(--color-olive-light)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            marginBottom: '1.5rem',
          }}
          aria-hidden="true"
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#7a7468' }}
          >
            {t('footer.copyright').replace('{year}', String(currentYear))}
          </p>
          <p
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#7a7468' }}
          >
            {t('footer.lastUpdated').replace('{date}', lastUpdated)}
          </p>
        </div>
      </div>
    </footer>
  );
}
