'use client';

import Link from 'next/link';
import { useState } from 'react';

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const projectEmojis = {
  'Getmychap': '💰',
  'Link Tree': '🔗',
  'Hospital': '🏥',
  'University': '🎓',
  'URL': '🔗',
  'TO-DO': '✅',
  'PassOP': '🔐',
  'Twitter': '🐦',
  'Bootstrap': '🎨',
  'Bookoe': '📚',
  'Tiktok': '🎮',
};

function getEmoji(name) {
  const key = Object.keys(projectEmojis).find(k => name.includes(k));
  return key ? projectEmojis[key] : '🚀';
}

export default function FeaturedProjects({ webProjects, analyticsProjects }) {
  const featured = [
    ...webProjects.slice(0, 2),
    ...analyticsProjects.slice(0, 2),
  ];

  return (
    <section className="section-wrapper">
      <div className="container-custom">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="section-label">🚀 Featured Work</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em' }}>
              Projects that <span className="gradient-text">matter</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/web" className="btn-ghost" style={{ padding: '0.65rem 1.4rem', fontSize: '0.875rem' }}>Web Projects →</Link>
            <Link href="/analytics" className="btn-ghost" style={{ padding: '0.65rem 1.4rem', fontSize: '0.875rem' }}>Analytics →</Link>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'auto',
          gap: '1.25rem',
        }}>
          {featured.map((project, i) => {
            const isWeb = i < 2;
            const slug = slugify(project.name);
            const stack = project.techStack || project.TechStack || [];
            const spans = [
              'grid-column: span 7',
              'grid-column: span 5',
              'grid-column: span 5',
              'grid-column: span 7',
            ];

            return (
              <BentoCard
                key={project.name}
                project={project}
                isWeb={isWeb}
                slug={slug}
                stack={stack}
                colSpan={spans[i]}
                index={i}
              />
            );
          })}
        </div>
      </div>

    </section>
  );
}

function BentoCard({ project, isWeb, slug, stack, colSpan, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: `span ${index === 0 ? 7 : index === 1 ? 5 : index === 2 ? 5 : 7}`,
        minHeight: '280px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {/* Gradient bg accent */}
      <div style={{
        position: 'absolute',
        top: '-60px',
        right: '-60px',
        width: '200px',
        height: '200px',
        background: isWeb ? 'radial-gradient(circle, rgba(232,85,58,0.12), transparent)' : 'radial-gradient(circle, rgba(212,165,116,0.12), transparent)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div style={{
            width: '56px', height: '56px',
            background: isWeb ? 'rgba(232,85,58,0.1)' : 'rgba(212,165,116,0.1)',
            border: `1px solid ${isWeb ? 'rgba(232,85,58,0.2)' : 'rgba(212,165,116,0.2)'}`,
            borderRadius: '14px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.6rem',
          }}>
            {getEmoji(project.name)}
          </div>
          <span style={{
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: isWeb ? 'var(--accent)' : 'var(--accent-warm)',
            background: isWeb ? 'rgba(232,85,58,0.08)' : 'rgba(212,165,116,0.08)',
            border: `1px solid ${isWeb ? 'rgba(232,85,58,0.15)' : 'rgba(212,165,116,0.15)'}`,
            padding: '0.25rem 0.75rem', borderRadius: '9999px',
          }}>
            {isWeb ? 'Web Dev' : 'Analytics'}
          </span>
        </div>

        <h3 style={{ fontFamily: 'Clash Grotesk, sans-serif', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
          {project.name}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, flex: 1, marginBottom: '1.5rem' }}>
          {project.description.slice(0, 120)}...
        </p>

        {/* Tech Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {stack.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag" style={{ fontSize: '0.72rem' }}>{tech}</span>
          ))}
        </div>

        {/* Action row */}
        <div style={{
          display: 'flex', gap: '0.75rem', flexWrap: 'wrap',
          paddingTop: '1rem', borderTop: '1px solid var(--border)',
        }}>
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 600, transition: 'opacity 0.2s' }}>
              Live Demo ↗
            </a>
          )}
          {project['powerBi-link'] && (
            <a href={project['powerBi-link']} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 600 }}>
              Power BI ↗
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.82rem', color: 'var(--muted)', fontWeight: 600, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              GitHub
            </a>
          )}
          <Link href={`/${isWeb ? 'web' : 'analytics'}/${slug}`}
            style={{ fontSize: '0.82rem', color: 'var(--muted)', fontWeight: 600, marginLeft: 'auto' }}>
            Case Study →
          </Link>
        </div>
      </div>

      {/* Hover glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, ${isWeb ? 'rgba(232,85,58,0.04)' : 'rgba(212,165,116,0.04)'}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
      }} />
    </div>
  );
}
