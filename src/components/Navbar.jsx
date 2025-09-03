import { useState, useRef, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { LoginButton } from "./Buttons";
import{RegisterButton}from"./Buttons"
import { TfiShoppingCartFull } from "react-icons/tfi";


export default function AppNavbar() {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Navbar expand="lg"  className="  shadow-sm py-2 fixed-top " style={{ backgroundColor:"#ffffffd7"
      
    }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/image/logo.png"
            alt="logo"
            width="105"
            height="55"
            className="me-2"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
           
                        <Nav.Link as={Link} to="/Home2">home</Nav.Link>

            <Nav.Link as={Link} to="/about">about</Nav.Link>


                        <Nav.Link as={Link} to="/course">course</Nav.Link>

            <Nav.Link as={Link} to="/blog">blog</Nav.Link>

          

            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center position-relative">
            <Button
              variant="link"
              className="text-muted me-3"
              onClick={() => setShowSearch(!showSearch)}
            >
              {showSearch ? <X size={30} /> : <Search size={30} />}
            </Button>

            {showSearch && (
              <div className="search"
                ref={searchRef}
            
              >
                <Form.Control
                  type="search"
                  placeholder="Search course here"
                  className="border-0 shadow-none"
                  autoFocus
                />
              </div>
            )}

            <Button variant="link" className="text-dark position-relative me-3">
<TfiShoppingCartFull size={30} />
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill " style={{backgroundColor:"#2eca7f" }}
              >
                0
              </span>
            </Button>

           <LoginButton>login</LoginButton>
           <RegisterButton></RegisterButton>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
