import React from 'react';

const Navbar = () => {
    return (
        <header>
            <div className="container d_flex">
                <div className="logo">
                    <img src="" alt="" />
                </div>

                <div className="navlink">
                    <ul className="link f_flex uppercase">
                        <li><a href="#home"></a></li>
                        <li><a href="#features"></a></li>
                        <li><a href="#portfolio"></a></li>
                        <li><a href="#resume"></a></li>
                        <li><a href="#clients"></a></li>
                        <li><a href="#blog"></a></li>
                        <li><a href="#contact"></a></li>
                        <li><button className='home_btn'>Buy NOW</button></li>
                    </ul>

                    <button className='toggle'></button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;