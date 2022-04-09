import styled from 'styled-components';

import SearchBar from './SearchBar';
import SelectFilter from './SelectFilter';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 3.2rem;

  @media (min-width: 970px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 4.8rem;
  }
`;

export default function FilterSection() {
  return (
    <Wrapper>
      <SearchBar />
      <SelectFilter />
    </Wrapper>
  );
};