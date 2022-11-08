import {
  createContext,
  useCallback, useContext,
  useState,
} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../utils/theme";

export const UiContext = createContext({
  mode: 'light',
  colorMode: () => 'light',
});

export const UiProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const colorMode = useCallback(
    () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
    [setMode]
  );

  return (
    <UiContext.Provider
      value={{
        colorMode,
        mode,
      }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </UiContext.Provider>
  );
};

export const useUi = () => useContext(UiContext)
