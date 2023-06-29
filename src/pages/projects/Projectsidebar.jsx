import React, { useState } from "react";
import "./projectsidebar.css";
import Logo from "../../assets/logo.png"

const Projectsidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
    <aside className={toggle ? "aside show-menu aside_without_border" : "aside aside_without_border"}>
      <a href="/" className="nav__logo">
        <img src={Logo} width="150%" alt="" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#1" className="nav__link">
                <div className="side__text">Feblix</div>
              </a>
            </li>

            <li className="nav__item">
              <a href="#2" className="nav__link">
                <div className="side__text">ChatApp</div>
              </a>
            </li>

            <li className="nav__item">
              <a href="#3" className="nav__link">
                <div className="side__text">Tumor Segementation</div>
              </a>
            </li>

            <li className="nav__item">
              <a href="#4" className="nav__link">
                <div className="side__text">TravelAdvice</div>
              </a>
            </li>

            <li className="nav__item">
              <a href="#5" className="nav__link">
                <div className="side__text">Business&Service Search Engine</div>
              </a>
            </li>
            
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2022 - 2023.</span>
      </div>
    </aside>

    <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
      <i className="icon-menu"></i>
    </div>
    </>
  );
};

export default Projectsidebar;
