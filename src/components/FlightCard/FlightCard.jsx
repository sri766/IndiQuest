import React from 'react'
import { Car,Plane,Hotel } from 'lucide-react'
const FlightCard = () => {
  return (
    <section className='h-full w-screen'>
      <div className='btn flex gap-2 justify-center item-center'>
        <button className='flights ring-pink-600 hover:ring-opacity-0 rounded-full px-10 text-xl py-2 text-semibold hover:bg-pink-600 hover:text-white'>
          <Plane size={24} className='inline-block' />
          Flights
        </button>
        <button className='hotels ring-pink-600 hover:ring-opacity-0 rounded-full px-10 text-xl py-2 text-semibold hover:bg-pink-600 hover:text-white'>
          <Hotel size={24} className='inline-block' />
          Hotels
        </button>
        <button className='cars_hire ring-pink-600 hover:ring-opacity-0 rounded-full px-10 text-xl py-2 text-semibold hover:bg-pink-600 hover:text-white'>
          <Car size={24} className='inline-block' />
          Cars Hire
        </button>
      </div>

      <div className="p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg p-6">
          <div className="mb-4 text-center text-lg font-bold">Millions of cheap flights. One simple search.</div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700">From</label>
              <input type="text" className="w-full border rounded-md p-2" placeholder="Jharsuguda (JRG)" />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">To</label>
              <input type="text" className="w-full border rounded-md p-2" placeholder="Hyderabad (HYD)" />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Depart</label>
              <input type="date" className="w-full border rounded-md p-2" />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Return</label>
              <input type="date" className="w-full border rounded-md p-2" />
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="nearby-airports" className="form-checkbox" />
              <label htmlFor="nearby-airports" className="text-gray-700">Add nearby airports</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="direct-flights" className="form-checkbox" />
              <label htmlFor="direct-flights" className="text-gray-700">Direct flights</label>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex mx-auto">
              <label className="felx text-gray-700">Travellers and cabin class</label>
              <select className="w-full border rounded-md p-2">
                <option>1 Adult, Economy</option>
                <option>2 Adults, Economy</option>
                <option>1 Adult, Business</option>
              </select>
            </div>
            <button className="mx-10 text-xl bg-yellow-500 text-white py-2 px-10 rounded-full">Search</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default FlightCard

