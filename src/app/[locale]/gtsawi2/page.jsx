// 'use client'
import React from 'react';
// import { useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';


import Months from '../../../components/months'
import Days from '../../../components/days'
import Wrapper from '../../../components/wrapper'

export default function Gtsawi1() {
 



  // Access the 'month' key, fallback to an empty array if it's undefined or not valid

  const view = true;
console.log(Months)
  return (
    <div>
     
      <Days>
      <Months/>
      </Days>
      
     

 
    </div>
     
    // <div className="w-full  ">
    //   {/* Title Section */}
    //   <header className="w-5/6 h-16 m-auto bg-[#D9D9D9] flex items-center justify-center">
    //     <h2 className="text-xl font-bold">{t('title')}</h2>
    //   </header>

    //   {/* Month Selector */}
    //   <section className="w-48 h-12 mt-3 m-auto bg-[#D9D9D9] flex items-center justify-center">
    //     <h2 className="text-md font-medium">{g('chooseMonth')}</h2>
    //   </section>

    //   {/* Month List */}
    //   <section className="m-auto flex justify-center w-3/4 h-auto mt-3 mb-3 bg-[#D9D9D9] overflow-y-auto ">
     
    //   {monthArr.map((month, index) => (
    //     <div
    //       key={index}
    //       className="w-48 h-24 bg-slate-500 flex justify-evenly ml-3 rounded-lg flex-col m-4"
          
    //     >
    //       <Link href='#'>{month}</Link>
    //     </div>
    //   ))}
     
    //   </section>
    // </div>
  );
  
 
}
