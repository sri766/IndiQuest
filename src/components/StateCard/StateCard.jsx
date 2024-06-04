import React,{ useState } from 'react'
import Details from '../Details/Details';

const StateCard = ({state}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
    <div className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src={state.img[0]}
          alt={state.name}
        />
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {state.name}
        </h2>
        <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">
          {state.capital}
        </h3>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="mt-4 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
    </div>
        {showDetails && (
          <Details id={state.id} state={state} onClose={() => setShowDetails(false)}/>
        )}
     </>
  )

}

export default StateCard
