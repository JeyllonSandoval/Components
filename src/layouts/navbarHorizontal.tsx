import React from 'react';
import './navbarHorizontal.css';

const NavbarHorizontal = () => {
    return (
        <section className='navbar-horizontal'>
            <nav className='navbar'>
                <h1>Components</h1>
                <ul >
                    <li><a href='/'>Home</a></li>
                    <li><a href='/components'>Components</a></li>
                    <li><a href="/about" >About</a></li>
                </ul>
            </nav>
        </section>
    );
};

export default NavbarHorizontal;