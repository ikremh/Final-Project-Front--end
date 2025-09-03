import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";

export default function Testimonials() {
  const testimonials = [
    {
      name: "James Simmons",
      role: "Marketing Expert",
      image: "./image/team2.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr sed diam nonumy eirmod tempor.",
    },
    {
      name: "Devid Max",
      role: "Max INC",
      image: "./image/team1.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr sed diam nonumy eirmod tempor.",
    },
    {
      name: "Alex Feroundo",
      role: "Marketing Expert",
      image: "./image/t4-200x200.png",
      text: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr sed diam nonumy eirmod tempor.",
    },
    {
      name: "Sarah Lee",
      role: "UI/UX Designer",
      image: "./image/t1-200x200.png",
      text: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr sed diam nonumy eirmod tempor.",
    },
  ];

  
  const PrevArrow = ({ onClick }) => (
    <button
      className="custom-arrow custom-prev"
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="custom-arrow custom-next"
      onClick={onClick}
    >
      <FaChevronRight />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-5 bg-light position-relative">
      <Container>
        <div className="text mb-5">
          <h6 className=" fw-bold" style={{ color: "#2eca7f" }}>
            TESTIMONIAL _______
          </h6>
          <h2 style={{ color: "#1a2d62", fontSize: "2.5rem" }}>
            What Says{" "}
            <span className="text" style={{ color: "#2eca7f" }}>
              Our Students
            </span>
          </h2>
        </div>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3">
              <Card className="shadow border-0 h-100">
                <Card.Body>
                  <div className="mb-3 text-warning">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <Card.Text className="text-muted">{item.text}</Card.Text>
                </Card.Body>
                <Card.Footer
                  className="bg-info bg-opacity-10 d-flex align-items-center border-0"
                  style={{ height: "100px" }}
                >
                  <Image
                    src={item.image}
                    roundedCircle
                    width={55}
                    height={55}
                    className="me-3"
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{item.name}</h6>
                    <small className="text-muted">{item.role}</small>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
}
