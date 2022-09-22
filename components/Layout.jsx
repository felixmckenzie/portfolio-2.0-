import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useModeContext } from '../utils/toggleMode';  


export default function Layout({children}) {
  const mode = useModeContext()
  const theme = createTheme({
    palette: {
        mode: mode,
    },
});

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
       <Navbar/>
      {children}
      <Footer/>
      </ThemeProvider>
  )
}
