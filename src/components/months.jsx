import { getTranslations } from 'next-intl/server';
import ClientMonths from './wrapper'; // Client-side component for rendering and interactivity

export default async function Months() {
  const g = await getTranslations('gtsawi2'); // Fetch month-related translations
  const t = await getTranslations('gtsawi2');
  // const head = t('chooseDay');
  const monthArr = [];
  
  for (let i = 1; i <= 13; i++) { // Generate months dynamically
    const month = g(`month.${i}`, { returnObjects: true });
    monthArr.push(month);
  }
  const selectMonth = t('chooseMonth');
  const selectDay = t('chooseDay');
console.log(monthArr)
console.log(selectMonth)
console.log(selectDay)
  return (
    <ClientMonths months={monthArr} selectMonth={selectMonth} selectDay={selectDay} />
  );
}
