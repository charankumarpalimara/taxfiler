import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { api, getImageUrl } from '../../apiService/api';

import {
    MapPin, Home, Building, CheckCircle, Phone, ArrowRight,
    ChevronRight, Star, Shield, Award, Clock, Maximize2,
    Layers, Zap, Droplets, PaintBucket, HardHat, Compass,
    Trees, Leaf, Dumbbell, Gamepad2, Baby
} from 'lucide-react';
import '../styles/project-detail.css';

// Icon mapping for dynamic amenities
const ICON_MAP = {
    Layers, Zap, Droplets, PaintBucket, HardHat, Compass,
    Trees, Leaf, Dumbbell, Gamepad2, Baby, Shield, Building, Home,
    CheckCircle, Phone, ArrowRight, ChevronRight, Star, Award, Clock, Maximize2
};

const ProjectDetail = () => {
    const { id } = useParams(); // 'id' corresponds to 'slug' in API
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: `I'm interested in ${project ? project.title : 'this project'}.`
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        if (project) {
            setFormData(prev => ({
                ...prev,
                message: `I'm interested in ${project.title}. Please provide more details.`
            }));
        }
    }, [project]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };



    const validateForm = () => {
        const { name, email, phone, subject, message } = formData;

        if (name.trim().length < 3) {
            toast.error('Name must be at least 3 characters long');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            toast.error('Please enter a valid email address');
            return false;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            toast.error('Please enter a valid 10-digit mobile number');
            return false;
        }

        if (!subject) {
            toast.error('Please select an enquiry type');
            return false;
        }

        if (message.trim().length < 10) {
            toast.error('Message must be at least 10 characters long');
            return false;
        }

        return true;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);
        setErrorMsg('');

        try {
            await api.post('/contact', formData);
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: 'General Inquiry',
                message: project ? `I'm interested in ${project.title}.` : ''
            });
            setTimeout(() => setIsSubmitted(false), 4000);
            toast.success('Form submitted successfully');
        } catch (error) {
            console.error('Contact Form Submit Error:', error);
            const msg = error.response?.data?.message || 'Something went wrong. Please try again later.';
            setErrorMsg(msg);
            toast.error(msg);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const controller = new AbortController();
        const fetchProjectDetails = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/projects/${id}`, { signal: controller.signal });
                if (response.data.success) {
                    setProject(response.data.data);
                } else {
                    setError('Project not found');
                }
                setLoading(false);
            } catch (err) {
                if (err.name === 'CanceledError') return;
                console.error('Error fetching project details:', err);
                setError('Failed to load project details. Please try again later.');
                setLoading(false);
            }
        };

        fetchProjectDetails();
        window.scrollTo(0, 0);

        return () => controller.abort();
    }, [id]);

    if (loading) return (
        <div className="loading-container" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="loading-spinner"></div>
            <p style={{ marginLeft: '1rem' }}>Loading project details...</p>
        </div>
    );

    if (error || !project) return (
        <div className="error-container" style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2>{error || 'Project not found'}</h2>
            <Link to="/projects" className="btn btn-primary mt-4">Back to Projects</Link>
        </div>
    );

    return (
        <main className="project-detail-page">
            {/* Immersive Hero Section */}
            {/* Immersive Hero Section - Mirroring Hero.jsx Structure */}
            <section className="hero project-hero">
                <div className="hero-bg">
                    <img src={getImageUrl(project.image)} alt={project.title} />
                </div>
                <div className="hero-overlay" />

                <div className="hero-content">
                    <div className="container">
                        <div className="hero-inner" data-aos="fade-up">
                            <nav className="breadcrumb">
                                <Link to="/">Home</Link> <ChevronRight size={14} />
                                <Link to="/projects">Projects</Link> <ChevronRight size={14} />
                                <span>{project.title}</span>
                            </nav>

                            <div className="hero-tag">
                                <span className="hero-tag-line" />
                                {project.type} · Premium Development
                            </div>

                            <h1 className="hero-title">{project.title}</h1>

                            <p className="hero-subtitle">
                                <MapPin size={20} style={{ marginRight: '8px', verticalAlign: 'middle', color: 'var(--secondary)' }} />
                                {project.location}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Standard Stats Bar - Mirroring Home Page */}
                {/* <div className="hero-stats">
                    <div className="container">
                        <div className="hero-stats-inner">
                            <div className="hero-stat-item">
                                <div className="hero-stat-number">{project.price}</div>
                                <div className="hero-stat-label">Investment Range</div>
                            </div>
                            <div className="hero-stat-item">
                                <div className="hero-stat-number">{project.area}</div>
                                <div className="hero-stat-label">Unit Dimensions</div>
                            </div>
                            <div className="hero-stat-item">
                                <div className="hero-stat-number">{project.status}</div>
                                <div className="hero-stat-label">Project Status</div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>

            {/* Sticky Section Bar */}
            <div className="section-nav-wrapper">
                <div className="container">
                    <nav className="section-nav">
                        <a href="#overview">Overview</a>
                        <a href="#highlights">Highlights</a>
                        <a href="#amenities">Amenities</a>
                        <a href="#specifications">Specifications</a>
                        <a href="#location">Location</a>
                    </nav>
                </div>
            </div>

            <div className="container main-content-layout">
                <div className="content-area">
                    {/* Project Overview */}
                    <section id="overview" className="detail-section premium-card-section">
                        <div className="section-header-small">
                            <span className="tag">The Vision</span>
                            <h2>Project Overview</h2>
                            <div className="heading-divider"></div>
                        </div>
                        <p className="project-full-desc lead-text">{project.fullDesc}</p>

                        <div className="stats-showcase-container">
                            {project.stats && project.stats.map((stat, i) => (
                                <div key={i} className="stat-showcase-box">
                                    <div className="stat-showcase-bg"></div>
                                    <div className="stat-content">
                                        <div className="stat-value">{stat.value}</div>
                                        <div className="stat-label">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Project Highlights Grid Layer */}
                    <section id="highlights" className="detail-section">
                        <div className="section-header-small">
                            <span className="tag">Why This Project</span>
                            <h2>Core Highlights</h2>
                            <div className="heading-divider"></div>
                        </div>
                        <div className="highlights-feature-grid">
                            {project.highlights && project.highlights.map((item, i) => (
                                <div key={i} className="highlight-feature-card" data-aos="fade-up" data-aos-delay={i * 50}>
                                    <div className="highlight-icon-wrap">
                                        <CheckCircle size={24} className="check-icon-premium" />
                                    </div>
                                    <div className="highlight-text-content">
                                        <h4>{item}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Amenities Modern Flex */}
                    <section id="amenities" className="detail-section amenities-section-bg">
                        <div className="section-header-small center-head">
                            <span className="tag">Lifestyle Standard</span>
                            <h2>Premium Amenities</h2>
                            <div className="heading-divider center-div"></div>
                        </div>
                        <div className="amenities-grid-premium">
                            {project.amenities && project.amenities.map((item, i) => {
                                // Auto-guess icon from name if iconName is missing
                                let iconToUse = item.iconName;
                                if (!iconToUse) {
                                    const name = item.name.toLowerCase();
                                    if (name.includes('pool') || name.includes('swim') || name.includes('water')) iconToUse = 'Droplets';
                                    else if (name.includes('gym') || name.includes('fitness') || name.includes('workout')) iconToUse = 'Dumbbell';
                                    else if (name.includes('park') || name.includes('garden') || name.includes('tree') || name.includes('landscape')) iconToUse = 'Trees';
                                    else if (name.includes('play') || name.includes('kids') || name.includes('child')) iconToUse = 'Gamepad2';
                                    else if (name.includes('club') || name.includes('hall') || name.includes('community')) iconToUse = 'Building';
                                    else if (name.includes('security') || name.includes('gate') || name.includes('guard')) iconToUse = 'Shield';
                                    else if (name.includes('car') || name.includes('parking')) iconToUse = 'MapPin';
                                    else if (name.includes('power') || name.includes('back') || name.includes('generator')) iconToUse = 'Zap';
                                }
                                const Icon = ICON_MAP[iconToUse] || Home;
                                return (
                                    <div key={i} className="amenity-item-premium" data-aos="zoom-in" data-aos-delay={i * 50}>
                                        <div className="amenity-icon-block">
                                            <Icon size={28} />
                                        </div>
                                        <span className="amenity-label">{item.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Specifications Cards */}
                    <section id="specifications" className="detail-section">
                        <div className="section-header-small">
                            <span className="tag">Quality & Design</span>
                            <h2>Technical Specifications</h2>
                            <div className="heading-divider"></div>
                        </div>
                        <div className="specs-grid-cards">
                            {project.specs && project.specs.map((spec, i) => (
                                <div key={i} className="spec-card-elevated" data-aos="fade-up" data-aos-delay={i * 80}>
                                    <div className="spec-card-header">
                                        <div className="spec-card-icon">
                                            <HardHat size={20} />
                                        </div>
                                        <h4>{spec.category}</h4>
                                    </div>
                                    <div className="spec-card-body">
                                        <p>{spec.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Location Advantages Timeline */}
                    <section id="location" className="detail-section">
                        <div className="section-header-small">
                            <span className="tag">Connectivity</span>
                            <h2>Strategic Location</h2>
                            <div className="heading-divider"></div>
                        </div>
                        <div className="location-timeline">
                            {project.locationAdvantages && project.locationAdvantages.map((item, i) => (
                                <div key={i} className="timeline-item" data-aos="fade-left" data-aos-delay={i * 100}>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content-box">
                                        <div className="timeline-place">
                                            <Compass size={20} className="place-icon" />
                                            <h4>{item.place}</h4>
                                        </div>
                                        <div className="timeline-duration">
                                            <Clock size={16} />
                                            <span>{item.time} Drive</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <aside className="sidebar-area">
                    <div className="sidebar-sticky">
                        <div className="enquiry-card">
                            <div className="enquiry-header">
                                <h3>Enquire Now</h3>
                                <p>Get pricing and floor plans today.</p>
                            </div>
                            <form className="enquiry-form" onSubmit={handleSubmit}>
                                <div className="form-group-modern">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group-modern">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group-modern">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group-modern">
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                    >
                                        <option value="General Inquiry">Interested In</option>
                                        <option value="Pricing Details">Pricing Details</option>
                                        <option value="Site Visit">Site Visit</option>
                                        <option value="Brochure Request">Brochure Request</option>
                                    </select>
                                </div>
                                <div className="form-group-modern">
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="3"
                                        className="form-control-modern textarea-modern"
                                    ></textarea>
                                </div>
                                {errorMsg && <p className="error-text" style={{ color: 'red', fontSize: '0.8rem', marginTop: '8px' }}>{errorMsg}</p>}
                                <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : isSubmitted ? 'Request Sent!' : 'Submit Request'}
                                    {!isSubmitting && !isSubmitted && <ArrowRight size={18} style={{ marginLeft: '8px' }} />}
                                </button>
                            </form>
                        </div>

                        <div className="expert-connect-card">
                            <div className="expert-avatar">
                                <Award size={32} />
                            </div>
                            <div className="expert-info">
                                <h4>Expert Guidance</h4>
                                <p>Talk to our property specialist for a personalized consultation.</p>
                                <a href="tel:+919154491915" className="btn-call-compact">
                                    <Phone size={16} /> +91 91544 91915
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default ProjectDetail;
