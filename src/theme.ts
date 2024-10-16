
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
      primary: {
        main: '#232323',
      },
      secondary: {
        main: '#578018',
      },
    },

    typography: {
        fontFamily: "Roboto"
    }

  });

  theme = responsiveFontSizes(theme);

  export default theme;