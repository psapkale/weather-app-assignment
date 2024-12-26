import React, { useContext } from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";
import { CitiesContext } from "../context/CitiesContext";

const WeatherTable = () => {
   const { citiesData, setCitiesData } = useContext(CitiesContext);

   return (
      <div className="flex items-start justify-center w-full h-[80vh] p-10 px-8">
         <table className="w-full">
            <TableHead />
            <tbody className="flex items-center justify-between flex-col">
               {citiesData.map((city) => (
                  <TableRow city={city} />
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default WeatherTable;
