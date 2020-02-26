import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    return (
        <>
        <section className="banner">
            <h2>Journal wherever you go</h2>
            <Link to="/my-journals" type='button'>Explore the Demo</Link>
          </section>
          <section className="feature-sections">
            <h3>Tell your stories</h3>
            <p>Write about the places you've experienced and keep track of where you've traveled.</p>
            <img alt="place" src="https://sonshineventura.org/files/2015/02/wireframe-box-270x203.jpg" />
          </section>
          <section className="feature-sections">
          <h3>Discover new places</h3>
            <p>Explore and read journals about all the places our users have been.</p>
            <img alt="place" src="https://sonshineventura.org/files/2015/02/wireframe-box-270x203.jpg" />
          </section>
          <section className="feature-sections">
            <h3>Start conversations</h3>
            <p>Comment on other journals and ask for travel advice to new places to help begin your next journey.</p>
            <img alt="place" src="https://sonshineventura.org/files/2015/02/wireframe-box-270x203.jpg" />
          </section>
        </>
    )
}

export default LandingPage;