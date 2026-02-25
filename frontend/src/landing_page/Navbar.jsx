import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (

      <nav className="navbar sticky-top navbar-expand-lg border-bottom " style={{backgroundColor: "white"}}>
        <div className="container p-1">
          <Link to="/"><img src="/media/images/logo.svg" alt="logo" style={{width:"20%"}} /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
              <ul className="navbar-nav ms-auto mb- mb-lg-0">
                <li className="nav-item mx-3">
                  <Link className="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link active" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link active" to="/product">
                    Product 
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link active" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link active" to="/support">
                    Support
                  </Link>
                </li>
              </ul>
             
            
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
