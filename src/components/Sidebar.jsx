import React, { useContext, useEffect, useState } from "react";
import { data } from "../utils";
import { CitiesContext } from "../context/CitiesContext";
import axios from "axios";

const Sidebar = () => {
   const [cities, setCities] = useState(data);
   const { citiesData, setCitiesData } = useContext(CitiesContext);
   const [index, setIndex] = useState(-1);

   async function getWeatherData() {
      if (index === -1) setIndex(0);

      const city = cities[index];

      const res = await axios(
         `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city.name}`
      );
      const updatedCity = {
         ...city,
         ...res.data,
      };
      setCitiesData([
         updatedCity,
         ...citiesData.filter((x) => x.name !== city.name),
      ]);

      const c = cities.find((x) => x.name === city.name);
      c.isFetched = true;
      setCities([c, ...cities.filter((x) => x.name !== city.name)]);

      index < cities.length && setIndex((prev) => prev + 1);
   }

   useEffect(() => {
      if (index === -1) return;
      getWeatherData();
   }, [index]);

   console.log(index, citiesData);

   return (
      <div className="flex-[0.2] border-r-8 border-black h-full flex items-center justify-center flex-col">
         <button className="button" onClick={getWeatherData}>
            Get Weather
         </button>
         <ul className="w-[70%]">
            <li className="bg-[#4472C4] py-[10px] px-[15px] text-white">
               Cities
            </li>
            {cities.map((c) => (
               <li
                  key={c.id}
                  className={`border-2 ${
                     c.isFetched ? "border-green-500" : ""
                  } py-[10px] px-[15px]`}
               >
                  {c.name}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Sidebar;
