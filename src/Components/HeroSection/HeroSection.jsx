import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="left-section"></div>
      <Carousel fade className="right-section">
        <Carousel.Item>
          <Link to="/">
            <img
              className="d-block w-100"
              src="https://promotions.newegg.com/international/22-0613/1920x660@2x.jpg"
              alt="First slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/">
            <img
              className="d-block w-100"
              src="https://promotions.newegg.com/international/22-0532/1920x660@2x.jpg"
              alt="Second slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/">
            <img
              className="d-block w-100"
              src="https://promotions.newegg.com/nepro/22-0588/1920x660.jpg"
              alt="Third slide"
            />
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;
