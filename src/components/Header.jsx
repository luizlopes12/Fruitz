import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
function Header({ cartItems }) {
  return (
    <div className="header container-fluid bg-light">
      <nav className="container navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            {/* <img className='pb-2' src={} alt="Logo Frexco"/> */}
            <span>Fruitz</span>
          </Link>
          <form className="d-flex">
            <Link to="/cart" className="btn btn-sm btn-success fs-6">
              Cart
              <span>
                  {cartItems.length === 0 ? "" : cartItems.length}
              </span>
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
