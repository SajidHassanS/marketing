import React from "react";
import { HomePageText } from "./data";
import {
  AiOutlineRise,
  AiOutlineRocket,
  AiOutlineSend,
  AiOutlineMail,
  AiOutlineFundView,
  AiOutlineTeam,
  AiOutlineSketch,
  AiOutlineProject,
  AiOutlineNotification,
  AiOutlineSync,
  AiOutlineFileSearch,
  AiOutlineBlock,
  AiOutlineCamera,
  AiOutlineSafety,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.css";

// Array of icons in order
const icons = [
  AiOutlineRise,
  AiOutlineRocket,
  AiOutlineSend,
  AiOutlineMail,
  AiOutlineFundView,
  AiOutlineTeam,
  AiOutlineSketch,
  AiOutlineProject,
  AiOutlineNotification,
  AiOutlineSync,
  AiOutlineFileSearch,
  AiOutlineBlock,
  AiOutlineCamera,
  AiOutlineSafety,
];

export default function Services() {
  return (
    <div className="serviceshome pb-5">
      <div className="page-title-area text-center">
        <h1>Our Services</h1>
      </div>
      <div className="container">
        <div className="servicesheader text-center mb-5">
          <h6>{HomePageText.serviceshome_subheader}</h6>
          <h4>{HomePageText.serviceshome_header}</h4>
          <p>{HomePageText.serviceshome_subheader1}</p>
        </div>

        <div className="row">
          {Array.from({ length: 14 }, (_, i) => {
            const index = i + 1;
            const title = HomePageText[`services_box_title${index}`];
            const description = HomePageText[`services_box_des${index}`];
            const slug = HomePageText[`services_box_slug${index}`];
            const Icon = icons[i];

            return (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                <div className="services-box-home h-100 p-4 text-center shadow-sm rounded">
                  <Icon className={`mb-3 icon${index}`} size={36} />
                  <h4 className="mb-2">{title}</h4>
                  <p className="mb-3">{description}</p>
                  <Link to={`/services/${slug}`} className="btn learn-more-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
