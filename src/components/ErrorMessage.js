import styled from 'styled-components';

import useTheme from '../hooks/useTheme';

const Wrapper = styled.p`
  font-size: 2rem;
  justify-self: start;
  font-weight: var(--fw-600);
  color: var(--clr-dark-blue-text);

  &.dark-theme {
    color: var(--clr-white);
  }
`;

function ErrorMessage({ children }) {
  const { theme } = useTheme();

  return (
    <Wrapper className={theme === 'dark' ? 'dark-theme' : ''}>
      {children}
    </Wrapper>
  );
};

export default ErrorMessage;