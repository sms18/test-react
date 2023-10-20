import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Course from './courses';
import BookingForm from './BookingForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<Course />} />
        <Route path="/courses/:id/booking" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
