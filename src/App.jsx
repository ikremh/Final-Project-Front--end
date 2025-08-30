import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import MainHome from "./components/mainHome.jsx";  
import Home2 from './pages/Home2.jsx'; 
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

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
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
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
              <Section11 />/
              <Section12 />
              <Section13 />
              <Section14 />
            </>
          }
        />
<Route path="/" element={<MainHome />} />

        <Route path="/Home2" element={<Home2 key={location.pathname} />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
