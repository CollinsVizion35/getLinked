import { useEffect, useState, createContext, useContext, useRef } from "react";

export const AppContext = createContext();

export const AppContextPage = ({ children }) => {
  const confirmedRef = useRef(null);

  return (
    <>
      <AppContext.Provider
        value={{
          confirmedRef,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export const AppPass = () => {
  return useContext(AppContext);
};
