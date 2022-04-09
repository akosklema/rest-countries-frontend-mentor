import styled from 'styled-components';

const SubmitButton = styled.button`
  border: none;
  font-size: 1.2rem;
  font-weight: var(--fw-600);
  background-color: var(--clr-dark-blue-elements);
  color: var(--clr-white);
  transition: var(--bg-transition), var(--color-transition);
  padding: 1.2rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &.dark-theme {
    background-color: var(--clr-white);
    color: var(--clr-dark-blue-text);
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default SubmitButton;