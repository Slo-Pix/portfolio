import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "CBT Application",
            coverText: "Kernel",
            desc: "A CBT web application built with React and Mongodb",
            demoLink: "#",
            codeLink: "#",
            img: "https://placehold.co/600x400/1f2833/FFD700?text=Project+1"
        },
        {
            title: "E-Commerce Platform",
            coverText: "Network Toolkit",
            desc: "Full stack shopping platform with secure payments",
            demoLink: "#",
            codeLink: "#",
            img: "https://placehold.co/600x400/1f2833/FFD700?text=Project+2"
        },
        {
            title: "Network Scanner",
            coverText: "Steganography",
            desc: "Python based network vulnerability scanner",
            demoLink: "#",
            codeLink: "#",
            img: "https://placehold.co/600x400/1f2833/FFD700?text=Project+3"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="projects-header">
                <h2 className="section-title">Projects</h2>
                <div className="title-underline"></div>
            </div>

            <div className="achievements-terminal-container" style={{ maxWidth: '1200px' }}>
                <div className="terminal-window" style={{ maxWidth: '100%' }}>
                    <div className="terminal-header">
                        <div className="terminal-buttons">
                            <span className="btn close"></span>
                            <span className="btn minimize"></span>
                            <span className="btn maximize"></span>
                        </div>
                        <div className="terminal-title">projects</div>
                    </div>
                    <div className="terminal-body">
                        <div className="about-content">
                            <div className="about-text">
                                <div className="command-line">
                                    <span className="prompt">shubh@portfolio$</span> <span className="command">./projects</span>
                                </div>
                                <div className="response">
                                    <p>
                                        [+] Projects loaded successfully... <br />[+] Hover over the projects to view summary \(0-0)/
                                        <br /><br /> More projects at - <a href="https://github.com/Slo-Pix" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>https://github.com/Slo-Pix</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image-container">
                            <div className="project-cover">
                                <span>{project.coverText || `Project ${index + 1}`}</span>
                            </div>
                            <div className="project-overlay">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <div className="project-links">
                                    <a href={project.demoLink} className="btn-project">Demo</a>
                                    <a href={project.codeLink} className="btn-project">Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default Projects;
