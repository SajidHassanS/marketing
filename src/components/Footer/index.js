import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div>
      {/* Newsletter Section */}
      <div className="newsletter py-5 bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h6>Newsletter</h6>
            <h4>Subscribe To Our Newsletter</h4>
            <p>
              Stay up to date with the latest insights, tips, and updates from
              our team. Join our newsletter to get valuable content delivered
              straight to your inbox — no spam, just smart strategies.
            </p>
          </div>
          <form className="newsletter-form d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
            <input
              type="text"
              className="form-control w-100 w-sm-50"
              placeholder="Enter your email address"
              name="EMAIL"
              required
            />
            <button type="submit" className="btn learn-more-btn">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Footer Main Section */}
      <div className="footer pt-5 pb-4 bg-dark text-white">
        <div className="container">
          <div className="row footer-text">
            {/* About Section */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <h3>About Us</h3>
              <p>
                We are a passionate team committed to helping individuals and
                businesses thrive in the digital world. With a focus on
                innovation, strategy, and real-world results, we deliver
                services that empower growth, streamline operations, and build
                lasting success.
              </p>
            </div>

            {/* Links */}
            <div className="col-lg-2 col-md-6 col-12 mb-4">
              <h3>Links</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/Aboutus" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/Services" className="text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/Price" className="text-white">
                    Price
                  </a>
                </li>
              </ul>
            </div>

            {/* More Links */}
            <div className="col-lg-2 col-md-6 col-12 mb-4">
              <h3>Explore</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-white">
                    Career
                  </a>
                </li>
                <li>
                  <a href="/team" className="text-white">
                    Team
                  </a>
                </li>
                <li>
                  <a href="/Contactus" className="text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Address Section */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <h3>Address</h3>
              <ul className="list-unstyled">
                <li>
                  City Center Buner, Mardan Road Near MCB Islamic Bank, Sawari
                  Buner
                </li>
                <li>+92 332 9531204</li>
                <li>+92 346 8001835</li>
                <li>digiworldbuner@gmail.com</li>
                <li>Whatsapp: +92 332 9531204</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="bg-light" />
        <div className="footer-end text-center">
          <h6>Design & Developed by Marketing Team</h6>
        </div>
      </div>
    </div>
  );
}
