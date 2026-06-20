'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/web', label: 'Web Dev' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        background: scrolled
          ? 'rgba(12,12,12,0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border 0.4s ease',
      }}
    >
      <div
        className="container-custom"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              background: 'var(--accent)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Clash Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              color: '#fff',
              letterSpacing: '-0.02em',
            }}
          >
            SG
          </div>
          <span
            style={{
              fontFamily: 'Clash Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
            }}
          >
            Shashikant
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          className="desktop-nav"
          style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: pathname === link.href ? 'var(--accent)' : 'var(--text-secondary)',
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="btn-primary"
            style={{ padding: '0.55rem 1.4rem', fontSize: '0.875rem' }}
          >
            Hire Me ↗
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '0.5rem',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                background: 'var(--text-primary)',
                transition: 'all 0.3s ease',
                transform:
                  menuOpen && i === 0
                    ? 'rotate(45deg) translate(4.5px, 4.5px)'
                    : menuOpen && i === 1
                    ? 'scaleX(0)'
                    : menuOpen && i === 2
                    ? 'rotate(-45deg) translate(4.5px, -4.5px)'
                    : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '64px',
            left: 0,
            right: 0,
            background: 'rgba(14,14,14,0.97)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: pathname === link.href ? 'var(--accent)' : 'var(--text-secondary)',
                fontWeight: 500,
                fontSize: '1rem',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            Hire Me ↗
          </Link>
        </div>
      )}

    </nav>
  );
}
