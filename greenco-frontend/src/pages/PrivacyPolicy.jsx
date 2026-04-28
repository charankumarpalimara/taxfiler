import React, { useEffect } from 'react';
import '../styles/privacy.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page">
            {/* Hero */}
            <section
                className="page-hero"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2000")' }}
            >
                <div className="container">
                    <div className="page-hero-inner" data-aos="fade-up">
                        <span className="page-hero-tag">Legal</span>
                        <h1 className="page-hero-title">Privacy <span>Policy</span></h1>
                        <p className="page-hero-desc">How GreenCo Estate collects, uses, and protects your personal information.</p>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="privacy-document">

                    <section>
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to <strong>GreenCo Estate Projects Pvt Ltd</strong>. We value your privacy and are committed to protecting
                            your personal data. This Privacy Policy explains how we collect, use, and safeguard your
                            information when you visit our website <strong>www.greencoestate.in</strong> or interact with our services.
                        </p>
                    </section>

                    <section>
                        <h2>2. Information We Collect</h2>
                        <p>We may collect several types of information from and about users of our Website, including:</p>
                        <ul>
                            <li><strong>Identity Data:</strong> Name, title, and company name.</li>
                            <li><strong>Contact Data:</strong> Email address, phone numbers, and physical address.</li>
                            <li><strong>Technical Data:</strong> IP address, browser type, time zone setting, and operating system.</li>
                            <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. How We Use Your Information</h2>
                        <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
                        <ul>
                            <li>To provide you with information, products, or services that you request from us.</li>
                            <li>To notify you about changes to our Website or any products or services we offer.</li>
                            <li>To contact you for follow-up callbacks or site visits.</li>
                            <li>To improve our Website and present its contents to you.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Data Security</h2>
                        <p>
                            We have implemented measures designed to secure your personal information from accidental loss
                            and from unauthorized access, use, alteration, and disclosure. All information you provide
                            to us is stored on our secure servers behind firewalls.
                        </p>
                    </section>

                    <section>
                        <h2>5. Cookies</h2>
                        <p>
                            Our website uses cookies to distinguish you from other users of our website. This helps us to
                            provide you with a good experience when you browse our website and also allows us to improve our site.
                        </p>
                    </section>

                    <section>
                        <h2>6. Third-Party Links</h2>
                        <p>
                            This website may include links to third-party websites, plug-ins, and applications. Clicking on
                            those links or enabling those connections may allow third parties to collect or share data about you.
                            We do not control these third-party websites and are not responsible for their privacy statements.
                        </p>
                    </section>

                    <section>
                        <h2>7. Contact Information</h2>
                        <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
                        <ul className="contact-list">
                            <li><strong>Email:</strong> info@greencoestate.in</li>
                            <li><strong>Phone:</strong> +91 97003 58140</li>
                            <li><strong>Address:</strong> Ameerpet, Hyderabad, Telangana.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
