import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
