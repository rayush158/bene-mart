import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <Row>CUSTOMER SERVICE</Row>
            <Row>Help Center</Row>
            <Row>Track an Order</Row>
            <Row>Return an Item</Row>
            <Row>Return Policy</Row>
            <Row>Privacy & Security</Row>
            <Row>Feedback</Row>
          </Col>
          <Col>
            <Row>MY ACCOUNT </Row>
            <Row>Login/Register</Row>
            <Row>Order History</Row>
            <Row>Returns History</Row>
            <Row>Address Book</Row>
            <Row>Wish Lists</Row>
            <Row>My Build Lists</Row>
          </Col>
          <Col>
            <Row>COMPANY INFORMATION</Row>
            <Row>About BeneMart</Row>
            <Row>Investor Relations</Row>
            <Row>Awards/Rankings</Row>
            <Row>Press Inquiries</Row>
            <Row>BeneMart Careers</Row>
          </Col>
          <Col>
            <Row>TOOLS & RESOURCES</Row>
            <Row>Sell on BeneMart</Row>
            <Row>BeneMart Partner Services</Row>
            <Row>Shop by Brand</Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footer-disclaimer">
        <div className="d-flex gap-5 px-4">
          <p>© 2022 BeneMart pvt Ltd.</p>
          <p> All rights reserved </p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
