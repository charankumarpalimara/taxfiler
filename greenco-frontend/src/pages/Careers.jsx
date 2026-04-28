import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Building2, Users, TrendingUp } from 'lucide-react';
import '../styles/careers.css';

const Careers = () => {
    const jobs = [
        { id: 1, title: 'Sales Manager', location: 'Hyderabad', type: 'Full Time', tag: 'Sales', desc: 'Experienced real estate sales professional with 3+ years of proven track record in residential sales.' },
        { id: 2, title: 'Site Supervisor', location: 'Hyderabad', type: 'Full Time', tag: 'Engineering', desc: 'Civil engineer with experience in managing residential construction sites and quality control.' },
        { id: 3, title: 'Marketing Executive', location: 'Hyderabad', type: 'Full Time', tag: 'Marketing', desc: 'Digital-savvy marketer to drive lead generation, social media, and brand campaigns for GreenCo Estate.' }
    ];

    const perks = [
        { icon: Building2, title: 'Premium Projects', desc: 'Work on landmark developments across Hyderabad.' },
        { icon: TrendingUp, title: 'Career Growth', desc: 'Fast-track promotions for top performers.' },
        { icon: Users, title: 'Great Team', desc: 'Collaborative culture of excellence.' },
    ];

    const marqueeItems = [
        'Sales Manager', 'Site Supervisor', 'Project Manager', 'Marketing Executive',
        'Civil Engineer', 'Customer Relations', 'Interior Designer', 'Legal Executive',
    ];

    return (
        <main className="careers-page">

            {/* ── UNIQUE HERO: Ticker / Marquee ─────────────── */}
            <section className="careers-hero-ticker">
                <div className="careers-ticker-overlay" />

                {/* Animated scrolling strip */}
                <div className="careers-ticker-strip">
                    <div className="careers-ticker-track">
                        {[...marqueeItems, ...marqueeItems].map((item, i) => (
                            <span key={i} className="ticker-item">
                                {item} <span className="ticker-dot">·</span>
                            </span>
                        ))}
                    </div>
                </div>

                <div className="container">
                    <div className="careers-ticker-content">
                        <div className="careers-ticker-left" data-aos="fade-right">
                            <span className="careers-ticker-eyebrow">We're Hiring</span>
                            <h1 className="careers-ticker-heading">
                                Shape the<br />
                                Future of<br />
                                <em>Real Estate</em>
                            </h1>
                            <p className="careers-ticker-desc">
                                Join a team that's redefining how Hyderabad lives. At GreenCo Estate, careers are built alongside landmark projects.
                            </p>
                            <a href="#openings" className="btn btn-primary">
                                See Open Roles <ArrowRight size={16} />
                            </a>
                        </div>
                        <div className="careers-ticker-right" data-aos="fade-left">
                            <div className="careers-openings-pill">
                                <span className="pill-num">{jobs.length}</span>
                                <span className="pill-label">Open Positions</span>
                            </div>
                            <div className="careers-roles-list">
                                {jobs.map((j, i) => (
                                    <div key={i} className="careers-role-chip">
                                        <span className="role-tag">{j.tag}</span>
                                        <span className="role-name">{j.title}</span>
                                        <ArrowRight size={14} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perks */}
            <section className="careers-perks-section">
                <div className="container">
                    <div className="careers-perks-grid">
                        {perks.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <div key={i} className="careers-perk" data-aos="fade-up" data-aos-delay={i * 80}>
                                    <div className="perk-icon"><Icon size={22} /></div>
                                    <h4>{p.title}</h4>
                                    <p>{p.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Jobs */}
            <section id="openings" className="careers-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">We're Hiring</span>
                        <h2 className="section-title">Current <span>Openings</span></h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="jobs-grid">
                        {jobs.map((job, i) => (
                            <div key={job.id} className="job-card" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="job-tag">{job.tag}</div>
                                <div className="job-info">
                                    <h3 className="job-title">{job.title}</h3>
                                    <div className="job-meta">
                                        <span className="job-location"><MapPin size={14} /> Hyderabad</span>
                                        <span><Clock size={13} /> {job.type}</span>
                                    </div>
                                    <p className="job-desc">{job.desc}</p>
                                </div>
                                <button className="btn btn-primary">Apply Now <ArrowRight size={15} /></button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Careers;
