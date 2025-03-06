import { useTheme, useMediaQuery } from "@mui/material";
import MobileApp from "./layouts/mobile/MobileApp";

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return isMobile ? <MobileApp /> : null;
};

export default App;
