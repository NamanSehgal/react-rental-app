import React from "react";
import { Row, Col, Container } from "react-bootstrap";

class CarSlide extends React.Component {
    render() {
        return <div>
            <img
                alt="e-Ride"
                src='/images/car.jpg'
                width="600px"
                height="400px"
                className="d-inline-block align-top"
            />{' '}
            <Container>
                <Row>
                    <Col sm={6}>Range <br />120 mph <br />Real World</Col>
                    <Col sm={6}>Charging <br />50kW max. <br />speed</Col>
                </Row>
            </Container>
            <Container style={{ backgroundColor: "black", color: "white" }}>
                <Row>
                    <Col sm={2}>5 Seat</Col>
                    <Col sm={2}>5 door</Col>
                    <Col sm={2}>Front</Col>
                    <Col sm={2}>Titanium Grey</Col>
                    <Col sm={2}>140mph</Col>
                </Row>
            </Container>
        </div>
    }
}

export default CarSlide;