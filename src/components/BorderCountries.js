import { useState } from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';

import useTheme from '../hooks/useTheme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;

  @media (min-width: 970px) {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledLabel = styled.p`
  font-size: 1.6rem;
  font-weight: var(--fw-600);
  line-height: 2.4rem;
  color: var(--clr-dark-blue-text);
  transition: var(--color-transition);

  &.dark-theme {
    color: var(--clr-white);
  }
`;

const CountriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (min-width: 970px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CountryTag = styled.span`
  font-size: 1.2rem;
  font-weight: var(--fw-300);
  color: var(--clr-dark-blue-text);
  padding: 0.6rem 3rem;
  background-color: var(--clr-white);
  border-radius: 2px;
  box-shadow: 0 0 4px 1px hsl(0 0% 0% / 10.49%);
  transition: all 200ms ease-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 4px 1px hsl(0 0% 0% / 10.49%);
  }

  &.dark-theme {
    background-color: var(--clr-dark-blue-elements);
    color: var(--clr-white);
  }
`;

function BorderCountries({ data }) {
  const [navigateTo, setNavigateTo] = useState(null);
  const { theme } = useTheme();

  if (navigateTo !== null) {
    return <Navigate to={`/${navigateTo}`} />
  }

  return (
    <Container>
      <StyledLabel
        className={theme === 'dark' ? 'dark-theme' : ''}
      >
        Border Countries:
      </StyledLabel>
      <CountriesContainer>
        {data.map(country => {
          return (
            <CountryTag
              key={country}
              className={theme === 'dark' ? 'dark-theme' : ''}
              onClick={() => setNavigateTo(country)}
            >
              {country}
            </CountryTag>
          );
        })}
      </CountriesContainer>
    </Container>
  );
};

export default BorderCountries;