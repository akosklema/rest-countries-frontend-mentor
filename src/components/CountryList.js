import styled from 'styled-components';

import CountryContainer from '../containers/CountryContainer';

const Grid = styled.div`
  display: grid;
  row-gap: 4rem;
  place-items: center;
  grid-template-columns: 1fr;

  @media (min-width: 670px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 970px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function CountryList() {
  return (
    <Grid>
      <CountryContainer />
    </Grid>
  );
};

export default CountryList;