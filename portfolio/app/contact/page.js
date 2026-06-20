'use client';

import { useState } from 'react';

const contactCards = [
  {
    icon: '📧',
    label: 'Email (Web Dev)',
    value: 'shashikantshankar707@gmail.com',
    href: 'mailto:shashikantshankar707@gmail.com',
    color: 'var(--accent)',
  },
  {
    icon: '📊',
    label: 'Email (Data)',
    value: 'shashikantds090@gmail.com',
    href: 'mailto:shashikantds090@gmail.com',
    color: 'var(--accent-warm)',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'shashikant-giri-7a4549297',
    href: 'https://www.linkedin.com/in/shashikant-giri-7a4549297',
    color: '#0077b5',
  },
  {
    icon: '🐙',
    label: 'GitHub (Web)',
    value: 'Shashikantgiri-web',
    href: 'https://github.com/Shashikantgiri-web',
    color: '#f0f0f0',
  },
  {
    icon: '🔬',
    label: 'GitHub (Data)',
    value: 'shashikant-ds636',
    href: 'https://github.com/shashikant-ds636',
    color: '#f0f0f0',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 7873059283',
    href: 'tel:+917873059283',
    color: '#4ade80',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Page Hero */}
      <section
        style={{
          padding: '5rem 0 4rem',
          background: 'linear-gradient(180deg, rgba(232,85,58,0.04) 0%, transparent 100%)',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="glow-dot" style={{ width: '400px', height: '400px', top: '-150px', right: '5%', opacity: 0.1 }} />
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ display: 'inline-flex', margin: '0 auto 1.5rem' }}>
            📩 Get In Touch
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: '1.25rem', lineHeight: 1.05 }}>
            Let's Work<br />
            <span className="gradient-text">Together</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            I'm currently open to full-time roles, freelance projects, and collaborations in web development and data analytics.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-wrapper" style={{ paddingBottom: '2rem' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s var(--ease-custom)',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${card.color}40`;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 10px 30px rgba(0,0,0,0.3)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0,
                  background: `${card.color}12`, border: `1px solid ${card.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem',
                }}>
                  {card.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.25rem' }}>
                    {card.label}
                  </div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '0.875rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {card.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>✉️ Send a Message</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '2.5rem' }}>
              Drop Me a Line
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="form-input"
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project, role, or anything you'd like to discuss..."
                  className="form-input"
                  rows={6}
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div style={{
                  background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.25)',
                  borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '1.5rem',
                  color: '#4ade80', fontSize: '0.9rem', fontWeight: 500,
                }}>
                  ✅ Message sent successfully! I'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div style={{
                  background: 'rgba(232,85,58,0.08)', border: '1px solid rgba(232,85,58,0.25)',
                  borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '1.5rem',
                  color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 500,
                }}>
                  ❌ Something went wrong. Please try emailing me directly at shashikantshankar707@gmail.com
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '1.1rem', opacity: status === 'loading' ? 0.7 : 1 }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>

      </section>
    </div>
  );
}
