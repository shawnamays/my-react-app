import logo from './logo.svg';
import './App.css';
import BirthChartCalculator from './BirthChartCalculator'; // Assuming the BirthChartCalculator component is in the same directory as the file where you are importing it

const App = () => {
  return (
    <div>
      {/* Other components and content */}
      <BirthChartCalculator /> {/* Render the BirthChartCalculator component */}
    </div>
  );
};

export default App;