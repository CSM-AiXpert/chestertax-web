'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { blogPosts, categories } from './data';

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const NextdoorIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <rect width="1024" height="1024" rx="160" fill="#4CAF50"/>
    <g fill="#FFFFFF">
      <rect x="292" y="225" width="90" height="170" rx="8"/>
      <path d="M140 470 L512 160 L884 470 L820 470 L512 235 L204 470 Z"/>
      <rect x="220" y="470" width="584" height="360" rx="8"/>
      <rect x="445" y="645" width="135" height="185" rx="8"/>
      <rect x="270" y="545" width="115" height="100" rx="8"/>
      <rect x="640" y="545" width="115" height="100" rx="8"/>
    </g>
  </svg>
);

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  return (
    <>
      <nav className="nav scrolled">
        <div className="nav-inner">
          <Link href="/" className="nav-brand">
            <img src="/logo-white.png" alt="Chester CPA" className="nav-logo" />
          </Link>
          <div className="nav-links">
            <a href="/#services">Services</a>
            <a href="/#about">About</a>
            <a href="/blog" style={{color:'var(--gold)'}}>Blog</a>
            <a href="/#contact">Contact</a>
            <a href="/#contact" className="btn btn-outline" style={{padding:'9px 20px',fontSize:'0.875rem'}}>Book Consultation</a>
          </div>
          <button className={`nav-hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`nav-overlay${open ? ' open' : ''}`} onClick={() => setOpen(false)} />
      <div className={`nav-drawer${open ? ' open' : ''}`}>
        <a href="/#services" onClick={() => setOpen(false)}>Services</a>
        <a href="/#about" onClick={() => setOpen(false)}>About</a>
        <a href="/blog" onClick={() => setOpen(false)} style={{color:'var(--gold)'}}>Blog</a>
        <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
        <a href="/#contact" className="nav-drawer-cta" onClick={() => setOpen(false)}>Book Consultation</a>
        <div className="nav-drawer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="nav-social-link" style={{color:'#1877F2',background:'rgba(24,119,242,0.1)',borderColor:'rgba(24,119,242,0.25)'}} aria-label="Facebook"><FacebookIcon /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-social-link" style={{color:'#0A66C2',background:'rgba(10,102,194,0.1)',borderColor:'rgba(10,102,194,0.25)'}} aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href="https://nextdoor.com" target="_blank" rel="noopener noreferrer" className="nav-social-link" style={{color:'#4CAF50',background:'rgba(76,175,80,0.1)',borderColor:'rgba(76,175,80,0.25)'}} aria-label="Nextdoor"><NextdoorIcon /></a>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <img src="/logo-white.png" alt="Chester CPA" className="footer-brand-logo" />
            <p className="footer-desc">Executive tax services for businesses and individuals. Complex returns are our specialty.</p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" style={{color:'#1877F2',background:'rgba(24,119,242,0.08)'}} aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" style={{color:'#0A66C2',background:'rgba(10,102,194,0.08)'}} aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://nextdoor.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" style={{color:'#90D743',background:'rgba(144,215,67,0.08)'}} aria-label="Nextdoor">
                <NextdoorIcon />
              </a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links">
              <li><a href="/#services">Services</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              <li><a href="/#services">Personal Income Tax</a></li>
              <li><a href="/#services">Business Tax Returns</a></li>
              <li><a href="/#services">QuickBooks Clean-Up</a></li>
              <li><a href="/#services">Financial Statements</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="mailto:patrick@chestertax.com">patrick@chestertax.com</a></li>
              <li><a href="tel:+18432716788">(843) 271-6788</a></li>
              <li>110 Traders Cross, Suite 215</li>
              <li>Okatie, SC 29909</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Chester CPA, PC. All rights reserved. Licensed CPA in South Carolina.
        </div>
      </div>
    </footer>
  );
}

export default function BlogPage() {
  useScrollReveal();

  return (
    <main>
      <Nav />

      <section className="blog-hero">
        <div className="blog-hero-img">
          <img src="/blog-hero.jpg" alt="Chester CPA Blog" />
        </div>
        <div className="blog-hero-overlay" />
        {/* Logo - full width above text, no overlay, not clipped */}
        <div className="blog-hero-logo">
          <img src="/logo-white.png" alt="Chester CPA" style={{height:80,width:'auto',filter:'drop-shadow(0 4px 16px rgba(0,0,0,0.5))'}} />
        </div>
        <div className="blog-hero-content">
          <span className="label" style={{marginBottom:12}}>Chester CPA Blog</span>
          <h1 className="h1" style={{marginBottom:16}}>Strategic Tax Planning,<br /><span className="gold">Accounting Insights</span></h1>
          <p className="hero-body" style={{marginBottom:0}}>
            Strategic tax planning, accounting insights, and small business financial guidance designed to help you stay several moves ahead.
          </p>
          <div style={{marginTop:28}}>
            <a href="/#contact" className="btn btn-solid">Schedule a Consultation</a>
          </div>
        </div>
      </section>

      <section className="section section-card">
        <div className="container">
          <div className="blog-filter-pills">
            {categories.map((cat) => (
              <a key={cat} href="#" className={`blog-filter-pill${cat === 'All' ? ' active' : ''}`}
                onClick={(e) => e.preventDefault()}>
                {cat}
              </a>
            ))}
          </div>

          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass blog-card reveal"
                style={{textDecoration:'none',transitionDelay:`${i*70}ms`}}
              >
                <div style={{overflow:'hidden'}}>
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80"
                    alt={post.title}
                    className="blog-card-img"
                  />
                </div>
                <div className="blog-card-body">
                  <span className="blog-card-category">{post.category}</span>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-card-link">
                    Read Article
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy cta-section">
        <div className="container reveal">
          <h2 className="cta-h2">Ready to Make Your <span>Next Winning Move?</span></h2>
          <p className="cta-body">
            These insights are just the beginning. Let's build your personalized tax strategy together.
          </p>
          <a href="/#contact" className="btn btn-solid">Schedule a Consultation</a>
          <p className="cta-sub">Free initial consultation. No obligation.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
