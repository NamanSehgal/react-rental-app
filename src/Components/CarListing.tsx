import React, { useEffect } from "react";
import { debounce } from 'lodash-es';
import { routes } from "../constants";
import { sortAccordingToKeys } from "../helpers";
import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Button,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Footer from "./Footer";
import axios from "axios";

const sortTypes = {
  ASC: {
    id: 1,
    type: 'asc'
  },
  DESC: {
    id: 2,
    type: 'desc'
  }
}

interface CarList {
  id: string,
  image: string,
  name: string,
  speed: string,
  price: number,
  efficiancy: string
}

const CarListing = () => {
  const [carDetails, setCarDetails] = React.useState<Array<CarList>>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const history = useHistory();

  React.useEffect(() => {
    axios
      .get("https://60d57c33943aa6001776899c.mockapi.io/api/car-listing/all")
      .then((resp) => {
        setCarDetails(resp.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    axios
    .get(`https://60d57c33943aa6001776899c.mockapi.io/api/car-listing/all?name=${searchQuery}`)
    .then((resp) => {
      setCarDetails(resp.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [searchQuery])


  const handleBookNowClick = (id: any, name: any): void => {
    console.log("Details", id);
    history.push(`${routes.details}/${id}?name=${name}`);
  };

  const handleChange = (id: number, key: string): void => {
    console.log("Selected!!" + id);
    if (id === sortTypes.ASC.id) {
      setCarDetails((details) => sortAccordingToKeys(details, key, sortTypes.ASC.type))
      return;
    }
    setCarDetails((details) => sortAccordingToKeys(details, key, sortTypes.DESC.type))
  };

  const handleSearchBoxChange = (ev: any): any => {
    setSearchQuery(ev.target.value)
  }

  return (
      <Container>
        <InputGroup className="mb-3">
      <FormControl
        placeholder="Search by name..."
        aria-label="Username"
        aria-describedby="basic-addon1"
        onChange={debounce(handleSearchBoxChange, 1000)}
      />
  </InputGroup>
      <DropdownButton title="Sort by">
        <Dropdown.Item onClick={() => handleChange(sortTypes.ASC.id, 'price')}>
          Price Low to High
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleChange(sortTypes.DESC.id, 'price')}>
          Price High to Low
        </Dropdown.Item>
      </DropdownButton>

      <div style={{ whiteSpace: "nowrap", paddingBottom: "10%" }}>
        <Row>
          {carDetails && carDetails.map(
            ({ id, image, name, speed, price, efficiancy }): any => (
              <Col
                lg={3}
                style={{
                  padding: "2%",
                  border: "2px solid pink",
                  boxShadow: "10px 10px 5px -3px rgba(255,167,213,0.75)",
                  marginRight: "8%",
                  marginTop: "2%",
                }}
              >
                <div style={{ textAlign: "right" }}>
                  {" "}
                  From <b>${price}</b>/ mo <br />
                  <p style={{ color: "grey" }}>For 6 months</p>
                </div>
                <div>
                  <img
                    alt="e-Ride"
                    src={image}
                    width="230px"
                    height="150px"
                    className="d-inline-block align-top"
                  />
                </div>
                <div>{name}</div>
                <div> Speed: {speed} </div>
                <div>Efficiancy : {efficiancy} </div>
                <div>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleBookNowClick(id, name)}
                  >
                    {" "}
                    Explore{" "}
                  </Button>
                </div>
              </Col>
            )
          )}
        </Row>
        <Footer />
      </div>
    </Container>
  );
};

export default CarListing;
