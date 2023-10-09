import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../src/image/2 (1).png';
import programmingImage from '../src/image/undraw_programming_re_kg9v.svg';
import helloImage from '../src/image/undraw_hello_re_3evm.svg';
import freelancerImage from '../src/image/undraw_freelancer_re_irh4.svg';
import proudCoderImage from '../src/image/undraw_proud_coder_re_exuy.svg';

const styles = {
  header: {
    width: '100%',
    backgroundColor: '#A9C6F9',
    color: '#fff',
    padding: '20px',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '1',
  },
  headerImg: {
    width: '180px',
    height: 'auto',
    marginRight: '10px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    marginTop: '80px',
  },
  text: {
    flex: '1',
    padding: '0',
    margin: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  photo: {
    flex: '1',
    padding: '20px',
  },
  box: {
    width: '98%',
    height: '561px',
    padding: '20px',
    backgroundColor: 'rgba(153, 189, 249, 0.61)',
    borderRadius: '25px',
    position: 'relative',
  },
  boxText: {
    textAlign: 'justify',
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '0',
  },
  nestedBox: {
    width: '297px',
    height: '445px',
    backgroundColor: '#EDF4FF',
    borderRadius: '25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '4px',
    padding: '20px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
  nestedBoxButton: {
    width: '48%',
    padding: '10px',
    backgroundColor: '#1A8CF7',
    color: '#fff',
    textAlign: 'center',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '5px',
  },
};

function Home() {
  return (
    <div>
      <div style={styles.header}>
        <img src={logoImage} alt="Your Logo" style={styles.headerImg} />
      </div>
      <div style={styles.container}>
        <div style={styles.text}>
          <p style={{ fontWeight: 'bold', fontSize: '46.29px', color: '#1A8CF7' }}>Get started now!</p>
          <p style={{ fontWeight: 'bold' }}>Ready to embark on an exciting learning journey with us? 🚀</p>
          <p style={{ color: '#303030', fontSize: '32px' }}><strong>HUB200</strong></p>
          <p style={{ fontWeight: 'bold' }}>has never been easier.</p>
        </div>
        <div style={styles.photo}>
          <img src={programmingImage} alt="Your Image Description" />
        </div>
      </div>
      <div style={styles.box}>
        <div style={styles.boxText}>
          <div style={styles.nestedBox}>
            <img src={helloImage} alt="Your Image Description" style={{ width: '100%', maxHeight: '200px' }} />
            <p style={{ fontWeight: 'bold', fontSize: '22.8px' }}>CCNA 2023</p>
            <p style={{ fontWeight: 'bold' }}>In this course, we share knowledge about KEY and MOST IMPORTANT features of Computer Networks.</p>
            <div style={styles.buttonContainer}>
              <Link to="/booking" className="nested-box-button">Booking</Link>
              <Link to="/ccna" className="nested-box-button" style={{ marginLeft: '5px' }}>Details</Link>
            </div>
          </div>

          <div style={styles.nestedBox}>
            <img src={freelancerImage} alt="Your Image Description" style={{ width: '100%', maxHeight: '200px' }} />
            <p style={{ fontWeight: 'bold', fontSize: '22.8px' }}>Meta Front-End Developer</p>
            <p style={{ fontWeight: 'bold' }}>In this program, you’ll learn how to code and build interactive web pages using HTML5, CSS, and JavaScript.</p>
            <div style={styles.buttonContainer}>
              <Link to="/booking" className="nested-box-button">Booking</Link>
              <Link to="/meta-frontend" className="nested-box-button" style={{ marginLeft: '5px' }}>Details</Link>
            </div>
          </div>

          <div style={styles.nestedBox}>
            <img src={proudCoderImage} alt="Your Image Description" style={{ width: '100%', maxHeight: '200px' }} />
            <p style={{ fontWeight: 'bold', fontSize: '22.8px' }}>Web50X</p>
            <p style={{ fontWeight: 'bold' }}>This course picks up where the CS50x course left off, and it's also for individuals with prior programming experience.</p>
            <div style={styles.buttonContainer}>
              <Link to="/booking" className="nested-box-button">Booking</Link>
              <Link to="/web50x" className="nested-box-button" style={{ marginLeft: '5px' }}>Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
