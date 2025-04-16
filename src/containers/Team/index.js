import React, { useState } from "react";
import "./style.css";

import akbarjan from "../../assets/imagess/akbar.png";
import bismillahjan from "../../assets/imagess/bismillahjan.png";
import ibrahimkhan from "../../assets/imagess/ibrahimkhan.png";
import nasirali from "../../assets/imagess/nasirali.png";
import saddiqalikhan1 from "../../assets/imagess/saddiqalikhan1.png";
import numankhan from "../../assets/imagess/numankhan.png";
import zahoorahmad from "../../assets/imagess/zahoorahmad.png";
import zuhaib from "../../assets/imagess/zuhaib.png";

const teamMembers = [
  { name: "Mr Akbar Jan", role: "Founder & CEO", img: akbarjan },
  { name: "SADDIQ ALI KHAN", role: "Project Manager", img: saddiqalikhan1 },
  { name: "Mr Numan Khan", role: "Managing Director", img: numankhan },
  {
    name: "Mr Bismillah Jan",
    role: "Operation Director & Event Manager",
    img: bismillahjan,
  },
  { name: "Zahoor Ahmad", role: "Sale Executive", img: zahoorahmad },
  { name: "Ibrahim Khan", role: "Sale Executive", img: ibrahimkhan },
  { name: "Nasir Ali", role: "Sale Executive", img: nasirali },
  { name: "Muhammad Zuhaib", role: "Sale Executive", img: zuhaib },
];

export default function Team() {
  const [showAll, setShowAll] = useState(false);
  const visibleMembers = showAll ? teamMembers : teamMembers.slice(0, 4);

  return (
    <div className="hometeam pb-5">
      <div className="page-title-area text-center">
        <h1>Our Team</h1>
      </div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-10 mx-auto text-center">
            <h6>OUR TEAM</h6>
            <h4>We Help to Achieve Your Business Goal</h4>
            <p>
              Whether you're launching a startup or scaling an established
              brand, our team is here to turn your vision into measurable
              results. Through strategic planning, digital innovation, and
              dedicated support, we empower your business to grow, compete, and
              thrive in a digital-first world.
            </p>
            <button
              className="btn learn-more-btn mt-3"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less" : "View All"}
            </button>
          </div>
        </div>

        <div className="row">
          {visibleMembers.map((member, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <div className="hometeam-box h-100 text-center shadow-sm p-3 rounded">
                <div className="our-team">
                  <div className="pic mb-3">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="team-content">
                    <h5 className="title">{member.name}</h5>
                    <span className="post">{member.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
