import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

import { weatherOptions, GEO_API_URL } from '../../api/api';

const SearchBar = ({ onSearchChange }) => {
  const [search, setSearch] = useState();

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, weatherOptions)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <AsyncPaginate
        type="text"
        placeholder="Search the weather in..."
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </>
  );
};

export default SearchBar;
