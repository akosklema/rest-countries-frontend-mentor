import styled from 'styled-components';

import useTheme from '../hooks/useTheme';

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.7rem 2.4rem;
  font-size: 1.4rem;
  font-weight: var(--fw-300);
  background-color: var(--clr-white);
  box-shadow: 0 0 7px hsl(0 0% 0% / 29.31%);
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: all 200ms ease-out;

  &:hover {
    box-shadow: 0 2px 10px hsl(0 0% 0% / 29.31%);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &.dark-theme {
    background-color: var(--clr-dark-blue-elements);
    color: var(--clr-white);
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
    padding: 1rem 3.2rem;
  }
`;

function BackButton({ children, onClick }) {
  const { theme } = useTheme();

  return (
    <Wrapper className={theme === 'dark' ? 'dark-theme' : ''} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default BackButton;