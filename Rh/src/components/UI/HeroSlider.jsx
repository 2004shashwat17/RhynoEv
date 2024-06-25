import React from "react";

// import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import RotatingText from "./RotatingText";
import "../../styles/hero-slider.css";

const HeroSlider = () => {
  return (
      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h3 className="text-light mb-3">Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets<h1><RotatingText/></h1></h3>
            <br /> 
            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Check-Out</Link>
            </button>
          </div>
        </Container>
        <br /><br />
      </div>
  );
};

export default HeroSlider;
