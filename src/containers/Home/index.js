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
import { motion } from "framer-motion";

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

const serviceCards = [
  {
    icon: <AiOutlineRise className="icon1" />,
    title: HomePageText.services_title1,
    link: "/services/marketing-analysis",
  },
  {
    icon: <AiOutlineRocket className="icon2" />,
    title: HomePageText.services_title2,
    link: "/services/website-optimization",
  },
  {
    icon: <AiOutlineMail className="icon3" />,
    title: HomePageText.services_title3,
    link: "/services/email-marketing",
  },
];

const servicesData = [
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
];

function Home({ header, subheader, subheader1 }) {
  const [showAll, setShowAll] = useState(false);

  const visibleMembers = showAll ? teamMembers : teamMembers.slice(0, 4);
  return (
    <div>
      <section>
        <Slideshow />

        <motion.div
          className="container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-section mt-5 pt-5">
            <motion.h6
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {HomePageText.subheader1}
            </motion.h6>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {HomePageText.header}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {HomePageText.subheader}
            </motion.p>
          </div>

          {/* === Animated Cards === */}
          <div className="row">
            {serviceCards.map((item, index) => (
              <motion.div
                className="col-lg-4 col-md-6 col-12 mb-4"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  className="services-box"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                  <h4>{item.title}</h4>
                  <p>{HomePageText.services_subheading}</p>
                  <Link to={item.link} className="btn learn-more-btn">
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Header 2  about */}
        <div className="abouthome py-5">
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* Image with fade + zoom animation */}
              <motion.div
                className="col-lg-6 col-md-6 col-12 pt-5"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img
                  src={aboutus}
                  className="img-fluid mt-5 pt-5"
                  alt="aboutus"
                />
              </motion.div>

              {/* Text section with slide-in effect */}
              <motion.div
                className="col-lg-6 col-md-6 col-12"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="abouthome-content">
                  <h6 className="mt-3">{HomePageText.about_subheader}</h6>
                  <h4 className="mt-3">{HomePageText.about_header}</h4>
                  <p className="mt-3 text-justify">{HomePageText.about_des1}</p>
                  <p className="text-justify">{HomePageText.about_des2}</p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link to="/aboutus" className="btn readmore mt-3">
                      Read More
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Header 3 services */}
        <div className="serviceshome">
          <div className="container">
            <motion.div
              className="servicesheader"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h6>{HomePageText.serviceshome_subheader}</h6>
              <h4>{HomePageText.serviceshome_header}</h4>
              <p>{HomePageText.serviceshome_subheader1}</p>
            </motion.div>

            <div className="row">
              {servicesData.map((item, index) => (
                <motion.div
                  key={index}
                  className="col-lg-4 col-md-6 col-12 mb-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="services-box-home m-3"
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {item.icon}
                    <h4>{item.title}</h4>
                    <p>{item.des}</p>
                    <Link
                      to={`/services/${item.slug}`}
                      className="btn learn-more-btn"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Header 4 test */}
        <div className="home-test py-5">
          <div className="container">
            <div className="row align-items-center">
              <motion.div
                className="col-lg-6 col-md-6 col-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="">
                  <h6 className="text-uppercase text-warning fw-bold">
                    Testimonials
                  </h6>
                  <h4 className="fw-bold mb-3">What Our Clients Are Saying</h4>
                  <p className="text-muted">
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
              </motion.div>

              {/* Optional image block with animation */}
              {/* 
      <motion.div
        className="col-lg-6 col-md-6 col-12 pt-5"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img src={test} className="img-fluid rounded" alt="Testimonials" />
      </motion.div>
      */}
            </div>
          </div>
        </div>

        {/* Header 5 team */}
        <div className="hometeam pb-5">
          <div className="container">
            <motion.div
              className="row align-items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {/* Team Text Section */}
              <motion.div
                className="col-lg-6 col-md-12 mb-4"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7 }}
              >
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
                  <motion.button
                    className="btn learn-more-btn mt-3"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll ? "View Less" : "View All"}
                  </motion.button>
                </div>
              </motion.div>

              {/* Team Cards */}
              {visibleMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="hometeam-box">
                    <div className="our-team">
                      <motion.div
                        className="pic"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img src={member.img} alt={member.name} />
                      </motion.div>
                      <div className="team-content">
                        <h3 className="title">{member.name}</h3>
                        <span className="post">{member.role}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* header 6 price */}
        <div className="homeprice py-5">
          <motion.div
            className="container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Heading Section */}
            <motion.div
              className="text-center mb-5"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h6>PRICING</h6>
              <h4>Our Flexible Pricing Plan</h4>
              <p>
                We offer transparent and flexible pricing tailored to fit
                businesses of all sizes. Whether you're just getting started or
                scaling up, our plans are designed to deliver value without
                compromising quality.
              </p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="row">
              {[
                {
                  icon: <AiOutlineSend className="icon1 mb-3" />,
                  title: "Starter Plan",
                  price: "$20.99",
                  features: [
                    "10GB Bandwidth Internet",
                    "Business & Finance Analyzing",
                    "25 Social Media Reviews",
                    "Customer Management",
                    "24/7 Support",
                  ],
                },
                {
                  icon: <AiOutlineBlock className="icon2 mb-3" />,
                  title: "Advance Plan",
                  price: "$25.99",
                  features: [
                    "30GB Bandwidth Internet",
                    "Business & Finance Analyzing",
                    "30 Social Media Reviews",
                    "Customer Management",
                    "24/7 Support",
                  ],
                },
                {
                  icon: <AiOutlineSketch className="icon3 mb-3" />,
                  title: "Premium Plan",
                  price: "$30.99",
                  features: [
                    "50GB Bandwidth Internet",
                    "Business & Finance Analyzing",
                    "35 Social Media Reviews",
                    "Customer Management",
                    "24/7 Support",
                  ],
                },
              ].map((plan, index) => (
                <motion.div
                  className="col-lg-4 col-md-6 col-sm-12 mb-4"
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div
                    className="homeprice-box h-100"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 120 }}
                  >
                    {plan.icon}
                    <div className="homeprice-header">
                      <h3>{plan.title}</h3>
                    </div>
                    <div className="homeprice-list">
                      <ul>
                        {plan.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="homeprice-price">
                      {plan.price}
                      <span> Per Month</span>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      whileHover={{ scale: 1.05 }}
                      className="btn learn-more-btn"
                    >
                      Book Now
                    </motion.button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
