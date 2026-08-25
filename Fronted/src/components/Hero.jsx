import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          We're Here
          <br />
          <span>For Food &</span>
          <br />
          <span>Delivery</span>
        </h1>

        <p className="hero-description">
          Best cooks and best delivery guys all at your service.
          Hot tasty food will reach you in 60 minutes.
        </p>

        <div className="hero-search">
          <span className="search-icon">⌕</span>

          <input
            type="text"
            placeholder="Discover your next favorite meal..."
          />

          <button>Search</button>
        </div>

        <div className="hero-buttons">
          <button className="download-btn">
            <span>⬇</span>
            Download App
          </button>

          <button className="video-btn">
            <span>▶</span>
            Watch Video
          </button>
        </div>
      </div>

      <div className="hero-image-section">
        <div className="food-circle food-circle-1">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
            alt="Pizza"
          />
        </div>

        <div className="food-circle food-circle-2">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            alt="Healthy food"
          />
        </div>

        <div className="food-circle food-circle-3">
          <img
            src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8"
            alt="Pasta"
          />
        </div>

        <div className="main-food-circle">
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349"
            alt="Delicious food"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;