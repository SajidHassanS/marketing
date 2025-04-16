import React, { useState } from "react";
import { HomePageText } from "./data";
import Slideshow from "../../components/Slideshow";
import "./style.css";
import akbarjan from "../../assets/imagess/akbar.png";
import bismillahjan from "../../assets/imagess/bismillahjan.png";
import ibrahimkhan from "../../assets/imagess/ibrahimkhan.png";
import nasirali from "../../assets/imagess/nasirali.png";
import saddiqalikhan1 from "../../assets/imagess/saddiqalikhan1.png";
import numankhan from "../../assets/imagess/numankhan.png";
import zahoorahmad from "../../assets/imagess/zahoorahmad.png";
import zuhaib from "../../assets/imagess/zuhaib.png";
import aboutus from "../../assets/Images/about-us.jpg";
import { Link } from "react-router-dom";

import {
  AiOutlineRocket,
  AiOutlineSketch,
  AiOutlineRise,
  AiOutlineSend,
  AiOutlineMail,
  AiOutlineBlock,
  AiOutlineNotification,
  AiOutlineFileSearch,
  AiOutlineTeam,
  AiOutlineSync,
  AiOutlineFundView,
  AiOutlineProject,
  AiOutlineCamera,
  AiOutlineSafety,
} from "react-icons/ai";

const teamMembers = [
  {
    name: "Mr Akbar Jan",
    role: "Founder & CEO",
    img: akbarjan,
  },
  {
    name: "SADDIQ ALI KHAN",
    role: "Project Manager",
    img: saddiqalikhan1,
  },
  {
    name: "Mr Numan Khan",
    role: "Managing Director",
    img: numankhan,
  },
  {
    name: "Mr Bismillah Jan",
    role: "Operation Director & Event Manager",
    img: bismillahjan,
  },
  {
    name: "Zahoor Ahmad",
    role: "Sale Executive",
    img: zahoorahmad,
  },
  {
    name: "Ibrahim Khan",
    role: "Sale Executive",
    img: ibrahimkhan,
  },
  {
    name: "Nasir Ali",
    role: "Sale Executive",
    img: nasirali,
  },
  {
    name: "Muhammad Zuhaib",
    role: "Sale Executive",
    img: zuhaib,
  },
];

function Home({ header, subheader, subheader1 }) {
  const [showAll, setShowAll] = useState(false);

  const visibleMembers = showAll ? teamMembers : teamMembers.slice(0, 4);
  return (
    <div>
      <section>
        <Slideshow />
        <div className="container">
          <div className="header-section mt-5 pt-5">
            <h6>{HomePageText.subheader1}</h6>
            <h1>{HomePageText.header}</h1>
            <p>{HomePageText.subheader}</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="services-box">
                <AiOutlineRise className="icon1" />
                <h4>{HomePageText.services_title1}</h4>
                <p>{HomePageText.services_subheading}</p>
                <Link
                  to={`/services/marketing-analysis`}
                  className="btn learn-more-btn"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="services-box">
                <AiOutlineRocket className="icon2" />
                <h4>{HomePageText.services_title2}</h4>
                <p>{HomePageText.services_subheading}</p>
                <Link
                  to={`/services/website-optimization`}
                  className="btn learn-more-btn"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="services-box">
                <AiOutlineMail className="icon3" />
                <h4>{HomePageText.services_title3}</h4>
                <p>{HomePageText.services_subheading}</p>
                <Link
                  to={`/services/email-marketing`}
                  className="btn learn-more-btn"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Header 2  about */}
        <div className="abouthome">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 pt-5">
                <img
                  src={aboutus}
                  className="img-fluid mt-5 pt-5"
                  alt="aboutus"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="abouthome">
                  <h6 className="mt-3">{HomePageText.about_subheader}</h6>
                  <h4 className="mt-3">{HomePageText.about_header}</h4>
                  <p className="mt-3 text-justify">{HomePageText.about_des1}</p>
                  <p className="text-justify">{HomePageText.about_des2}</p>

                  <Link to="/aboutus" className="btn readmore mt-3">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header 3 services */}
        <div className="serviceshome">
          <div className="container">
            <div className="servicesheader">
              <h6>{HomePageText.serviceshome_subheader}</h6>
              <h4>{HomePageText.serviceshome_header}</h4>
              <p>{HomePageText.serviceshome_subheader1}</p>
            </div>
            <div className="row">
              {[
                {
                  icon: <AiOutlineRise className="icon1" />,
                  title: HomePageText.services_box_title1,
                  des: HomePageText.services_box_des1,
                  slug: HomePageText.services_box_slug1,
                },
                {
                  icon: <AiOutlineRocket className="icon2" />,
                  title: HomePageText.services_box_title2,
                  des: HomePageText.services_box_des2,
                  slug: HomePageText.services_box_slug2,
                },
                {
                  icon: <AiOutlineSend className="icon3" />,
                  title: HomePageText.services_box_title3,
                  des: HomePageText.services_box_des3,
                  slug: HomePageText.services_box_slug3,
                },
                {
                  icon: <AiOutlineMail className="icon4" />,
                  title: HomePageText.services_box_title4,
                  des: HomePageText.services_box_des4,
                  slug: HomePageText.services_box_slug4,
                },
                {
                  icon: <AiOutlineFundView className="icon5" />,
                  title: HomePageText.services_box_title5,
                  des: HomePageText.services_box_des5,
                  slug: HomePageText.services_box_slug5,
                },
                {
                  icon: <AiOutlineTeam className="icon6" />,
                  title: HomePageText.services_box_title6,
                  des: HomePageText.services_box_des6,
                  slug: HomePageText.services_box_slug6,
                },
                {
                  icon: <AiOutlineSketch className="icon7" />,
                  title: HomePageText.services_box_title7,
                  des: HomePageText.services_box_des7,
                  slug: HomePageText.services_box_slug7,
                },
                {
                  icon: <AiOutlineProject className="icon8" />,
                  title: HomePageText.services_box_title8,
                  des: HomePageText.services_box_des8,
                  slug: HomePageText.services_box_slug8,
                },
                {
                  icon: <AiOutlineNotification className="icon9" />,
                  title: HomePageText.services_box_title9,
                  des: HomePageText.services_box_des9,
                  slug: HomePageText.services_box_slug9,
                },
                {
                  icon: <AiOutlineSync className="icon10" />,
                  title: HomePageText.services_box_title10,
                  des: HomePageText.services_box_des10,
                  slug: HomePageText.services_box_slug10,
                },
                {
                  icon: <AiOutlineFileSearch className="icon11" />,
                  title: HomePageText.services_box_title11,
                  des: HomePageText.services_box_des11,
                  slug: HomePageText.services_box_slug11,
                },
                {
                  icon: <AiOutlineBlock className="icon12" />,
                  title: HomePageText.services_box_title12,
                  des: HomePageText.services_box_des12,
                  slug: HomePageText.services_box_slug12,
                },
                {
                  icon: <AiOutlineCamera className="icon13" />,
                  title: HomePageText.services_box_title13,
                  des: HomePageText.services_box_des13,
                  slug: HomePageText.services_box_slug13,
                },
                {
                  icon: <AiOutlineSafety className="icon14" />,
                  title: HomePageText.services_box_title14,
                  des: HomePageText.services_box_des14,
                  slug: HomePageText.services_box_slug14,
                },
              ].map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="services-box-home m-3">
                    {item.icon}
                    <h4>{item.title}</h4>
                    <p>{item.des}</p>
                    <Link
                      to={`/services/${item.slug}`}
                      className="btn learn-more-btn"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Header 4 test */}
        <div className="home-test">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="">
                  <h6>TESTIMONIALS</h6>
                  <h4>What Our Clients Are Saying?</h4>
                  <h4>What Our Clients Are Saying?</h4>
                  <p>
                    Our clients trust us to deliver exceptional results — and we
                    never take that trust for granted. From growing e-commerce
                    brands to helping small businesses establish their digital
                    presence, we’ve had the privilege of partnering with
                    organizations that are ready to scale. They value our
                    strategic approach, transparent communication, and
                    consistent performance. Don't just take our word for it —
                    let their success stories speak for themselves.
                  </p>
                </div>
              </div>
              {/* <div className="col-lg-6 col-md-6 col-12 pt-5">
                <img src={test} className="img-fluid" alt="test" />
              </div> */}
            </div>
          </div>
        </div>

        {/* Header 5 team */}
        <div className="hometeam pb-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mb-4">
                <div className="hometeamheader">
                  <h6>OUR TEAM</h6>
                  <h4>We Help to Achieve Your Business Goal</h4>
                  <p>
                    Whether you're launching a startup or scaling an established
                    brand, our team is here to turn your vision into measurable
                    results. Through strategic planning, digital innovation, and
                    dedicated support, we empower your business to grow,
                    compete, and thrive in a digital-first world.
                  </p>
                  <button
                    className="btn learn-more-btn mt-3"
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll ? "View Less" : "View All"}
                  </button>
                </div>
              </div>

              {visibleMembers.map((member, index) => (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                  key={index}
                >
                  <div className="hometeam-box">
                    <div className="our-team">
                      <div className="pic">
                        <img src={member.img} alt={member.name} />
                      </div>
                      <div className="team-content">
                        <h3 className="title">{member.name}</h3>
                        <span className="post">{member.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* header 6 price */}
        <div className="homeprice py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h6>PRICING</h6>
              <h4>Our Flexible Pricing Plan</h4>
              <p>
                We offer transparent and flexible pricing tailored to fit
                businesses of all sizes. Whether you're just getting started or
                scaling up, our plans are designed to deliver value without
                compromising quality.
              </p>
            </div>

            <div className="row">
              {/* Starter Plan */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="homeprice-box h-100">
                  <AiOutlineSend className="icon1 mb-3" />
                  <div className="homeprice-header">
                    <h3>Starter Plan</h3>
                  </div>
                  <div className="homeprice-list">
                    <ul>
                      <li>10GB Bandwidth Internet</li>
                      <li>Business & Finance Analyzing</li>
                      <li>25 Social Media Reviews</li>
                      <li>Customer Management</li>
                      <li>24/7 Support</li>
                    </ul>
                  </div>
                  <div className="homeprice-price">
                    $20.99
                    <span> Per Month</span>
                  </div>
                  <button className="btn learn-more-btn">Book Now</button>
                </div>
              </div>

              {/* Advance Plan */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="homeprice-box h-100">
                  <AiOutlineBlock className="icon2 mb-3" />
                  <div className="homeprice-header">
                    <h3>Advance Plan</h3>
                  </div>
                  <div className="homeprice-list">
                    <ul>
                      <li>30GB Bandwidth Internet</li>
                      <li>Business & Finance Analyzing</li>
                      <li>30 Social Media Reviews</li>
                      <li>Customer Management</li>
                      <li>24/7 Support</li>
                    </ul>
                  </div>
                  <div className="homeprice-price">
                    $25.99
                    <span> Per Month</span>
                  </div>
                  <button className="btn learn-more-btn">Book Now</button>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="homeprice-box h-100">
                  <AiOutlineSketch className="icon3 mb-3" />
                  <div className="homeprice-header">
                    <h3>Premium Plan</h3>
                  </div>
                  <div className="homeprice-list">
                    <ul>
                      <li>50GB Bandwidth Internet</li>
                      <li>Business & Finance Analyzing</li>
                      <li>35 Social Media Reviews</li>
                      <li>Customer Management</li>
                      <li>24/7 Support</li>
                    </ul>
                  </div>
                  <div className="homeprice-price">
                    $30.99
                    <span> Per Month</span>
                  </div>
                  <button className="btn learn-more-btn">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
