import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export function useApi() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [navWasOpened, setNavWasOpened] = useState(false);

  function toggleNav() {
    navOpen ? setNavOpen(false) : setNavOpen(true);
  }

  function toggleWasOpen() {
    navWasOpened ? setNavWasOpened(false) : setNavWasOpened(true);
  }
  return (
    <AppContext.Provider
      value={{ navOpen, navWasOpened, toggleNav, toggleWasOpen }}
    >
      {children}
    </AppContext.Provider>
  );
};
