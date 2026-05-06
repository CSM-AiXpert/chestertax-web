'use client';

import { useEffect, useRef, useState } from 'react';

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useNavScroll() {
  useEffect(() => {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const onScroll = () => { nav.classList.toggle('scrolled', window.scrollY > 60); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const NextdoorIcon = ({ size = 18 }: { size?: number }) => (
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
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="nav-brand">
            <img src="/logo-white.png" alt="Chester CPA" className="nav-logo" />
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="/blog">Blog</a>
            <a href="#contact">Contact</a>
            <a href="#contact" className="btn btn-outline" style={{padding:'9px 20px',fontSize:'0.875rem'}}>Book Consultation</a>
            <div className="nav-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="Facebook" style={{color:'#1877F2',background:'rgba(24,119,242,0.1)',borderColor:'rgba(24,119,242,0.25)'}}>
                <FacebookIcon size={17} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="LinkedIn" style={{color:'#0A66C2',background:'rgba(10,102,194,0.1)',borderColor:'rgba(10,102,194,0.25)'}}>
                <LinkedInIcon size={17} />
              </a>
              <a href="https://nextdoor.com" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="Nextdoor" style={{color:'#4CAF50',background:'rgba(76,175,80,0.1)',borderColor:'rgba(76,175,80,0.25)'}}>
                <NextdoorIcon size={17} />
              </a>
            </div>
          </div>
          <button className={`nav-hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      {/* Mobile overlay */}
      <div className={`nav-overlay${open ? ' open' : ''}`} onClick={() => setOpen(false)} />
      {/* Mobile drawer */}
      <div className={`nav-drawer${open ? ' open' : ''}`}>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="/blog" onClick={() => setOpen(false)}>Blog</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        <a href="#contact" className="nav-drawer-cta" onClick={() => setOpen(false)}>Book Consultation</a>
        <div className="nav-drawer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="nav-social-link" style={{color:'#1877F2',background:'rgba(24,119,242,0.1)',borderColor:'rgba(24,119,242,0.25)'}} aria-label="Facebook"><FacebookIcon size={18} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-social-link" style={{color:'#0A66C2',background:'rgba(10,102,194,0.1)',borderColor:'rgba(10,102,194,0.25)'}} aria-label="LinkedIn"><LinkedInIcon size={18} /></a>
          <a href="https://nextdoor.com" target="_blank" rel="noopener noreferrer" className="nav-social-link" style={{color:'#4CAF50',background:'rgba(76,175,80,0.1)',borderColor:'rgba(76,175,80,0.25)'}} aria-label="Nextdoor"><NextdoorIcon size={18} /></a>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  useScrollReveal();
  useNavScroll();

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) { video.playbackRate = 0.7; }
  }, []);

  const services = [
    { n:'01', t:'Personal Income Tax', d:'Complex individual tax returns focused on maximizing your savings. Rental properties, multi-state filings, self-employment, and partnership or corporate income.', icon:<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
    { n:'02', t:'Business Tax Returns', d:'Quarterly and annual returns for LLCs, S-Corps, partnerships, and sole proprietorships. Compliance at every level.', icon:<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { n:'03', t:'QuickBooks Clean-Up', d:'Accurate books are the foundation of accurate tax returns. We organize your QuickBooks so your financials are ready for filing.', icon:<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    { n:'04', t:'Financial Statements', d:'Auditing, reviews, and compiled statements for construction licensing, non-profits, HOAs, and annual report filings.', icon:<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    { n:'05', t:'Complex Tax Returns', d:'When your situation spans rental properties, multiple states, self-employment, and corporate income - you need a CPA who sees how the pieces fit.', icon:<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg> },
    { n:'06', t:'Peer Review Services', d:'Qualified to conduct the required 3-year peer review for other CPA firms. An economical small-firm alternative.', icon:<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
  ];

  return (
    <main>
      <Nav />

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-video-wrap">
          <video ref={videoRef} autoPlay muted loop playsInline preload="auto" style={{width:'100%',height:'100%',objectFit:'cover',transform:'translateZ(0)'}}>
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>
        <div className="hero-content">
          <div style={{marginBottom:24,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <img src="/logo-white.png" alt="Chester CPA" className="hero-logo-glow" style={{height:72,width:'auto'}} />
          </div>
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            <span className="hero-badge-text">Accepting New Clients for 2026</span>
          </div>
          <h1 className="h1">Every Tax Season Has a Winning Move.</h1>
          <p className="hero-tagline">Smart Tax Strategy. Clear Financial Moves.</p>
          <p className="hero-body">
            Chester CPA, PC specializes in complex income tax services for businesses and individuals.
            Self-employment, rental property, investment income, and multi-state filings - these are our exact specialty.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-solid">Book Your Consultation</a>
            <a href="#services" className="btn btn-outline-white">Explore Services</a>
          </div>
          <div className="hero-trust">
            {[
              { icon:<svg className="hero-trust-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label:'Licensed CPA in South Carolina' },
              { icon:<svg className="hero-trust-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label:'Peer Review Qualified' },
              { icon:<svg className="hero-trust-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label:'Serving Bluffton & Hilton Head' },
            ].map((item,i)=>(
              <div key={i} className="hero-trust-item">{item.icon}<span>{item.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — with $100 video background, strong dark overlay */}
      <section id="services" className="section section-dark" style={{position:'relative',overflow:'hidden',paddingTop:0,paddingBottom:0}}>
        <div className="services-video-bg">
          <video autoPlay muted loop playsInline preload="auto">
            <source src="/services-bg.mp4" type="video/mp4" />
          </video>
          <div className="services-video-overlay" />
        </div>

        <div style={{position:'relative',zIndex:2,paddingTop:110,paddingBottom:110}} className="container">
          <div style={{textAlign:'center',marginBottom:52}} className="reveal">
            <span className="label" style={{marginBottom:14}}>Smart Tax Strategy</span>
            <h2 className="h2">What We Do</h2>
            <p className="body-lg" style={{maxWidth:520,margin:'12px auto 0',color:'rgba(200,208,218,0.85)'}}>
              Experience what an impressive Certified Public Accountant can do for your business and personal tax future.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s,i)=>(
              <div key={i} className="glass service-card reveal" style={{transitionDelay:`${i*80}ms`}}>
                <div className="service-card-inner">
                  <div className="service-top">
                    <div className="service-num">{s.n}</div>
                    <div className="service-icon-wrap">{s.icon}</div>
                  </div>
                  <h3 className="h3 service-card-title">{s.t}</h3>
                  <p className="body-sm service-card-desc">{s.d}</p>
                  <div className="service-card-arrow">
                    <span>Learn more</span>
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT - with video background */}
      <section id="about" className="section section-dark" style={{position:'relative',overflow:'hidden',paddingTop:0,paddingBottom:0}}>
        <div className="about-video-bg" style={{position:'absolute',inset:0,zIndex:0}}>
          <video autoPlay muted loop playsInline preload="auto" style={{width:'100%',height:'100%',objectFit:'cover'}}>
            <source src="/dnd-about.mp4" type="video/mp4" />
          </video>
          <div className="about-video-overlay" />
        </div>

        <div style={{position:'relative',zIndex:2}}>
          <div className="container" style={{paddingTop:110,paddingBottom:110}}>
            <div className="about-grid">
              <div className="reveal-left">
                <span className="label">About Us</span>
                <h2 className="h2">Meet Patrick Chester,<br /><span className="gold">Your Tax Strategist</span></h2>
                <p className="body-lg" style={{marginBottom:18}}>
                  Meet Patrick Chester, a CPA who's as strategic with taxes as he is in a game of chess. By day, he's a master at navigating complex tax codes, helping his clients find financial treasures hidden in plain sight. By night, he's a devoted dad, guiding his wife and four young kids through intense board game battles and leading his friends in epic Dungeons and Dragons adventures.
                </p>
                <p className="body-lg" style={{marginBottom:18}}>
                  Patrick's life took a challenging turn recently. His 11-year-old son triumphantly checkmated him in chess, a moment that humbled yet amused this family-oriented strategist. Despite this lighthearted loss, Patrick's professional acumen remains unbeatable. His unique blend of financial expertise, attention to detail, and genuine love for strategic thinking makes him the ideal guardian of your financial well-being.
                </p>
                <p className="body-lg" style={{marginBottom:36}}>
                  Trust Patrick with your taxes. He approaches every financial challenge with the same passion and intelligence he brings to his gaming table. His commitment to precision, combined with a knack for making complex matters simple and a bit of fun, ensures that your finances are in the most capable hands.
                </p>
                <div className="about-stats">
                  {[{v:'15+',l:'Years Experience'},{v:'100%',l:'Client Focused'}].map((s,i)=>(
                    <div key={i} className="glass-sm about-stat">
                      <div className="about-stat-value">{s.v}</div>
                      <div className="about-stat-label">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal-right">
                <div className="glass about-image-card">
                  <div className="about-image-hero">
                    <img src="/patrick.jpg" alt="Patrick Chester, CPA" />
                    <div className="about-initials-label">Patrick Chester, CPA</div>
                  </div>
                  <div className="about-image-body">
                    <div className="about-badges">
                      {['Licensed CPA','Peer Review Qualified','QuickBooks Pro Advisor'].map(b=>(
                        <span key={b} className="about-badge">{b}</span>
                      ))}
                    </div>
                    <blockquote className="about-quote">
                      "I treat every client like a partner at the table - their success is my mission."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section section-card testimonial-section">
        <div className="container">
          <div style={{textAlign:'center',marginBottom:40}} className="reveal">
            <span className="label">Testimonials</span>
            <h2 className="h2">What Clients Say</h2>
          </div>
          <div className="glass testimonial-wrap reveal">
            <span className="testimonial-quote-mark">"</span>
            <p className="testimonial-quote">
              Patrick Chester is very professional and attentive! I highly recommend him to anyone looking for accounting services.
            </p>
            <div className="testimonial-stars">
              {[1,2,3,4,5].map(n=><span key={n} className="testimonial-star">★</span>)}
            </div>
            <p className="testimonial-author">Matthew Flewelling</p>
            <p className="testimonial-role">Business Owner</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-navy cta-section">
        <div className="container reveal">
          <h2 className="cta-h2">See Your <span>Future Wealth</span></h2>
          <p className="cta-body">
            No more missed opportunities. Explore your tax future with Patrick Chester, CPA. We handle your needs with genuine concern, respect, and professionalism.
          </p>
          <a href="#contact" className="btn btn-solid">Book Your Consultation</a>
          <p className="cta-sub">Free initial consultation. No obligation.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section section-card">
        <div className="container">
          <div className="contact-grid">
            <div className="reveal-left">
              <span className="label">Get In Touch</span>
              <h2 className="h2">Ready to <span className="gold">Optimize</span><br />Your Taxes?</h2>
              <p className="body-lg" style={{marginBottom:40}}>
                Contact Patrick Chester, CPA today for a consultation. Whether you're an individual with complex tax needs or a business looking for expert guidance, we're here to help.
              </p>
              {[
                { icon:<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, label:'Email', value:<a href="mailto:patrick@chestertax.com">patrick@chestertax.com</a> },
                { icon:<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, label:'Phone', value:<a href="tel:+18432716788">(843) 271-6788</a> },
                { icon:<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, label:'Office', value:<>110 Traders Cross, Suite 215<br /><span style={{color:'var(--gray-3)'}}>Okatie, SC 29909</span></> },
              ].map((item,i)=>(
                <div key={i} className="contact-info-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal-right">
              <div className="glass form-card">
                <h3 className="form-title">Send a Message</h3>
                <form onSubmit={(e)=>{e.preventDefault();alert('Thank you! Patrick will be in touch shortly.');}}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-input" placeholder="First Name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-input" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-input" placeholder="Email Address" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-input" placeholder="Phone Number" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Select a Service</label>
                    <select className="form-select">
                      <option value="">Choose a service...</option>
                      <option>Personal Income Tax</option><option>Business Tax Returns</option>
                      <option>QuickBooks Clean-Up</option><option>Financial Statements</option>
                      <option>Peer Review</option><option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tell us about your tax situation</label>
                    <textarea className="form-textarea" placeholder="Share any relevant details..." required />
                  </div>
                  <button type="submit" className="btn btn-solid form-submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <img src="/logo-white.png" alt="Chester CPA" className="footer-brand-logo" />
              <p className="footer-desc">Executive tax services for businesses and individuals. Complex returns are our specialty.</p>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" style={{color:'#1877F2',background:'rgba(24,119,242,0.08)'}} aria-label="Facebook">
                  <FacebookIcon size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" style={{color:'#0A66C2',background:'rgba(10,102,194,0.08)'}} aria-label="LinkedIn">
                  <LinkedInIcon size={16} />
                </a>
                <a href="https://nextdoor.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" style={{color:'#90D743',background:'rgba(144,215,67,0.08)'}} aria-label="Nextdoor">
                  <NextdoorIcon size={16} />
                </a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Quick Links</div>
              <ul className="footer-links">
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Services</div>
              <ul className="footer-links">
                <li><a href="#services">Personal Income Tax</a></li>
                <li><a href="#services">Business Tax Returns</a></li>
                <li><a href="#services">QuickBooks Clean-Up</a></li>
                <li><a href="#services">Financial Statements</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Contact</div>
              <ul className="footer-links">
                <li><a href="mailto:patrick@chestertax.com">patrick@chestertax.com</a></li>
                <li><a href="tel:+18432716788">(843) 271-6788</a></li>
                <li>110 Traders Cross</li>
                <li>Suite 215</li>
                <li>Okatie, SC 29909</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 Chester CPA, PC. All rights reserved. Licensed CPA in South Carolina.
          </div>
        </div>
      </footer>
    </main>
  );
}
