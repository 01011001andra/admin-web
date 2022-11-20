import { useContext } from "react";
import { ThemeProvider } from "../context/ThemeContextProvider";

const useTheme = () => {
  return useContext(ThemeProvider);
};

export default useTheme;
