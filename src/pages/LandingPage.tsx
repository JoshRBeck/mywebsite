import React from "react";
// import Josh from "../assets/JoshPhoto.jpg";
// import JoshHockey from "../assets/JoshHockey.jpg";
import VancouverPhoto from "../assets/Vancouver Photo.jpg"
// import { Link } from 'react-router-dom'

// Define ImagePaths as an interface
// interface ImagePaths {
//   Josh: string;
//   JoshHockey: string;
// }

// const imagePaths: ImagePaths = {
//   Josh: Josh,
//   JoshHockey: JoshHockey,
// };

function LandingPage() {
  return (
    <div>
      <img src={VancouverPhoto} alt="home town" className="vancouver-photo" />
    </div>
  );
}

export default LandingPage;

     {/* <div className="welcome-text">
        <h1>Welcome to my website!</h1>
      </div>

      <div className="centered-container">
        <img src={imagePaths.Josh} alt="me" className="portrait" />
        <img
          src={imagePaths.JoshHockey}
          alt="basically Gretzky"
          className="hockey"
        />
      </div>
      <div>
        <p className="explore-text">Explore my work and learn about me here.</p>
      </div>
      <div className="about-me-link">
        <Link to="/AboutMe"><span>About me!</span></Link>
      </div> */}