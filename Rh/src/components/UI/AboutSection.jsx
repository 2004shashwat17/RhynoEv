import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "0px" }
      }
    >
      <div className="item item-03 mt0">
        <h1> Our Premium EV'S</h1>
      </div>
      <Container>
        <Row>
          <Col >
            <div className="about__section-content">
              <h2 className="section__subtitle">About Us</h2>
              <h1 className="section__title">Welcome to Rhyno EV</h1>
              <p className="section__description">    
                <br />
                Established in 2019 by an automotive engineer with a vision for sustainable and robust
mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team
of young individuals passionately driving innovation in the electric vehicle industry. We
believe in engineering solutions that solve problems.
<br />
With our first product, we've taken a bold step to create something more than just a vehicle;
it's a unique experience of elegance, comfort and style, addressing the pitfalls of
conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and
ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet
operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically
appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new
era in sustainable and dependable electric transportation.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
