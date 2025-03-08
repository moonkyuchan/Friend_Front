import { Box } from "@mui/material";
import MobileHeader from "./components/header/MobileHeader";
import MobileNavigation from "./components/navigation/MobileNavigation";

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <MobileHeader />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          mt: 7,
          pb: "75px",
        }}
      >
        {children}
      </Box>
      <MobileNavigation />
    </Box>
  );
};

export default MobileLayout;
