import { useReducer, useEffect } from 'react';

function countriesReducer(state, { type, payload }) {
  switch (type) {
    case 'FETCH_COUNTRIES_REQUEST':
      return {
        ...state,
        loading: true
      };
    
    case 'FETCH_COUNTRIES_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: payload.data
      };
    
    case 'FETCH_COUNTRIES_ERROR':
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

function useFetchCountries(query, setFilter) {
  const [countries, dispatch] = useReducer(countriesReducer, initialState);
  
  useEffect(() => {
    dispatch({ type: 'FETCH_COUNTRIES_REQUEST' });

    setFilter(null);

    let dataInLocaleStorage;
    if (!query) {
      dataInLocaleStorage = localStorage.getItem('countries');
    }

    if (dataInLocaleStorage) {
      dispatch({ type: 'FETCH_COUNTRIES_SUCCESS', payload: { data: JSON.parse(dataInLocaleStorage) } });

    } else {
  
      fetch(`https://restcountries.com/v3.1/${query ? `name/${query}` : 'all'}`)
        .then(res => {
          if (res.statusText === 'Not Found') {
            throw new Error('Not Found');
          }
          return res.json();
        })
        .then(data => {

          if (!query) {
            localStorage.setItem('countries', JSON.stringify(data));
          }
          dispatch({ type: 'FETCH_COUNTRIES_SUCCESS', payload: { data } });
        })
        .catch(error => {
          if (error.message === 'Not Found') {
            return dispatch({ type: 'FETCH_COUNTRIES_ERROR', payload: { error: 'Country not found!' } });
          }

          return dispatch({ type: 'FETCH_COUNTRIES_ERROR', payload: { error: 'Error loading data. Try again!' } })
        });
    }
  
  }, [query]);

  return countries;
};

export default useFetchCountries;