import React, { FC } from "react";
import { routes } from "../constants";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

interface props {
  children: any;
}

const NavigationBar: FC<props> = ({ children }) => {
  return (
    <>
      <Navbar>
        <Navbar.Brand href={routes.home}>
          <img
            alt="e-Ride"
            src="/images/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          e-Ride
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link href={routes.home} className="nav">
                Electric Cars
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Suitability Tool</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={routes.myBooking}>My Booking</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link disabled>Sign Out</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
    </>
  );
};
export default NavigationBar;
