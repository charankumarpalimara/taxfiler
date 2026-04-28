import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, Send, Home, Building, Users, MessageCircle, ArrowRight, CheckCircle, Image, FileText, Briefcase } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
    const quickLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Gallery', path: '/gallery' },
        // { name: 'News', path: '/news' },
        // { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    const services = [
        'Premium Apartments',
        'Gated Communities',
        'Commercial Spaces',
        'Eco-Friendly Plots',
    ];

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Pillar */}
                        <div className="footer-brand" data-aos="fade-up">
                            <Link to="/" className="footer-logo-text">
                                GreenCo<span>Estate</span>
                            </Link>
                            <p className="footer-desc">
                                Hyderabad's pioneer in eco-luxe real estate, crafting spaces that harmonize premium living with environmental consciousness.
                            </p>
                            <div className="footer-socials">
                                <a target='_blank' href="https://www.facebook.com/GreenCoEstate/" className="footer-social-btn" aria-label="Facebook">
                                    <Facebook size={20} />
                                </a>
                                <a target='_blank' href="https://www.instagram.com/greencoestate/" className="footer-social-btn" aria-label="Instagram">
                                    <Instagram size={20} />
                                </a>
                                <a target='_blank' href="https://www.youtube.com/@GreenCoEstate" className="footer-social-btn" aria-label="YouTube">
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Navigation Pillar */}
                        <div className="footer-section" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="footer-section-title">Navigation</h3>
                            <ul className="footer-links">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="footer-link">
                                            <span>{link.name}</span>
                                            <ArrowRight size={14} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Pillar */}
                        <div className="footer-section" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="footer-section-title">Expertise</h3>
                            <ul className="footer-services">
                                {services.map((service) => (
                                    <li key={service} className="footer-service-item">
                                        <CheckCircle size={14} />
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Pillar */}
                        <div className="footer-section" data-aos="fade-up" data-aos-delay="300">
                            <h3 className="footer-section-title">Presence</h3>
                            <div className="footer-contact-items">
                                <div className="footer-contact-item">
                                    <div className="footer-contact-info">
                                        <span>Corporate Office</span>
                                        <p>7-7-366/5/1/A, First Floor, Bhadrakali, Smart City Road, Mulugu X Road Warangal(urban), Telangana</p>
                                    </div>
                                </div>
                                <div className="footer-contact-item">
                                    <div className="footer-contact-info">
                                        <span>Contact</span>
                                        <a href="tel:+919502914858">+91 95029 14858</a>
                                        <br />
                                        <a href="tel:+919115101111">+91 91151 01111</a>
                                    </div>
                                </div>
                                <div className="footer-contact-item">
                                    <div className="footer-contact-info">
                                        <span>Enquiries</span>
                                        <a href="mailto:info@greencoestates.com">info@greencoestates.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="footer-copy">
                            &copy; {new Date().getFullYear()} GreenCo Estate Projects Pvt Ltd.
                        </p>
                        <div className="footer-bottom-links">
                            <Link to="/privacy" className="footer-bottom-link">Privacy</Link>
                            <Link to="/terms" className="footer-bottom-link">Terms</Link>
                            <Link to="/rera" className="footer-bottom-link">RERA</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
