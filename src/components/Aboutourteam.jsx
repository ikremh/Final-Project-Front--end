import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { TfiUser } from "react-icons/tfi";

import { CiFileOn } from "react-icons/ci";

const instructors = [
  {
    name: "Daniel Miller",
    role: "Logo Expert",
    img: "./image/team2.jpg",
    courses: 3,
    students: 5,
  },
  {
    name: "Masum Billah",
    role: "Developer",
    img: "./image/team1.jpg",
    courses: 6,
    students: 5,
  },
  {
    name: "Kenneth Renteria",
    role: "Marketer",
    img: "./image/team3.jpg",
    courses: 0,
    students: 0,
  },
  {
    name: "Richard Hood",
    role: "UI UX Designer",
    img: "./image/team4.jpg",
    courses: 2,
    students: 0,
  },
];

export default function Instructors() {
  return (
    <section className="instructors-section py-4">
      <div className="container">
        <h1>Team Member________</h1>
        <h2 className="section-title">
          Our Expert <span>Instructors</span>
        </h2>
        <div className="row">
          {instructors.map((inst, index) => (
            <div className="col-md-3" key={index}>
              <div className="instructor-card">
                <div className="image-container">
                  <img src={inst.img} alt={inst.name} className="img-fluid" />

                  <div className="fixed-icons">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedinIn /></a>
                  </div>

                  <div className="overlay-team"></div>
                </div>

                <div className="info text-center p-3">
                  <h5>{inst.name}</h5>
                  <p>{inst.role}</p>
            <div className="underline">
  <span></span>
</div>

               

                  <div className="stats d-flex justify-content-center mt-2">
                    <a href="#" className="me-3">
                        <CiFileOn className="icon-team" size={18}  />
                      {inst.courses}
                      
 Courses
                    </a>
                    <a href="#"><TfiUser className="icon-team" size={18} />{inst.students} Students</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
