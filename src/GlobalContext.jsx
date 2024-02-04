import {createContext, useContext, useState} from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({children}) => {
  return (
      <GlobalContext.Provider value={{name,tides}}>
        {children}
      </GlobalContext.Provider>
    )
}
export default AppContext;