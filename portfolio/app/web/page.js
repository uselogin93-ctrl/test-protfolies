import apiData from '@/public/api.json';
import ProjectCard from '@/components/ProjectCard';

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const metadata = {
  title: 'Web Development Projects | Shashikant Giri',
  description:
    'Explore full-stack web development projects built with Next.js, React, MongoDB and more by Shashikant Giri.',
};

export default function WebPage() {
  const projects = apiData.webDev_projects;
  const skills = apiData.WebDev_Skills;

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Page Hero */}
      <section
        style={{
          padding: '5rem 0 4rem',
          background: 'linear-gradient(180deg, rgba(232,85,58,0.05) 0%, transparent 100%)',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="glow-dot" style={{ width: '400px', height: '400px', top: '-150px', right: '5%', opacity: 0.1 }} />
        <div className="container-custom">
          <div className="section-label">💻 Portfolio</div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              marginBottom: '1rem',
              lineHeight: 1.05,
            }}
          >
            Web Development<br />
            <span className="gradient-text">Projects</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '560px', lineHeight: 1.7 }}>
            Full-stack web applications built with modern technologies. From crowdfunding platforms to password managers — each project solves a real problem.
          </p>

          {/* Skill Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '2rem' }}>
            {[...skills.frontEnd, ...skills.backend, ...skills.database].map((s) => (
              <span key={s} className="skill-badge">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-wrapper">
        <div className="container-custom">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Showing <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{projects.length}</span> projects
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                type="web"
                slug={slugify(project.name)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
