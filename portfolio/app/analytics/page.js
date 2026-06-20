import apiData from '@/public/api.json';
import ProjectCard from '@/components/ProjectCard';

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const metadata = {
  title: 'Data Analytics Projects | Shashikant Giri',
  description:
    'interactive Power BI dashboards and data analytics projects by Shashikant Giri — turning raw data into business insights.',
};

const kpiData = [
  { label: 'Dashboards Built', value: '3+', icon: '📊' },
  { label: 'Tools Mastered', value: '6+', icon: '🛠️' },
  { label: 'Business Insights', value: '20+', icon: '💡' },
];

export default function AnalyticsPage() {
  const projects = apiData.dataAnalysis_projects;
  const skills = apiData.Data_Analytics_Skills;

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Page Hero */}
      <section
        style={{
          padding: '5rem 0 4rem',
          background: 'linear-gradient(180deg, rgba(212,165,116,0.06) 0%, transparent 100%)',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="glow-dot"
          style={{ width: '400px', height: '400px', top: '-150px', left: '5%', background: 'var(--accent-warm)', opacity: 0.08 }}
        />
        <div className="container-custom">
          <div className="section-label" style={{ color: 'var(--accent-warm)', background: 'rgba(212,165,116,0.1)', borderColor: 'rgba(212,165,116,0.25)' }}>
            📊 Data Analytics
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              marginBottom: '1rem',
              lineHeight: 1.05,
            }}
          >
            Data & Analytics<br />
            <span
              style={{
                background: 'linear-gradient(135deg, var(--accent-warm), var(--accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Dashboards
            </span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '560px', lineHeight: 1.7 }}>
            interactive Power BI dashboards and data-driven solutions that transform raw business data into actionable insights and decision-support tools.
          </p>

          {/* KPI Row */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            {kpiData.map((kpi) => (
              <div
                key={kpi.label}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '1.25rem 1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <span style={{ fontSize: '1.6rem' }}>{kpi.icon}</span>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-warm)', fontFamily: 'Clash Grotesk, sans-serif', letterSpacing: '-0.02em', lineHeight: 1 }}>
                    {kpi.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {kpi.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skill tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '2rem' }}>
            {skills.map((s) => (
              <span
                key={s}
                style={{
                  background: 'rgba(212,165,116,0.08)',
                  color: 'var(--accent-warm)',
                  border: '1px solid rgba(212,165,116,0.2)',
                  padding: '0.4rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-wrapper">
        <div className="container-custom">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '1.5rem',
              marginBottom: '4rem',
            }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                type="analytics"
                slug={slugify(project.name)}
              />
            ))}
          </div>

          {/* Power BI Embed Section */}
          <div style={{ marginTop: '2rem' }}>
            <div className="section-label" style={{ color: 'var(--accent-warm)', background: 'rgba(212,165,116,0.1)', borderColor: 'rgba(212,165,116,0.25)', marginBottom: '1.5rem' }}>
              📺 Live Dashboards
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '2rem' }}>
              View interactive Dashboards
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {projects.filter(p => p['powerBi-link']).map((project) => (
                <div
                  key={project.name}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{
                    padding: '1.25rem 1.5rem',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <div>
                      <h3 style={{ fontFamily: 'Clash Grotesk, sans-serif', fontSize: '1rem', fontWeight: 700 }}>{project.name}</h3>
                      <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>Power BI interactive Dashboard</p>
                    </div>
                    <a
                      href={project['powerBi-link']}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ padding: '0.55rem 1.2rem', fontSize: '0.8rem', flexShrink: 0 }}
                    >
                      Open Full View ↗
                    </a>
                  </div>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src={project['powerBi-link']}
                      title={project.name}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                      }}
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
