'use client';

import React from 'react';

const DayView = ({ months }) => {
  console.log(months)
  return (
    <div className="w-full">
      {/* Title for the months section */}
      <h2 className="text-center font-bold text-xl my-4">Months List</h2>

      {/* Render the list of months */}
      <ul className="grid grid-cols-4 gap-4 m-auto w-3/4">
        {months.map((month, index) => (
          <li
            key={index}
            className="bg-slate-500 text-white p-4 text-center rounded-md shadow-md"
          >
            {month}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayView;
