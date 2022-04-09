import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

import useTheme from '../hooks/useTheme';

const spin = (color = '#000') => keyframes`
  0% {
  transform: rotate(0deg);
  box-shadow: 2px 2px 3px ${color};
  }

  50% {
    transform: rotate(180deg);
    box-shadow: 2px 2px 3px ${color};
  }

  100% {
    transform: rotate(360deg);
    box-shadow: 2px 2px 3px ${color};
  }
`;

const LoadingContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinningRing = styled.div`
  position: relative;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  z-index: 5000;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    animation: ${props => spin(props.color)} 0.4s linear infinite;
  }
`;

function LoadingSpinner() {
  const { theme } = useTheme();

  return (
    ReactDOM.createPortal(
      <LoadingContainer>
        <SpinningRing color={theme === 'light' ? '#000' : '#fff'} />
      </LoadingContainer>,
      document.getElementById('loading-root')
    )
  );
};

export default LoadingSpinner;