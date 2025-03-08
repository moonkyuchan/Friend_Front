import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Dashboard, Inventory } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const MobileNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        value={location.pathname}
        onChange={(_, newValue) => {
          navigate(newValue);
        }}
        showLabels
        sx={{ height: "70px" }}
      >
        <BottomNavigationAction
          label="대시보드"
          value="/"
          icon={<Dashboard />}
        />
        <BottomNavigationAction
          label="재고 관리"
          value="/inventory"
          icon={<Inventory />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default MobileNavigation;
