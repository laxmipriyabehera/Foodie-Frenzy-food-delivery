import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields.");
      return;
    }

    alert("Login successful!");

    // Temporary frontend login
    localStorage.setItem("isLoggedIn", "true");

    navigate("/");
  };

  return (
    <section className="login-page">

      {/* Left Image Section */}
      <div className="login-image">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
          alt="Foodie Frenzy Restaurant"
        />

        <div className="login-image-content">
          <h2>Welcome to Foodie Frenzy</h2>

          <p>
            Delicious food, unforgettable moments.
            Your favorite meals are just a click away.
          </p>
        </div>
      </div>

      {/* Login Form */}
      <div className="login-form-section">

        <div className="login-box">

          <Link to="/" className="login-logo">
            Foodie<span>Frenzy</span>
          </Link>

          <h1>Welcome Back!</h1>

          <p className="login-subtitle">
            Login to continue your delicious journey.
          </p>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="login-input-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="login-input-group">
              <label>Password</label>

              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="login-options">

              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="/forgot-password">
                Forgot Password?
              </Link>

            </div>

            {/* Login Button */}
            <button type="submit" className="login-btn">
              Login →
            </button>

          </form>

          {/* Register */}
          <p className="register-text">
            Don't have an account?

            <Link to="/register">
              Create Account
            </Link>
          </p>

        </div>

      </div>

    </section>
  );
}

export default Login;