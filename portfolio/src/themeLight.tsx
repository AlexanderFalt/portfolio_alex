import { createTheme } from '@mui/material/styles';

export const themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#000",
      dark: "#111"
    },
    secondary: {
      main: "#0C8593"
    }
  }
});