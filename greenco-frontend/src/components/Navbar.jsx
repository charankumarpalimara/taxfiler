import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Menu, X, Phone, Mail, ChevronRight, Home, Building, Users, MessageCircle, Image, FileText, Briefcase } from 'lucide-react';
import '../styles/navbar.css';
import EnquireModal from './EnquireModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();

    // Use media query for desktop view (matches our CSS breakpoint)
    const isDesktop = useMediaQuery({ minWidth: 1100 });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when menu open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Projects', path: '/projects', icon: Building },
        { name: 'Gallery', path: '/gallery', icon: Image },
        // { name: 'News', path: '/news', icon: FileText },
        { name: 'Contact Us', path: '/contact', icon: MessageCircle },
    ];

    const isLightPage = location.pathname.startsWith('/contact') || location.pathname.startsWith('/gallery') || location.pathname.startsWith('/projects');

    return (
        <>
            <header className={`header ${isScrolled ? 'scrolled' : ''} ${isLightPage ? 'header--light' : ''}`}>
                <div className="container nav-wrapper">
                    <div className="nav-content">
                        {/* Logo Left */}
                        <Link to="/" className="nav-logo">
                            <div className="nav-brand-text">
                                <span className="brand-main"><img src="/greenco-logo.png" alt="" /></span>
                                {/* <span className="brand-sub">Estate</span> */}
                            </div>
                        </Link>

                        {/* Desktop Navigation Center */}
                        <nav className="nav-menu">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
                                >
                                    <span>{link.name}</span>
                                    <div className="nav-underline" />
                                </Link>
                            ))}
                        </nav>

                        {/* Header Actions Right */}
                        <div className="nav-actions">
                            {/* Only show "Get in Touch" on desktop in the header */}
                            {isDesktop && (
                                <>
                                    <a href="tel:+919502914858" className="btn-phone-pill">
                                        <Phone size={14} />
                                        <span>+91 95029 14858</span>
                                    </a>
                                    <button onClick={() => setIsModalOpen(true)} className="btn-enquire-pill">
                                        <span>Enquiry</span>
                                    </button>
                                </>
                            )}

                            <button
                                className={`mobile-toggle-btn ${isOpen ? 'is-active' : ''}`}
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle Menu"
                            >
                                <div className="hamburger">
                                    <span></span>
                                    <span></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`mob-overlay ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Side Drawer */}
            <div className={`mob-drawer ${isOpen ? 'open' : ''}`}>
                {/* Drawer Header */}
                <div className="mob-drawer-header">
                    <Link to="/" className="mob-brand" onClick={() => setIsOpen(false)}>
                        <div className="nav-brand-text">
                            <span className="brand-main"><img src="/greenco-logo.png" alt="GreenCo Logo" /></span>
                            {/* <span className="brand-sub">Estate</span> */}
                        </div>
                    </Link>
                    <button
                        className="mob-close-btn"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Nav Links */}
                <nav className="mob-nav">
                    {navLinks.map((link, i) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`mob-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="mob-link-icon"><Icon size={18} /></div>
                                <span>{link.name}</span>
                                <ChevronRight size={16} className="mob-link-arrow" />
                            </Link>
                        );
                    })}
                </nav>

                {/* Drawer Footer */}
                <div className="mob-drawer-footer">
                    <div className="mob-contacts">
                        <a href="tel:+919550341818" className="mob-contact-item">
                            <Phone size={15} />
                            <span>+91 9550 341 818</span>
                        </a>
                        <a href="mailto:info@greencoestate.in" className="mob-contact-item">
                            <Mail size={15} />
                            <span>info@greencoestate.in</span>
                        </a>
                    </div>

                    <button
                        onClick={() => { setIsModalOpen(true); setIsOpen(false); }}
                        className="mob-enquire-btn"
                    >
                        <Phone size={15} />
                        <span>Enquiry Now</span>
                    </button>
                </div>
            </div>

            <EnquireModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default Navbar;
