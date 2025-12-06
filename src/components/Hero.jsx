import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    My Coffee <span className="text-gold">Journey</span>
                </h1>
                <p className="hero-subtitle">
                    A personal log of single-origin discoveries and tasting notes.
                </p>
                <button className="cta-button" onClick={() => document.getElementById('collection').scrollIntoView()}>Browse My Notes</button>
            </div>
        </section>
    );
};

export default Hero;
