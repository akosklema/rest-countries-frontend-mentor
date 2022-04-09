import { useState, useEffect, useRef } from 'react';

function useDropdownSelect() {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const ref = useRef();

  const handleDropdown = () => {
    setIsDropdownActive(isActive => !isActive);
  }

  const selectDropdownOption = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    setIsDropdownActive(false)
  }, [selectedOption]);

  useEffect(() => {
    const clickedOutside = (event) => {
      if (isDropdownActive && ref.current && !ref.current.contains(event.target)) {
        setIsDropdownActive(false)
      }
    };

    document.addEventListener('mousedown', clickedOutside);

    return () => document.removeEventListener('mousedown', clickedOutside);
  }, [isDropdownActive]);

  return {
    isDropdownActive,
    selectedOption,
    handleDropdown,
    selectDropdownOption,
    ref
  }
};

export default useDropdownSelect;