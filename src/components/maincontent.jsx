import Data from '../app/Data/gtsawi/gtsawi.json';

export default function MainContent({ month, day, onBack }) {
  // Extract common data
  const { date, title, negh, kidassie } = Data;

  // Determine which section to display based on the context
  const msbak = kidassie?.msbak || []; // Example section from 'kidassie' to display

  return (
    <div className="flex flex-col items-center justify-center h-full p-5">
      {/* Display Selected Month and Day */}
      <h2 className="text-2xl font-bold mb-4">
        Selecte: {month}, Day {day}
      </h2>

      {/* Display JSON General Data */}
      <div className="w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">General Information:</h3>
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
      <div className="w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-2">Kidassie Msbak:</h3>
        {msbak.length > 0 ? (
          <ul className="list-disc pl-5">
            {msbak.map((entry, index) => (
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
                    ? `${entry.verse.bookTitle}, Chapter ${entry.verse.chapter}, Verses ${entry.verse.start}-${entry.verse.end || ''} ${entry.verse.endText || ''}`
                    : 'N/A'}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No data available in Kidassie Msbak.</p>
        )}
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Back to Days
      </button>
    </div>
  );
}
