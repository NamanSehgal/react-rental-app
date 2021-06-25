import React from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Row, Col, Container } from "react-bootstrap";

interface CarSlideParams {
    id: string
};

const CarSlide = () => {
    const params: CarSlideParams = useParams();
    const [details, setDetails] = React.useState([])

    console.log('The car id is', params);

    React.useEffect(() => {
        axios
            .get(`https://60d57c33943aa6001776899c.mockapi.io/api/car-listing/all/${params.id}`)
            .then((resp) => {
                setDetails(resp.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (<div>
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
        <Container style={{ backgroundColor: "black", color: "pink" }}>
            <Row>
                <Col sm={2}>5 Seat</Col>
                <Col sm={2}>5 door</Col>
                <Col sm={2}>Front</Col>
                <Col sm={2}>Titanium Grey</Col>
                <Col sm={2}>140mph</Col>
            </Row>
        </Container>
    </div>)
}
export default CarSlide;