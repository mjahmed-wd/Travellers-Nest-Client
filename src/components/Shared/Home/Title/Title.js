import React from "react";
import "./Title.css"

const Title = ({ titleWord, secondaryWord }) => {
  return (
    <div className="title d-flex justify-content-center pt-5 pb-5">
      <div>
      <h5>{secondaryWord} </h5> 
      </div>
      <div className="title-main">
      <h5>{titleWord}</h5>
      </div>
    </div>
  );
};

export default Title;
