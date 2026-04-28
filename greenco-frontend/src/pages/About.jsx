import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Target, Eye, Award, Users, TrendingUp, Shield, Heart, ArrowRight } from 'lucide-react';
import '../styles/about.css';

const About = () => {
    // Check for desktop view (matches our design system breakpoint)
    const isDesktop = useMediaQuery({ minWidth: 1100 });

    const values = [
        { icon: Shield, title: 'Quality Assurance', desc: 'Rigorous quality checks ensuring the highest standards of craftsmanship on every project.' },
        { icon: Heart, title: 'Customer First', desc: 'Your satisfaction and comfort drive every design and construction decision we make.' },
        { icon: TrendingUp, title: 'Innovation', desc: 'Modern construction techniques and eco-conscious practices for a lasting legacy.' },
        { icon: Target, title: 'Transparency', desc: 'Clear communication and fully RERA-compliant dealings that build lifelong relationships.' }
    ];

    const stats = [
        { number: '500+', label: 'Happy Families' },
        { number: '2018', label: 'Established' },
        { number: '5+', label: 'Projects' },
        { number: '6+', label: 'Years' },
    ];

    return (
        <main className="about-page">

            {/* ── UNIQUE HERO: Architectural Split ─────────── */}
            <section className="about-hero-split">
                {/* Left — Dark content panel */}
                <div className="about-hero-left">
                    <div className="about-hero-left-inner">
                        <span className="about-hero-eyebrow">Est. 2018 · Hyderabad</span>
                        <h1 className="about-hero-heading">
                            We Build
                            <em> Homes.</em>
                            <br />We Create
                            <em> Legacies.</em>
                        </h1>
                        <p className="about-hero-sub">
                            GreenCo Estate is Hyderabad's most trusted eco-luxe real estate developer — built on RERA compliance, precision engineering, and a relentless focus on the families we serve.
                        </p>
                        {/* Stat row inside hero — Only show on desktop */}
                        {/* {isDesktop && (
                            <div className="about-hero-stats">
                                {stats.map((s, i) => (
                                    <div key={i} className="about-hero-stat">
                                        <span className="about-hero-stat-num">{s.number}</span>
                                        <span className="about-hero-stat-label">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        )} */}
                    </div>
                </div>

                {/* Right — 3-image stacked mosaic */}
                <div className="about-hero-right">
                    <div className="about-mosaic">
                        <div className="mosaic-img mosaic-img--tall">
                            <img src="/images/apartments/modern-apartment.jpg" alt="GreenCo Building" />
                        </div>
                        <div className="mosaic-img mosaic-img--half">
                            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=600" alt="Luxury Interior" />
                        </div>
                        <div className="mosaic-img mosaic-img--half">
                            <img src="https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?auto=format&fit=crop&q=80&w=800" alt="Eco-Luxe Estate" />
                        </div>
                    </div>
                    {/* Floating badge */}
                    <div className="about-hero-badge">
                        <Award size={22} />
                        <div>
                            <strong>RERA Registered</strong>
                            <span>Trusted Developer</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── REDESIGNED: Mission & Vision — "The Purpose Split" ────────── */}
            <section className="purpose-section">
                <div className="container">
                    <div className="purpose-grid">
                        {/* Mission */}
                        <div className="purpose-card mission" data-aos="fade-up">
                            <div className="purpose-bg-num">01</div>
                            <div className="purpose-header">
                                <div className="purpose-icon-box"><Target size={32} /></div>
                                <span className="purpose-label">Our Mission</span>
                                <h3 className="purpose-title">Architecting <span>Success.</span></h3>
                            </div>
                            <p className="purpose-text">
                                To deliver exceptional construction and infrastructure that exceeds client expectations —
                                through expertise, professional excellence, and teamwork.
                            </p>
                            <div className="purpose-accent-bar"></div>
                        </div>

                        {/* Vision */}
                        <div className="purpose-card vision" data-aos="fade-up" data-aos-delay="200">
                            <div className="purpose-bg-num">02</div>
                            <div className="purpose-header">
                                <div className="purpose-icon-box"><Eye size={32} /></div>
                                <span className="purpose-label">Our Vision</span>
                                <h3 className="purpose-title">Sustainable <span>Innovation.</span></h3>
                            </div>
                            <p className="purpose-text">
                                To be the recognized leader in residential real estate, known for quality,
                                sustainable innovation, and unwavering customer satisfaction.
                            </p>
                            <div className="purpose-accent-bar"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Our Core Values</span>
                        <h2 className="section-title">What Drives <span>Us Forward</span></h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="values-grid">
                        {values.map((value, i) => {
                            const IconComponent = value.icon;
                            return (
                                <div key={i} className="value-card" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className="value-card-inner">
                                        <div className="value-number">0{i + 1}</div>
                                        <div className="value-icon-box"><IconComponent size={28} /></div>
                                        <h3 className="value-title">{value.title}</h3>
                                        <p className="value-desc">{value.desc}</p>
                                    </div>
                                    <div className="value-accent-line"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── NEW: OUR STORY (Cinematic Edit) ─────────── */}
            <section className="about-story-section">
                <div className="container">
                    <div className="about-story-grid">
                        {/* Image Side with Decorative Elements */}
                        <div className="about-story-visual" data-aos="fade-right">
                            <div className="story-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" alt="GreenCo Construction" />
                                <div className="story-image-overlay" />
                            </div>
                            <div className="story-experience-badge">
                                <span className="badge-num">6+</span>
                                <div className="badge-text">
                                    <strong>Years</strong>
                                    <span>Of Trust</span>
                                </div>
                            </div>
                            <div className="story-deco-year">2018</div>
                        </div>

                        {/* Content Side */}
                        <div className="about-story-content" data-aos="fade-left">
                            <div className="about-story-header">
                                <span className="about-story-tag">The Beginning</span>
                                <h2 className="about-story-title">
                                    The GreenCo<br />
                                    <span>Legacy.</span>
                                </h2>
                            </div>

                            <div className="about-story-body">
                                <p className="lead-text">
                                    Born in Hyderabad, GreenCo Estate was founded on the principles of trust, integrity, and exceptional craftsmanship.
                                </p>
                                <p>
                                    From our first project in 2018 to a growing portfolio of 5+ landmark developments, we have remained committed to building spaces that families are proud to call home.
                                </p>
                                <p>
                                    Every project is a testament to our RERA-first approach and meticulous attention to materials, craftsmanship, and the environment. We don't just build structures; we architect the backdrop for your family's future.
                                </p>
                            </div>

                            <div className="about-story-footer">
                                <Link to="/projects" className="btn btn-primary">
                                    Explore Our Work <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta-section">
                <div className="wide-banner-overlay" />
                <div className="container">
                    <div className="cta-content" data-aos="fade-up">
                        <span className="section-tag" style={{ color: 'var(--secondary)' }}>Get Started</span>
                        <h2 className="section-title" style={{ color: 'white' }}>Ready to Start Your <span style={{ color: 'var(--secondary)' }}>Journey?</span></h2>
                        <p>Discover our premium projects and find the perfect home for your family.</p>
                        <div className="cta-buttons">
                            <Link to="/projects" className="btn btn-primary">View Projects <ArrowRight size={18} /></Link>
                            <Link to="/contact" className="btn btn-outline-white">Get In Touch</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
