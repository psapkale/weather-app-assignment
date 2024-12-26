import { useState } from "react";
import "./App.css";
import WeatherContainer from "./components/WeatherContainer";
import { CitiesContext } from "./context/CitiesContext";

function App() {
   const [citiesData, setCitiesData] = useState([]);

   return (
      <CitiesContext.Provider value={{ citiesData, setCitiesData }}>
         <WeatherContainer />
      </CitiesContext.Provider>
   );
}

export default App;
