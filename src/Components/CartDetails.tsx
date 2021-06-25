import React from "react";
import Calendar from "react-calendar";
import Button from "react-bootstrap/esm/Button";
import { routes } from "../constants";
import "../App.css";

const CartDetails = () => {
  const [showCalendar, setShowCalendar] = React.useState(false);
  const handleCalendarIconClick = () => {
    setShowCalendar((prev: any) => !prev);
  };

  return (
    <div
      style={{
        height: "500px",
        padding: "3%",
        border: "2px solid pink",
        boxShadow: "10px 10px 5px -3px rgba(255,167,213,0.75)",
      }}
    >
      <h3>Honda</h3>
      <h6>Min. Subscription Length</h6>
      <Button
        as="input"
        type="button"
        value="1 Month"
        className="button"
      />{" "}
      <Button as="input" type="submit" value="6 Months" className="button" />{" "}
      <h6>Miles Per Month</h6>
      <Button as="input" type="button" value="800" className="button" />{" "}
      <Button as="input" type="submit" value="1000" className="button" />{" "}
      <Button as="input" type="button" value="1200" className="button" />{" "}
      <h3>Delivery date</h3>
      <p>date</p>
      <p>{new Date().toString}</p>
      <>
        <img
          alt="e-Ride"
          src="/images/calendar.png"
          width="30"
          height="30"
          className="d-inline-block align-top my-2"
          onClick={handleCalendarIconClick}
        />
        {showCalendar && <Calendar />}

        <Button
          href={routes.myBooking}
          variant="primary"
          size="lg"
          className="my-2 button"
          block
        >
          Book Now
        </Button>
      </>
    </div>
  );
};

export default CartDetails;
