import React from 'react';

const DayView = ({ month, monthIndex, onBack }) => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="w-full h-full p-5">
      <div className="flex justify-between items-center">
        <button onClick={onBack} className="text-sm text-blue-500 underline">Back</button>
        <h3 className="text-lg font-semibold">{`Days in ${month} (${monthIndex + 1})`}</h3>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-4">
        {days.map((day) => (
          <div
            key={day}
            className="w-12 h-12 bg-gray-300 flex justify-center items-center rounded-md cursor-pointer hover:bg-gray-400"
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayView;
