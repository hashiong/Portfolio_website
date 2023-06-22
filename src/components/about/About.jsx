import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import Resume from "../../assets/my-resume.pdf";


const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Hongen Lei, a first year Computer Science Master Student at USC.
            </p>
            <a href={Resume} className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Python</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage pythonlevel"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">C++</h3>
                <span className="skills__number">75%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage cpplevel"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Java</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage javalevel"></span>
              </div>
              </div>

              <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage htmllevel"></span>
              </div>
              </div>

              <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__number">65%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage jslevel"></span>
              </div>
        

            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
