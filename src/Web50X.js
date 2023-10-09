import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Shared.css'; // Import the shared CSS file
import logoImage from '../src/image/2 (1).png';
import circitImage from '../src/image/undraw_proud_coder_re_exuy.svg';

function Web50X() {
  return (
    <div>
      <div className="header">
      <Link to="/"> {/* Use Link to navigate */}
          <img src={logoImage} alt="Your Logo" />
        </Link>
      </div>
      <div className="rectangl1">
        <div className="button-container">
          {/* Wrap the button with Link */}
          <Link to="/booking" className="nested-box-button">
               Booking
          </Link>

        </div>
        <div className="rectangl2">
          <div className="textStyles1">
            <p>
              This course picks up where the CS50x course left off, and it's also for individuals with prior programming experience,
            </p>
            <p>
              diving more deeply into the design and implementation of web apps with Python, JavaScript,
            </p>
            <p>
              and SQL using frameworks like Django, React, and Bootstrap.
            </p>
            <p>Topics include database design, scalability, security, and user experience.</p>
            <p>
              Through hands-on projects, you'll learn to write and use APIs, create interactive UIs,
            </p>
            <p>and leverage cloud services like GitHub and Heroku.</p>
          </div>
        </div>
        <div className="circleStyles1">
          <div className="circleStyles2">
            <img src={circitImage} alt="Web50X" />

            <div className="textStyles2">
              <p>Web50X</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web50X;
