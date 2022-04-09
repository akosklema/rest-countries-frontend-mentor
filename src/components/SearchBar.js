import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import useTheme from '../hooks/useTheme';

import Form from './Form';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';

import { ReactComponent as SearchIcon} from '../assets/SVGs/search.svg';

const StyledSearchIcon = styled(SearchIcon)`
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  top: 50%;
  left: 3.2rem;
  transform: translateY(-50%);
  color: hsl(0 0% 52%);
  transition: var(--color-transition);

  &.dark-theme {
    color: var(--clr-white);
  }

  @media (min-width: 768px) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export default function SearchBar() {
  const { theme } = useTheme();
  const [inputText, setInputText] = useState('');

  const navigate = useNavigate();

  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(`?query=${inputText.toLowerCase()}`);
  };

  

  return (
    <Form onSubmit={handleSubmit}>
      <StyledSearchIcon
        className={theme === 'dark' ? 'dark-theme' : ''}
      /> 
      <TextInput
        className={theme === 'dark' ? 'dark-theme' : ''}
        placeholder="Search for a country..."
        onChange={handleInputText}
      />
      <SubmitButton
        type="submit"
        className={theme === 'dark' ? 'dark-theme' : ''}
      >
        Search
      </SubmitButton>
    </Form>
  );
};