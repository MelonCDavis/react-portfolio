import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container px-5">
        <div className="row">
          <div className="col-6 col-lg-4">
            <h3 className="fw-bold" id="contact">
              Bent Back &amp; Beyond
            </h3>
            <p className="pt-2">
              Melon Chris Davis
              <br />
              Zen Ink Asheville
              <br />
              520 Hendersonville Rd.
              <br />
              Asheville, NC 28803
            </p>
            <p className="mb-2">1-720-666-0611</p>
            <p>brothertiki@gmail.com</p>
          </div>

          <div className="col">
            <h4 className="fw-bold text-lg-center">Menu</h4>
            <ul className="list-unstyled pt-2">
              <li className="py-1 text-lg-center">
                <a
                  href="/"
                  className="btn btn-secondary btn-sm"
                  role="button"
                >
                  Home
                </a>
              </li>
              <li className="py-1 text-lg-center">
                <a
                  href="/tattoos"
                  className="btn btn-secondary btn-sm"
                  role="button"
                >
                  Tattoos
                </a>
              </li>
              <li className="py-1 text-lg-center">
                <a
                  href="/appointments"
                  className="btn btn-secondary btn-sm"
                  role="button"
                >
                  Appointments
                </a>
              </li>
              <li className="py-1 text-lg-center">
                <a
                  href="/aftercare"
                  className="btn btn-secondary btn-sm"
                  role="button"
                >
                  Aftercare
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h4 className="fw-bold">Social Media Links</h4>
            <div className="social-media pt-2">
              <a
                href="https://www.facebook.com/brothertiki"
                className="text-light fs-2 me-3"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.github.com/MelonCDavis"
                className="text-light fs-2 me-3"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/bentbackandbeyond/"
                className="text-light fs-2 me-3"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/chrismelondavis"
                className="text-light fs-2"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center py-1">
          <p>2025 © BentBack&amp;Beyond. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
