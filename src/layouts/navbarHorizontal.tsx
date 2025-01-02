import React from 'react';
import './navbarHorizontal.css';




const NavbarHorizontal = () => {
    return (
        <nav className='navbar'>
            <h1>Components</h1>
            <ul >
                <li><a href="#home" >Home</a></li>
                <li><a href="#components" >Components</a></li>
                <li><a href="#about" >About</a></li>
            </ul>
        </nav>
    );
};

export default NavbarHorizontal;