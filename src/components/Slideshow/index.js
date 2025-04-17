import React, { useState, useEffect } from "react";
import { slideshowText as slides } from "./data";
import "./style.css";
import { useHistory } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Slideshow() {
  const history = useHistory();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="home d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${index}`}
              className="col-lg-6 col-md-6 col-12"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6 }}
            >
              <div className="slideshow-text">
                <h6>{slide.subheadering1}</h6>
                <h3>{slide.heading}</h3>
                <p>{slide.subheading}</p>
                <button
                  className="btn about-btn mt-4"
                  onClick={() => history.push("/aboutus")}
                >
                  About Us
                </button>
              </div>
            </motion.div>

            <motion.div
              key={`img-${index}`}
              className="col-lg-6 col-md-6 col-12 text-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={slide.img}
                className="img-fluid mt-4 home_img_right"
                alt="slide"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Slideshow;
