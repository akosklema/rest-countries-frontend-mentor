import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import useTheme from '../hooks/useTheme';

import Heading from './Heading';

const ItemWrapper = styled(motion.div)`
  width: 26.4rem;
  height: 33.6rem;
  background-color: var(--clr-white);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 7px 2px hsl(0 0% 0% / 2.94%);
  transition: all 200ms ease-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 13px 10px hsl(0 0% 0% / 5.62%);
    transform: translateY(-1px);
  }

  &.dark-theme {
    background-color: var(--clr-dark-blue-elements);
  }
`;

const StyledImg = styled.img`
  width: 26.4rem;
  height: 16rem;
`;

const TextContainer = styled.div`
  padding: 2.4rem;
`;

const StyledDataContainer = styled.ul`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledDataItem = styled.li`
  list-style: none;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: var(--clr-dark-blue-text);
  transition: var(--color-transition);

  &.dark-theme {
    color: var(--clr-white);
  }

  span {
    font-weight: var(--fw-600);
  }
`;

function DataItem({ label, children }) {
  const { theme } = useTheme();
  
  return (
    <StyledDataItem className={theme === 'dark' ? 'dark-theme' : ''}>
      <span>{label}: </span>
      {children}
    </StyledDataItem>
  );
};

function CountryItem({ data }) {
  const [toCountry, setToCountry] = useState(false);
  const { theme } = useTheme();

  if (toCountry === true) {
    return <Navigate to={`/${data.cca3}`} />
  }

  return (
    <ItemWrapper
      className={theme === 'dark' ? 'dark-theme' : ''}
      onClick={() => setToCountry(true)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <StyledImg src={data.flags['png']} />
      <TextContainer>
        <Heading level="3">{data.name.common}</Heading>
        <StyledDataContainer className={theme === 'dark' ? 'dark-theme' : ''}>
          <DataItem label="Population">{data.population}</DataItem>
          <DataItem label="Region">{data.region}</DataItem>
          <DataItem label="Capital">{data.capital}</DataItem>
        </StyledDataContainer>
      </TextContainer>
    </ItemWrapper>
  );
};

export default CountryItem;