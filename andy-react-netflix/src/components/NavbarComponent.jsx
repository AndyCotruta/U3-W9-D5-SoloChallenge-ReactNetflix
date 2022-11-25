import { Component } from "react";
import { Navbar, Nav, Form } from "react-bootstrap/";
import { BsSearch, BsBellFill, BsFillCaretDownFill } from "react-icons/bs";

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar className="navBar d-flex" expand="lg">
        <Navbar.Brand href="#home">
          <img
            className="netflixLogo"
            src="netflix_logo.png"
            alt="Netflix Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          className="navbarToggle"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navLinks" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navLinks" href="#link">
              TV Shows
            </Nav.Link>
            <Nav.Link className="navLinks" href="#link">
              Movies
            </Nav.Link>
            <Nav.Link className="navLinks" href="#link">
              Recently Added
            </Nav.Link>
            <Nav.Link className="navLinks" href="#link">
              My List
            </Nav.Link>
          </Nav>
          <Form inline className="rightNavbar">
            <input className="searchField" type="text" placeholder="Search" />
            <BsSearch className="hoverIcon" />
            <div className="hoverIcon">KIDS</div>
            <BsBellFill className="hoverIcon" />
            <img className="netflixLogo" src="avatar.png" alt="avatar" />
            <BsFillCaretDownFill className="mr-2 hoverIcon" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
