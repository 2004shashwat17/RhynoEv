import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  const [sortBy, setSortBy] = useState(""); // State to hold sorting option

  // Function to handle sorting change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Function to compare models for sorting
  const compareModels = (a, b) => {
    if (sortBy === "low") {
      return a.model.localeCompare(b.model); // Sort by model ascending
    } else if (sortBy === "high") {
      return b.model.localeCompare(a.model); // Sort by model descending
    } else {
      return 0; // No sorting
    }
  };

  // Apply sorting to carData based on sortBy state
  const sortedCarData = [...carData].sort(compareModels);
  return (
    <Helmet title="Cars">
      <CommonSection title="Latest Models" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By Models
                </span>

                <select onChange={handleSortChange} value={sortBy}>
                  <option value="">Select</option>
                  <option value="low">SE03</option>
                  <option value="low">SE03 Lite</option>
                  <option value="high">SE03 Max</option>
                </select>
                <Link to="/compare" className="btn btn-primary">
                  Compare
                </Link>
              </div>
            </Col>

            {sortedCarData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
