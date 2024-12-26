import React, { useContext, useState } from "react";
import { CitiesContext } from "../context/CitiesContext";

const CitySearch = () => {
   const [searchQuery, setSearchQuery] = useState("");
   const { citiesData, setCitiesData } = useContext(CitiesContext);

   const handleSearch = () => {
      if (!searchQuery.length) {
         return;
      }

      const city = citiesData.find((x) => x.name.includes(searchQuery));
      let timer;

      if (city) {
         city.isHighlighted = true;

         setCitiesData(
            [city, ...citiesData.filter((x) => x.id !== city.id)].sort(
               (a, b) => a.id - b.id
            )
         );

         if (timer) {
            clearTimeout(timer);
         }

         timer = setTimeout(() => {
            city.isHighlighted = false;

            setCitiesData(
               [city, ...citiesData.filter((x) => x.id !== city.id)].sort(
                  (a, b) => a.id - b.id
               )
            );
         }, 3000);
      }
   };

   return (
      <div className="w-full h-fit py-4 flex items-center justify-center">
         <div className="w-[70%]" />
         <input
            type="text"
            value={searchQuery}
            placeholder="City Name"
            className="w-[20%] border border-black py-2 px-3"
            onChange={(e) => setSearchQuery(e.target.value)}
         />
         <button
            onClick={handleSearch}
            className="button"
            style={{ padding: "10px 20px" }}
         >
            Search
         </button>
      </div>
   );
};

export default CitySearch;
