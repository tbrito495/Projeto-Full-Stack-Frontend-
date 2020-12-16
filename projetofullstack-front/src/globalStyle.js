import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Bground_5 from './img/bground_5.jpg'

const theme = createMuiTheme({
  palette: {
    primary:{
        main:'#03a9f4',
    },
  
    secondary:{
        main:'#c5cae9'
    } 

  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage:
            {Bground_5}
        }
      }
    }
  }
});

function globalStyle(Component) {
  function globalStyle(props) {

    return (
      <MuiThemeProvider theme={theme}>

        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return globalStyle;
}

export default globalStyle;
