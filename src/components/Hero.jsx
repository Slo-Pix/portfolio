import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroImg from '../assets/me.jpeg';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Software Developer with interest in cybersecurity and low-level systems.";
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (text !== fullText.substring(0, text.length)) {
            // If current text doesn't match the start of fullText (e.g. after code update), reset
            setText('');
            setIsTyping(true);
        } else if (isTyping) {
            if (text.length < fullText.length) {
                const timeout = setTimeout(() => {
                    setText(fullText.slice(0, text.length + 1));
                }, 40);
                return () => clearTimeout(timeout);
            } else {
                setIsTyping(false);
            }
        }
    }, [text, isTyping, fullText]);

    return (
        <section id="hero" className="hero-section">
            <div className="hero-container">
                <div className="hero-image-wrapper">
                    <div className="glow-effect"></div>
                    <div className="hero-image-placeholder">
                        <img src={heroImg} alt="Shubham" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', transform: 'rotate(15deg)' }} />
                    </div>
                </div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        Hey there, <br />
                        I'm <span className="highlight">Shubham</span>
                    </h1>
                    <p className="hero-subtitle">
                        {text}
                    </p>
                    <div className="hero-buttons">
                        <a href="https://drive.google.com/file/d/19yJdXATNgK__H_CfYI7K0TMkrSsLfRo_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cta-button primary">
                            View Resume
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
