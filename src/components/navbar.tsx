import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="navbar-items">
      <Link to='/' className="home-link">Home</Link>
      <Link to='/Projects' className="projects-link">Projects</Link>
      <Link to='/AboutMe' className="about-me-link">About Me!</Link>
      <Link to='/ContactMe' className='contact-me-link'>Contact Me</Link>
      </div>
    </nav>
  );
}

export default Navbar;