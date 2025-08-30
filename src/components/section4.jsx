import React from "react";
import CountUp from "react-countup";
import { FaSmile, FaFileAlt, FaHeadset, FaUserGraduate } from "react-icons/fa";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CiFaceSmile } from "react-icons/ci";
import { TfiFiles } from "react-icons/tfi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TfiUser } from "react-icons/tfi";



export default function Achievement() {
const stats = [
{ icon: <CiFaceSmile size={50} color="#295ac4ff" />, number: 854, text: "Enrolled Students" },
{ icon: <TfiFiles size={50} color="#FF5722" />, number: 521, text: "Academic Programs" },
{ icon: <TfiHeadphoneAlt  size={50} color="#2eca7f" />, number: 163, text: "Winning Award" },
{ icon: <TfiUser size={50} color="#E91E63" />, number: 93, text: "Certified Students" },
];

return (
<Container id="achievement" className="text-right my-3 p-3">
<p className=" fw-bold" style={{ color: "#2eca7f" }}>SOME FUN FACTS ___________ </p>
<h2 className="fw-bold   mb-4" style={{ color: "#1a2d62", fontSize: "2.8rem" }}>
Our Great <span className=" text-decoration-underline " style={{ color: "#2eca7f" }}>Achievement</span>
</h2>
<br />
<br />
<Row className="boxs  ">
{stats.map((item, i) => (
<Col key={i} md={3} sm={6} className="mb-2 ">
<Card  className="p-1   border-1 " style={{ height: "100px" }}>
    <div className="col-lg-3 col-md-6 mt-3">{item.icon}</div>
    <h3 className="fw-bold " style={{ color: "#1a2d62" , fontSize: "2.5rem", textAlign: "center", transform : "translateY(-70px)" }}>
    <CountUp start={0} end={item.number} duration={3} />
    </h3>
    <p className="text-muted text-center" style={{ transform: "translateY(-70px)" }}>{item.text}</p>
</Card>
</Col>
))}
</Row>
</Container>
);
}
