import React from 'react';
import Airbnb from "../assets/airbnb.svg";

const Navbar = () => {
  return (
    <nav>
        <a href = "./">
            <img src={Airbnb} alt='Airbnb-logo' />
        </a>
    </nav>
  )
}

export default Navbar