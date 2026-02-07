import React from 'react';
import './Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            tag: "Competition",
            title: "Winner",
            subtitle: "National CyberShield Hackathon 2025",
            details: [
                "Won among 1200+ teams across 3 zones",
                "Top 10 finalist (Indore zone) → Final winner",
                "Built a cybersecurity solution targeting encrypted criminal platforms",
                "Awarded cash prizes and CIIS Summit 2025 invite"
            ]
        },

        {
            tag: "Technical",
            title: "LFX'25 Mentee @ Linux Kernel",
            subtitle: "The Linux Foundation — Fall 2025",
            details: [
                "Selected for The Linux Foundation’s Linux Kernel Mentorship Program",
                "Hands-on exposure to kernel internals, patch submission, and debugging",
                "Focus on low-level systems and Linux internals"
            ]
        }
    ];

    return (
        <section id="achievements" className="achievements-section">
            <div className="achievements-header">
                <h2 className="section-title">Achievements</h2>
                <div className="title-underline"></div>
            </div>

            <div className="achievements-terminal-container">
                <div className="terminal-window achievements-terminal">
                    <div className="terminal-header">
                        <div className="terminal-buttons">
                            <span className="btn close"></span>
                            <span className="btn minimize"></span>
                            <span className="btn maximize"></span>
                        </div>
                        <div className="terminal-title">experience</div>
                    </div>
                    <div className="terminal-body">
                        <div className="command-line">
                            <span className="prompt">shubh@portfolio$</span> <span className="command">ls achievements/</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="timeline">
                {achievements.map((item, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-marker">
                            <div className="timeline-dot"></div>
                            {index !== achievements.length - 1 && <div className="timeline-line"></div>}
                        </div>
                        <div className="timeline-content">
                            <div className="achievement-card">
                                <span className={`achievement-tag tag-${item.tag.toLowerCase()}`}>{item.tag}</span>
                                <h3 className="achievement-title">{item.title}</h3>
                                <h4 className="achievement-subtitle">{item.subtitle}</h4>
                                <ul className="achievement-details">
                                    {item.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
