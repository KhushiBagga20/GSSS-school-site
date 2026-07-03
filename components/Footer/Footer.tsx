'use client';

import { useLanguage } from '@/lib/i18n';
import { schoolInfo } from '@/data/school';

const currentYear = new Date().getFullYear();
const lastUpdated = new Date().toLocaleDateString('en-IN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      id="contact"
      style={{ backgroundColor: 'var(--color-brand-green-light)', borderTop: '1px solid var(--color-brand-border)' }}
      aria-label="School contact information and footer"
    >
      <div
        className="mx-auto px-5 py-14"
        style={{ maxWidth: '1200px' }}
      >
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 mb-10">
          {/* School identity */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-1">
              <div
                className="rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                style={{
                  width: '42px',
                  height: '42px',
                  background: 'linear-gradient(135deg, #F4B66A 0%, #e09a4a 100%)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '16px',
                }}
                aria-hidden="true"
              >
                G
              </div>
              <div>
                <p
                  className="font-bold"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', color: 'var(--color-brand-dark)' }}
                >
                  {schoolInfo.name}
                </p>
                <p
                  style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-brand-muted)' }}
                >
                  Est. {schoolInfo.established}
                </p>
              </div>
            </div>
            <p
              style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-brand-muted)', lineHeight: 1.7 }}
            >
              {t('footer.managedBy')}
            </p>
            <p
              style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-brand-muted)' }}
            >
              UDISE: {schoolInfo.udiseCode}
            </p>
          </div>

          {/* Address */}
          <address
            className="not-italic flex flex-col gap-3"
            aria-label="School address"
          >
            <h2
              className="font-bold text-sm"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-brand-dark)' }}
            >
              Address
            </h2>
            <div className="flex items-start gap-2">
              <span aria-hidden="true" style={{ marginTop: '2px', flexShrink: 0 }}>📍</span>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-brand-muted)', lineHeight: 1.7 }}>
                {t('footer.address')}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span aria-hidden="true">📞</span>
              <a
                href={`tel:${schoolInfo.contact.phone.replace(/\s/g, '')}`}
                className="text-sm hover:text-[var(--color-brand-dark)] transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-brand-muted)' }}
              >
                {schoolInfo.contact.phone} {/* [PLACEHOLDER] */}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span aria-hidden="true">✉️</span>
              <a
                href={`mailto:${schoolInfo.contact.email}`}
                className="text-sm hover:text-[var(--color-brand-dark)] transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-brand-muted)' }}
              >
                {schoolInfo.contact.email}
              </a>
            </div>
          </address>

          {/* Office Hours */}
          <div className="flex flex-col gap-3">
            <h2
              className="font-bold text-sm"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-brand-dark)' }}
            >
              {t('footer.officeHours')}
            </h2>
            <div className="flex items-center gap-2">
              <span aria-hidden="true">🕘</span>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-brand-muted)' }}>
                {schoolInfo.contact.officeHours} {/* [PLACEHOLDER] */}
              </p>
            </div>

            {/* Quick info chips */}
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                `Classes VI–XII`,
                `Co-educational`,
                `Hindi Medium`,
              ].map((chip) => (
                <span
                  key={chip}
                  className="text-xs px-2 py-1 rounded-md"
                  style={{
                    backgroundColor: 'rgba(132,184,138,0.2)',
                    color: '#4a8c52',
                    fontFamily: 'var(--font-body)',
                    border: '1px solid rgba(132,184,138,0.3)',
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
          className="h-px w-full mb-6"
          style={{ backgroundColor: 'var(--color-brand-border)' }}
          aria-hidden="true"
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-brand-muted)' }}
          >
            {t('footer.copyright').replace('{year}', String(currentYear))}
          </p>
          <p
            style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-brand-muted)' }}
          >
            {t('footer.lastUpdated').replace('{date}', lastUpdated)}
          </p>
        </div>
      </div>
    </footer>
  );
}
