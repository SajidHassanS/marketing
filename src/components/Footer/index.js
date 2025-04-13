import React from "react";
import "./style.css";
export default function Footer() {
  return (
    <div>
      {/* header 7 newletter */}
      <div className="newsletter">
        <div className="container">
          <div className="text-center">
            <h6>Newsletter</h6>
            <h4>Subscribe To Our Newsletter</h4>
            <p>
              Stay up to date with the latest insights, tips, and updates from
              our team. Join our newsletter to get valuable content delivered
              straight to your inbox — no spam, just smart strategies.
            </p>
          </div>
          <form class="newsletter-form">
            <input
              type="text"
              class="input-newsletter"
              placeholder="Enter your email address"
              name="EMAIL"
              required=""
            />
            <button type="submit" class="btn learn-more-btn">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <div className="footer">
        <div className="container footer-text">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <h3>Aboutus</h3>
              <p>
                We are a passionate team committed to helping individuals and
                businesses thrive in the digital world. With a focus on
                innovation, strategy, and real-world results, we deliver
                services that empower growth, streamline operations, and build
                lasting success.
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Aboutus">About Us</a>
                </li>
                <li>
                  <a href="/Services">Services</a>
                </li>
                <li>
                  <a href="/Price">Price</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3> Links</h3>
              <ul>
                <li>
                  <a href="/">Career</a>
                </li>
                <li>
                  <a href="/team">Team</a>
                </li>
                <li>
                  <a href="/Contactus">Contact Us</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <h3>Address</h3>
              <ul>
                <li>
                  City Center Buner, Mardan Raod Near MCB islamic Bank Sawari
                  Buner
                </li>
                <li>+92 332 9531204</li>
                <li>+92 346 8001835</li>
                <li>digiworldbuner@gmail.com </li>
                <li>Whatsapp On +923329531204 </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-end">
          <h6 className="text-center">Design & Developed by Marketing Team</h6>
        </div>
      </div>
    </div>
  );
}
