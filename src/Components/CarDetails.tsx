import React from "react";
import FileTree from "./FileTree";
import CartDetails from "./CartDetails";
import CarSlide from "./CarSlide";
import { Row, Col, Container } from "react-bootstrap";

const CarDetails = () => {
    return <div>
        <FileTree />
        <Container>
            <Row>
                <Col sm={8}><CarSlide /></Col>
                <Col sm={4}><CartDetails /></Col>
            </Row>
        </Container>
    </div>
}

export default CarDetails;