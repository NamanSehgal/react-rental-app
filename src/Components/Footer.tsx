import React from "react";
import Navbar from 'react-bootstrap/Navbar'

class Footer extends React.Component {
    render() {
        return <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom">
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={{color: "white", paddingRight: "50px", fontSize : "18px"}}>
                    Contact Us
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    }
}

export default Footer;