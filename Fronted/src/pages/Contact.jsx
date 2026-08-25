import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact-page">
      {/* Heading */}
      <div className="contact-heading">
        <p className="contact-small-title">GET IN TOUCH</p>

        <h1>
          We'd Love to <span>Hear From You</span>
        </h1>

        <p>
          Have a question, suggestion, or just want to say hello?
          Feel free to reach out to us.
        </p>
      </div>

      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          <h2>Let's Talk</h2>

          <p className="contact-intro">
            We are always happy to hear from our customers. Contact us for
            orders, questions, feedback, or any other information.
          </p>

          <div className="contact-item">
            <div className="contact-icon">📍</div>

            <div>
              <h3>Our Location</h3>
              <p>Bhubaneswar, Odisha, India</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>

            <div>
              <h3>Phone Number</h3>
              <p>+91 89842 26246</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">✉️</div>

            <div>
              <h3>Email Address</h3>
              <p>support@foodiefrenzy.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">🕐</div>

            <div>
              <h3>Opening Hours</h3>
              <p>Monday - Sunday</p>
              <span>10:00 AM - 11:00 PM</span>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form-box">

          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>

            <div className="input-row">

              <div className="input-group">
                <label>Your Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="input-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Your Message</label>

              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="send-message-btn">
              Send Message →
            </button>

          </form>

        </div>

      </div>

      {/* Map Placeholder */}
      <div className="map-section">
        <div className="map-content">
          <span>📍</span>
          <h3>Foodie Frenzy</h3>
          <p>Bhubaneswar, Odisha</p>
        </div>
      </div>

    </section>
  );
}

export default Contact;