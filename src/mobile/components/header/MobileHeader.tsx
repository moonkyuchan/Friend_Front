import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
// import { Notifications } from "@mui/icons-material";

const MobileHeader = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ padding: "0 30px" }}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Friend
        </Typography>
        <IconButton color="inherit">
          {/* <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge> */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MobileHeader;
