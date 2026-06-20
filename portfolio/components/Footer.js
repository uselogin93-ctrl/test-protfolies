import Link from 'next/link';
import apiData from '@/public/api.json';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 1,
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        padding: '3rem 0 1.5rem',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px', height: '36px',
                  background: 'var(--accent)', borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, color: '#fff', fontSize: '1rem',
                }}
              >
                SG
              </div>
              <span style={{ fontFamily: 'Clash Grotesk, sans-serif', fontWeight: 700, fontSize: '1.05rem' }}>
                Shashikant Giri
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '280px' }}>
              Data-Driven Full Stack Developer building modern web applications powered by analytics and business intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Clash Grotesk, sans-serif', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[['/', 'Home'], ['/web', 'Web Dev'], ['/analytics', 'Analytics'], ['/about', 'About'], ['/contact', 'Contact']].map(([href, label]) => (
                <Link key={href} href={href} className="nav-link" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Clash Grotesk, sans-serif', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href={`mailto:${apiData.Personl_detail.Email.WEbDev_email}`} className="footer-link-hover" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {apiData.Personl_detail.Email.WEbDev_email}
              </a>
              <a href={`tel:${apiData.Personl_detail.Contack_no}`} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {apiData.Personl_detail.Contack_no}
              </a>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                📍 {apiData.Personl_detail.Loction}
              </span>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 style={{ fontFamily: 'Clash Grotesk, sans-serif', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem' }}>
              Connect
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href={`https://${apiData.Linkedli}`} target="_blank" rel="noopener noreferrer"
                className="footer-link-hover"
                style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                LinkedIn ↗
              </a>
              <a href={apiData.Github.WebDev_Github_Link} target="_blank" rel="noopener noreferrer"
                className="footer-link-hover"
                style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}
              >
                GitHub (Web) ↗
              </a>
              <a href={apiData.Github.dataAnalysis_Github_Link} target="_blank" rel="noopener noreferrer"
                className="footer-link-hover"
                style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}
              >
                GitHub (Data) ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
            © {year} Shashikant Giri. All rights reserved.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
            Built with <span style={{ color: 'var(--accent)' }}>Next.js 15</span> + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
