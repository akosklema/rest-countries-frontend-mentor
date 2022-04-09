import styled from 'styled-components';

import { FilterProvider } from '../contexts/filter-context';

import FilterSection from '../components/FilterSection';
import CountryList from '../components/CountryList';

const PageContentContainer = styled.div`
  padding: 2.4rem 1.6rem;

  @media (min-width: 768px) {
    padding: 4.8rem 8rem;
  }
`;

function CountriesPage() {
  return (
    <FilterProvider>
      <PageContentContainer>
        <FilterSection />
        <CountryList />
      </PageContentContainer>
    </FilterProvider>
  );
};

export default CountriesPage;