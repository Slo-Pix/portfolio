import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiHackerrank } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-header">
                <h2 className="section-title">Let's Connect</h2>
                <div className="title-underline"></div>
                <p className="section-subtitle">Open for opportunities and collaborations</p>
            </div>

            <div className="contact-info-container">
                <div className="contact-item">
                    <FaEnvelope className="contact-icon-small" />
                    <span>shubham040605@gmail.com</span>
                </div>
                <div className="contact-item">
                    <FaPhone className="contact-icon-small" />
                    <span>+91-8146720344</span>
                </div>
                <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon-small" />
                    <span>Dharamshala, HP, India</span>
                </div>
            </div>

            <div className="contact-divider"></div>

            <div className="social-links-container">
                <a href="#" className="social-btn" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Slo-Pix" className="social-btn" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="#" className="social-btn" aria-label="LeetCode">
                    <SiLeetcode />
                </a>
                <a href="#" className="social-btn" aria-label="GeeksForGeeks">
                    <SiGeeksforgeeks />
                </a>
                <a href="#" className="social-btn" aria-label="CodeChef">
                    <SiCodechef />
                </a>
            </div>

            <div className="footer-copyright">
                <p>&copy; 2026 Shubham Sharma</p>
            </div>
        </section>
    );
};

export default Contact;
