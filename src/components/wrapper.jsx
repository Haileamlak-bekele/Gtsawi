'use client';

import { useState } from 'react';
import Maincontent from './maincontent';

export default function ClientMonths({ months, selectMonth, selectDay }) {
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
        className={`transition-all duration-300 ${
          selectedMonth ? 'w-1/4' : 'w-0'
        } bg-[#D9D9D9] overflow-y-auto`}
      >
        <header className="w-full h-16 bg-[#D9D9D9] flex items-center justify-center sticky top-0 z-10">
          <h2 className="text-xl font-bold text-black">
            {selectedDay ? selectDay : selectMonth}
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
      <div className="flex-1 overflow-y-auto">
        <div className="p-5 sticky top-0 bg-[#D9D9D9] z-10 flex justify-center text-2xl font-bold">
          {!(selectedMonth && selectedDay) &&
            (selectedMonth && !selectedDay ? selectDay : selectMonth)}
        </div>

        <div className="p-4 bg-[#D9D9D9] mt-6">
          {!selectedMonth ? (
            <section className="grid grid-cols-4 lg:grid-cols-5 gap-4">
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
            <section className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
              {/* Adjust the grid columns for different screen sizes */}
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
            <div className="mb-4 p-3 flex flex-col">
              <Maincontent
                Selected={selectedMonth.name}
                Day={selectedDay}
                index={selectedMonth.index}
              />
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
    </div>
  );
}
