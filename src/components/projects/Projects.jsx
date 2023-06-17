import React from 'react'
import Data from "./Data";

const Projects = () => {
    return (
        <section className="experience container section" id="experience">
          <h2 className="section__title">Projects</h2>
    
          <div className="experience__container grid">
            <div className="timeline grid">
              {Data.map((val, id) => {
                  return (
                    <div className="timeline__item">
                        <i className={val.icon}></i>
                        <span className="timeline__date">{val.year}</span>
                        <h3 className="timeline__title">{val.title}</h3>
                        <p className="timeline__text">{val.desc}</p>
                    </div>
                  );
                
              })}
            </div>
          </div>
        </section>
      );
}

export default Projects