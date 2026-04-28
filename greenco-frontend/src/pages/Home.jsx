import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import {
    ArrowRight, CheckCircle2, Award, Users, Clock,
    Building2, ShieldCheck, TrendingUp, Phone,
    MapPin, Star, ChevronRight
} from 'lucide-react';
import '../styles/home.css';

const featuredProjects = [
    {
        id: 'greenco-capetown',
        title: "GreenCo Capetown",
        location: "Kandi, Hyderabad",
        type: "Premium Apartments",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
        status: "Upcoming",
        price: "45 L+",
        area: "1250 - 1800 sft"
    },
    {
        id: 'greenco-habitat',
        title: "GreenCo Habitat",
        location: "Malkapur, Hyderabad",
        type: "Eco-Luxe Plots",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
        status: "Ongoing",
        price: "25 L+",
        area: "200 - 500 Sq.Yds"
    },
    {
        id: 'greenco-skyview',
        title: "GreenCo Sky View",
        location: "Kandi, Hyderabad",
        type: "Luxury Residences",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
        status: "Upcoming",
        price: "60 L+",
        area: "1500 - 2400 sft"
    },
];

const processSteps = [
    { num: '01', title: 'Immersive Discovery', desc: 'Explore a curated collection of properties that redefine modern living and architectural excellence.' },
    { num: '02', title: 'Curated Consultation', desc: 'Our experts guide you through every detail, ensuring your vision aligns with our extraordinary developments.' },
    { num: '03', title: 'Signature Selection', desc: 'Secure your stake in a legacy project designed for long-term appreciation and aesthetic pleasure.' },
    { num: '04', title: 'Seamless Transition', desc: 'Experience a refined handover process as you step into a home built with integrity and precision.' },
];

const reasons = [
    { char: 'A', icon: <Building2 size={22} />, title: 'Architectural Integrity', desc: 'Pioneering structural standards using premium, ISI-certified materials for enduring quality.' },
    { char: 'T', icon: <ShieldCheck size={22} />, title: 'Absolute Transparency', desc: 'Fully RERA-compliant projects with clear legal frameworks and ethical business practices.' },
    { char: 'S', icon: <TrendingUp size={22} />, title: 'Strategic Appreciation', desc: 'Properties situated in high-growth corridors, delivering exceptional returns for generations.' },
    { char: 'V', icon: <Award size={22} />, title: 'Award-Winning Visions', desc: 'Collaborating with world-class architects to create iconic landmarks and residence of distinction.' },
    { char: 'L', icon: <Users size={22} />, title: 'Trusted Legacy', desc: 'A community of 500+ families whose trust is our greatest achievement and driving force.' },
    { char: 'P', icon: <Clock size={22} />, title: 'Punctual Precision', desc: 'A relentless commitment to project timelines, ensuring your journey home begins exactly on schedule.' },
];

const testimonials = [
    {
        name: 'Charan',
        location: 'Hyderabad',
        text: 'GreenCo Estate made our home-buying journey completely stress-free. The team was transparent and professional at every step.',
        rating: 5,
    },
    {
        name: 'Priya Nair',
        location: 'Hyderabad',
        text: 'We invested in GreenCo Meadows and the value has already grown significantly. Highly recommended for anyone looking in Hyderabad.',
        rating: 5,
    },
    {
        name: 'Pravalika',
        location: 'Warangal',
        text: 'Beautiful design, top-quality materials, and exceptional customer service. Our home feels like a dream come true.',
        rating: 5,
    },
];

const Home = () => {
    return (
        <main>
            <Hero />

            {/* Architectural Split: About Section */}
            <section className="about-architect-section">
                <div className="container">
                    <div className="architect-composition">

                        {/* Visuals: Architectural Montage */}
                        <div className="architect-visuals">
                            <div className="gold-accent-line" />
                            <div className="v-main" data-aos="fade-right">
                                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" alt="Main Architecture" />
                            </div>
                            <div className="v-secondary" data-aos="fade-up" data-aos-delay="400">
                                <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800" alt="Interior Detail" />
                            </div>
                            <div className="v-accent" data-aos="fade-down" data-aos-delay="600">
                                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" alt="Sustainable Feature" />
                            </div>
                        </div>

                        {/* Content: Narrative */}
                        <div className="architect-content" data-aos="fade-left">
                            <div className="architect-header">
                                <span className="est-tag">Established 2018</span>
                                <h2 className="architect-title">
                                    Crafting Legacies  <span>of Sustainable Excellence</span>
                                </h2>
                            </div>

                            <p className="architect-desc">
                                Based in Hyderabad, GreenCo Estate redefines luxury through the lens of ecological responsibility. We create enduring spaces that balance urban sophistication with natural harmony.
                            </p>

                            <div className="architect-grid-features">
                                <div className="feature-item">
                                    <div className="feature-val">RERA</div>
                                    <div className="feature-label">Registered</div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-val">6+</div>
                                    <div className="feature-label">Years Legacy</div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-val">ECO</div>
                                    <div className="feature-label">First Approach</div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-val">High</div>
                                    <div className="feature-label">ROI Potential</div>
                                </div>
                            </div>

                            {/* <div className="architect-cta">
                                <Link to="/about" className="btn btn-primary btn-lg">
                                    Company Profile <ArrowRight size={20} />
                                </Link>
                                <a href="tel:+919700358140" className="m-phone-bubble">
                                    <Phone size={22} className="text-secondary" />
                                    <span>+91 9700 358 140</span>
                                </a>
                            </div> */}
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Spatial Narrative: Modern Luxury ────────── */}
            <section className="spatial-banner">
                <div className="spatial-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000")' }} />
                <div className="spatial-overlay" />

                <div className="container">
                    <div className="spatial-content" data-aos="fade-up">
                        <div className="spatial-text">
                            <span className="spatial-tag">Curated Living</span>
                            <h2 className="spatial-title">Elevating the <br />Standard of <span>Modern Living</span></h2>
                            <p className="spatial-desc">Experience a lifestyle where architectural innovation meets serene surroundings.</p>

                            <div className="spatial-actions">
                                <Link to="/gallery" className="btn btn-primary btn-lg">Explore Sample Flat <ArrowRight size={20} /></Link>
                            </div>
                        </div>

                        <div className="spatial-stats">
                            <div className="glass-pill" data-aos="fade-left" data-aos-delay="0">
                                <span className="p-num">40+</span>
                                <span className="p-label">Premium Units</span>
                            </div>
                            <div className="glass-pill" data-aos="fade-left" data-aos-delay="100">
                                <span className="p-num">100%</span>
                                <span className="p-label">RERA Compliant</span>
                            </div>
                            <div className="glass-pill" data-aos="fade-left" data-aos-delay="200">
                                <span className="p-num">Hyderabad</span>
                                <span className="p-label">Prime Location</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Featured Projects ──────────────────── */}
            <section className="projects-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Our Portfolio</span>
                        <h2 className="section-title">
                            Featured <span>Projects</span>
                        </h2>
                        <p className="section-sub">
                            Explore our most sought-after properties — each crafted with meticulous attention to detail.
                        </p>
                        <div className="section-divider" />
                    </div>

                    <div className="projects-grid">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>

                    <div className="projects-cta" data-aos="fade-up">
                        <Link to="/projects" className="btn btn-outline">
                            View All Projects <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Process / How It Works ─────────────── */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">The Journey Home</span>
                        <h2 className="section-title">
                            Our Guided <span>Process</span>
                        </h2>
                        <div className="section-divider" />
                    </div>
                    <div className="process-grid">
                        {processSteps.map((step, i) => (
                            <div key={i} className="process-step" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="process-num">{step.num}</div>
                                <div className="process-connector" />
                                <div className="process-body">
                                    <h4>{step.title}</h4>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Why Choose Us ─────────────────────── */}
            <section className="why-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Superiority & Trust</span>
                        <h2 className="section-title">
                            The GreenCo <span>Distinction</span>
                        </h2>
                        <div className="section-divider" />
                    </div>
                    <div className="distinction-grid">
                        {reasons.map((r, i) => (
                            <div key={i} className="distinction-item" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div className="distinction-watermark">0{i + 1}</div>
                                <div className="distinction-icon-v2">{r.icon}</div>
                                <div className="distinction-content">
                                    <h4>{r.title}</h4>
                                    <p>{r.desc}</p>
                                    <div className="distinction-accent" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Testimonials ──────────────────────── */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Client Stories</span>
                        <h2 className="section-title">
                            What Our <span>Customers Say</span>
                        </h2>
                        <div className="section-divider" />
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="testimony-bloc" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="quote-watermark">
                                    <TrendingUp size={60} strokeWidth={1} />
                                </div>
                                <div className="t-stars-v2">
                                    {Array(t.rating).fill(0).map((_, j) => (
                                        <Star key={j} size={14} fill="#00A86B" stroke="none" />
                                    ))}
                                </div>
                                <p className="t-text-v2">"{t.text}"</p>
                                <div className="t-author-v2">
                                    <div className="t-avatar-v2">{t.name.charAt(0)}</div>
                                    <div className="t-info-v2">
                                        <div className="t-name">{t.name}</div>
                                        <div className="t-loc"><MapPin size={12} /> {t.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────── */}
            {/* <section className="cta-section">
                <div className="container">
                    <div className="cta-inner" data-aos="zoom-in">
                        <div className="cta-badge">🏠 Limited Units Available</div>
                        <h2>
                            Find Your Perfect <span>Dream Home</span> Today
                        </h2>
                        <p>
                            Schedule a free site visit or speak with our property experts.
                            Our team is here to guide you every step of the way.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-secondary">
                                Book A Free Site Visit <ArrowRight size={16} />
                            </Link>
                            <a href="tel:+919700358140" className="btn btn-outline-white">
                                <Phone size={16} /> Call Us Now
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}
        </main>
    );
};

export default Home;
