import React from "react";
import Sidebar from "./Sidebar";
import WeatherTableContainer from "./WeatherTableContainer";

const Content = () => {
   return (
      <div className="w-full h-[86vh] flex">
         <Sidebar />
         <WeatherTableContainer />
      </div>
   );
};

export default Content;
