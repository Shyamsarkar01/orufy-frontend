import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  return (

    <nav className="navbar">

      <div className="nav-container">

        {/* Logo */}

        <Link
          to="/"
          className="logo"
        >
          Orufy
        </Link>

        {/* Menu */}

        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/add-product">
            Add Product
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

        {/* Button */}

        <Link
          to="/contact"
          className="contact-btn"
        >
          Contact
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;