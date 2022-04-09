import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import useFetchCountry from '../hooks/useFetchCountry';

import LoadingSpinner from '../components/LoadingSpinner';
import CountryDetails from '../components/CountryDetails';
import ErrorMessage from '../components/ErrorMessage';

const PageContainer = styled.div`
  width: 32rem;
  margin: 4rem auto;

  @media (min-width: 970px) {
    width: fit-content;
    margin: 8rem auto;
    padding-inline: 4rem;
  }
`;

function CountriesPage() {
  const { countryCode } = useParams();

  const country = useFetchCountry(countryCode);

  if (country.loading === true) {
    return <LoadingSpinner />
  }

  return (
    <PageContainer>
      {
        !country.data
        ? <ErrorMessage>No country found!</ErrorMessage>
        : <CountryDetails countryData={country.data} />
      }
    </PageContainer>
  );
};

export default CountriesPage;