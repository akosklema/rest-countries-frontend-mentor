import { useEffect } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import useDropdownSelect from '../hooks/useDropdownSelect';

import SelectDropdown, { DropdownHeader, DropdownList, SelectOption } from './SelectDropdown';

import { ReactComponent as ChevronIcon } from '../assets/SVGs/chevron.svg';

const StyledChevronIcon = styled(ChevronIcon)`
  width: 1rem;
  height: 1rem;
  transition: transform 200ms;
  transform: ${({ $active }) => $active ? 'rotate(-180deg)' : null};

  @media (min-width: 768px) {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export default function SelectFilter() {
  const { isDropdownActive, selectedOption, handleDropdown, selectDropdownOption, ref } = useDropdownSelect();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (selectedOption !== null) {
      if (searchParams.get('query')) {
        setSearchParams({ query: searchParams.get('query'), filter: selectedOption });
      } else {
        setSearchParams({ filter: selectedOption })
      }
    }

  }, [selectedOption, setSearchParams])

  return (
    <SelectDropdown ref={ref}>
      <DropdownHeader
        handleClick={handleDropdown}
      >
        {selectedOption !== null ? selectedOption : 'Filter by Region'}
        <StyledChevronIcon $active={isDropdownActive} />
      </DropdownHeader>
      <DropdownList
        active={isDropdownActive}
        selectedOption={selectedOption}
        selectDropdownOption={selectDropdownOption}
      >
        <SelectOption>Africa</SelectOption>
        <SelectOption>Americas</SelectOption>
        <SelectOption>Asia</SelectOption>
        <SelectOption>Europe</SelectOption>
        <SelectOption>Oceania</SelectOption>
      </DropdownList>
    </SelectDropdown>
  );
};