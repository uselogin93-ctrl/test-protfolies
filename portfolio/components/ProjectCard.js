'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProjectCard({ project, type = 'web', slug }) {
  const [hovered, setHovered] = useState(false);

  const techColors = {
    'Next Js': '#000',
    'React Js': '#61dafb',
    'MongoDB': '#47a248',
    'Tailwind CSS': '#38bdf8',
    'Power BI': '#f2c811',
    'Python': '#3776ab',
    'Excel': '#217346',
    'HTML': '#e34f26',
    'CSS': '#1572b6',
    'JavaScript': '#f7df1e',
  };

  const stack = project.techStack || project.TechStack || [];
  const isAnalytics = type === 'analytics';

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      {/* Project Image / Placeholder */}
      <div
        style={{
          height: '200px',
          background: `linear-gradient(135deg, var(--surface-light), rgba(232,85,58,0.08))`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {/* Animated background pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(232,85,58,0.12) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(212,165,116,0.08) 0%, transparent 50%)',
          }}
        />
        <div
          style={{
            fontSize: '3rem',
            fontFamily: 'Clash Grotesk, sans-serif',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--accent), var(--accent-warm))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            zIndex: 1,
            letterSpacing: '-0.04em',
          }}
        >
          {isAnalytics ? '📊' : project.name.charAt(0).toUpperCase()}
        </div>

        {/* Hover overlay with links */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(12,12,12,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: 2,
          }}
        >
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo ↗
            </a>
          )}
          {project['powerBi-link'] && (
            <a
              href={project['powerBi-link']}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}
              onClick={(e) => e.stopPropagation()}
            >
              Power BI ↗
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Type badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: isAnalytics ? 'var(--accent-warm)' : 'var(--accent)',
              background: isAnalytics ? 'rgba(212,165,116,0.1)' : 'rgba(232,85,58,0.1)',
              border: `1px solid ${isAnalytics ? 'rgba(212,165,116,0.2)' : 'rgba(232,85,58,0.2)'}`,
              padding: '0.2rem 0.7rem',
              borderRadius: '9999px',
            }}
          >
            {isAnalytics ? 'Analytics' : 'Web Dev'}
          </span>
          {slug && (
            <Link
              href={`/${type === 'web' ? 'web' : 'analytics'}/${slug}`}
              style={{ fontSize: '0.8rem', color: 'var(--muted)', transition: 'color 0.3s' }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--muted)')}
            >
              Details →
            </Link>
          )}
        </div>

        <h3
          style={{
            fontFamily: 'Clash Grotesk, sans-serif',
            fontSize: '1.1rem',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            marginBottom: '0.6rem',
            color: 'var(--text-primary)',
          }}
        >
          {project.name}
        </h3>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            lineHeight: 1.7,
            flex: 1,
            marginBottom: '1.25rem',
          }}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {stack.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
          {stack.length > 5 && (
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)', alignSelf: 'center' }}>
              +{stack.length - 5} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
