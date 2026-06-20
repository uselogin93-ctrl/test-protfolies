'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const orbTechs = [
  { label: 'Next.js', angle: 0 },
  { label: 'React', angle: 51 },
  { label: 'JavaScript', angle: 102 },
  { label: 'MongoDB', angle: 154 },
  { label: 'Python', angle: 205 },
  { label: 'SQL', angle: 257 },
  { label: 'Power BI', angle: 308 },
];

export default function HeroSection({ data }) {
  const orbRef = useRef(null);

  useEffect(() => {
    let frame;
    let angle = 0;

    const animate = () => {
      angle += 0.3;
      if (orbRef.current) {
        orbRef.current.style.transform = `rotate(${angle}deg)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '64px',
      }}
    >
      {/* Background glow */}
      <div className="glow-dot" style={{ width: '600px', height: '600px', top: '-200px', right: '-100px' }} />
      <div className="glow-dot" style={{ width: '400px', height: '400px', bottom: '-100px', left: '-100px', background: 'var(--accent-warm)' }} />

      <div className="container-custom" style={{ width: '100%' }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* LEFT COLUMN */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(232, 85, 58, 0.1)',
                border: '1px solid rgba(232, 85, 58, 0.3)',
                borderRadius: '9999px',
                padding: '0.4rem 1.1rem',
                marginBottom: '2rem',
              }}
            >
              <span
                style={{
                  width: '8px', height: '8px',
                  background: '#4ade80',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite',
                  boxShadow: '0 0 0 3px rgba(74, 222, 128, 0.2)',
                }}
              />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--accent)', textTransform: 'uppercase' }}>
                Available For Hire
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: '-0.04em',
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
              }}
            >
              <span style={{ display: 'block' }}>DATA-DRIVEN</span>
              <span style={{ display: 'block' }}>FULL STACK</span>
              <span
                className="gradient-text"
                style={{ display: 'block', fontSize: '102%' }}
              >
                DEVELOPER
              </span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                maxWidth: '480px',
                marginBottom: '2.5rem',
              }}
            >
              I build scalable web applications and transform business data into actionable insights.
              Based in <span style={{ color: 'var(--text-primary)' }}>{data.Personl_detail.Loction}</span>.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/web" className="btn-primary">
                View Projects →
              </Link>
              <Link href="/contact" className="btn-ghost">
                Contact Me
              </Link>
            </div>

            {/* Stats */}
            <div
              style={{
                display: 'flex',
                gap: '2.5rem',
                marginTop: '3.5rem',
                paddingTop: '2.5rem',
                borderTop: '1px solid var(--border)',
              }}
            >
              {[
                { num: `${data.webDev_projects.length}+`, label: 'Web Projects' },
                { num: `${data.dataAnalysis_projects.length}+`, label: 'Data Dashboards' },
                { num: `${data.certifications.length}+`, label: 'Certifications' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>
                    {stat.num}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — interactive Orb */}
          <div
            className="hero-orb-col"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '420px',
                height: '420px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Rotating outer rings */}
              <div
                className="orb-ring"
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '1px dashed rgba(232, 85, 58, 0.2)',
                }}
              />
              <div
                className="orb-ring"
                style={{
                  position: 'absolute',
                  inset: '30px',
                  borderRadius: '50%',
                  border: '1px dashed rgba(212, 165, 116, 0.2)',
                  animationDirection: 'reverse',
                  animationDuration: '18s',
                }}
              />

              {/* Tech labels orbiting */}
              <div
                ref={orbRef}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  transformOrigin: 'center',
                }}
              >
                {orbTechs.map((tech) => {
                  const rad = (tech.angle * Math.PI) / 180;
                  const r = 190;
                  const x = 50 + (r / 420) * 100 * Math.cos(rad);
                  const y = 50 + (r / 420) * 100 * Math.sin(rad);
                  return (
                    <div
                      key={tech.label}
                      style={{
                        position: 'absolute',
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        padding: '0.3rem 0.7rem',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                        whiteSpace: 'nowrap',
                        letterSpacing: '0.04em',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                      }}
                    >
                      {tech.label}
                    </div>
                  );
                })}
              </div>

              {/* Center avatar */}
              <div
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--surface-light), var(--surface))',
                  border: '2px solid rgba(232, 85, 58, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  zIndex: 2,
                  boxShadow: '0 0 60px rgba(232, 85, 58, 0.15)',
                }}
              >
                <div
                  style={{
                    fontSize: '3.5rem',
                    fontWeight: 700,
                    fontFamily: 'Clash Grotesk, sans-serif',
                    letterSpacing: '-0.04em',
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-warm))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                  }}
                >
                  SG
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginTop: '0.4rem', letterSpacing: '0.08em' }}>
                  FULL STACK
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase' }}>Scroll</span>
        <div
          style={{
            width: '24px',
            height: '40px',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              width: '3px',
              height: '8px',
              background: 'var(--accent)',
              borderRadius: '2px',
              animation: 'scroll-dot 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

    </section>
  );
}
