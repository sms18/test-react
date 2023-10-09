import React from 'react';
import { Link } from 'react-router-dom';
import logo1Image from '../src/image/2 (1).png'; // Import the image once
import circit2Image from '../src/image/undraw_freelancer_re_irh4.svg';
import './Shared.css'; // Import the shared CSS file

function FrontEndDeveloper() {
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img src={logo1Image} alt="Your Logo" className="logo" />
        </Link>
      </div>
      <div className="rectangl1">
        <div className="button-container">
          <button className="nested-box-button">
            <Link to="/booking" className="nested-box-button">
              Booking
            </Link>
          </button>
        </div>
        <div className="rectangl2">
          <div className="textStyles1">
            <p>In this program, you’ll learn:</p>
            <p>How to code and build interactive web pages using HTML5, CSS, and JavaScript.</p>
            <p>In-demand design skills to create professional page layouts using industry-standard tools such as Bootstrap, React, and Figma.</p>
            <p>GitHub repositories for version control, content management system (CMS), and how to edit images using Figma.</p>
            <p>How to prepare for technical interviews for front-end developer roles.</p>
            <p>By the end, you’ll put your new skills to work by completing a real-world project where you’ll create your own front-end web application. Any third-party trademarks and other intellectual property (including logos and icons) referenced in the learning experience remain the property of their respective owners.</p>
          </div>
        </div>
        <div className="circleStyles1">
          <div className="circleStyles2">
            <img src={circit2Image} alt="Your Image Description" />

            <div className="textStyles2">
              <p>Front-End Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontEndDeveloper;
