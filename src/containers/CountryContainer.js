import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import useFetchCountries from '../hooks/useFetchCountries';
import useFilter from '../hooks/useFilter';

import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import CountryItem from '../components/CountryItem';

function CountryContainer() {
  const [searchParam, setSearchParam] = useSearchParams()
  const { filter, setFilter } = useFilter();

  const query = searchParam.get('query');

  const countries = useFetchCountries(query, setFilter);

  const filterParam = searchParam.get('filter');

  const filterOptions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  
  useEffect(() => {
    if (!filterOptions.includes(filterParam)) {
      if(query) {
        return setSearchParam({ query })
        
      } else {
        setFilter(null);
        return setSearchParam({});

      }
    } else {
      setFilter(filterParam);
    }
  }, [filterParam, setFilter]);
  
  let filteredCountries = countries.data;

  if (filter) {
    if (!countries.data) {
      filteredCountries = [];

    } else {
      filteredCountries = countries.data.filter(country => country.region === filter);
    }
  }

  if (countries.loading) {
    return <LoadingSpinner />
  }

  if (countries.error) {
    return <ErrorMessage>{countries.error}</ErrorMessage>;
  }

  if (filteredCountries.length === 0) {
    return <ErrorMessage>No country found!</ErrorMessage>;
  }

  return (
    filteredCountries.map(country => {
      return (
        <CountryItem
          key={country.name.common}
          data={country}
        />
      )
    })
  )
};

export default CountryContainer;