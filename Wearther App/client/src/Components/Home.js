import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import weatherBackground from '../images/weather-background.jpg';
import heroImage from '../images/hero-image.jpg';

function Home() {
    const navigate = useNavigate();

    const handleLoginClick = () => navigate('/login');
    const handleSignUpClick = () => navigate('/signup');
    const handleExploreClick = () => navigate('/'); // Assuming you want to stay on the home page for this button

    return (
            <div className="home-container" style={{ backgroundImage: `url(${weatherBackground})` }}>
                <section className="hero" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${heroImage})` }}>
                    <h1>Weather App for Your World</h1>
                    <p>Get accurate forecasts, no matter what adventure awaits.</p>
                    <div className="button-group">
                        <button className="primary-cta" onClick={handleLoginClick}>Login</button>
                        <button className="secondary-cta" onClick={handleSignUpClick}>Sign Up</button>
                        <button className="tertiary-cta" onClick={handleExploreClick}>Explore as Guest</button>
                    </div>
                </section>
            <section className="features">
                <h2>Key Features</h2>
                <div className="feature-grid">
                    {/* Add your features here (e.g., icons, short descriptions) */}
                </div>
            </section>
        </div>
    );
}

export default Home;
