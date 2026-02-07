import React from 'react';
import { FaPython, FaLinux, FaGitAlt, FaDocker, FaGithub, FaJs, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiC, SiCplusplus, SiGnubash, SiKubernetes, SiVim, SiMongodb } from 'react-icons/si';
import './About.css';
import meImg from '../assets/me.jpeg';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-header">
                <h2 className="section-title">About Me</h2>
                <div className="title-underline"></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', width: '100%', maxWidth: '1100px' }}>
                {/* First Terminal: Whoami & Tech Stack */}
                <div className="terminal-window">
                    <div className="terminal-header">
                        <div className="terminal-buttons">
                            <span className="btn close"></span>
                            <span className="btn minimize"></span>
                            <span className="btn maximize"></span>
                        </div>
                        <div className="terminal-title">about_me</div>
                    </div>
                    <div className="terminal-body">
                        <div className="about-content">
                            <div className="about-text">
                                <div className="command-line">
                                    <span className="prompt">shubh@portfolio$</span> <span className="command">whoami</span>
                                </div>
                                <div className="response">
                                    <p>
                                        &gt; Software Developer | Cybersecurity Enthusiast | Systems & Low-Level Explorer
                                    </p>
                                    <br />
                                    <p>
                                        I am a software developer with a strong interest in cybersecurity and
                                        low-level systems. I enjoy understanding how software works beneath the
                                        surface—from memory and processes to networks and security. I focus on
                                        building reliable, efficient, and secure applications while continuously
                                        learning how systems can be optimized, protected, and sometimes broken.
                                    </p>
                                    <br />
                                    <div className="command-line">
                                        <span className="prompt">shubh@portfolio$</span> <span className="command">cat skills</span>
                                    </div>
                                    <div className="response tech-grid">
                                        <div className="tech-item">&gt; C</div>
                                        <div className="tech-item">&gt; C++</div>
                                        <div className="tech-item">&gt; Python</div>
                                        <div className="tech-item">&gt; HTML</div>
                                        <div className="tech-item">&gt; CSS</div>
                                        <div className="tech-item">&gt; JS</div>
                                        <div className="tech-item">&gt; React</div>
                                        <div className="tech-item">&gt; Bash</div>
                                        <div className="tech-item">&gt; SQL</div>
                                        <div className="tech-item">&gt; MongoDB</div>
                                        <div className="tech-item">&gt; Git</div>
                                        <div className="tech-item">&gt; GitHub</div>
                                        <div className="tech-item">&gt; Make/CMake</div>
                                        <div className="tech-item">&gt; Linux</div>
                                        <div className="tech-item">&gt; Docker</div>
                                        <div className="tech-item">&gt; Kubernetes</div>
                                        <div className="tech-item">&gt; Vim</div>
                                        <div className="tech-item">&gt; Canva</div>
                                        <div className="tech-item">&gt; Blender</div>
                                        <div className="tech-item">&gt; Figma</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Icons Bar */}
                <div className="tech-icons-bar">
                    <div className="tech-row">
                        <SiC className="tech-icon" title="C" />
                        <SiCplusplus className="tech-icon" title="C++" />
                        <FaPython className="tech-icon" title="Python" />
                        <FaLinux className="tech-icon" title="Linux" />
                        <SiGnubash className="tech-icon" title="Bash" />
                        <FaGitAlt className="tech-icon" title="Git" />
                        <FaDocker className="tech-icon" title="Docker" />
                        <SiKubernetes className="tech-icon" title="Kubernetes" />
                        <SiVim className="tech-icon" title="Vim" />
                        <FaGithub className="tech-icon" title="GitHub" />
                        <FaJs className="tech-icon" title="JavaScript" />
                        <FaHtml5 className="tech-icon" title="HTML5" />
                        <FaCss3Alt className="tech-icon" title="CSS3" />
                        <FaReact className="tech-icon" title="React" />
                        <SiMongodb className="tech-icon" title="MongoDB" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
