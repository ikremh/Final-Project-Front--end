import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

const CompanyLogos = () => {
  const logos = [
    "./image/5.png",
    "./image/1.png",
    "./image/2.png",
    "./image/3.png",
    "./image/4.png",
    "./image/5.png",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-spide my-5 text-center  ">
     <h5 className="trusted-heading">
  Trusted Companies Around The World!
</h5>

      <div
        className="spider d-flex justify-content-start gap-2"
        style={{
          overflow: "hidden",
          padding: "0 20px", }}
      >
        <div
          style={{
            display: "flex",
            gap: "18px",
            transform: `translateX(${currentIndex === 1 ? -220 : 0}px)`, 
            transition: "transform 0.8s ease-in-out",
          }}
        >
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Logo ${i + 1}`}
              style={{
                width: "200px",
                height: "auto",
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
