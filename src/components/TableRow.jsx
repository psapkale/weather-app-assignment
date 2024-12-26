import React, { useEffect, useState } from "react";

const TableRow = ({ city }) => {
   const [description, setDescription] = useState("");
   console.log(description, city.description);

   useEffect(() => {
      console.log(description);
      setDescription(city.description);
   }, []);

   return (
      <tr className="w-full">
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
            {city.date_and_time}
         </td>
         <td
            className="text-[#4472C4] underline border border-black w-[calc(100%/6)] text-start py-2 px-4 cursor-pointer"
            onClick={handleDelete}
         >
            Delete
         </td>
      </tr>
   );
};

export default TableRow;
