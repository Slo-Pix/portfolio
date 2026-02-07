import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <Navbar />
            <ParticleBackground />
            <Hero />
            <About />
            <Projects />
            <Achievements />
            <Contact />
        </div>
    );
}

export default App;
