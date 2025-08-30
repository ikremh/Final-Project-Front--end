import React, { useEffect, useState } from "react";

const CompanyLogos = () => {
  const logos = [
    "./image/1.png",
    "./image/2.png",
    "./image/3.png",
    "./image/4.png",
    "./image/5.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [logos.length]);

  const visibleLogos = Array.from({ length: 5 }, (_, i) => logos[(index + i) % logos.length]);

  return (
    <div className="container text-center my-5">
      <h5 className="mb-4 p-2 bg-success bg-opacity-10 text-success rounded border">
        Trusted Companies Around The World!
      </h5>

      <div className="d-flex justify-content-center flex-wrap gap-4">
        {visibleLogos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Logo ${i + 1}`}
            style={{
              width: "200px",
              height: "auto",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;




