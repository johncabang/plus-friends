//  "unstable_createMuiStrictModeTheme as createMuiTheme" instead of "createMuiTheme" is a temporary fix to the "findDOMNode is deprecated in StrictMode" error/issue

import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#50C4A7",
    },
    secondary: {
      main: "#F44336",
    },
  },
});

export default theme;
