import { useTheme, useMediaQuery } from "@mui/material";
import MobileApp from "./mobile/MobileApp";

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return isMobile ? <MobileApp /> : <div>작업중...</div>;
};

export default App;
