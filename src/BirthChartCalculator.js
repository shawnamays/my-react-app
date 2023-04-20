import React, { useState } from 'react';

/* the import React line imports the React library, the core library for building user interfaces */

/*the following defines a functional component that's called BirthChartCalculator.  
A functional component is a way to define
a React component using a function.  THis component represents the birth chart caluclator and returns JSX (Javascript XML) which is a syntax extension
for JavaScript that allows you to write HTML like code in your JavaScript files */

const BirthChartCalculator = () => {
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [timeOfBirth, setTimeOfBirth] = useState('');
    const [locationOfBirth, setLocationOfBirth] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // TODO: Add logic to handle form submission
        // Extracting values from state
  const date = new Date(dateOfBirth); // Convert dateOfBirth to a Date object
  const time = timeOfBirth; // Use timeOfBirth as is
  const location = locationOfBirth; // Use locationOfBirth as is
  
  // Constructing API request URL
  const apiUrl = `https://api.example.com/birth-chart?date=${date}&time=${time}&location=${location}`;
  
  try {
    // Fetching data from the API
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    // TODO: Perform birth chart calculation using fetched data

    // Example: Display alert with API response
    alert(`API Response: ${JSON.stringify(data)}`);
  } catch (error) {
    console.error('Failed to fetch data from API:', error);
  }
}
      }
    
      return (
        <div>
          {/* TODO: Add components for birth chart calculator for areas in the chart */}
          <h1>Birth Chart Calculator</h1>
          <form onSubmit={handleFormSubmit}>
            <label>
              Date of Birth:
              <input
                type="date"
                value={dateOfBirth}
                onChange={(event) => setDateOfBirth(event.target.value)}
              />
            </label>
            <label>
              Time of Birth:
              <input
                type="time"
                value={timeOfBirth}
                onChange={(event) => setTimeOfBirth(event.target.value)}
              />
            </label>
            <label>
              Location of Birth:
              <input
                type="text"
                value={locationOfBirth}
                onChange={(event) => setLocationOfBirth(event.target.value)}
              />
            </label>
            <button type="submit">Calculate</button>
          </form>
          {/* TODO: Add logic to calculate birth chart */}
          {/* TODO: Display birth chart results */}
        </div>
      );
    };

export default BirthChartCalculator;
/* this line exports the BirthChartCalculator component so that it can be inmported and used in other parts of your app */