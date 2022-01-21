import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/style.css";
function Header({ cartItems }) {
  return (
    <div className="header container-fluid bg-light">
      <nav className="container navbar navbar-light bg-light p-0 pt-2">
        <div className="container-fluid ">
          <Link to="/home" className="navbar-brand logo py-0">
            <img
              className="pb-2"
              src={require("../img/logo.png")}
              alt="Logo Frexco"
            />
            <span>Fruitz</span>
          </Link>
          <form className="d-flex">
            <Link
              to="/cart"
              className="btn btn-sm btn-success btn position-relative fs-5 px-2 py-0"
            >
              <i className="bi bi-cart"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger px-2 py-1">
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
