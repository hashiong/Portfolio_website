import React from 'react'
import Data from "./Data";


const Projectpage = () => {
    return (
        <section className="container" id="projects">
          <h2 className="section__title">Projects</h2>
    
          <div className="grid">
            <div className="timeline grid">
              {Data.map((val, id) => {
                  console.log(val.image)
                  return (
                    <div className="timeline__item" key={id} id={id + 1}>
                        
                        <i className={val.icon}></i>
                        <span className="timeline__date">{val.year}</span>
                        <h3 className="timeline__title">{val.title}</h3>
                        <p className="timeline__text">{val.desc}</p>
                        <img src={"http://localhost:3000/" + val.image} alt='None' width={500} height={500}/>
                    </div>
                  );
                
              })}
            </div>
          </div>
        </section>
      );
}

export default Projectpage