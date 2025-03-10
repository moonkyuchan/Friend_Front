import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    lightPrimary: true;
    lightError: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2196F3",
      light: "#64B5F6",
      dark: "#1976D2",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F50057",
      light: "#FF4081",
      dark: "#C51162",
      contrastText: "#fff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          padding: "8px 16px",
        },
        containedPrimary: {
          backgroundColor: "#64B5F6",
          "&:hover": {
            backgroundColor: "#42A5F5",
          },
        },
        containedError: {
          backgroundColor: "#EF5350",
          "&:hover": {
            backgroundColor: "#E53935",
          },
        },
        outlinedPrimary: {
          borderColor: "#64B5F6",
          color: "#64B5F6",
          "&:hover": {
            borderColor: "#42A5F5",
            backgroundColor: "rgba(100, 181, 246, 0.04)",
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "lightPrimary" },
          style: {
            backgroundColor: "#90CAF9",
            "&:hover": {
              backgroundColor: "#64B5F6",
            },
          },
        },
        {
          props: { variant: "contained", color: "lightError" },
          style: {
            backgroundColor: "#E57373",
            "&:hover": {
              backgroundColor: "#EF5350",
            },
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});
