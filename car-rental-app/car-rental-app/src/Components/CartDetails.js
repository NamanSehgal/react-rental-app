import React from "react";
import Calendar from 'react-calendar';
import Button from "react-bootstrap/esm/Button";

const CartDetails = () => {
    const [showCalendar, setShowCalendar] = React.useState(false);
    const handleCalendarIconClick = () => {
        setShowCalendar((prev) => !prev);
    }

    return (<div>
        <h3>CarName</h3>

        <h6>Min. Subscription Length</h6>
        <Button as="input" type="button" value="1 Month" />{' '}
        <Button as="input" type="submit" value="6 Months" />{' '}

        <h6>Miles Per Month</h6>
        <Button as="input" type="button" value="800" />{' '}
        <Button as="input" type="submit" value="1000" />{' '}
        <Button as="input" type="button" value="1200" />{' '}
        <h3>Delivery date</h3>
        <p>date</p>
        <>
            <img
                alt="e-Ride"
                src='/images/calendar.png'
                width="30"
                height="30"
                className="d-inline-block align-top my-2"
                onClick={handleCalendarIconClick}
            />
            {showCalendar && <Calendar />}

            <Button variant="primary" size="lg" classname="my-2" block>
                Book Now
            </Button>
        </>
    </div>);
}

export default CartDetails;