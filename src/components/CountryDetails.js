import { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';

import BackButton from './BackButton';
import Heading from './Heading';
import DataItem, { DataList } from './DataItem';
import BorderCountries from './BorderCountries';

import { ReactComponent as BackArrowIcon } from '../assets/SVGs/back-arrow.svg';

const CountryDetailsContainer = styled.div`
  margin-top: 6.4rem;

  @media (min-width: 970px) {
    display: grid;
    grid-template-areas:
      "img ."
      "img ."
      "img .";
    column-gap: 14.4rem;
  }
`;

const StyledBackArrowIcon = styled(BackArrowIcon)`
  width: 1.8rem;
  height: 1.8rem;

  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

const StyledCountryImg = styled.img`
  grid-area: img;
  width: 32rem;
  height: 22.9rem;
  border-radius: 5px;
  margin-bottom: 4.4rem;

  @media (min-width: 1440px) {
    width: 56rem;
    height: 40.1rem;
  }
`;

const DataListsContainer = styled.div`
  margin-top: 1.6rem;
  margin-bottom: 3.4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (min-width: 970px) {
    flex-direction: row;
    gap: 11.7rem;
  }
`;

function CountryDetails({ countryData }) {
  const [goBack, setGoBack] = useState(false);

  if (goBack == true) {
    return <Navigate to="/" />
  }

  const currencies = [];
  const languages = [];

  let nativeName;
  if (Object.keys(countryData.name.nativeName).includes('eng')) {
    nativeName = countryData.name.nativeName['eng'].official;
  } else {
    nativeName = Object.values(countryData.name.nativeName)[0].official;
  }

  for (const currency in countryData.currencies) {
    currencies.push(countryData.currencies[currency].name);
  }

  for (const language in countryData.languages) {
    languages.push(countryData.languages[language]);
  }

  return (
    <Fragment>
      <BackButton onClick={() => setGoBack(true)}>
        <StyledBackArrowIcon />
        Back
      </BackButton>
      <CountryDetailsContainer>
        <StyledCountryImg src={countryData.flags['svg']} />
        <Heading level="2">{countryData.name.common}</Heading>
        <DataListsContainer>
          <DataList>
            <DataItem label="Native Name">{nativeName}</DataItem>
            <DataItem label="Population">{countryData.population}</DataItem>
            <DataItem label="Region">{countryData.region}</DataItem>
            <DataItem label="Sub Region">{countryData.subregion}</DataItem>
            <DataItem label="Capital">{countryData.capital}</DataItem>
          </DataList>
          <DataList>
            <DataItem label="Top Level Domain">{countryData.tld[0]}</DataItem>
            <DataItem label="Currencies">{currencies.join(', ')}</DataItem>
            <DataItem label="Languages">{languages.join(', ')}</DataItem>
          </DataList>
        </DataListsContainer>
        {
          countryData.borders !== undefined &&
          <BorderCountries data={countryData.borders} />
        }
      </CountryDetailsContainer>
    </Fragment>
  );
};

export default CountryDetails;