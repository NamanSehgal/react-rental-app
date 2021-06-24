import React from "react";
import { routes } from '../constants';
import { sortAccordingToKeys } from '../helpers';
import { useHistory } from 'react-router-dom';
import { Row, Col, Container, Button } from "react-bootstrap";
import Footer from './Footer';


const CarListing = () => {
  const history = useHistory();
  const renderProps = [{
    id: '1234',
    image: (<img alt="e-Ride" src='/images/car.jpg' width="230px" height="150px" className="d-inline-block align-top" />),
    name: 'Honda',
    speed: '19kmph',
    price: 19,
  }, {
    id: '2345',
    image: (<img alt="e-Ride" src='/images/car.jpg' width="230px" height="150px" className="d-inline-block align-top" />),
    name: 'Hyundai',
    speed: '29kmph',
    price: 20,
  }, {
    id: '5678',
    image: (<img alt="e-Ride" src='/images/car.jpg' width="230px" height="150px" className="d-inline-block align-top" />),
    name: 'Suzuki',
    speed: '39kmph',
    price: 30,
  }];

  const handleBookNowClick = (id, name) => {
    console.log('Details',id);
    history.push(`${routes.details}/${id}?name=${name}`);
  }

  return (
    <Container>
      <div>
        <Row>
          {sortAccordingToKeys(renderProps, 'price', 'desc').map(({ id, image, name, speed, price }) => (
            <Col lg={4}>
              <div>{image}</div>
              <div>{name}</div>
              <div> {speed} </div>
              <div> Rupees: {price} </div>
              <div>Efficiancy </div>
              <Button variant="primary" size="lg" block onClick={() => handleBookNowClick(id, name)}> Book Now </Button>
            </Col>
          ))}
        </Row >
        <Footer />
      </div>
    </Container >)
}

export default CarListing;