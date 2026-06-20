'use client';

const skills = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Python', icon: '🐍' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Excel', icon: '📊' },
  { name: 'Power BI', icon: '📈' },
  { name: 'Tailwind', icon: '💨' },
  { name: 'Figma', icon: '🎯' },
  { name: 'Express.js', icon: '🚀' },
];

export default function SkillsMarquee() {
  const doubled = [...skills, ...skills];

  return (
    <section className="section-wrapper" style={{ padding: '3rem 0', overflow: 'hidden' }}>
      {/* Label */}
      <div className="container-custom" style={{ marginBottom: '2rem' }}>
        <div className="section-label">⚡ Technical Stack</div>
        <h2
          style={{
            fontFamily: 'Clash Grotesk, sans-serif',
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          Skills & Technologies
        </h2>
      </div>

      {/* Marquee Row 1 */}
      <div className="marquee-wrapper" style={{ marginBottom: '1rem' }}>
        <div className="marquee-track">
          {doubled.map((skill, i) => (
            <div
              key={i}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '0.75rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                whiteSpace: 'nowrap',
                cursor: 'default',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(232, 85, 58, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(232, 85, 58, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--surface)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{skill.icon}</span>
              <span
                style={{
                  fontFamily: 'Clash Grotesk, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.02em',
                }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — reversed */}
      <div className="marquee-wrapper">
        <div className="marquee-track" style={{ animationDirection: 'reverse', animationDuration: '30s' }}>
          {doubled.reverse().map((skill, i) => (
            <div
              key={i}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '0.75rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                whiteSpace: 'nowrap',
                cursor: 'default',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(232, 85, 58, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(232, 85, 58, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--surface)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{skill.icon}</span>
              <span style={{ fontFamily: 'Clash Grotesk, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
