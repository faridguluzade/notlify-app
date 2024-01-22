import {
  createTheme,
  ThemeOptions,
  responsiveFontSizes,
} from "@mui/material/styles";

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
      color: "#fff",
    },
    h2: {
      fontSize: 50,
      fontWeight: 700,
    },

    subtitle1: {
      fontSize: 14,
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            fontSize: "14px",
          },

          background: "#fff",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },
    },
  },
};

let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);

export default theme;
