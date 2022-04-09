import styled from 'styled-components';

const Wrapper = styled.input`
  width: 100%;
  font-size: 1.2rem;
  font-weight: var(--fw-400);
  background-color: var(--clr-white);
  color: var(--clr-dark-blue-text);
  padding-block: 1.6rem;
  padding-left: 7.4rem;
  transition: var(--bg-transition), var(--color-transition);
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 9px hsl(0 0% 0% / 5.32%);

  &::placeholder {
    color: hsl(0 0% 52%);
    transition: var(--color-transition);
  }

  &.dark-theme {
    background-color: var(--clr-dark-blue-elements);
    color: var(--clr-white);

    &::placeholder {
      color: var(--clr-white);
    }
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
    padding-block: 1.8rem;
    width: 48rem;
  }
`;

export default function TextInput({ placeholder, className, onChange }) {
  return (
    <Wrapper type="text" className={className} placeholder={placeholder} onChange={onChange} />
  );
};