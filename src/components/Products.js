import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Products.css';

const Products = () => {
  return (
    <div className="products">
      <Container>
        <Row>
          <Col md={4} className="banner-item">
          <img
          src="/assets/oilfilter.jpg"
          alt="Oil Filter" className="img-fluid" />
            <h2>OIL FILTER</h2>
            <p>An oil filter is a filter designed to remove contaminants from Engine oil, Transmission oil, Lubricating oil, Hydraulic oil.
</p>
          </Col>
          <Col md={4} className="banner-item">
          <img
          src="/assets/fuelfilter.jpg"
          alt="Fuel Filter"
              className="img-fluid" />
            <h2>FUEL FILTER</h2>
            <p>A fuel filter is a device that screens out foreign particles or liquids from the fuel and protects the components in the fuel system. It allows fuel to flow from the tank to the engine at the rate it needs to, and sifts out anything that could clog up the fuel system</p>
          </Col>
          <Col md={4} className="banner-item">
          <img
          src="/assets/lubefilter.jpg"
          alt="Lube Filter"
             className="img-fluid" />
            <h2>Lube Filter</h2>
            <p>A lube filter removes contaminants from engine oil, ensuring optimal lubrication and performance. It extends engine life by preventing wear and reducing maintenance costs.</p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="banner-item">
          <img
          src="/assets/hydraulicfilter.jpg"
          alt="Hydraulic Filter"
              className="img-fluid" />
            <h2>Hydraulic Filter</h2>
            <p>A hydraulic filter removes contaminants from hydraulic fluid, ensuring smooth and efficient system operation. It prolongs component life and reduces maintenance needs.</p>
          </Col>
          <Col md={4} className="banner-item">
          <img
          src="/assets/gasturbinefilter.jpg"
          alt="Gas Turbine Filter"
              className="img-fluid" />
            <h2>Gas Turbine Filter</h2>
            <p>A gas turbine filter captures airborne particles, protecting turbine blades from damage and corrosion. It ensures optimal performance and extends the turbine's operational lifespan.</p>
          </Col>
          <Col md={4} className="banner-item">
          <img
          src="/assets/airoilseperatorfilter.jpg"
          alt="Air Oil Seperator Filter"
              className="img-fluid" />
            <h2>Air Oil Seperator Filter</h2>
            <p>An air oil separator filter removes oil mist from compressed air, ensuring clean air output and efficient system operation. It reduces oil consumption and maintenance costs.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
