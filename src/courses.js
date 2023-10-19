import React from 'react';
import { Link, useParams } from 'react-router-dom';
import logoImage from '../src/image/2 (1).png';
import circit1Image from '../src/image/undraw_hello_re_3evm.svg';
import circit2Image from '../src/image/undraw_freelancer_re_irh4.svg';
import circitImage from '../src/image/undraw_proud_coder_re_exuy.svg';
import './Shared.css';


function Course() {
  const { id } = useParams();

  const courseData = {
    frontend: {
      title: 'Front-End Developer',
      description: 'Your front-end journey starts here...',
      image: circit2Image,
    },
    ccna: {
      title: 'CCNA 2023',
      description: 'Learn the key features of computer networks...',
      image: circit1Image,
    },
    web50x: {
      title: 'Web50X',
      description: 'Dive into web app development with Python, JavaScript, and more...',
      image: circitImage,
    },
  };

  const course = courseData[id];

  return (
    <div style={styles.body}>
      <div style={styles.header}>
        <Link to="/">
          <img src={logoImage} alt="Your Logo" />
        </Link>
      </div>
      <div className="rectangl1">
        <div className="button-container">
          <button className="nested-box-button">
            <Link to={`/courses/${id}/booking`} className="nested-box-button">
              Booking
            </Link>
          </button>
        </div>
        <div className="rectangl2">
          <div className="textStyles1">
            <p>{course.title}</p>
            <p>{course.description}</p>
          </div>
        </div>
        <div className="circleStyles1">
          <div className="circleStyles2">
            <img src={course.image} alt={course.title} />
            <div className="textStyles2">
              <p>{course.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
