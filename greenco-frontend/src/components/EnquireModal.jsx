import React, { useState } from 'react';
import { X, Send, User, Phone, Mail, MessageSquare, Building, Users } from 'lucide-react';
import '../styles/enquire-modal.css';
import { api } from '../../apiService/api';
import { toast } from 'react-hot-toast';

const EnquireModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    if (!isOpen) return null;



    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const validateForm = () => {
        const { name, email, phone } = formData;

        if (name.trim().length < 3) {
            toast.error('Name must be at least 3 characters long');
            return false;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            toast.error('Please enter a valid 10-digit mobile number');
            return false;
        }

        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                toast.error('Please enter a valid email address');
                return false;
            }
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        setErrorMsg('');

        try {
            await api.post('/contact', formData);
            setIsSubmitting(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setIsSubmitting(false), 4000);
            toast.success('Form submitted successfully');
            onClose();
        } catch (error) {
            console.error('Contact Form Submit Error:', error);
            setErrorMsg(error.response?.data?.message || 'Something went wrong. Please try again later.');
            toast.error(error.response?.data?.message || 'Something went wrong. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className={`modal-container ${isOpen ? 'modal-open' : ''}`} onClick={e => e.stopPropagation()}>

                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>

                <div className="modal-content-wrapper">
                    {/* Left Pane - Brand Info */}
                    <div className="modal-side-pane">
                        <div className="side-pane-overlay"></div>
                        <div className="side-pane-content">
                            {/* <div className="side-logo-mini">
                                <img src="/logo2.png" className='enquire-model-logo' alt="GreenCo Estate" />
                            </div> */}
                            <h3>Exclusive <span>Consultation</span></h3>
                            <p>Connecting you to premium real estate opportunities in Hyderabad's most sought-after locations.</p>

                            <ul className="side-benefits">
                                <li>
                                    <div className="benefit-icon"><Building size={16} /></div>
                                    <span>Premium DTCP Layouts</span>
                                </li>
                                <li>
                                    <div className="benefit-icon"><Phone size={16} /></div>
                                    <span>Instant Expert Callback</span>
                                </li>
                                <li>
                                    <div className="benefit-icon"><Users size={16} /></div>
                                    <span>Top Rated Developer</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Pane - Form */}
                    <div className="modal-form-pane">
                        <div className="modal-header">
                            <h2>Get in <span>Touch</span></h2>
                            <p>Fill out the form below and we'll reach out to you within 24 hours.</p>
                        </div>

                        {isSuccess ? (
                            <div className="modal-success-anim">
                                <div className="success-icon-wrapper">
                                    <Send size={40} className="success-icon" />
                                </div>
                                <h3>Thank You!</h3>
                                <p>We've received your request and will contact you shortly.</p>
                            </div>
                        ) : (
                            <form className="modal-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name *"
                                        className="enquire-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="input-icon-wrapper">
                                        <User size={18} className="input-icon" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Mobile Number *"
                                        className="enquire-input"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="input-icon-wrapper">
                                        <Phone size={18} className="input-icon" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="enquire-input"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <div className="input-icon-wrapper">
                                        <Mail size={18} className="input-icon" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        placeholder="I'm interested in..."
                                        className="enquire-input modal-textarea"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="2"
                                    ></textarea>
                                    <div className="input-icon-wrapper textarea-icon">
                                        <MessageSquare size={18} className="input-icon" />
                                    </div>
                                </div>

                                <button type="submit" className={`modal-submit-btn ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
                                    <span>{isSubmitting ? 'Sending...' : 'Request Callback'}</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnquireModal;
