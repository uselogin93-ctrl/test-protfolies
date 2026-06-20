export default function ContactCTA() {
  return (
    <section className="section-wrapper">
      <div className="container-custom">
        <div
          style={{
            background: 'linear-gradient(135deg, var(--surface), rgba(232,85,58,0.06))',
            border: '1px solid rgba(232,85,58,0.15)',
            borderRadius: '24px',
            padding: 'clamp(2.5rem, 5vw, 5rem)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background orbs */}
          <div style={{
            position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)',
            width: '300px', height: '300px',
            background: 'radial-gradient(circle, rgba(232,85,58,0.12), transparent)',
            borderRadius: '50%', pointerEvents: 'none',
          }} />

          <div className="section-label" style={{ margin: '0 auto 1.5rem', display: 'inline-flex' }}>
            📩 Let's Connect
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
            position: 'relative', zIndex: 1,
          }}>
            Have a project in mind?<br />
            <span className="gradient-text">Let's build it together.</span>
          </h2>

          <p style={{
            color: 'var(--text-secondary)', fontSize: '1.05rem',
            maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.7,
            position: 'relative', zIndex: 1,
          }}>
            I'm currently open to full-time roles and freelance opportunities in web development and data analytics.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            <a href="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
              Get In Touch →
            </a>
            <a
              href="mailto:shashikantshankar707@gmail.com"
              className="btn-ghost"
              style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}
            >
              Send Email
            </a>
          </div>

          {/* Floating stats */}
          <div style={{
            display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap',
            marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)',
            position: 'relative', zIndex: 1,
          }}>
            {[
              { icon: '⚡', label: 'Response within 24 hours' },
              { icon: '🌍', label: 'Remote-friendly' },
              { icon: '🔥', label: 'Available immediately' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
