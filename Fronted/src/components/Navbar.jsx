import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          <span className="logo-icon">👨‍🍳</span>
          <span>Foodie<span className="logo-highlight">Frenzy</span></span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <Link to="/cart" className="cart-link">
            🛒
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </Link>

          <Link to="/login" className="login-button">
            Login
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;