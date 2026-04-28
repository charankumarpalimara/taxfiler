import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import '../styles/news.css';

const News = () => {
    const newsItems = [
        { id: 1, title: 'GreenCo Capetown: Phase 1 Launch', date: 'March 15, 2024', category: 'Project Update', desc: 'We are excited to announce the Phase 1 launch of GreenCo Capetown — premium apartments in Hyderabad. Bookings open now.', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000' },
        { id: 2, title: 'Real Estate Trends in Hyderabad', date: 'February 28, 2024', category: 'Market Insights', desc: 'Hyderabad is emerging as the top investment destination in Telangana, with 18%+ YoY appreciation driven by infrastructure growth.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000' },
        { id: 3, title: 'GreenCo Habitat: 100% Plots Sold', date: 'January 10, 2024', category: 'Milestone', desc: 'Our eco-luxe plot development at Malkapur achieved 100% sales in record time — reflecting the trust buyers place in GreenCo.', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000' }
    ];

    const featured = newsItems[0];

    return (
        <main className="news-page">

            {/* ── UNIQUE HERO: Editorial Masthead ──────────── */}
            <section className="news-hero-masthead">
                <div className="masthead-top-bar">
                    <div className="container">
                        <div className="masthead-bar-inner">
                            <span className="masthead-brand">GreenCo Estate <em>Journal</em></span>
                            <span className="masthead-date">March 2024 — Issue No. 07</span>
                        </div>
                    </div>
                </div>

                <div className="masthead-rule" />

                <div className="container">
                    <div className="masthead-headline-wrap" data-aos="fade-up">
                        <div className="masthead-category-row">
                            <span className="masthead-cat">News & Updates</span>
                            <span className="masthead-cat-line" />
                            <span className="masthead-latest">Latest Edition</span>
                        </div>
                        <h1 className="masthead-headline">
                            Hyderabad's<br />
                            <em>Premier</em><br />
                            Developer
                        </h1>
                        <div className="masthead-sub-row">
                            <p className="masthead-sub">Building exceptional communities across Telangana — from eco-luxe open plots to luxury apartments at Kandi, Siddipet, and Hyderabad.</p>
                            <div className="masthead-featured-preview">
                                <span className="featured-label">Featured Story</span>
                                <div className="featured-img-wrap">
                                    <img src={featured.image} alt={featured.title} />
                                </div>
                                <span className="featured-title">{featured.title}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="masthead-rule" />
            </section>

            {/* News Grid */}
            <section className="news-section">
                <div className="container">
                    <div className="news-grid">
                        {newsItems.map((item, i) => (
                            <article key={item.id} className="news-card" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="news-image">
                                    <img src={item.image} alt={item.title} />
                                    <div className="news-category">{item.category}</div>
                                </div>
                                <div className="news-content">
                                    <div className="news-date"><Calendar size={14} /><span>{item.date}</span></div>
                                    <h2 className="news-title">{item.title}</h2>
                                    <p className="news-excerpt">{item.desc}</p>
                                    <button className="news-link"><span>Read More</span><ArrowRight size={16} /></button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default News;
