import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../App.css";

const MyBooking = () => {
  return (
    <Container
      style={{
        border: "2px solid pink",
        boxShadow: "10px 10px 5px -3px rgba(255,167,213,0.75)",
        width: "40%",
      }}
    >
      <Row className="booking_row">
        <Col sm={6} style={{ fontWeight: "bold" }}>
          Nissan Leaf
        </Col>
        <Col sm={6}>18/02/2018 - 20/01/2019 </Col>
      </Row>
      <Row className="booking_row">
        <Col sm={6}>
          <img
            alt="e-Ride"
            src="/images/car.jpg"
            width="230px"
            height="150px"
            className="d-inline-block align-top"
          />
        </Col>
        <Col sm={6}>
          <div>
            <b>$570</b> <br />
            Annual Fuel Savings
            <br />
            <b>100%</b> <br /> Trips covered by home & work charge points <br />
            <b>0</b> <br /> Annaul public charging uses
          </div>
        </Col>
      </Row>

      <Row
        style={{ color: "palevioletred", fontWeight: "bold" }}
        className="booking_row"
      >
        <Col sm={4}>
          <img
            alt="e-Ride"
            src="/images/logo512.png"
            width="30px"
            height="20px"
            className="d-inline-block"
          />
          40kWh <br />{" "}
          <img
            alt="e-Ride"
            src="/images/logo512.png"
            width="30px"
            height="20px"
            className="d-inline-block"
          />{" "}
          137 Miles
        </Col>
        <Col sm={4}>
          <img
            alt="e-Ride"
            src="/images/logo512.png"
            width="30px"
            height="20px"
            className="d-inline-block"
          />
          62kWh <br />
          <img
            alt="e-Ride"
            src="/images/logo512.png"
            width="30px"
            height="20px"
            className="d-inline-block"
          />
          205 Miles
        </Col>
        <Col sm={4}>
          <img
            alt="e-Ride"
            src="/images/logo512.png"
            width="30px"
            height="20px"
            className="d-inline-block"
          />
          24kWh <br />
          <img
            alt="e-Ride"
            src="/images/logo512.png"
            width="30px"
            height="20px"
            className="d-inline-block"
          />
          81 Miles{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default MyBooking;
