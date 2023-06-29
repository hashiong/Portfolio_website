import React from "react";

const Card = (props) => {
  console.log("log: " + props.category)
  if(props.category === "education"){
    return (
      <div className="timeline__item">
        <i className={props.icon}></i>
        <span className="timeline__date">{props.year}</span>
        <h3 className="timeline__title">{props.title}</h3>
        <p className="timeline__text"><b>School: </b>{props.school}</p>
        <p className="timeline__text"><b>Major: </b>{props.major}</p>
        <p className="timeline__text"><b>GPA: </b>{props.gpa}</p>
        <p className="timeline__text"><b>Relevent Course: </b>{props.coursework}</p>
      </div>
    )
  }
  else if(props.category === "project"){
    return (
      <div className="timeline__item">
        <i className={props.icon}></i>
        <span className="timeline__date">{props.year}</span>
        <h3 className="timeline__title">{props.title}</h3>
        <p className="timeline__text">{props.desc}</p>
      </div>
    )
  }
  ;
};

export default Card;
