import { Box } from "@mui/material";
import MobileHeader from "./MobileHeader";
import MobileNavigation from "./MobileNavigation";

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <MobileHeader />
      <Box component="main" sx={{ flexGrow: 1, p: 2, mt: 7 }}>
        {children}
      </Box>
      <MobileNavigation />
    </Box>
  );
};

export default MobileLayout;
