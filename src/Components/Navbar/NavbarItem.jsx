import React from "react";
import logo from "./../../assets/darkLogo.png";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
const NavbarItem = () => {
  return (
    <Navbar variant="dark" sticky="top" className="nav-container">
      <Container fluid>
        <Nav>
          <div className="nav-brand">
            <Link to="/">
              <img src={logo} alt="navbar-logo" width="30" height="30" />
            </Link>
            <Link to="/" className="nav-link brand-name ">
              BeneMart
            </Link>
          </div>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="support">
            Support
          </Link>
        </Nav>
        <Nav className="right-navbar">
          <Form className="nav-item input-text-group ">
            <FaSearch />
            <FormControl
              type="search"
              placeholder="Search Products.."
              aria-label="Search"
            />
          </Form>
          <Link to="/wishlist" className="cart-icon nav-link">
            <FaHeart fontSize="20px" />
            <span className="badge">0</span>
          </Link>
          <Link to="/cart" className="cart-icon nav-link">
            <FaShoppingCart fontSize="20px" />
            <span className="badge">0</span>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarItem;
