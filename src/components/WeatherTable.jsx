import React, { useContext } from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";
import { CitiesContext } from "../context/CitiesContext";

const WeatherTable = () => {
   const { citiesData, setCitiesData } = useContext(CitiesContext);

   const handleDelete = (id) => {
      const city = citiesData.find((x) => x.id === id);

      if (city) {
         setCitiesData([...citiesData.filter((x) => x.id !== id)]);
      }
   };

   return (
      <div className="flex items-start justify-center w-full h-[80vh] p-10 px-8">
         <table className="w-full">
            <TableHead />
            {!citiesData.length ? (
               <h1 className="font-bold text-xl text-center mt-8">No Data</h1>
            ) : (
               <tbody className="flex items-center justify-between flex-col">
                  {citiesData.map((city) => (
                     <TableRow city={city} handleDelete={handleDelete} />
                  ))}
               </tbody>
            )}
         </table>
      </div>
   );
};

export default WeatherTable;
