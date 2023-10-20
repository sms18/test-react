import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('/booking/get_courses') // Use relative path
      .then(response => response.json())
            .then(data => setData(data))

      .catch(error => console.error('Error:', error));

    
    }, []);

    return (
        <div>
            <h1>Received Dataaa:</h1>
            {data.map(course => (
              <div key={course.id}>
                <h1>{course.name}</h1>
                <img src={course.img} ></img>
<p> {course.Description}</p>
<h6> {course.cateoryID}</h6>

              </div>
            ))}
        </div>
    );
}

export default App;
