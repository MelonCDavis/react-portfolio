import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>

      <span className="hidden">Bent Back and Beyond Tattoo</span>

      <div className="container-fluid bg-secondary">
        <nav className="navbar navbar-expand-md navbar-light">
          <Link to="/" className="navbar-brand">
            <h1 className="arial my-text-shadow custom-tattoo-border px-3 bg-light rounded">
              Bent Back &amp; Beyond
            </h1>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#toggleMobileMenu"
            aria-controls="toggleMobileMenu"
            aria-expanded="false"
            aria-label="toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="toggleMobileMenu">
            <ul className="navbar-nav ms-auto text-center">
              <li>
                <NavLink
                  to="/"
                  className="btn btn-light me-2 btn-sm custom-button-border mb-2"
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/tattoos"
                  className="btn btn-light me-2 btn-sm custom-button-border mb-2"
                >
                  Tattoos
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/appointments"
                  className="btn btn-light me-2 btn-sm custom-button-border mb-2"
                >
                  Appointments
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/store"
                  className="btn btn-light me-2 btn-sm custom-button-border mb-2"
                >
                  Store
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/aftercare"
                  className="btn btn-light me-2 btn-sm custom-button-border mb-2"
                >
                  Aftercare
                </NavLink>
              </li>

              <li>
                <a
                  href="#contact"
                  className="btn btn-light me-2 btn-sm custom-button-border mb-2"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
