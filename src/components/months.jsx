import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import DayView from './days';



// Server Component
export default async function Months() {
  // Fetch translations for both namespaces
  const t = await getTranslations('gtsawi1'); // For general text
  const g = await getTranslations('gtsawi2'); // For months-related text
  
 
  // Populate months from translations
  for (let i = 0; i <= 12; i++) {
    const month = g(`month.${i}`, { returnObjects: true });
    monthArr.push(month); // Add month name to the array
  }

  return (
    <>
      {/* Pass the month array as a prop to the DayView component */}
      {/* <DayView months={monthArr} /> */}
      {monthArr}
      {/* Optionally render the months list */}
      {/* <section className="m-auto grid grid-cols-5 gap-2 w-3/4 h-auto mt-3 mb-3 bg-[#D9D9D9] overflow-y-auto">
        {monthArr.map((month, index) => (
          <div
            key={index}
            className="w-38 h-24 bg-slate-500 flex justify-evenly ml-3 rounded-lg flex-col m-4"
          >
            <Link href="#" className="flex justify-evenly w-8 h-24 items-center">
              {month}
            </Link>
          </div>
        ))}
      </section> */}
    </>
  );
}

  // return (
  //   <div className="w-full">
  //     {/* Title Section */}
  //     <header className="w-5/6 h-16 m-auto bg-[#D9D9D9] flex items-center justify-center">
  //       <h2 className="text-xl font-bold">{t('title')}</h2>
  //     </header>

  //     {/* Month Selector */}
  //     <section className="w-48 h-12 mt-3 m-auto bg-[#D9D9D9] flex items-center justify-center">
  //       <h2 className="text-md font-medium">{g('chooseMonth')}</h2>
  //     </section>

  //     {/* Month List */}
  //     <section className="m-auto grid grid-cols-5 gap-2 w-3/4 h-auto mt-3 mb-3 bg-[#D9D9D9] overflow-y-auto">
  //       {monthArr.map((month, index) => (
  //         <div
  //           key={index}
  //           className="w-38 h-24 bg-slate-500 flex justify-evenly ml-3 rounded-lg flex-col m-4"
  //         >
  //           <Link href="#" className="flex justify-evenly w-8 h-24 items-center">
  //             {month}
  //           </Link>
  //         </div>
  //       ))}
  //     </section>
  //   </div>
  // );
//}
