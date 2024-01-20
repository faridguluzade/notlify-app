import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: "Manrope",
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: 48,
      fontWeight: 700,
    },
    h2: {
      fontSize: 40,
      fontWeight: 700,
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
    },
    h5: {
      fontSize: 20,
      fontWeight: 700,
    },
    h6: {
      fontSize: 18,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 14,
    },
  },
  palette: {
    // palette values for light mode
    primary: {
      main: "#fff",
      light: "#fff",
      dark: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "#687588",
      disabled: "#A0AEC0",
    },
    success: {
      main: "#0CAF60",
      light: "#3cbf7f",
      dark: "#087a43",
      contrastText: "#fff",
    },
    info: {
      main: "#2F78EE",
    },
    error: {
      main: "#E03137",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            fontSize: "14px",
          },
          "& .MuiInputLabel-root": {
            color: "#A0AEC0",
          },

          background: "#fff",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
