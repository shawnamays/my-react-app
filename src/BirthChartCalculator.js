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
      }
    
      return (
        <div>
          {/* TODO: Add components for birth chart calculator */}
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