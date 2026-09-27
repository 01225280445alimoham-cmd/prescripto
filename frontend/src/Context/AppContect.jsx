import { createContext } from "react";
import { doctors } from "../assets/assets";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const contextValue = {
    doctors,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
