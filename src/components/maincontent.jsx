import Data from '../app/Data/gtsawi/gtsawi.json';

export default function MainContent({ Selected, Day, onBack, index }) {
  // Extract current month number
  const monthNumber = index + 1; // Add 1 since index is 0-based

  // Check if there's a matching record in Data
  const matchingRecord = Data.find((record) => {
    const [recordDay, recordMonth] = record.date.split('-').map(Number);
    console.log(recordDay)
    return recordDay === parseInt(Day, 10) && recordMonth === monthNumber;
    
  });

  if (matchingRecord) {
    // Destructure data from the matched record
    const { date, title, negh, kidassie, } = matchingRecord;
    const msbak = negh?.msbak || []; // Example section from 'kidassie'
    const neg1 =negh?.msbak || [];
    const neg2 =negh?.wengel || [];
    const kdase1 = kidassie.msbak || [];
   const kdasePawulos = kidassie.firstDeacon || [];
   const kdase7tu = kidassie.secondDeacon || [];
   const kdaseHawariyat = kidassie.secondKahn || [];
   const kdaseWongel = kidassie.wengel || [];
   const kdasekdase = kidassie.kidassie || [];

    return (
      <div className="flex flex-col items-center justify-center h-full p-5">
        {/* Display Selected Month and Day */}
        <h2 className="text-2xl font-bold mb-4">
          {Selected}, {Day}
        </h2>

        {/* Display JSON General Data */}
        <div className="w-full max-w-lg bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
          {/* <h3 className="text-lg font-semibold mb-2">General Information:</h3> */}
          <ul className="list-disc pl-5">
            <li>
              <strong>Date:</strong> {date}
            </li>
            <li>
              <strong>Title:</strong> {title}
            </li>
          </ul>
        </div>

        {/* Display Kidassie Msbak */}
        <div className="w-full max-w-3xl bg-gray-100 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">የነግኅ:</h3>
          <h3 className='text-lg font-bold mb-2 ml-4 underline'>ምስባክ:</h3>
          {msbak.length > 0 ? (
            <ul className="list-disc pl-5">
              {neg1.map((entry, index) => (
                <li key={index} className="mb-2">
                  <div>
                    <strong>Geez:</strong> {entry.text.geez}
                  </div>
                  <div>
                    <strong>Amharic:</strong> {entry.text.amharic || 'N/A'}
                  </div>
                  <div>
                    <strong>English:</strong> {entry.text.english || 'N/A'}
                  </div>
                  <div>
                    <strong>Verse:</strong>{' '}
                    {entry.verse
                      ? `${entry.verse.bookTitle},  ${entry.verse.chapter}: ${entry.verse.start}-${entry.verse.end || ''} ${entry.verse.endText || ''}`
                      : 'N/A'}
                  </div>
                </li>
              ))}
            </ul>

            
          ) : (
            <p className="text-gray-500">No data available in Kidassie Msbak.</p>
          )}
            <h3 className='text-lg font-bold mb-2 ml-4 underline'>ወንጌል:</h3>
           <ul className="list-disc pl-5">
              {neg2.map((entry, index) => (
                <li key={index} className="mb-2 list-none">
                  <div>
                    ... {entry.text.geez}...
                  </div>
                 
                  <div>
                    <strong>Verse:</strong>{' '}
                    {entry.verse
                      ? `${entry.verse.bookTitle},  ${entry.verse.chapter}: ${entry.verse.start}-${entry.verse.end || ''} ${entry.verse.endText || ''}`
                      : 'N/A'}
                  </div>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">ዘቅዳሴ:</h3>
            <h3 className='text-lg font-bold mb-2 ml-4 underline'>ምስባክ:</h3>
           <ul className="list-disc pl-5">
              {kdase1.map((entry, index) => (
                <li key={index} className="mb-2 list-none">
                   <div>
                    <strong>Geez:</strong> {entry.text.geez}
                  </div>
                  <div>
                    <strong>Amharic:</strong> {entry.text.amharic || 'N/A'}
                  </div>
                  <div>
                    <strong>English:</strong> {entry.text.english || 'N/A'}
                  </div>
                  <div>
                    <strong>Verse:</strong>{' '}
                    {entry.verse
                      ? `${entry.verse.bookTitle},  ${entry.verse.chapter}: ${entry.verse.start}-${entry.verse.end || ''} ${entry.verse.endText || ''}`
                      : 'N/A'}
                  </div>
                </li>
              ))}
            </ul>

            <h3 className='text-lg font-bold mb-2 ml-4 underline'>መልዕክተ ጳውሎስ:</h3>
            <ul className="list-disc pl-5">
              {kdasePawulos.map((entry, index) => (
                <li key={index} className="mb-2 list-none">
                  <div>
                    ... {entry.text.geez}...
                  </div>
                 
                  <div>
                    <strong>Verse:</strong>{' '}
                    {entry.verse
                      ? `${entry.verse.bookTitle},  ${entry.verse.chapter}: ${entry.verse.start}-${entry.verse.end || ''} ${entry.verse.endText || ''}`
                      : 'N/A'}
                  </div>
                </li>
              ))}
            </ul>

            <h3 className='text-lg font-bold mb-2 ml-4 underline'>7ቱ መልዕክታት:</h3>
            <ul className="list-disc pl-5">
              {kdase7tu.map((entry, index) => (
                <li key={index} className="mb-2 list-none">
                  <div>
                    ... {entry.text.geez}...
                  </div>
                 
                  <div>
                    <strong>Verse:</strong>{' '}
                    {entry.verse
                      ? `${entry.verse.bookTitle},  ${entry.verse.chapter}: ${entry.verse.start}-${entry.verse.end || ''} ${entry.verse.endText || ''}`
                      : 'N/A'}
                  </div>
                </li>
              ))}
            </ul>

            <h3 className='text-lg font-bold mb-2 ml-4 underline'>  የሐዋርያት ሥራ:</h3>
            <ul className="list-disc pl-5">
              {kdaseHawariyat.map((entry, index) => (
                <li key={index} className="mb-2 list-none">
                  <div>
                    ... {entry.text.geez}...
                  </div>
                 
                  <div>
                    <strong>Verse:</strong>{' '}
                    {entry.verse
                      ? `${entry.verse.bookTitle},  ${entry.verse.chapter}: ${entry.verse.start}-${entry.verse.end || ''} ${entry.verse.endText || ''}`
                      : 'N/A'}
                  </div>
                </li>
              ))}
            </ul>

            <h3 className='text-lg font-bold mb-2 ml-4 underline'>  ወንጌል:</h3>
            <ul className="list-disc pl-5">
              {kdaseWongel.map((entry, index) => (
                <li key={index} className="mb-2 list-none">
                  <div>
                    ... {entry.text.geez}...
                  </div>
                 
                  <div>
                    <strong>Verse:</strong>{' '}
                    {entry.verse
                      ? `${entry.verse.bookTitle},  ${entry.verse.chapter}: ${entry.verse.start}-${entry.verse.end || ''} ${entry.verse.endText || ''}`
                      : 'N/A'}
                  </div>
                </li>
              ))}
            </ul>

            <h3 className='text-lg font-bold mb-2 ml-4 underline'>  የሚቀደሰው ቅዳሴ:</h3>
            <ul className="list-disc pl-5">
              {kdasekdase.map((entry, index) => (
                <li key={index} className="mb-2 list-none">
                  <div>
                    ... {entry}...
                  </div>
                 
               
                </li>
              ))}
            </ul>
        </div>

       
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center h-full p-5">
        <h2 className="text-xl font-bold text-red-500 mb-4">
          Data is not recorded for {Selected}, {Day}.
        </h2>
       
      </div>
    );
  }
}
