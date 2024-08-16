import React, { useState } from 'react';
import { Car, Plane, Hotel } from 'lucide-react';
import FlightSearchForm from './FlightSearchForm';

const App = () => {
  const [activeTab, setActiveTab] = useState('flights');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'flights':
        return <FlightSearchForm />;
      case 'hotels':
        return <div>Hotel Seasdrch Component</div>; // Add your hotel search component here
      case 'cars':
        return <div>Car Hire Search Component</div>; // Add your car hire search component here
      default:
        return null;
    }
  };

  return (
    <section className='h-full py-20 w-screen'>
      <div className='btn flex gap-2 justify-center items-center'>
        <button
          className={`flights ring-pink-600 hover:ring-opacity-0 rounded-full px-10 text-xl py-2 text-semibold hover:bg-pink-600 hover:text-white ${activeTab === 'flights' ? 'bg-pink-600 text-white' : ''}`}
          onClick={() => setActiveTab('flights')}
        >
          <Plane size={24} className='inline-block' />
          Flights
        </button>
        <button
          className={`hotels ring-pink-600 hover:ring-opacity-0 rounded-full px-10 text-xl py-2 text-semibold hover:bg-pink-600 hover:text-white ${activeTab === 'hotels' ? 'bg-pink-600 text-white' : ''}`}
          onClick={() => setActiveTab('hotels')}
        >
          <Hotel size={24} className='inline-block' />
          Hotels
        </button>
        <button
          className={`cars_hire ring-pink-600 hover:ring-opacity-0 rounded-full px-10 text-xl py-2 text-semibold hover:bg-pink-600 hover:text-white ${activeTab === 'cars' ? 'bg-pink-600 text-white' : ''}`}
          onClick={() => setActiveTab('cars')}
        >
          <Car size={24} className='inline-block' />
          Cars Hire
        </button>
      </div>

      {renderTabContent()}
    </section>
  );
};

export default App;
