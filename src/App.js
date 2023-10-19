import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Course from './Course';
import BookingForm from './BookingForm';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/courses/:id" component={Course} />
        <Route path="/courses/:id/booking" component={BookingForm} />
      </div>
    </Router>
  );
}

export default App;
