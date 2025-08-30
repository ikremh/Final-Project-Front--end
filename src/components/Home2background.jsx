import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function Home2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="parallax-section">
        <div className="overlay">
          <div className="play-button" onClick={handleShow}>
            <i className="bi bi-play-fill"></i>
          </div>
        </div>
      </section>

   
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="p-0">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/0KYxN1kJSb0?si=189Hbh4BeWvHyCv-"
            
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Home2;
