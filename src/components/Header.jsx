import React, {useState} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
function Header({ cartItems }) {

const [searchText, setSearchText] = useState()
  return (
    <div className="header container-fluid bg-light">
      <nav className="container navbar navbar-light bg-light">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand logo py-0">
            <img className='pb-2' src={require('../img/logo.png')} alt="Logo Frexco"/>
            <span>Fruitz</span>
          </Link>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={search}/>
            <Link to="/cart" className="btn btn-sm btn-success fs-5">
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
