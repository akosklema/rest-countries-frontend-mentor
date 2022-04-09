import React, { forwardRef } from 'react';
import styled from 'styled-components';

import useTheme from '../hooks/useTheme';

const DropdownHeaderWrapper = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;
  padding: 1.4rem 2.4rem;
  width: 21rem;
  background-color: var(--clr-white);
  color: var(--clr-dark-blue-text);
  border-radius: 5px;
  box-shadow: 0 2px 9px hsl(0 0% 0% / 5.32%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--bg-transition), var(--color-transition);

  &.dark-theme {
    background-color: var(--clr-dark-blue-elements);
    color: var(--clr-white);
  }

  @media (min-width: 970px) {
    font-size: 1.4rem;
    padding: 1.8rem 2.4rem;
  }
`;

export function DropdownHeader({ children, handleClick }) {
  const { theme } = useTheme();

  return (
    <DropdownHeaderWrapper
      onClick={handleClick}
      className={theme === 'dark' ? 'dark-theme' : ''}
    >
      {children}
    </DropdownHeaderWrapper>
  );
};


const DropdownListWrapper = styled.ul`
  position: absolute;
  top: 5.5rem;
  display: flex;
  flex-direction: column;
  width: 20rem;
  border-radius: 5px;
  box-shadow: 0 2px 9px hsl(0 0% 0% /5.32%);
  overflow: hidden;

  clip-path: ${({ active }) => {
    if (active) {
      return 'polygon(-20% -20%, 120% -20%, 120% 120%, -20% 120%)';
    }

    return 'polygon(0 0, 100% 0, 100% 0, 0 0)';
  }};
  transform-origin: right top;
  transition: clip-path 200ms ease-out;

  @media (min-width: 970px) {
    width: 100%;
    top: 6.2rem;
  }
`;

export function DropdownList({ children, active, selectedOption, selectDropdownOption }) {
  return (
    <DropdownListWrapper active={active}>
      {children.map((child) => {
        return React.cloneElement(child, {
          key: child.props.children,
          active: selectedOption === child.props.children,
          handleClick: selectDropdownOption.bind(null, child.props.children)
        })
      })}
    </DropdownListWrapper>
  );
};

const SelectOptionWrapper = styled.li`
  list-style: none;
  font-size: 1.2rem;
  line-height: 1.6rem;
  padding: 0.8rem 2.4rem;
  color: var(--clr-dark-blue-text);
  background-color: ${({ $active }) => $active ? 'hsl(0 0% 95%)' : 'var(--clr-white)'};
  transition: var(--bg-transition), var(--color-transition);

  &.dark-theme {
    color: ${({ $active }) => $active ? 'var(--clr-dark-blue-text)' : 'var(--clr-white)'};
    background-color: ${({ $active }) => $active ? 'hsl(0 0% 95%)' : 'var(--clr-dark-blue-elements)'};
  }
  
  &:first-child {
    padding-top: 0.8rem;
  }

  &:last-child {
    padding-bottom: 0.8em;
  }

  &:hover {
    background-color: hsl(0 0% 95%);
    color: var(--clr-dark-blue-text);
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

export function SelectOption({ children, active, handleClick }) {
  const { theme } = useTheme();

  return (
    <SelectOptionWrapper
      className={theme === 'dark' ? 'dark-theme' : ''}
      $active={active}
      onClick={handleClick}
    >
      {children}
    </SelectOptionWrapper>
  );
};

const SelectDropdownWrapper = styled.div`
  cursor: pointer;
  position: relative;
`

function SelectDropdown({ children }, ref) {
  return (
    <SelectDropdownWrapper ref={ref}>
      {children}
    </SelectDropdownWrapper>
  );
};

export default forwardRef(SelectDropdown);