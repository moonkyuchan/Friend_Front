import { useNavigate, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Inventory, Dashboard, Menu } from "@mui/icons-material";
import { useState } from "react";

const menuItems = [
  { text: "대시보드", icon: <Dashboard />, path: "/" },
  { text: "재고 관리", icon: <Inventory />, path: "/inventory" },
];

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="div">
          재고관리 시스템
        </Typography>
      </Box>
      <List>
        {menuItems.map((item, idx) => (
          <ListItemButton
            key={idx}
            onClick={() => {
              navigate(item.path);
              if (isMobile) setMobileOpen(false);
            }}
            selected={location.pathname === item.path}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, position: "absolute", top: 8, left: 8 }}
        >
          <Menu />
        </IconButton>
      )}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // 모바일 성능 향상을 위해
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;
