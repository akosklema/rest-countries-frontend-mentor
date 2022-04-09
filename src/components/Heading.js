import styled from 'styled-components';

import useTheme from '../hooks/useTheme';

const headerVariantsMobile = {
  1: {
    fontSize: '1.4rem',
    fontWeight: 'var(--fw-800)',
  },
  2: {
    fontSize: '2.2rem',
  },
  3: {
    fontSize: '1.8rem',
    lineHeight: '2.6rem'
  }
}

const headerVariantsDesktop = {
  1: {
    fontSize: '2.4rem',
  },
  2: {
    fontSize: '3.2rem',
  }
}

const Wrapper = styled.h1`
  ${props => headerVariantsMobile[props.level]}

  transition: var(--color-transition);
  color: var(--clr-dark-blue-text);

  &.dark-theme {
    color: var(--clr-white);
  }

  @media (min-width: 768px) {
    ${props => headerVariantsDesktop[props.level]}
  }
`;

export default function Heading({ level, children }) {
  const { theme } = useTheme();

  const tag = `h${level}`;

  return (
    <Wrapper
      as={tag}
      level={level}
      className={theme === 'dark' ? 'dark-theme' : ''}
    >
      {children}
    </Wrapper>
  );
};