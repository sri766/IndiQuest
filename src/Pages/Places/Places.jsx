import React from 'react'
import places from '../../Data/Places.json'
import StateCard from '../../components/StateCard/StateCard'

const Places = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -m-4">
        {places.state.map((state) => (
          <StateCard key={state.id} state={state} />
        ))}
      </div>
    </div>
  )
}

export default Places
