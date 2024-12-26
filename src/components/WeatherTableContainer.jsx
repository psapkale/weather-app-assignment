import React from "react";
import CitySearch from "./CitySearch";
import WeatherTable from "./WeatherTable";

const WeatherTableContainer = ({ citiesWeather }) => {
   return (
      <div className="flex-1 flex items-center justify-start flex-col py-4">
         <CitySearch />
         <WeatherTable />
      </div>
   );
};

export default WeatherTableContainer;
