import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Skill from "../../assest/pic/skill1.png";
import Skil2 from "../../assest/pic/skill2.png";
import Skil3 from "../../assest/pic/skill3.png";
import hero from "../../assest/pic/hero.png";
import "./Bannar.css";

const Bannar = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Suzit</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[" Professional Coder.", " Developer."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">
                  <img src={Skill} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={Skil2} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={Skil3} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bannar;