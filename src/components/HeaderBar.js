import styled from 'styled-components';

import useTheme from '../hooks/useTheme';

const Wrapper = styled.header`
  padding: 3rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--clr-white);
  box-shadow: 0 2px 4px 0 hsl(0 0% 0% / 5.62%);
  transition: var(--bg-transition);

  &.dark-theme {
    background-color: var(--clr-dark-blue-elements);
  }

  @media (min-width: 768px) {
    padding: 2.4rem 8rem;
  }
`;

function HeaderBar({ children }) {
  const { theme } = useTheme();

  return (
    <Wrapper className={theme === 'dark' ? 'dark-theme' : ''}>
      {children}
    </Wrapper>
  );
};

export default HeaderBar;