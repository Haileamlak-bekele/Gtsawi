'use client';

import { useState } from 'react';

export default function ClientMonths({ months }) {
  const [selectedMonth, setSelectedMonth] = useState(null); // Track the selected month
  const [selectedDay, setSelectedDay] = useState(null); // Track the selected day

  const handleMonthClick = (month, index) => {
    setSelectedMonth({ name: month, index }); // Record selected month and index
  };

  const handleDayClick = (day) => {
    setSelectedDay(day); // Record selected day
  };

  const resetView = () => {
    setSelectedDay(null);
    setSelectedMonth(null);
  };

  return (
    <div className="flex w-full h-screen">
      {/* Sidebar */}
      <div
        className={`transition-all mb-3 duration-300 ${
          selectedMonth ? 'w-1/4' : 'w-0'
        } bg-[#D9D9D9] overflow-y-auto`}
      >
        <header className="w-full h-16 bg-[#D9D9D9] flex items-center justify-center">
          <h2 className="text-xl font-bold text-black">
            {selectedDay ? 'Selected Day' : 'Months'}
          </h2>
        </header>
        <section className="p-4">
          {/* Render Months or Days in Sidebar */}
          {selectedDay
            ? Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                <div
                  key={day}
                  className={`w-full h-10 bg-[#3C3D37] flex items-center justify-center rounded-lg cursor-pointer mb-2 hover:bg-[#697565] ${
                    selectedDay === day ? 'bg-[#697565]' : ''
                  }`}
                  onClick={() => handleDayClick(day)}
                >
                  <div className="text-white text-lg"> {day}</div>
                </div>
              ))
            : months.map((month, index) => (
                <div
                  key={index}
                  className="w-full h-12 bg-[#697565] flex items-center justify-center rounded-lg cursor-pointer mt-2 hover:bg-[#181C14]"
                  onClick={() => handleMonthClick(month, index)}
                >
                  <div className="text-white text-lg">{month}</div>
                </div>
              ))}
        </section>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 flex-1 ${
          selectedMonth ? 'ml-1/4' : 'ml-0'
        } bg-[#D9D9D9] mb-6 p-5`}
      >
        {!selectedMonth ? (
          <section className="grid grid-cols-5 gap-4 p-4">
            {months.map((month, index) => (
              <div
                key={index}
                className="w-38 h-24 bg-[#3C3D37] flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#697565]"
                onClick={() => handleMonthClick(month, index)}
              >
                <div className="text-white text-lg">{month}</div>
              </div>
            ))}
          </section>
        ) : !selectedDay ? (
          <section className="grid grid-cols-7 gap-4 p-4">
            {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
              <div
                key={day}
                className="w-20 h-16 bg-[#3C3D37] flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#697565]"
                onClick={() => handleDayClick(day)}
              >
                <div className="text-white text-lg"> {day}</div>
              </div>
            ))}
          </section>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold">
              Selected: {selectedMonth.name}, Day {selectedDay}
            </h2>
            <button
              onClick={resetView}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Reset Selection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
