import React from "react";
import "./style.css";

import akbarjan from "../../assets/imagess/akbar.png";
import bismillahjan from "../../assets/imagess/bismillahjan.png";
import ibrahimkhan from "../../assets/imagess/ibrahimkhan.png";
import nasirali from "../../assets/imagess/nasirali.png";
import saddiqalikhan1 from "../../assets/imagess/saddiqalikhan1.png";
import zahoorahmad from "../../assets/imagess/zahoorahmad.png";
import zuhaib from "../../assets/imagess/zuhaib.png";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Team
 *
 * This component contains the team section in the home page, which renders the
 * team members with their images, names, and job titles.
 */
/*******  077f5fce-5c74-452c-bfe2-6b6568b1bdac  *******/ export default function Team() {
  return (
    <div className="hometeam">
      <div className="page-title-area">
        <h1>Our Team</h1>
      </div>
      <div className="container">
        <div className="row pt-5 mt-5">
          <div className="col-lg-6 col-md-6 col-6">
            <div className="hometeamheader">
              <h6>OUR TEAM</h6>
              <h4>We Help to Acheive Your Business Goal</h4>
              <p>
                Whether you're launching a startup or scaling an established
                brand, our team is here to turn your vision into measurable
                results. Through strategic planning, digital innovation, and
                dedicated support, we empower your business to grow, compete,
                and thrive in a digital-first world.
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
                  <span class="post">Operation Director & Event Manager</span>
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
  );
}
