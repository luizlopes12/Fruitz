import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer container-fluid bg-light">
      <div className="container ">
        <div className="bg-light">
          <nav className="container bg-light p-0 pt-4">
            <div className="container-fluid ">
              <Link to="/home" className="navbar-brand logo py-0">
                <img
                  className="pb-2"
                  src={require("../img/logo.png")}
                  alt="Logo Frexco"
                />
                <span>Fruitz</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="row mt-2">
          <div className="col-sm-3 col-12">
            <div className="row">
              <div className="col-1 fs-6">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <p className="col text-justify">
                Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan
                disputationi eu sit.
              </p>
            </div>
          </div>
          <div className="col-sm-3 col-12 section">
            <div className="row">
              <div className="col-1 fs-6">
                <i className="bi bi-telephone-x-fill"></i>
              </div>
              <p className="col">+11(543)123456789</p>
            </div>
            <div className="row">
              <div className="col-1 fs-6">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <p className="col">example@Fruitz.com</p>
            </div>
          </div>
          <div className="col-sm-2 col-12 about">
            <p>About Us</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>Blog</p>
          </div>
          <div className="col-sm-2 col-12 contact">
            <p>Contact Us</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
          <div className="col-sm-2 col-12 text-center">
            <p className="footer-socials fs-4 d-flex justify-content-evenly ">
              <a href="https://www.instagram.com/confuzzo/" target="_blank">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://twitter.com/Luizlopes24" target="_blank">
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/luiz-lopes-30b512218/"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </p>
          </div>
        </div>
        <p className="text-center dev mt-5 mb-0 pb-2">
          Developed with ❤️ by{" "}
          <a
            href="https://github.com/luizlopes12"
            title="My github"
            target="_blank"
          >
            Luizlopes12
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
