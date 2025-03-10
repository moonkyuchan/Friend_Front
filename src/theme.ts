import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196F3", // 기본 파란색
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

export default theme;
