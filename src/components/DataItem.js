import styled from 'styled-components';

import useTheme from '../hooks/useTheme';

export function DataList({ children }) {
  return (
    <ul>
      {children}
    </ul>
  );
};

const Wrapper = styled.li`
  list-style: none;
  font-size: 1.4rem;
  line-height: 3.2rem;
  font-weight: var(--fw-300);
  color: var(--color-text);
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
    <Wrapper className={theme === 'dark' ? 'dark-theme' : ''}>
      <span>{label}: </span>
      {children}
    </Wrapper>
  );
};

export default DataItem;