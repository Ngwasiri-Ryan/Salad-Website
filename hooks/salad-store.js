'use client'
import React, { createContext, useContext, useState } from 'react';

// Create the context
const SaladContext = createContext();

// Create a custom hook to access the context
export const useSaladContext = () => {
  return useContext(SaladContext);
};

// Create the provider component
export const SaladProvider = ({ children }) => {
  const [selectedSalad, setSelectedSalad] = useState(null);

  return (
    <SaladContext.Provider value={{ selectedSalad, setSelectedSalad }}>
      {children}
    </SaladContext.Provider>
  );
};
