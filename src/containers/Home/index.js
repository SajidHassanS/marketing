import React from "react";
import { HomePageText } from "./data";
import Slideshow from "../../components/Slideshow";
import "./style.css";
import akbarjan from "../../assets/imagess/akbar.png";
import bismillahjan from "../../assets/imagess/bismillahjan.png";
import ibrahimkhan from "../../assets/imagess/ibrahimkhan.png";
import nasirali from "../../assets/imagess/nasirali.png";
import saddiqalikhan1 from "../../assets/imagess/saddiqalikhan1.png";
import zahoorahmad from "../../assets/imagess/zahoorahmad.png";
import zuhaib from "../../assets/imagess/zuhaib.png";
import aboutus from "../../assets/Images/about-us.jpg";

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
  AiOutlineSafety
} from "react-icons/ai";

function Home({ header, subheader, subheader1 }) {
  return (
    <div>
      <section>
        <Slideshow />
        <div className="container">
          <div className="header-section mt-5 pt-5">
            <h6>
              {HomePageText.subheader1}
            </h6>
            <h1>
              {HomePageText.header}
            </h1>
            <p>
              {HomePageText.subheader}
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box">
                <AiOutlineRise className="icon1" />
                <h4>
                  {HomePageText.services_title1}
                </h4>
                <p>
                  {HomePageText.services_subheading}
                </p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box">
                <AiOutlineRocket className="icon2" />
                <h4>
                  {HomePageText.services_title2}
                </h4>
                <p>
                  {HomePageText.services_subheading}
                </p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box">
                <AiOutlineMail className="icon3" />
                <h4>
                  {HomePageText.services_title3}
                </h4>
                <p>
                  {HomePageText.services_subheading}
                </p>
                <button className="btn learn-more-btn">Learn More</button>
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
                  <h6 className="mt-3">
                    {HomePageText.about_subheader}
                  </h6>
                  <h4 className="mt-3">
                    {HomePageText.about_header}
                  </h4>
                  <p className="mt-3 text-justify">
                    {HomePageText.about_des1}
                  </p>
                  <p className="text-justify">
                    {HomePageText.about_des2}
                  </p>

                  <button className="btn readmore mt-3">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header 3 services */}
        <div className="serviceshome">
          <div className="container">
            <div className="servicesheader">
              <h6>
                {HomePageText.serviceshome_subheader}
              </h6>
              <h4>
                {HomePageText.serviceshome_header}
              </h4>
              <p>
                {HomePageText.serviceshome_subheader1}
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineRise className="icon1" />
                  <h4>
                    {HomePageText.services_box_title1}
                  </h4>
                  <p>
                    {HomePageText.services_box_des1}
                  </p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineRocket className="icon2" />
                  <h4>
                    {HomePageText.services_box_title2}
                  </h4>
                  <p>
                    {HomePageText.services_box_des2}
                  </p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineSend className="icon3" />
                  <h4>
                    {HomePageText.services_box_title3}
                  </h4>
                  <p>
                    {HomePageText.services_box_des3}
                  </p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineMail className="icon4" />
                  <h4>
                    {HomePageText.services_box_title4}
                  </h4>
                  <p>
                    {HomePageText.services_box_des4}
                  </p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineFundView className="icon5" />
                  <h4>
                    {HomePageText.services_box_title5}
                  </h4>
                  <p>
                    {HomePageText.services_box_des5}
                  </p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineTeam className="icon6" />
                  <h4>
                    {HomePageText.services_box_title6}
                  </h4>
                  <p>
                    {HomePageText.services_box_des6}
                  </p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineSketch className="icon7" />
                  <h4>
                    {HomePageText.services_box_title7}
                  </h4>
                  <p>
                    {HomePageText.services_box_des7}
                  </p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineProject className="icon8" />
                  <h4>
                    {HomePageText.services_box_title8}
                  </h4>
                  <p>
                    {HomePageText.services_box_des8}
                  </p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineNotification className="icon9" />
                  <h4>
                    {HomePageText.services_box_title9}
                  </h4>
                  <p>
                    {HomePageText.services_box_des9}
                  </p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineSync className="icon10" />
                  <h4>
                    {HomePageText.services_box_title10}
                  </h4>
                  <p>
                    {HomePageText.services_box_des10}
                  </p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineFileSearch className="icon11" />
                  <h4>
                    {HomePageText.services_box_title11}
                  </h4>
                  <p>
                    {HomePageText.services_box_des11}
                  </p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineBlock className="icon12" />
                  <h4>
                    {HomePageText.services_box_title12}
                  </h4>
                  <p>
                    {HomePageText.services_box_des12}
                  </p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineCamera className="icon13" />
                  <h4>
                    {HomePageText.services_box_title13}
                  </h4>
                  <p>
                    {HomePageText.services_box_des13}
                  </p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineSafety className="icon14" />
                  <h4>
                    {HomePageText.services_box_title14}
                  </h4>
                  <p>
                    {HomePageText.services_box_des14}
                  </p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>
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
        <div className="hometeam">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-6">
                <div className="hometeamheader">
                  <h6>OUR TEAM</h6>
                  <h4>We Help to Acheive Your Business Goal</h4>
                  <p>
                    Whether you're launching a startup or scaling an established
                    brand, our team is here to turn your vision into measurable
                    results. Through strategic planning, digital innovation, and
                    dedicated support, we empower your business to grow,
                    compete, and thrive in a digital-first world.
                  </p>
                  <button className="btn learn-more-btn">View All</button>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                  <div class="our-team">
                    <div class="pic">
                      <img src={akbarjan} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Mr Akbar Jan</h3>
                      <span class="post">Founder & CEO</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                  <div class="our-team">
                    <div class="pic">
                      <img src={saddiqalikhan1} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">SADDIQ ALI KHAN</h3>
                      <span class="post">Project Manger</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                  <div class="our-team">
                    <div class="pic">
                      <img src={bismillahjan} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Mr Bismillah Jan</h3>
                      <span class="post">
                        Operation Director & Event Manager
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                  <div class="our-team">
                    <div class="pic">
                      <img src={zahoorahmad} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Zahoor Ahmad</h3>
                      <span class="post">Sale Executive</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                  <div class="our-team">
                    <div class="pic">
                      <img src={ibrahimkhan} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Ibrahim Khan</h3>
                      <span class="post">Sale Executive</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                  <div class="our-team">
                    <div class="pic">
                      <img src={nasirali} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Nasir Ali</h3>
                      <span class="post">Sale Executive</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                  <div class="our-team">
                    <div class="pic">
                      <img src={zuhaib} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Muhammad Zuhaib</h3>
                      <span class="post">Sale Executive</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* header 6 price */}
        <div className="homeprice">
          <div className="container">
            <div className="">
              <h6>PRICING</h6>
              <h4>Our Flexible Pricing Plan</h4>
              <p>
                We offer transparent and flexible pricing tailored to fit
                businesses of all sizes. Whether you're just getting started or
                scaling up, our plans are designed to deliver value without
                compromising quality.
              </p>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4 col-md-4 col-6">
                <div className="homeprice-box">
                  <AiOutlineSend className="icon1" />
                  <div className="homeprice-header">
                    <h3> Starter Plan</h3>
                  </div>
                  <div className="homeprice-list">
                    <ul>
                      <li>10GB Bandwidth Internet</li>
                      <li>Business & Financ Analysing</li>
                      <li>25 Social Media Reviews</li>
                      <li>Customer Managemet</li>
                      <li>24/7 Support</li>
                    </ul>
                  </div>
                  <div className="homeprice-price">
                    $20.99
                    <span>Per Month</span>
                  </div>
                  <button className="btn learn-more-btn">Book Now</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="homeprice-box">
                  <AiOutlineBlock className="icon2" />
                  <div className="homeprice-header">
                    <h3> Advance Plan</h3>
                  </div>
                  <div className="homeprice-list">
                    <ul>
                      <li>30GB Bandwidth Internet</li>
                      <li>Business & Financ Analysing</li>
                      <li>30 Social Media Reviews</li>
                      <li>Customer Managemet</li>
                      <li>24/7 Support</li>
                    </ul>
                  </div>
                  <div className="homeprice-price">
                    $25.99
                    <span>Per Month</span>
                  </div>
                  <button className="btn learn-more-btn">Book Now</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="homeprice-box">
                  <AiOutlineSketch className="icon3" />
                  <div className="homeprice-header">
                    <h3> Premium Plan</h3>
                  </div>
                  <div className="homeprice-list">
                    <ul>
                      <li>50GB Bandwidth Internet</li>
                      <li>Business & Financ Analysing</li>
                      <li>35 Social Media Reviews</li>
                      <li>Customer Managemet</li>
                      <li>24/7 Support</li>
                    </ul>
                  </div>
                  <div className="homeprice-price">
                    $30.99
                    <span>Per Month</span>
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
