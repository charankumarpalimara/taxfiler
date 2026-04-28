import React, { useEffect } from 'react';
import '../styles/terms.css';

const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            {/* Hero */}
            <section
                className="page-hero"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000")' }}
            >
                <div className="container">
                    <div className="page-hero-inner" data-aos="fade-up">
                        <span className="page-hero-tag">Legal</span>
                        <h1 className="page-hero-title">Terms & <span>Conditions</span></h1>
                        <p className="page-hero-desc">The legal framework governing your use of GreenCo Estate services.</p>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="terms-document">
                    <section>
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the website of <strong>GreenCo Estate Projects Pvt Ltd</strong> (www.greencoestate.in), 
                            you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, 
                            you must not use our website or services.
                        </p>
                    </section>

                    <section>
                        <h2>2. Intellectual Property</h2>
                        <p>
                            All content on this website, including text, graphics, logos, images, and software, is the property of 
                            <strong>GreenCo Estate Projects Pvt Ltd</strong> and is protected by applicable intellectual property laws. 
                            Unauthorized use of any content is strictly prohibited.
                        </p>
                    </section>

                    <section>
                        <h2>3. Use of Services</h2>
                        <p>
                            You agree to use our website and services only for lawful purposes. You are prohibited from:
                        </p>
                        <ul>
                            <li>Using the site in any way that causes, or may cause, damage to the website.</li>
                            <li>Engaging in any data mining or similar data gathering activities.</li>
                            <li>Using this website to transmit or send unsolicited commercial communications.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Accuracy of Information</h2>
                        <p>
                            While we strive to ensure that the information on this website is correct, we do not warrant its 
                            completeness or accuracy. The property details, pricing, and availability are subject to change 
                            without prior notice.
                        </p>
                    </section>

                    <section>
                        <h2>5. Limitation of Liability</h2>
                        <p>
                            <strong>GreenCo Estate Projects Pvt Ltd</strong> will not be liable for any loss or damage arising from 
                            your use of this website or reliance on any information provided herein. This include, without limitation, 
                            indirect or consequential loss or damage.
                        </p>
                    </section>

                    <section>
                        <h2>6. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of India, 
                            and any disputes relating to these terms and conditions will be subject to the exclusive 
                            jurisdiction of the courts in Hyderabad, Telangana.
                        </p>
                    </section>

                    <section>
                        <h2>7. Contact Information</h2>
                        <p>If you have any questions regarding these Terms and Conditions, please contact us at:</p>
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

export default TermsConditions;
