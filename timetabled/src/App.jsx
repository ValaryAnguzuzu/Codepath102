//root file
import Calendar from "./components/Calendar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Itinerary for 7 Days In Chicago</h1>
      <h2>
        Welcome to Chicago Ian! Check out this calendar to get to know the city
        and see all the sites during your stay!
      </h2>
      <Calendar /> 
    </div>
  );
} 
// we are importing the Calendar component and rendering it in the App component
export default App;
