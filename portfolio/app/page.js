import apiData from '@/public/api.json';
import HeroSection from '@/components/HeroSection';
import SkillsMarquee from '@/components/SkillsMarquee';
import FeaturedProjects from '@/components/FeaturedProjects';
import CardSwap from '@/components/CardSwap';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata = {
  title: 'Shashikant Giri | Data-Driven Full Stack Developer',
  description:
    'Portfolio of Shashikant Giri — Full Stack Developer & Data Analyst. Building scalable web applications and Power BI dashboards.',
};

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function HomePage() {
  const data = apiData;

  return (
    <>
      {/* HERO */}
      <HeroSection data={data} />

      {/* SKILLS MARQUEE */}
      <SkillsMarquee />

      {/* FEATURED PROJECTS */}
      <FeaturedProjects
        webProjects={data.webDev_projects}
        analyticsProjects={data.dataAnalysis_projects}
      />

      {/* CARD SWAP SHOWCASE */}
      <CardSwap />

      {/* PROFESSIONAL TIMELINE */}
      <section className="section-wrapper" style={{ background: 'var(--surface)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            {/* Education Timeline */}
            <div>
              <div className="section-label">🎓 Education</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '2.5rem' }}>
                Academic Journey
              </h2>
              <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '1px solid var(--border)' }}>
                {data.EDUCATION.map((edu, i) => (
                  <div
                    key={i}
                    className="timeline-item"
                    style={{ position: 'relative', marginBottom: i < data.EDUCATION.length - 1 ? '2.5rem' : 0 }}
                  >
                    <div style={{
                      background: 'var(--surface-light)',
                      border: '1px solid var(--border)',
                      borderRadius: '14px',
                      padding: '1.5rem',
                      transition: 'border-color 0.3s',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                        <span style={{
                          fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                          color: 'var(--accent)', background: 'rgba(232,85,58,0.1)', border: '1px solid rgba(232,85,58,0.2)',
                          padding: '0.2rem 0.6rem', borderRadius: '9999px',
                        }}>{edu.year}</span>
                        <span style={{
                          fontSize: '0.7rem', color: edu.status === 'Graduated' ? '#4ade80' : 'var(--accent-warm)',
                          fontWeight: 700,
                        }}>{edu.status}</span>
                      </div>
                      <h4 style={{ fontFamily: 'Clash Grotesk', fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                        {edu.course}
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{edu.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="section-label">🏆 Certifications</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '2.5rem' }}>
                Credentials
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="hover-lift-accent"
                    style={{
                      background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '14px',
                      padding: '1.5rem',
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
                      background: cert.currently ? 'rgba(212,165,116,0.1)' : 'rgba(232,85,58,0.1)',
                      border: `1px solid ${cert.currently ? 'rgba(212,165,116,0.2)' : 'rgba(232,85,58,0.2)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                    }}>
                      {cert.currently ? '🔄' : '✅'}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Clash Grotesk', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                        {cert.name}
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '0.3rem' }}>
                        {cert.issuedBy}
                      </p>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{cert.year}</span>
                        <span style={{
                          fontSize: '0.7rem', fontWeight: 700, padding: '0.15rem 0.6rem',
                          borderRadius: '9999px',
                          background: cert.currently ? 'rgba(212,165,116,0.1)' : 'rgba(74,222,128,0.1)',
                          color: cert.currently ? 'var(--accent-warm)' : '#4ade80',
                          border: `1px solid ${cert.currently ? 'rgba(212,165,116,0.2)' : 'rgba(74,222,128,0.2)'}`,
                        }}>
                          {cert.currently ? 'Pursuing' : cert.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <ContactCTA />
    </>
  );
}
