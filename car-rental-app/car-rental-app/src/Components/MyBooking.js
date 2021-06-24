import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const MyBooking = () => {
    return (
        <Container>
            <Row>
                <Col sm={6}>Range <br />120 mph <br />Real World</Col>
                <Col sm={6}>Charging <br />50kW max. <br />speed</Col>
            </Row>
        </Container>
    )
}

export default MyBooking;