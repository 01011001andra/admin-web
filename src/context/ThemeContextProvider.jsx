import React, { createContext, useState } from "react";

export const ThemeProvider = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeProvider.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeProvider.Provider>
  );
};

export default ThemeContextProvider;
