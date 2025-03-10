import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "@mui/material";
import MobileLayout from "./MobileLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Inventory from "./pages/inventory/Inventory";

const MobileApp = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MobileLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </MobileLayout>
      </Router>
    </ThemeProvider>
  );
};

export default MobileApp;
