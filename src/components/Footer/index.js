import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div>
      {/* Newsletter Section */}
      <div className="newsletter py-5 bg-light border-top border-bottom">
        <div className="container">
          <div className="text-center mb-4">
            <h6 className="text-primary fw-bold text-uppercase">Newsletter</h6>
            <h4 className="fw-bold mb-3">Subscribe To Our Newsletter</h4>
            <p className="text-muted">
              Stay up to date with the latest insights, tips, and updates from
              our team. No spam — just valuable strategies, delivered straight
              to your inbox.
            </p>
          </div>

          <form className="newsletter-form d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
            <input
              type="email"
              className="form-control w-100 w-md-50"
              placeholder="Enter your email address"
              name="EMAIL"
              required
            />
            <button type="submit" className="btn learn-more-btn px-4 py-2">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Footer Main Section */}
      <div className="footer bg-dark text-white pt-5 pb-4">
        <div className="container">
          <div className="row footer-text">
            {/* About Us */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">About Us</h5>
              <p className="text-light">
                We are a passionate team committed to helping individuals and
                businesses thrive in the digital world. Our focus is on
                innovation, growth strategies, and real-world results that
                empower success.
              </p>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/Aboutus" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/Services" className="footer-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/Price" className="footer-link">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Explore More */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Explore</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="footer-link">
                    Career
                  </a>
                </li>
                <li>
                  <a href="/team" className="footer-link">
                    Team
                  </a>
                </li>
                <li>
                  <a href="/Contactus" className="footer-link">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/" className="footer-link">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Contact</h5>
              <ul className="list-unstyled">
                <li className="mb-1">
                  City Center Buner, Mardan Road Near MCB Islamic Bank, Sawari
                  Buner
                </li>
                <li className="mb-1">Phone: +92 332 9531204</li>
                <li className="mb-1">Phone: +92 346 8001835</li>
                <li className="mb-1">Email: digiworldbuner@gmail.com</li>
                <li>WhatsApp: +92 332 9531204</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="bg-light mt-4" />
        <div className="text-center">
          <p className="mb-0 small text-light">
            © {new Date().getFullYear()} Design & Developed by Marketing Team
          </p>
        </div>
      </div>
    </div>
  );
}
