import styled, { css, keyframes } from 'styled-components';

import useTheme from '../hooks/useTheme';

import { ReactComponent as MoonIcon} from '../assets/SVGs/moon.svg';
import { ReactComponent as SunIcon} from '../assets/SVGs/sun.svg';

const Wrapper = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const iconCSS = css`
  width: 1.6rem;
  height: 1.6rem;

  @media (min-width: 768px) {
    width: 2.2rem;
    height: 2.2rem;
  }
`;

const moonAnimation = keyframes`
  0% {
    transform: rotate(360deg) scale(0);
  }

  100% {
    transform: rotate(0) scale(100%);
  }
`;

const sunAnimation = keyframes`
  0% {
    transform: rotate(360deg) scale(0);
  }

  70% {
    transform: rotate(-120deg) scale(130%);
  }

  100% {
    transform: rotate(0) scale(100%);
  }
`;

const StyledMoonIcon = styled(MoonIcon)`
  ${() => iconCSS};
  animation: ${moonAnimation} 300ms ease-out;
  
`;

const StyledSunIcon = styled(SunIcon)`
  ${() => iconCSS};
  color: var(--clr-white);
  animation: ${sunAnimation} 300ms ease-out;
`;

const Text = styled.p`
  font-size: 1.2rem;
  font-weight: var(--fw-600);
  color: var(--clr-dark-blue-text);

  &.dark-theme {
    color: var(--clr-white);
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();

  return(
    <Wrapper onClick={toggleTheme}>
      {
        theme === 'light'
        ? <StyledMoonIcon />
        : <StyledSunIcon />
      }
      <Text
        className={theme === 'dark' ? 'dark-theme' : ''}
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </Text>
    </Wrapper>
  );
};