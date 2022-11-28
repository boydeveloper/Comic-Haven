import { createContext, useContext } from 'react';

const Context = createContext();

export const AppContext = ({ children }) => {
  <Context.Provider>{children}</Context.Provider>;
};

export const useAppContext = useContext(Context);
