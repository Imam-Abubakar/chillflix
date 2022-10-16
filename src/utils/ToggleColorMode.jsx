import React, { useState, createContext, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext();

const ToggleColorrMode = ({ children }) => {
   const [mode, setMode] = useState('light');

   const toggleColorMode = () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
   };

   const theme = useMemo(()=> createTheme({
      palette: {
         mode,
      },
      components: {
         MuiAppBar: {
           styleOverrides: {
             root: {
               background: '#028d92',
             },
           },
         },
         MuiButton: {
            styleOverrides: {
              root: {
                color: '#028d92',
              },
            },
          },

       },
   }),[mode]);

   return (
      <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
         <ThemeProvider theme={theme}>
            {children}
         </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default ToggleColorrMode