import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import StateNames from '../../Assets/StaticData/StateName';
import cities from '../../Assets/DynamicData/CityFatch';

const SearchBox = () => {
  const propertyTypes = [
    { value: 'buy', label: 'Buy' },
    { value: 'rent', label: 'Rent' }
  ];

  const [State, setState] = useState([]);
  const [CitiesData, setCitiesData] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    const stateOptions = StateNames.map(item => ({ value: item, label: item }));
    setState(stateOptions);

    const cityOptions = cities.map(item => ({ value: item.name, label: item.name, state: item.state }));
    setCitiesData(cityOptions);
  }, []);

  useEffect(() => {
    if (selectedState) {
      const filtered = cities.filter(city => city.state === selectedState.value);
      setFilteredCities(filtered.map(item => ({ value: item.name, label: item.name })));
    } else {
      setFilteredCities(cities.map(item => ({ value: item.name, label: item.name })));
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedCity) {
      const city = cities.find(city => city.name === selectedCity.value);
      if (city) {
        setSelectedState({ value: city.state, label: city.state });
      }
    }
  }, [selectedCity]);

  const types = [
    { value: 'Plots', label: 'Plots' },
    { value: 'Lands', label: 'Lands' },
    { value: 'Farmhouse', label: 'Farmhouse' }
  ];

  const handleSearch = () => {
    console.log('Selected State:', selectedState);
    console.log('Selected City:', selectedCity);
    console.log('Selected Property Type:', selectedType);
  };

  return (
    <div className='text-black px-4 py-1 md:px-10 bg-light-primary'>
      <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 rounded-lg p-2'>
        <div className='grid grid-cols-2 md:grid-cols-4 w-full  gap-3 items-center '>
          <Select 
            options={filteredCities} 
            className='w-full  hover:border-black text-black rounded-full'
            classNamePrefix="select"
            isSearchable={true}
            onChange={setSelectedCity}
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: '9999px',
                boxShadow: 'none',
                '&:hover': {
                  borderColor: 'black',
                },
                paddingInline: '10px'
              }),
            }}
            placeholder="Select city"
          />
          <Select 
            options={State} 
            className='w-full  hover:border-black text-black rounded-full'
            classNamePrefix="select"
            isSearchable={true}
            onChange={setSelectedState}
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: '9999px',
                boxShadow: 'none',
                '&:hover': {
                  borderColor: 'black',
                },
                paddingInline: '10px'
              }),
            }}
            placeholder="Select state"
            value={selectedState}
          />
          <Select 
            options={types} 
            className='w-full col-span-2 hover:border-black text-black rounded-full'
            classNamePrefix="select"
            isSearchable={true}
            onChange={setSelectedType}
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: '9999px',
                boxShadow: 'none',
                '&:hover': {
                  borderColor: 'black',
                },
                paddingInline: '10px'
              }),
            }}
            placeholder="Select type"
          />
        </div>
        <button 
          className='bg-white text-black px-10 py-2 rounded-full hover:bg-opacity-80 transition duration-200 w-full md:w-auto'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBox