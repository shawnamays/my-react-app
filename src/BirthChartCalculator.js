import React from 'react';
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
        // TODO: Add logic to calculate birth chart based on form inputs
    };
    return (
        <div>
    {/*the divs are JSX elements that represent a div element in HTML.  It represents the outer container for the birth chart
calculator component */}
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


      </form>
      {/* TODO: Add form and inputs for user input */}
      {/* TODO: Add logic to calculate birth chart */}
      {/* TODO: Display birth chart results */}
        </div>
    );



};
export default BirthChartCalculator;
/* this line exports the BirthChartCalculator component so that it can be inmported and used in other parts of your app */