import { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Photo from '../../components/Photos/Photo';
import { Search } from 'lucide-react';
import { TiHeartFullOutline } from "react-icons/ti";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("India");
  const [data, setData] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  // Custom debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Debounced version of setDebouncedQuery
  const debouncedSetQuery = useCallback(
    debounce((query) => setDebouncedQuery(query), 500),
    []
  );

  const handleInputChange = (event) => {
    const { value } = event.target;
    const fullQuery = `India ${value}`;
    setSearchQuery(fullQuery);
    debouncedSetQuery(fullQuery);
  };

  const handleButtonClick = (query) => {
    const fullQuery = `India ${query}`;
    setSearchQuery(fullQuery);
    setDebouncedQuery(fullQuery);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${debouncedQuery}`, {
          headers: {
            Authorization: '8IlMIHk7EQtoT5ZytOSoJ4twbQmuWCWNLpFqVpL4Vbhg9BKjw6JeKzEz'
          }
        });
        const data = await response.json();
        setData(data.photos);
        
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [debouncedQuery]);

  return (
    <section className='h-full'>
      <h1 className='text-6xl py-9'>Explore the Heavenly Places in India</h1>
      <div className='flex flex-wrap justify-center align-middle gap-4 py-3'>
        <button className='py-2 px-8 rounded-full bg-pink-600 text-white hover:shadow-md hover:bg-gray-800'
          onClick={() => handleButtonClick("Places")}>Places</button>
        <button className='py-2 px-8 rounded-full bg-pink-600 text-white hover:shadow-md hover:bg-gray-800'
          onClick={() => handleButtonClick("Heritage")}>Heritage</button>
        <button className='py-2 px-8 rounded-full bg-pink-600 text-white hover:shadow-md hover:bg-gray-800'
          onClick={() => handleButtonClick("Culture")}>Culture</button>
        <button className='py-2 px-8 rounded-full bg-pink-600 text-white hover:shadow-md hover:bg-gray-800'
          onClick={() => handleButtonClick("Mountains")}>Mountains</button>
        <button className='py-2 px-8 rounded-full bg-pink-600 text-white hover:shadow-md hover:bg-gray-800'
          onClick={() => handleButtonClick("Food")}>Food</button>
        <button className='py-2 px-8 rounded-full bg-pink-600 text-white hover:shadow-md hover:bg-gray-800'
          onClick={() => handleButtonClick("Temple")}>Temple</button>
      </div>

      <div className='flex justify-center items-center gap-2'>
        <input
          type="text"
          className='p-2 w-[350px] rounded-full'
          placeholder='Search places in India'
          onChange={handleInputChange}
        />
        <button
          className='rounded-full flex items-center justify-center w-12 h-12 hover:bg-pink-400'
          onClick={() => handleInputChange({ target: { value: '' } })}
        >
          <Search size={32} color='black' />
        </button>
      </div>

      <Photo data={data} />
      <span className='text-2xl text-gray-400'>Photos Provided By Pexel
        <TiHeartFullOutline className='inline text-3xl'/>
      </span>
    </section>
  );
};

export default Explore;
