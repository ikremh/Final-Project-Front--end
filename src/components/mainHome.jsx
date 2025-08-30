import React from 'react';
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <header  id="home"  className="text-center w-full h-screen bg-cover bg-center"
      >
        <div className="col-lg-6 ">
          <div className="home-content">
          <h1 className="text">Better <span>Learning Future</span> Starts With Edusion</h1>
          <p className="mt-2">It is a long established fact that reader will be distracted readable content of 
            
            a page when.</p>
        </div>
 <button className="btn explore-btn d-flex align-items-center fw-bold text-black  text-muted">
      <span className="circle"></span>
      <span className="ms-5">Exploer Courses</span>
      <span className="ms-2 arrow">→</span>
    </button>



      </div>
<div className="box1">
  <img src="./public/image/user2.svg" alt="" srcset="" />
  <h2>4500+</h2>
<p>online courses</p>
</div>
<div className="box2">
  <img src="./public/image/file2.svg" alt="" srcset="" />
  <h2>7500+</h2>
<p>Active student</p>
</div>




    </header>
  );
}
