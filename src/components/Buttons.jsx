import React from "react";
import { Button } from "react-bootstrap"; 


export const LoginButton = ({ children }) => {
  return (
    <Button variant="" className="custom-button login">
      {children}
    </Button>
  );
};


export const RegisterButton = () => {
  return (
    <Button variant="" className="custom-button register">
      Sign Up
    </Button>
  );
};


export const ExploreButton = ({ children }) => {
  return (
    <button id="explore-button" className="btn explore-btn d-flex align-items-center fw-bold text-black text-muted d-block">      

      <span className="circle"></span>
      <span className="ms-5">{children}</span>
      <span className="ms-2 arrow">→</span>
    </button>
  );
};
