import React from "react";
import "./data";
import "./style.css";
import contactimg from "../../assets/Images/cntact-img.jpg";
import {
  AiOutlineAim,
  AiOutlineComment,
  AiOutlineFieldTime,
} from "react-icons/ai";

export default function Contactus() {
  return (
    <div className="contact">
      <div className="page-title-area text-center py-4">
        <h1>Contact Us</h1>
      </div>

      <div className="container">
        {/* Contact Info Boxes */}
        <div className="row text-center">
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="contact-box h-100 p-3 shadow rounded">
              <div className="icon mb-2">
                <AiOutlineAim size={40} />
              </div>
              <h4>Our Address</h4>
              <p>
                City Center Buner, Mardan Road, Near MCB Islamic Bank, Sawari
                Buner.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="contact-box h-100 p-3 shadow rounded">
              <div className="icon mb-2">
                <AiOutlineComment size={40} />
              </div>
              <h4>Contact</h4>
              <p>
                +92 332 9531204 <br /> +92 346 8001835
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-12 mb-4">
            <div className="contact-box h-100 p-3 shadow rounded">
              <div className="icon mb-2">
                <AiOutlineFieldTime size={40} />
              </div>
              <h4>Hours of Operation</h4>
              <p>
                Monday - Friday: 10:00 - 19:00 <br /> Saturday & Sunday: 10:30 -
                15:00
              </p>
            </div>
          </div>
        </div>

        {/* Contact Header */}
        <div className="contact-header text-center py-8">
          <h6>GET IN TOUCH</h6>
          <h3>Ready to Get Started?</h3>
          <p className="mx-auto" style={{ maxWidth: "750px" }}>
            Let’s bring your ideas to life. Whether you’re looking to grow your
            brand, build a new digital presence, or improve your marketing
            strategy — we’re here to help. Reach out today and take the first
            step toward success.
          </p>
        </div>

        {/* Contact Image + Form */}
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12 mb-4">
            <img
              src={contactimg}
              className="img-fluid rounded shadow"
              alt="contact"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="contact-form bg-light p-4 rounded shadow">
              <form id="contactForm">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <input
                      type="text"
                      name="number"
                      placeholder="Your Phone Number"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Write your message..."
                      className="form-control"
                      spellCheck="false"
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn readmore">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container-fluid mt-5 px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.11675417118!2d80.06892448836716!3d13.047487785642284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1618387834124!5m2!1sen!2sin"
          width="100%"
          height="500"
          frameBorder="0"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
}
