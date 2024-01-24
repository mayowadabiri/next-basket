'use client';

import React from 'react';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const MuiTheme: React.FC<React.PropsWithChildren> = ({ children }) => {
  const muitheme = createTheme({
    typography: {
      fontFamily: ['Montserrat'].join(','), //Update fonts for MUI Components
    },
    spacing: 5,
    palette: {
      primary: {
        main:"#23A6F0"
      },
      text: {
        primary: '#252B42',
        secondary: '#737373',
      },
      success: {
        main: '#2DC071',
      },
    },
  });
  return <ThemeProvider theme={muitheme}>{children}</ThemeProvider>;
};

export default MuiTheme;
