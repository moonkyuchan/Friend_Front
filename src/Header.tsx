import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Notifications, AccountCircle } from "@mui/icons-material";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="fixed"
      sx={{
        width: isMobile ? "100%" : `calc(100% - 240px)`,
        ml: isMobile ? 0 : "240px",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          재고관리 시스템
        </Typography>
        <Box>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
