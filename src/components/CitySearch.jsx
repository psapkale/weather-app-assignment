import React from "react";

const CitySearch = () => {
   return (
      <div className="w-full h-fit py-4 flex items-center justify-center">
         <div className="w-[70%]" />
         <input
            type="text"
            placeholder="City Name"
            className="w-[20%] border border-black py-2 px-3"
         />
         <button className="button" style={{ padding: "10px 20px" }}>
            Search
         </button>
      </div>
   );
};

export default CitySearch;
