import { createTheme } from '@mui/material/styles';

// custom theme
const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Nunito'].join(','),
  },
  palette: {
    primary: {
      main: '#2D9CDB',
    },
    secondary: {
      main: '#56CCF2',
    },
    background: {
      default: '#BBE1FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1B262C',
      secondary: '#0F4C75',
    },
  },
});

export default theme;
