import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Needed for dropdowns, navbar toggle, etc.
import "./Navbar.css"
import { GiWhiteBook } from "react-icons/gi";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <b>
              {" "}
              <GiWhiteBook /> TODO
            </b>
          </a>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2 ">
                <a className="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active btn-nav"
                  aria-current="page"
                  href="#"
                >
                  SignUp
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active btn-nav"
                  aria-current="page"
                  href="#"
                >
                  SignIn
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active btn-nav"
                  aria-current="page"
                  href="#"
                >
                  Logout
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active " aria-current="page" href="#">
                  <img
                    className="img-fluid user-png"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BSEPxHF0-PRxJlVMHla55wvcxWdSi8RU2g&s"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
