
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#102b2b',
      },
    },

    typography: {
        fontFamily: "glacial indifference"
    }

  });

  theme = responsiveFontSizes(theme);

  export default theme;