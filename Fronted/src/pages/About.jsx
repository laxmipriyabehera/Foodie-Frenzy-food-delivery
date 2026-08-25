import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-container">

        {/* Image Section */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"
            alt="Foodie Frenzy Restaurant"
          />

          <div className="experience-box">
            <span>5+</span>
            <p>Years of Experience</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="about-content">
          <p className="about-small-title">ABOUT FOODIE FRENZY</p>

          <h1>
            Good Food,
            <br />
            <span>Good Mood!</span>
          </h1>

          <p className="about-description">
            Welcome to Foodie Frenzy, your destination for delicious food,
            fresh ingredients, and unforgettable flavors. We believe that
            great food brings people together and creates beautiful memories.
          </p>

          <p className="about-description">
            From a quick breakfast to a relaxing dinner, we prepare every dish
            with care, passion, and the finest ingredients to give you a
            wonderful dining experience.
          </p>

          {/* Features */}
          <div className="about-features">
            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <h3>Fresh Ingredients</h3>
                <p>Fresh and quality ingredients in every dish.</p>
              </div>
            </div>

            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <h3>Expert Chefs</h3>
                <p>Prepared by skilled and passionate chefs.</p>
              </div>
            </div>

            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <h3>Fast Delivery</h3>
                <p>Hot and delicious food delivered to your door.</p>
              </div>
            </div>

            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <h3>Best Quality</h3>
                <p>We never compromise on taste and quality.</p>
              </div>
            </div>
          </div>

          <Link to="/menu" className="about-btn">
            Explore Our Menu →
          </Link>
        </div>
      </div>

      {/* Statistics */}
      <div className="about-stats">

        <div className="stat-box">
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Delicious Dishes</p>
        </div>

        <div className="stat-box">
          <h2>5+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-box">
          <h2>4.9</h2>
          <p>Customer Rating ⭐</p>
        </div>

      </div>
    </section>
  );
}

export default About;