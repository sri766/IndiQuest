// api.js
const BASE_URL = 'https://sky-scanner3.p.rapidapi.com';

export const getFlights = async (params) => {
  const response = await fetch(`${BASE_URL}/flights/search-roundtrip?${new URLSearchParams(params)}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();

  console.log(response.json()); 
};

export const getFlightDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/flights/detail?id=${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// Add more API request functions as needed
