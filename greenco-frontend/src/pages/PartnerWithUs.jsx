import React, { useState } from 'react';
import { Handshake, Send, CheckCircle, Building2, Users, TrendingUp, Award } from 'lucide-react';
import '../styles/partner.css';

const PartnerWithUs = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const benefits = [
        { icon: TrendingUp, title: 'Rewarding Returns', desc: 'Competitive commission structures and timely payouts on every successful referral.' },
        { icon: Building2, title: 'Trusted Brand', desc: 'Partner with a RERA-registered, award-winning developer trusted by 500+ families.' },
        { icon: Users, title: 'Dedicated Support', desc: 'Our partner success team provides tools, collaterals, and guidance.' },
        { icon: Award, title: 'Recognition', desc: 'Top partners are recognized with exclusive trips, incentives, and certificates.' },
    ];

    return (
        <main className="partner-page">

            {/* ── UNIQUE HERO: Diagonal Geometric Split ─────── */}
            <section className="partner-hero-diagonal">
                {/* Left panel — dark with content */}
                <div className="partner-hero-left">
                    <div className="partner-hero-left-inner">
                        <span className="partner-hero-eyebrow">Business Collaboration</span>
                        <h1 className="partner-hero-heading">
                            Grow With<br />
                            <em>GreenCo</em>
                        </h1>
                        <p className="partner-hero-sub">
                            Join Hyderabad's most trusted developer as a channel partner, land joint venture, or service vendor. Build a rewarding business alongside us.
                        </p>
                        <div className="partner-hero-benefits">
                            {benefits.slice(0, 3).map((b, i) => {
                                const Icon = b.icon;
                                return (
                                    <div key={i} className="partner-hero-benefit">
                                        <div className="phb-icon"><Icon size={16} /></div>
                                        <span>{b.title}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right panel — architectural grid pattern */}
                <div className="partner-hero-right">
                    <div className="partner-hero-grid-pattern" />
                    <div className="partner-hero-img">
                        <img src="https://images.unsplash.com/photo-1600880210119-75ee99bb4823?auto=format&fit=crop&q=80&w=800" alt="Partnership" />
                    </div>
                    <div className="partner-hero-stat-box">
                        <span className="phsb-num">500+</span>
                        <span className="phsb-label">Families Served</span>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="partner-benefits-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Why Partner With Us</span>
                        <h2 className="section-title">Built for <span>Mutual Growth</span></h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="partner-benefits-grid">
                        {benefits.map((b, i) => {
                            const Icon = b.icon;
                            return (
                                <div key={i} className="partner-benefit-card" data-aos="fade-up" data-aos-delay={i * 80}>
                                    <div className="benefit-icon"><Icon size={24} /></div>
                                    <h4>{b.title}</h4>
                                    <p>{b.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Enquiry Form */}
            <section className="partner-section">
                <div className="container">
                    <div className="partner-grid">
                        <div className="partner-info" data-aos="fade-right">
                            <span className="section-tag">We Are Looking For</span>
                            <h2 className="section-title">Our Ideal <span>Partners</span></h2>
                            <p className="about-text">We offer transparent dealings, timely payments, and professional management for all business associates.</p>
                            <ul className="partner-list">
                                <li><CheckCircle size={18} /><span>Land Owners for Joint Ventures</span></li>
                                <li><CheckCircle size={18} /><span>Property Channel Partners</span></li>
                                <li><CheckCircle size={18} /><span>Material Suppliers & Vendors</span></li>
                                <li><CheckCircle size={18} /><span>Architects & Designers</span></li>
                            </ul>
                        </div>
                        <div className="partner-form-wrap" data-aos="fade-left">
                            <div className="form-card">
                                <h3>Partnership Enquiry</h3>
                                {isSubmitted && (
                                    <div className="success-message">
                                        <CheckCircle size={20} />
                                        <span>Thank you! We will contact you soon.</span>
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group"><label>Full Name</label><input type="text" className="form-control" required /></div>
                                    <div className="form-group"><label>Company Name (Optional)</label><input type="text" className="form-control" /></div>
                                    <div className="form-row">
                                        <div className="form-group"><label>Email</label><input type="email" className="form-control" required /></div>
                                        <div className="form-group"><label>Phone</label><input type="tel" className="form-control" required /></div>
                                    </div>
                                    <div className="form-group">
                                        <label>Interest Area</label>
                                        <select className="form-control">
                                            <option>Joint Venture</option>
                                            <option>Channel Partner</option>
                                            <option>Vendor/Supplier</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group"><label>Message</label><textarea className="form-control" rows="4"></textarea></div>
                                    <button type="submit" className="btn btn-primary">Submit Request <Send size={16} /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PartnerWithUs;
