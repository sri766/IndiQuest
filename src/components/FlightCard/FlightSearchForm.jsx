import React, { useState } from 'react';
import { getFlights } from '../../utils/flightApi';

const FlightSearchForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [depart, setDepart] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [nearbyAirports, setNearbyAirports] = useState(false);
  const [directFlights, setDirectFlights] = useState(false);
  const [travellers, setTravellers] = useState('1 Adult, Economy');
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    const params = {
      from,
      to,
      depart,
      returnDate,
      nearbyAirports,
      directFlights,
      travellers,
    };

    const header = {
      'x-rapidapi-key': '2b94c4342amsh5ddfa44ef0a667bp13d061jsn7873adac34a5',
      'Content-Type': 'application/json'
    };  

    try {
      const data = await getFlights({
        header,
        params
      });
      setFlights(data);
      setError('');
    } catch (err) {
      console.error('Error fetching flights:', err);
      setError('Failed to fetch flight data. Please try again later.');
      setFlights([]);
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg shadow-blue-gray-400 p-6">
        <div className="mb-4 text-center text-xl font-bold">Get to See Your Flight Journeys</div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-gray-700">From</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Delhi (DEL)"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">To</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Hyderabad (HYD)"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Depart</label>
            <input
              type="date"
              className="w-full border rounded-md p-2"
              value={depart}
              onChange={(e) => setDepart(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Return</label>
            <input
              type="date"
              className="w-full border rounded-md p-2"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="nearby-airports"
              className="form-checkbox"
              checked={nearbyAirports}
              onChange={(e) => setNearbyAirports(e.target.checked)}
            />
            <label htmlFor="nearby-airports" className="text-gray-700">Add nearby airports</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="direct-flights"
              className="form-checkbox"
              checked={directFlights}
              onChange={(e) => setDirectFlights(e.target.checked)}
            />
            <label htmlFor="direct-flights" className="text-gray-700">Direct flights</label>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <div className="flex mx-auto">
            <label className="felx text-gray-700">Travellers and cabin class</label>
            <select
              className="w-full border rounded-md p-2"
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
            >
              <option>1 Adult, Economy</option>
              <option>2 Adults, Economy</option>
              <option>1 Adult, Business</option>
            </select>
          </div>
          <button
            className="mx-10 text-xl bg-pink-700 text-white py-2 px-10 rounded-full"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {error && <div className="text-red-500 text-center">{error}</div>}

      {flights.length > 0 && (
        <div className="p-8">
          <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg p-6">
            <div className="mb-4 text-center text-lg font-bold">Flight Results</div>
            {flights?.map((flight, index) => (
              <div key={index} className="mb-4">
                <div>Flight: {flight.name}</div>
                <div>Price: {flight.price}</div>
                <div>Duration: {flight.duration}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSearchForm;
