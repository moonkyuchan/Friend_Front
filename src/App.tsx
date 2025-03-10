import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MobileApp from "./mobile/MobileApp";

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isMobile ? <MobileApp /> : <div>작업중...</div>}
    </ThemeProvider>
  );
};

export default App;
