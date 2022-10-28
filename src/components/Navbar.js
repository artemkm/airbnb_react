import React from "react"
import logo1 from '../images/airbnb-logo.png';

export default function Navbar() {
    return (
        <nav>
            <img src={logo1} className="nav--logo"/>
        </nav>
    )
}