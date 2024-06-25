import React, { useState, useEffect } from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";

const ServicesList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); 

    return () => clearInterval(interval);
  }, []);
  
return (
  <div className="services-carousel">
    <div className="services-list">
      {servicesData.map((item, index) => (
        <ServiceItem
          item={item}
          key={item.id}
          className={index === currentIndex ? "active" : ""}
        />
      ))}
    </div>
  </div>
);
};

const ServiceItem = ({ item, className }) => (
  <Col className={`mb-3 service__item ${className}`}>
    <div className="service__item">
      <span className="mb-3 d-inline-block">
        <i className={item.icon} />
      </span>

      <h6>{item.title}</h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>
);

export default ServicesList;
