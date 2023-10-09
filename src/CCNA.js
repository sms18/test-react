import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Shared.css'; // Import the shared CSS file
import logoImage from '../src/image/2 (1).png';
import circit1Image from '../src/image/undraw_hello_re_3evm.svg';
function CCNA() {
  return (
    <div>
      <div className="header">
        <Link to="/"> {/* Use Link to navigate */}
          <img src={logoImage} alt="Your Logo" />
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
            <p>In this course, we share knowledge about KEY and MOST IMPORTANT features of Computer Networks. </p>
            <p>This course is all about Computer Networking and the Internet.</p>
            <p>Understand HOW Computer Networks work and learn key Networking Protocols</p>
            <p>Ethernet, IPv4, IPv6, TCP, UDP, NAT, DHCP, DNS, private and public IP addresses, subnetting</p>
            <p>If you prepare for the CCNA (Cisco Certified Network Associate) exam, this course is a perfect start for you!</p>
            <p>You could have zero knowledge about Computer Networking. All will be taught from scratch, from basic to advanced features. If you want to get deep knowledge of Computer Networking this course is for you!</p>
          </div>
        </div>
        <div className="circleStyles1">
          <div className="circleStyles2">
            <img  src={circit1Image} alt="Your Image Description" />
            <div className="textStyles2">
              <p>CCNA 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CCNA;
