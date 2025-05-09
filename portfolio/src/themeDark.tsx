import { createTheme } from '@mui/material/styles';

export const themeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#fff",
      dark: "#000"
    },
    secondary: {
      main: "#0C8593"
    }
  }
});