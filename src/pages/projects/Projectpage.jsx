import React from 'react'
import Data from "./Data";
import Projectsidebar from './Projectsidebar';


const Projectpage = () => {
    return (
      <>
        <Projectsidebar/>
        <section className="container" id="projects">
          <h2 className="section__title">Projects</h2>
    
          <div className="grid">
            <div className="timeline grid">
              {Data.map((val, id) => {
                  return (
                    <div className="timeline__item project_item" key={id} id={id + 1}>
                        <i className={val.icon}></i>
                        <span className="timeline__date project_date">{val.year}</span>
                        <h3 className="timeline__title project_title"><a
                          href={val.githuburl}
                          className="home__social-link"
                          target="_blank"
                          rel="noreferrer" >
                          <i class="fa-brands fa-github"></i>
                        </a> {val.title} </h3>
                        
                        <p className="timeline__text">{val.desc}</p>
                        <div className='image-container'>
                          <img src={val.image} alt='None' width={600} height={500}/>
                        </div>
                        
                    </div>
                  );
                
              })}
            </div>
          </div>
        </section>
        </>
      );
}

export default Projectpage