import React from "react";

const TableHead = () => {
   return (
      <tr className="flex border border-black text-white bg-[#4472C4] items-center justify-between">
         <th className="border-r border-white w-[calc(100%/6)] text-start py-2 px-4">
            City
         </th>
         <th className="border-r border-white w-[calc(100%/6)] text-start py-2 px-4">
            Description
         </th>
         <th className="border-r border-white w-[calc(100%/6)] text-start py-2 px-4">
            Temperature (°C)
         </th>
         <th className="border-r border-white w-[calc(100%/6)] text-start py-2 px-4">
            Pressure (hPa)
         </th>
         <th className="border-r border-white w-[calc(100%/6)] text-start py-2 px-4">
            Date age (hrs)
         </th>
         <th className="w-[calc(100%/6)] text-start py-2 px-4"></th>
      </tr>
   );
};

export default TableHead;
