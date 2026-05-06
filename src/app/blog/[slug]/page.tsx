'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { blogPosts } from '../data';

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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" style={{color:'#1877F2',background:'rgba(24,119,242,0.08)'}} aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" style={{color:'#0A66C2',background:'rgba(10,102,194,0.08)'}} aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="https://nextdoor.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" style={{color:'#4CAF50',background:'rgba(76,175,80,0.08)'}} aria-label="Nextdoor"><NextdoorIcon /></a>
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

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [slug]);

  if (!post) {
    return (
      <main style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--bg-primary)'}}>
        <div style={{textAlign:'center'}}>
          <h1 style={{fontFamily:'Georgia',color:'white',marginBottom:16}}>Article Not Found</h1>
          <Link href="/blog" className="btn btn-solid">Back to Blog</Link>
        </div>
      </main>
    );
  }

  const paragraphs = post.content.split('\n\n').filter(Boolean);

  return (
    <main>
      <Nav />

      {/* Hero image ONLY - no text overlay */}
      <section className="article-hero">
        <div className="article-hero-img">
          <img src="/blog-hero.jpg" alt={post.title} />
        </div>
        <div className="article-hero-overlay" />
      </section>

      {/* Article header - below the image */}
      <div className="section-card">
        <div className="container" style={{paddingTop:52}}>
          <span className="blog-card-category" style={{marginBottom:16,display:'inline-block'}}>{post.category}</span>
          <h1 className="h1" style={{maxWidth:800,marginBottom:12,fontSize:'clamp(1.5rem,3vw,2.25rem)'}}>{post.title}</h1>
          <p style={{color:'rgba(255,255,255,0.45)',fontSize:'0.875rem',marginBottom:0}}>
            By Patrick Chester, CPA · Chester CPA, PC
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="section-card">
        <div className="article-content">
          {paragraphs.map((block, i) => {
            if (block.startsWith('## ')) return <h2 key={i}>{block.replace('## ', '')}</h2>;
            if (block.startsWith('# ')) return <h1 key={i} className="h1" style={{fontSize:'1.75rem',marginBottom:20}}>{block.replace('# ', '')}</h1>;
            if (block.startsWith('- ')) {
              const items = block.split('\n').filter(l => l.startsWith('- '));
              return <ul key={i}>{items.map((item, j) => <li key={j}>{item.replace('- ', '')}</li>)}</ul>;
            }
            return <p key={i}>{block}</p>;
          })}

          <div className="article-cta-box reveal">
            <p>{post.cta}</p>
            <Link href="/#contact" className="btn btn-solid">Schedule a Consultation</Link>
          </div>

          <div style={{marginTop:40,paddingTop:32,borderTop:'1px solid rgba(255,255,255,0.07)'}}>
            <Link href="/blog" style={{display:'inline-flex',alignItems:'center',gap:8,color:'var(--gold)',textDecoration:'none',fontSize:'0.875rem',fontWeight:600}}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8l-4 4 4 4" /></svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
