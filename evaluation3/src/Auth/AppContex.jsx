import React, { useReducer } from "react";
import { createContext } from "react";
// dont change the name
const intial={
    isAuth:false,
    token:null
  }
export const AppContext = createContext();

// dont change the name
export const appReducer = () => {
  // write code
  
  
};

function AppContextProvider({children}) {
  // you need to use context
  // fix code here
  return <AppContext.Provider value={intial}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
