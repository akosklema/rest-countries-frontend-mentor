import { useReducer, useEffect } from 'react';

function countryReducer(state, { type, payload }) {
  switch (type) {
    case 'FETCH_COUNTRY_REQUEST':
      return {
        ...state,
        loading: true
      };
    
    case 'FETCH_COUNTRY_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: payload.data[0]
      };
    
    case 'FETCH_COUNTRY_ERROR':
      return {
        ...state,
        loading: false,
        data: null,
        error: payload.error
      }
    
    default:
      return state;
  }
};

const initialState = {
  data: null,
  loading: true,
  error: false
};

function useFetchCountry(countryCode) {
  const [country, dispatch] = useReducer(countryReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'FETCH_COUNTRY_REQUEST' });

    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_COUNTRY_SUCCESS', payload: { data } }))
      .catch(error => dispatch({ type: 'FETCH_COUNTRY_ERROR', payload: { error: 'Error loading data. Try again.' } }))
  
  }, [countryCode]);

  return country;
};

export default useFetchCountry;