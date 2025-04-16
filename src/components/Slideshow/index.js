import React from "react";
import "./style.css";
import { slideshowText } from "./data";
import home_img_right from "../../assets/Images/Home-page-right.jpg";
import { useHistory } from "react-router-dom";

function Slideshow({ subheadering1, heading, subheading }) {
  const history = useHistory();
  return (
    <section className="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="slideshow-text">
              <h6>{slideshowText.subheadering1}</h6>
              <h3>{slideshowText.heading}</h3>
              <p>{slideshowText.subheading}</p>
              <button
                className="btn about-btn mt-5 mb-5"
                onClick={() => history.push("/aboutus")}
              >
                About Us
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img
              src={home_img_right}
              className="img-fluid mt-5 mb-5 home_img_right"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Slideshow;
