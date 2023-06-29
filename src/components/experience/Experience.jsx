import React from "react";
import "./experience.css";
import EducationData from "./EducationData";
import ProjectData from "./ProjectData";
import Card from "./Card";


const Experience = () => {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title">Experience</h2>

      <div className="experience__container grid">
        <div className="timeline grid">
          {EducationData.map((val, id) => {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  category={val.category}
                  year={val.year}
                  school={val.school}
                  major={val.major}
                  gpa={val.gpa}
                  coursework={val.coursework}
                />
              );
            
          })}
        </div>

        <div className="timeline grid">
          {ProjectData.map((val, index) => {
              return (
                <Card
                  key={index}
                  category={val.category}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
