import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
    return (
        <header>
            <div className="container d_flex">
                <div className="logo">
                     <h2>SUZIT SARKAR</h2>
                </div>

                <div className="navlink">
                    <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onclick={()=> setMobile(false)}>
                        <li><a href="#home">Home</a></li>

                        <li><a href="#features">Features</a></li>

                        <li><a href="#portfolio">Portfolio</a></li>

                        <li><a href="#resume">Resume</a></li>

                        <li><a href="#clients">Clients</a></li>

                        <li><a href="#blog">Blog</a></li>

                        <li><a href="#contact">Contact</a></li>

                        <li><button className='home-btn'>Buy NOW</button></li>
                    </ul>

                    <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                   </button>

                </div>
            </div>
        </header>
    );
};

export default Navbar;