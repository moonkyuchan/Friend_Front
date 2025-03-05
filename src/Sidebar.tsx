import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import {
  Inventory,
  ShoppingCart,
  Assessment,
  People,
  Settings,
  Dashboard,
} from "@mui/icons-material";

const drawerWidth = 240;

const menuItems = [
  { text: "대시보드", icon: <Dashboard />, path: "/" },
  { text: "재고 관리", icon: <Inventory />, path: "/inventory" },
  { text: "입/출고 관리", icon: <ShoppingCart />, path: "/transactions" },
  { text: "리포트", icon: <Assessment />, path: "/reports" },
  { text: "사용자 관리", icon: <People />, path: "/users" },
  { text: "설정", icon: <Settings />, path: "/settings" },
];

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="div">
          재고관리 시스템
        </Typography>
      </Box>
      <List>
        {menuItems.map((item, idx) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
