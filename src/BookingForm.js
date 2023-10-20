import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../src/image/2 (1).png';
import educatorImage from '../src/image/undraw_educator_re_ju47.svg';



import { useQuery } from 'react-query';

const styles = {
  body: {
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    margin: 0,
  },
  header: {
    width: '100%',
    backgroundColor: '#A9C6F9',
    color: '#fff',
    padding: '20px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  headerImg: {
    width: '180px',
    height: 'auto',
    marginRight: '10px',
  },
  box: {
    width: '940px',
    height: '620px',
    backgroundColor: '#FBFBFB',
    borderRadius: '15px',
    boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    marginTop: '200px',
  },
  leftHalf: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    borderRadius: '15px 0 0 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
  },
  rightHalf: {
    flex: 1,
    background: 'linear-gradient(#1A8CF7, #0074D9)',
    borderRadius: '0 15px 15px 0',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle1: {
    width: '431px',
    height: '425px',
    backgroundColor: '#4EA4F7',
    borderRadius: '50%',
    position: 'absolute',
    top: '77px',
    left: '10px',
  },
  circle2: {
    width: '331px',
    height: '321px',
    backgroundColor: '#64A9F8',
    borderRadius: '50%',
    position: 'absolute',
    top: '129px',
    left: '60px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle2Img: {
    maxWidth: '90%',
    maxHeight: '100%',
    width: 'auto',
    height: 'auto',
  },
  registrationForm: {
    color: '#0074D9',
    textAlign: 'left',
    width: '80%',
    padding: '20px',
  },
  registrationFormLabel: {
    display: 'block',
    marginBottom: '10px',
  },
  registrationFormInput: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #0074D9',
    borderRadius: '5px',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  radioGroupLabel: {
    marginRight: '10px',
  },
  submitButton: {
    backgroundColor: '#0074D9',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    width: '372px',
    height: '46px',
    padding: '10px 10px 10px 10px', // Padding for top, right, bottom, left
    cursor: 'pointer',
    fontSize: '16px',
    margin: '0 auto',
    display: 'block',
  },
  logo: {
    width: '100px',
    height: 'auto',
  },
};

async function fetchUserData() {
  const response = await fetch('http://127.0.0.1:8000/booking/get_courses/'); // Replace with your API endpoint
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

function BookingForm() {
  const { data, isLoading, error } = useQuery('userData', fetchUserData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Once data is loaded, you can access it here
  const userData = data;

  return (
    <div style={styles.body} className="booking-form">
      <div style={styles.header}>
        <Link to="/">
          <img src={logoImage} alt="Your Logo" style={styles.headerImg} />
        </Link>
      </div>
      <div style={styles.box}>
        <div style={styles.leftHalf}>
          <img src={logoImage} alt="Logo" style={styles.logo} />
          <div style={styles.registrationForm}>
            <label htmlFor="firstName" style={styles.registrationFormLabel}>First Name:</label>
            <input type="text" id="firstName" name="firstName" required style={styles.registrationFormInput} value={userData.firstName} />

            <label htmlFor="lastName" style={styles.registrationFormLabel}>Last Name:</label>
            <input type="text" id="lastName" name="lastName" required style={styles.registrationFormInput} value={userData.lastName} />

            <label htmlFor="email" style={styles.registrationFormLabel}>Email:</label>
            <input type="email" id="email" name="email" required style={styles.registrationFormInput} value={userData.email} />

            <label htmlFor="number" style={styles.registrationFormLabel}>Number:</label>
            <input type="tel" id="number" name="number" required style={styles.registrationFormInput} value={userData.number} />

            <label htmlFor="city" style={styles.registrationFormLabel}>City:</label>
            <input type="text" id="city" name="city" required style={styles.registrationFormInput} value={userData.city} />

            <label htmlFor="gender" style={styles.registrationFormLabel}>Gender:</label>
            <div style={styles.radioGroup}>
              <input type="radio" id="male" name="gender" value="male" required />
              <label htmlFor="male" style={styles.radioGroupLabel}>Male</label>
              <input type="radio" id="female" name="gender" value="female" required />
              <label htmlFor="female" style={styles.radioGroupLabel}>Female</label>
            </div>
            <button type="submit" className="submit-button" style={styles.submitButton}><strong>Done</strong></button>
          </div>
        </div>
        <div style={styles.rightHalf}>
          <div style={styles.circle1}></div>
          <div style={styles.circle2}>
            <img src={educatorImage} alt="Inner Image" style={styles.circle2Img} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
