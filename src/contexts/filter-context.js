import React, { useState } from 'react';

export const FilterContext = React.createContext();

export function FilterProvider({ children }) {
  const [filter, setFilter] = useState(null);
  
  const value = {filter, setFilter};

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};