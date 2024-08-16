import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { AirVent, History, UtensilsCrossed } from 'lucide-react';
import Img from '../LazyLoading/Img';

const truncateText = (text, length) => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

const Details = ({ state, onClose }) => {

  const [showMore, setShowMore] = useState({
    about: false,
    climate: false,
    history: false,
    food: false,
  });

  const handleShowMoreToggle = (section) => {
    setShowMore((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-start bg-white bg-opacity-50 p-4 z-50 overflow-auto">
      <div className="bg-white max-h-full p-4 md:p-6 lg:p-10 lg:w-[75rem] shadow-lg rounded-lg w-11/12 md:w-3/4 relative mt-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <X size={24} />
        </button>
        <div className="p-4 md:p-6 overflow-y-auto max-h-[80vh]">
          <div className="flex flex-col lg:flex-row md:flex-col items-center mb-4 gap-4">
            <Img
              className="h-60 w-50 rounded-full object-cover object-center"
              src={state.img[0]}
              alt={state.name}
            />
            <h2 className="text-2xl md:text-4xl lg:text-9xl text-gray-900 font-medium title-font mb-4">{state.name}</h2>
          </div>
          <p className="leading-relaxed text-base ml-4">
            {showMore.about ? state.about : truncateText(state.about, 200)}
            <button
              className="text-pink-500 ml-2"
              onClick={() => handleShowMoreToggle('about')}
            >
              {showMore.about ? 'Show less' : 'more...'}
            </button>
          </p>
          <div className="flex flex-col lg:flex-row gap-2 p-2 mt-10">
            <div className="mb-4 p-2 rounded-lg flex flex-col justify-center items-center bg-white shadow-lg w-full lg:w-1/3">
              <AirVent size={24}/>
              <h3 className="text-2xl text-gray-900 font-medium title-font mb-2">Climate</h3>
              <p className="leading-relaxed text-base text-center">
                {showMore.climate ? state.climate : truncateText(state.climate, 150)}
                <button
                  className="text-pink-500 ml-2"
                  onClick={() => handleShowMoreToggle('climate')}
                >
                  {showMore.climate ? 'Show less' : 'more...'}
                </button>
              </p>
            </div>
            <div className="mb-4 p-2 rounded-lg flex flex-col justify-center items-center bg-white shadow-lg w-full lg:w-1/3">
              <History size={24}/>
              <h3 className="text-2xl text-gray-900 font-medium title-font mb-2">History</h3>
              <p className="leading-relaxed text-base text-center">
                {showMore.history ? state.history : truncateText(state.history, 150)}
                <button
                  className="text-pink-500 ml-2"
                  onClick={() => handleShowMoreToggle('history')}
                >
                  {showMore.history ? 'Show less' : 'more...'}
                </button>
              </p>
            </div>
            <div className="mb-4 p-2 rounded-lg flex flex-col justify-center items-center bg-white shadow-lg w-full lg:w-1/3">
              <UtensilsCrossed size={24}/>
              <h3 className="text-2xl text-gray-900 font-medium title-font mb-2">Local Cuisine</h3>
              <p className="leading-relaxed text-base text-center">
                {showMore.food ? state.food : truncateText(state.food, 150)}
                <button
                  className="text-pink-500 ml-2"
                  onClick={() => handleShowMoreToggle('food')}
                >
                  {showMore.food ? 'Show less' : 'more...'}
                </button>
              </p>
            </div>
          </div>
          <h1 className='mt-8 text-2xl md:text-3xl lg:text-4xl'>What the State Produces</h1>
          <div className="places grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
            {state?.products?.map((product) => (
              <div key={product.name} className="flex flex-col items-center rounded-lg p-4">
                <Img src={product.image} alt={product.name} className="object-cover object-center w-16 h-16 md:w-20 md:h-20 rounded-full mb-2" />
                <p className="text-center text-gray-700">{product.name}</p>
                <p className="text-center text-sm text-gray-500">{product.category}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl text-gray-900 font-medium title-font mb-2">Tourist Attractions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {state.tourist.map((place) => (
                <div key={place.name} className="flex flex-col items-start p-4 bg-white shadow-xl rounded-lg">
                  <Img src={place.images} alt={place.name} className="object-cover object-center aspect-video rounded mb-2" />
                  <h4 className="text-xl text-gray-900 font-medium mb-1">{place.name}</h4>
                  <p className="text-sm text-gray-700 mb-1">
                    {showMore[place.name] ? place.info : truncateText(place.info, 100)}
                    <button
                      className="text-pink-500 ml-2"
                      onClick={() => handleShowMoreToggle(place.name)}
                    >
                      {showMore[place.name] ? 'Show less' : 'more...'}
                    </button>
                  </p>
                  <a href={place.location} target="_blank" rel="noopener noreferrer" className="text-pink-500 text-sm">View on map</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;
