
import React, { useState } from "react";

export default function SearchIconButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative ">
     
      <button
        onClick={() => setOpen(!open)}
        className="p-2 bg-gray-700 text-black rounded-full hover:bg-gray-900 transition duration-300  ms-5"
      >
        {open ? <i className="  bi bi-x fs-2  text-muted"></i> : <i className="bi bi-search fs-3 text-muted"></i>}
      </button>

    
      {open && (
<div className=" search relative w-64">
  <input
    type="text"
    placeholder="Search Courses Here"
    className=" w-full py-2 pl-4 pr-10 rounded-lg border border-gray-300 
               text-gray-700 placeholder-gray-400 focus:outline-none 
               focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition duration-300"
  />

  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
    <i className="bi bi-search text-gray-400 text-lg"></i>
  </div>
</div>


      )}
    </div>
  );
}
