import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
    return (
        <header>
            <div className="container d_flex">
                <div className="logo">
                    <img src="" alt="" />
                </div>

                <div className="navlink">
                    <ul className="link f_flex uppercase">
                        <li><a href="#home">Home</a></li>

                        <li><a href="#features">Features</a></li>

                        <li><a href="#portfolio">Portfolio</a></li>

                        <li><a href="#resume"></a>Resume</li>

                        <li><a href="#clients">Clients</a></li>

                        <li><a href="#blog"></a>Blog</li>

                        <li><a href="#contact">Contact</a></li>

                        <li><button className='home_btn'>Buy NOW</button></li>
                    </ul>

                    <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        <i className='fas fa-times close homt-btn'>BUY NOW</i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;