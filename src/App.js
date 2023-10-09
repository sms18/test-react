import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './home';
import CCNA from './CCNA';
import FrontEndDeveloper from './FrontEndDeveloper';
import Web50X from './Web50X';
import BookingForm from './BookingForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ccna" element={<CCNA />} />
        <Route path="/meta-frontend" element={<FrontEndDeveloper />} />
        <Route path="/web50x" element={<Web50X />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
