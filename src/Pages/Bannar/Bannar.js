import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Bannar = () => {
    return (
        <section>
            <div className="container f-flex top">
                 <h3>WELLCOM TO MY WORLD</h3>
                  <h1>HI I'M <span>Suzit </span></h1>
                  <h2>a 
                      <span>
                          <Typewriter words={["professional Coder.", "Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000}/>
                      </span>
                  </h2>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quos.</p>

                  <div className="herro_btn d_flex">
                      <div className="col_1">
                          <h4>FIND WITH ME</h4>
                          <div className="button">
                              <button className='btn_shadow'>
                                  <i className='fab fa-facebook-f'></i>
                              </button>
                              <button>
                                  <i className='fab fa-instagram'></i>
                              </button>
                              <button>
                                  <i className='fab fa-linkedin-in'></i>
                              </button>
                          </div>
                      </div>
                      <div className="col_1">
                          <h4>BEST SKILL NO</h4>
                          <button>
                              <img src='' alt="" />
                          </button>
                      </div>
                  </div>
            </div>
        </section>
    );
};

export default Bannar;