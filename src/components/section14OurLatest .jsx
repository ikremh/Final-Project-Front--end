import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { ExploreButton } from './buttons'; 
export default function EventsSection() {
return (
<section className=" py-4 text-align-right" style={{backgroundImage: "url('./image/blog-bg.png')"}}>
<Container>
<p className=" fw-bold"   style={{ color: "#2eca7f" }}>News______________</p>
<h2 className="fw-bold">
Our Latest <span className="" style={{ color: "#2eca7f" }}>Blogs</span>
</h2>

<Row className=" mt-5">



<Col md={4}>

<Card className="mb-4 shadow border-0 ">

<Card.Body>

<Card.Subtitle className="mb-2 text-muted small ">
Jun 01, 2024 | <span className="Technology">Technology </span>

</Card.Subtitle>
<div className="Professional "  > <a href="">Professional Ceramic Moulding for Beginner
</a>
</div>

<ExploreButton >Read more </ExploreButton >

</Card.Body>

</Card>

<Card className="mb-4 shadow border-0 ">

<Card.Body>

<Card.Subtitle className="mb-2 text-muted small ">
may 29, 2024 | <span className="Technology">porgramming </span>

</Card.Subtitle>
<div className="Professional "  > <a href="">Professional Ceramic Moulding for Beginner
</a>
</div>

<ExploreButton>Read more </ExploreButton >

</Card.Body>

</Card>
</Col>
<Col md={4}>
<Card className="mb-4 shadow border-0 ">

<Card.Img variant="top" src="./image/sec14.jpg" />
<Card.Body>
    
<Card.Subtitle className="mb-2 text-muted small ">
Jun 01, 2024 | <span className="Technology">Technology </span>

</Card.Subtitle>
<div className="Professional "  > <a href="">Professional Ceramic Moulding for Beginner
</a>
</div>

<ExploreButton>Read more </ExploreButton >

</Card.Body>
</Card>
</Col>

<Col md={4}>
<Card className="events mb-4 shadow border-0  ">

<Card.Img variant="top" src="./image/sec142.jpg" />
<Card.Body>
<Card.Subtitle className="mb-2 text-muted small ">
Jun 01, 2024 | <span className="Technology" >Technology </span>

</Card.Subtitle>
<div className="Professional "  > <a href="">Professional Ceramic Moulding for Beginner
</a>
</div>

<ExploreButton>Read more </ExploreButton >

</Card.Body>
</Card>
</Col>


</Row>
</Container>





</section>
);
}
