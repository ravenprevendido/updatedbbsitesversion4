"use client";
import React, { createContext, useContext, useState } from "react";

//  Define the shape of the context
type HeaderContextType = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  selectedServiceFromHeader: string | null;
  setSelectedServiceFromHeader:  (service: string | null) => void;
};

// Create the context
const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

// Provider component
export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedServiceFromHeader, setSelectedServiceFromHeader] = useState<
    string | null
  >(null);

  return (
    <HeaderContext.Provider
      value={{
        searchValue,
        setSearchValue,
        selectedServiceFromHeader,
        setSelectedServiceFromHeader,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

// 🎯 Hook to consume the context
export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
};
