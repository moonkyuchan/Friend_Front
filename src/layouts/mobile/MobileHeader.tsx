import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import { Notifications } from "@mui/icons-material";

const MobileHeader = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          재고관리 시스템
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MobileHeader;
