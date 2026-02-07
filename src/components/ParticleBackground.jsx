import React, { useRef, useEffect } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Particles
        const particles = [];
        const particleCount = window.innerWidth < 768 ? 60 : 160;
        const connectionDistance = 200;
        const mouseDistance = 220;

        // Golden Flow Source (Invisible moving point of influence)
        const flowSource = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 8, // Moves much faster
            vy: (Math.random() - 0.5) * 8,
        };

        const goldFlowRadius = 200; // Smaller radius for tighter gold clusters

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                // Particles themselves stay subtle/white
                ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Mouse tracking
        let mouse = { x: null, y: null };
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        const updateFlowSource = () => {
            flowSource.x += flowSource.vx;
            flowSource.y += flowSource.vy;

            // Bounce source off edges
            if (flowSource.x < 0 || flowSource.x > canvas.width) flowSource.vx *= -1;
            if (flowSource.y < 0 || flowSource.y > canvas.height) flowSource.vy *= -1;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update Flow Source Position
            updateFlowSource();

            // Update & Draw Particles
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            // Handle Connections
            connectParticles();

            animationFrameId = requestAnimationFrame(animate);
        };

        const connectParticles = () => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        // Calculate midpoint of connection
                        let midX = (particles[a].x + particles[b].x) / 2;
                        let midY = (particles[a].y + particles[b].y) / 2;

                        // Check distance to Flow Source
                        let distToFlow = Math.sqrt(
                            (midX - flowSource.x) ** 2 +
                            (midY - flowSource.y) ** 2
                        );

                        // Determine Edge Color
                        let isGold = distToFlow < goldFlowRadius;
                        let opacity = 1 - distance / connectionDistance;

                        if (isGold) {
                            // Gold Flow Effect
                            let flowIntensity = 1 - (distToFlow / goldFlowRadius);
                            ctx.strokeStyle = `rgba(255, 215, 0, ${opacity * flowIntensity + 0.2})`; // Gold
                            ctx.lineWidth = 1.5;
                            ctx.shadowBlur = 5;
                            ctx.shadowColor = '#FFD700';
                        } else {
                            // Standard White Edge
                            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
                            ctx.lineWidth = 0.5;
                            ctx.shadowBlur = 0;
                        }

                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();

                        // Reset shadow for next iteration
                        ctx.shadowBlur = 0;
                    }
                }

                // Mouse Interaction
                if (mouse.x && mouse.y) {
                    let dx = particles[a].x - mouse.x;
                    let dy = particles[a].y - mouse.y;
                    let distToMouse = Math.sqrt(dx * dx + dy * dy);

                    if (distToMouse < mouseDistance) {
                        // Check if Mouse is inside the Gold Flow
                        let distMouseToFlow = Math.sqrt(
                            (mouse.x - flowSource.x) ** 2 +
                            (mouse.y - flowSource.y) ** 2
                        );

                        let isInGoldFlow = distMouseToFlow < goldFlowRadius;

                        // Color Logic: Blue if in Gold Flow, Gold otherwise
                        let strokeColor = isInGoldFlow
                            ? '0, 191, 255' // Deep Sky Blue
                            : '255, 215, 0';  // Gold

                        let shadowColor = isInGoldFlow ? '#00BFFF' : '#FFD700';

                        const opacity = 1 - distToMouse / mouseDistance;
                        ctx.strokeStyle = `rgba(${strokeColor}, ${opacity})`;
                        ctx.lineWidth = 2.5;
                        ctx.shadowBlur = 10;
                        ctx.shadowColor = shadowColor;

                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);

                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();

                        ctx.shadowBlur = 0;
                    }
                }
            }
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background: '#0b0c10' }} />;
};

export default ParticleBackground;
