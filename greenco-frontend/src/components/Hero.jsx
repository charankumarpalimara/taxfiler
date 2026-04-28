import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, MapPin, Building2 } from 'lucide-react';
import '../styles/hero.css';
import '../styles/banners.css';

const Hero = () => {
    return (
        <section className="hero">
            {/* Background */}
            <div className="hero-bg">
                <img
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000"
                    alt="Luxury GreenCo Estate"
                />
            </div>
            <div className="hero-overlay" />

            {/* Content */}
            <div className="hero-content">
                <div className="container">
                    <div className="hero-inner" data-aos="fade-up">
                        <div className="hero-tag">
                            <span className="hero-tag-line" />
                            Premium Sustainable Living · GreenCo Estate
                        </div>

                        <h1 className="hero-title">
                            Elegance Meets<br />
                            <span className="highlight">Sustainability</span>
                        </h1>

                        <p className="hero-subtitle">
                            Discover premium apartments and high-growth open plots
                            designed for excellence and built with trust.
                        </p>
                        <div className="hero-actions" style={{ marginTop: '30px' }}>
                            <Link to="/projects" className="btn btn-primary">
                                Discover Our Projects <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            {/* <div className="hero-scroll">
                <span>Explore</span>
                <div className="scroll-indicator">
                    <div className="scroll-dot" />
                </div>
            </div> */}
        </section>
    );
};

export default Hero;
