import React, { useEffect } from 'react';
import '../styles/rera.css';

const Rera = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="rera-page">
            {/* Hero */}
            <section
                className="page-hero"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000")' }}
            >
                <div className="container">
                    <div className="page-hero-inner" data-aos="fade-up">
                        <span className="page-hero-tag">Compliance</span>
                        <h1 className="page-hero-title">RERA <span>Information</span></h1>
                        <p className="page-hero-desc">Transparency and trust through RERA compliance for all our projects.</p>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="rera-document">
                    <section>
                        <h2>1. What is RERA?</h2>
                        <p>
                            The Real Estate (Regulation and Development) Act, 2016 (RERA) is an Act of the Parliament of India which 
                            seeks to protect home-buyers as well as help boost investments in the real estate industry.
                        </p>
                    </section>

                    <section>
                        <h2>2. GreenCo Estate Commitment</h2>
                        <p>
                            At <strong>GreenCo Estate Projects Pvt Ltd</strong>, we are fully committed to the principles of transparency 
                            and accountability established by RERA. All our ongoing and upcoming projects are registered with the 
                            appropriate RERA authorities.
                        </p>
                    </section>

                    <section>
                        <h2>3. Project Registration</h2>
                        <p>
                            Every project developed by GreenCo Estate is assigned a unique RERA registration number. These numbers 
                            ensure that the project has been vetted and complies with all statutory regulations regarding land 
                            titles, approvals, and construction timelines.
                        </p>
                        <ul>
                            <li>Transparency in project status and progress.</li>
                            <li>Assurance of delivery timelines.</li>
                            <li>Standardized sale agreements.</li>
                            <li>Protection against structural defects.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Buyer Protection</h2>
                        <p>
                            RERA provides several protections to buyers, including the requirement for developers to deposit 
                            70% of the funds collected from buyers into a separate escrow account dedicated to the construction 
                            of that specific project.
                        </p>
                    </section>

                    <section>
                        <h2>5. How to Verify</h2>
                        <p>
                            You can verify our project details, RERA registration numbers, and current status on the official 
                            Telangana RERA website. We encourage all our patrons to review these details for complete peace of mind.
                        </p>
                    </section>

                    <section>
                        <h2>6. Contact for RERA Queries</h2>
                        <p>If you have any specific queries regarding the RERA status of any of our projects, please contact us:</p>
                        <ul className="contact-list">
                            <li><strong>Email:</strong> compliance@greencoestate.in</li>
                            <li><strong>Phone:</strong> +91 97003 58140</li>
                            <li><strong>Website:</strong> www.greencoestate.in</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Rera;
