import { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import useTheme from './hooks/useTheme';

import PageLayout from './layouts/PageLayout';
import CountriesPage from './pages/CountriesPage';
import CountryDetailPage from './pages/CountryDetailPage';

import GlobalStyles from './global-styles';

function App() {
  const { theme } = useTheme();

  return (
    <Fragment>
      <GlobalStyles theme={theme} />
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<CountriesPage />} />
          <Route path="/:countryCode" element={<CountryDetailPage />} />
        </Route>
        <Route path='*' element={<Navigate to="/" />}/>
      </Routes>
    </Fragment>
  );
}

export default App;
