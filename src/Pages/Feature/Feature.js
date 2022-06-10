import React from 'react';
import './Feature.css'

const Feature = () => {
    return (
        <>
             <section className='features top'id='features'>
                <div className="container">
                    <div className="heading">
                        <h4>Features</h4>
                        <h1>What I Do</h1>
                    </div>
                    <div className="content grid">
                         <div className="box btn_shadow">
                             <img src="" alt="" />
                             <h2>titel</h2>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, itaque!</p>

                             <a href="">
                                <i className='fas fa-arrow-right'></i>
                             </a>
                         </div>
                    </div>
                </div>
             </section>
        </>
    );
};

export default Feature;