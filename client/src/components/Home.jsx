import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <h1 className="home__title">Welcome to MERN App</h1>
        <p className="home__subtitle">
          The ultimate platform to manage, create, and collaborate seamlessly.
        </p>
        <button className="home__cta">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="home__features">
        <h2 className="home__section-title">Features</h2>
        <div className="home__features-list">
          <div className="feature-card">
            <h3>Easy CRUD Operations</h3>
            <p>
              Effortlessly create, read, update, and delete data with our intuitive interface.
            </p>
          </div>
          <div className="feature-card">
            <h3>Real-Time Collaboration</h3>
            <p>
              Work with your team in real-time and stay updated on all changes instantly.
            </p>
          </div>
          <div className="feature-card">
            <h3>Responsive Design</h3>
            <p>
              Enjoy a seamless experience across all devices with our fully responsive UI.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="home__testimonials">
        <h2 className="home__section-title">What Our Users Say</h2>
        <div className="testimonial-card">
          <p>
            "This platform has transformed the way we manage our projects. Highly recommended!"
          </p>
          <span>- Alex Johnson</span>
        </div>
        <div className="testimonial-card">
          <p>
            "MERN App offers a simple yet powerful interface for managing my tasks efficiently."
          </p>
          <span>- Sarah Lee</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
