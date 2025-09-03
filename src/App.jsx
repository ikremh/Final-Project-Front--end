// App.js
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './responsive.css'; 

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import MainHome from "./components/mainHome.jsx";  
import Home2 from './pages/Home2.jsx'; 
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Scroll from "./components/scroll"

import Cards from "./components/card";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5spider";
import Section6 from "./components/Section6why";
import Section7 from "./components/section7topcourses";
import Section8 from "./components/section8platform";
import Section9 from "./components/section9Subscripbe";
import Section10 from "./components/section10Topics To Learn ";
import Section11 from "./components/section11ourevent";
import Section12 from "./components/section12ourstudents";
import Section13 from "./components/section13team";
import Section14 from "./components/section14OurLatest ";

import Loader from "./components/Loader"; 

import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); 
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />} 
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainHome />
              <Cards />
              <Section3 />
              <Section4 />
              <Section5 />
              <Section6 />
              <Section7 />
              <Section8 />
              <Section9 />
              <Section10 />
              <Section11 />
              <Section12 />
              <Section13 />
              <Section14 />
            </>
          }
        />
        <Route path="/Home2" element={<Home2 key={location.pathname} />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Scroll />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
