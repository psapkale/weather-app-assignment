import React, { useState } from "react";

const TableRow = ({ city, handleDelete }) => {
   const [description, setDescription] = useState(city.description);
   const timeDifference =
      new Date() -
      +city?.date_and_time.split(":")[0].split("").slice(-2).join("");
   const daysInHours = (timeDifference / (1000 * 60 * 60))
      .toString()
      .split("")
      .slice(0, 2)
      .join("");

   return (
      <tr className={`w-full ${city.isHighlighted ? "bg-orange-400" : ""}`}>
         <td className="border border-black w-[calc(100%/6)] text-start py-2 px-4">
            {city.name}
         </td>
         <td className="border border-black w-[calc(100%/6)] text-start py-2 px-4">
            <input
               type="text"
               value={description}
               className="border border-black px-2 w-full"
               onInput={(e) => setDescription(e.target.value)}
            />
         </td>
         <td className="border border-black w-[calc(100%/6)] text-start py-2 px-4">
            {city.temp_in_celsius}
         </td>
         <td className="border border-black w-[calc(100%/6)] text-start py-2 px-4">
            {city.pressure_in_hPa}
         </td>
         <td className="border border-black w-[calc(100%/6)] text-start py-2 px-4">
            {daysInHours}
         </td>
         <td
            className="text-[#4472C4] underline border border-black w-[calc(100%/6)] text-start py-2 px-4 cursor-pointer"
            onClick={() => handleDelete(city.id)}
         >
            Delete
         </td>
      </tr>
   );
};

export default TableRow;
