import React from "react";
import { ServicesText } from "./data";
import {
  AiOutlineRise, // Amazon
  AiOutlineRocket, // Shofipy
  AiOutlineSend, // Digital Marketing
  AiOutlineMail, // SEO
  AiOutlineFundView, // Ecommerce
  AiOutlineTeam, // Freelancing
  AiOutlineSketch, // Graphic Design
  AiOutlineProject, // Video Editing
  AiOutlineNotification, // Web Development
  AiOutlineSync, // Advance Computer
  AiOutlineFileSearch, // QuickBooks
  AiOutlineBlock, // English Language
  AiOutlineCamera, // Basic Computing
  AiOutlineSafety // Safety Course
} from "react-icons/ai";
import "./style.css";

export default function Services() {
  return (
    <div>
      <div className="serviceshome">
        <div className="page-title-area">
          <h1>Our Services</h1>
        </div>
        <div className="container">
          <div className="servicesheader">
            <h6>
              {ServicesText.serviceshome_subheader}
            </h6>
            <h4>
              {ServicesText.serviceshome_header}
            </h4>
            <p>
              {ServicesText.serviceshome_subheader1}
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <AiOutlineRise className="icon1" />
                <h4>Amazon</h4>
                <p>
                  Learn how to sell and scale on Amazon Marketplace with
                  expert-led training and real-world strategies.
                </p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <AiOutlineRocket className="icon2" />
                <h4>Shofipy</h4>
                <p>
                  Launch your Shopify store and master dropshipping, product
                  listings, and order fulfillment end to end.
                </p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <AiOutlineSend className="icon3" />
                <h4>Digital Marketing</h4>
                <p>
                  From social media to Google Ads, learn to craft campaigns that
                  drive leads, engagement, and conversions.
                </p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <AiOutlineMail className="icon4" />
                <h4>SEO</h4>
                <p>
                  Rank higher in Google using ethical SEO tactics that improve
                  visibility, traffic, and site authority.
                </p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <AiOutlineFundView className="icon5" />
                <h4>Ecommerce</h4>
                <p>
                  Master the business of selling online — from inventory to
                  shipping to digital storefronts and beyond.
                </p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <AiOutlineTeam className="icon6" />
                <h4>Freelancing</h4>
                <p>
                  Build your profile, win gigs, and grow your income on
                  platforms like Fiverr, Upwork, and Freelancer.
                </p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <AiOutlineSketch className="icon7" />
                <h4>Graphic Design</h4>
                <p>
                  Design stunning visuals using Photoshop, Illustrator, and
                  Canva to impress clients and boost your brand.
                </p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <AiOutlineProject className="icon8" />
                <h4>Video Editing</h4>
                <p>
                  Create high-quality videos for YouTube, social media, and
                  brands using tools like Premiere Pro and CapCut.
                </p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <AiOutlineNotification className="icon9" />
                <h4>Web Development</h4>
                <p>
                  Learn to build fast, responsive websites using HTML, CSS,
                  JavaScript, and React fundamentals.
                </p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <AiOutlineSync className="icon10" />
                <h4>Advance Computer</h4>
                <p>
                  Upgrade your skills with advanced tools and techniques in
                  Windows, networks, hardware, and more.
                </p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <AiOutlineFileSearch className="icon11" />
                <h4>QuickBooks</h4>
                <p>
                  Manage business finances with ease using QuickBooks — from
                  invoicing to reporting and taxes.
                </p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <AiOutlineBlock className="icon12" />
                <h4>English Language (DPEL)</h4>
                <p>
                  Improve your English fluency for work or academics through
                  structured DPEL language training.
                </p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
