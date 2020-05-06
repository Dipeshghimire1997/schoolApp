import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

let NaveBar = (props) => {
  const [navLists, setNavLists] = useState([]);
  const Unvalid_Users = [
    { to: "/", link: "Home" },
    { to: "/contact", link: "Contact" },
    { to: "/admit", link: "Adminission" },
  ];
  useEffect(() => {
    setNavLists(Unvalid_Users);
  }, []);

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>Champs World</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          {navLists.map((list, key) => (
            <Nav.Link key={key}>
              <Link to={list.to}>{list.link}</Link>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NaveBar;
