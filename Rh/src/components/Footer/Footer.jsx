import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "#",
    display: "Refund Policy",
  },
  {
    path: "#",
    display: "Website Policy",
  },
  {
    path: "/cars",
    display: "EV's",
  },
  {
    path: "https://www.linkedin.com/company/rhyno-wheels/?originalSubdomain=in",
    display: "Career",
  },
  {
    path: "#",
    display: "Rentals",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-bike-fill"></i>
                  <span>
                    RHYNO 
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Rhyno EV is solving the commercial mobility needs with Made-In-India eScooter –
             a simplified, ergonomically optimized and carefully engineered Electric Special
             Utility Vehicle (SUV).Inspired by rhino, the company designs expressly in answer
              to the need for a durable, high caliber, hi speed electric scooter. 
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info"> Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
              Raisan, Gandhinagar, Gujarat, India.</p>
              <p className="office__info">Phone: +91-9023987528</p>

              <p className="office__info">Mail: info@rhyno.in</p>

            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Muhibur Rahman. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
