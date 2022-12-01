import { useState } from "react";
import { Form, Nav, Navbar } from "react-bootstrap/";
import { BsBellFill, BsFillCaretDownFill, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [tvshows, setTvShows] = useState(false);

  return (
    <Navbar className="navBar d-flex" expand="lg">
      <Link to="/">
        <Navbar.Brand onClick={() => setTvShows(false)}>
          <img
            className="netflixLogo"
            src="netflix_logo.png"
            alt="Netflix Logo"
          />
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle
        className="navbarToggle"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <div className="navLinks" onClick={() => setTvShows(false)}>
              Home
            </div>
          </Link>
          <Link to="/TVShows">
            <div className="navLinks" onClick={() => setTvShows(true)}>
              TV Shows
            </div>
          </Link>
          <Link to="/">
            <div className="navLinks">Movies</div>
          </Link>
          <Link to="/">
            <div className="navLinks">Recently Added</div>
          </Link>
          <Link to="/">
            <div className="navLinks">My List</div>
          </Link>
        </Nav>
        <Form inline className="rightNavbar">
          <input
            className="searchField"
            type="text"
            placeholder={tvshows ? "Search TV Shows" : "Search"}
          />
          <BsSearch className="hoverIcon" />
          <div className="hoverIcon">KIDS</div>
          <BsBellFill className="hoverIcon" />
          <img className="netflixLogo" src="avatar.png" alt="avatar" />
          <BsFillCaretDownFill className="mr-2 hoverIcon" />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
