import React from "react";
import Josh from "../assets/JoshPhoto.jpg";
import '../index.css'

const AboutMe = () => {
  return (
    <div>
      <h1> Hello this is me</h1>
        <div className="portrait">
          <img src={Josh} alt="me" />
        </div>
    </div>
  );
};

export default AboutMe;
