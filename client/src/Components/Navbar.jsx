import * as React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  styled,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  People as PeopleIcon,
  Public as PublicIcon,
  HomeRepairService as ServicesIcon,
  PermContactCalendar as ContactIcon,
} from "@mui/icons-material";

const Navbar = () => {
  const [state, setState] = React.useState({ right: false });
  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ right: open });
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "About Us", icon: <InfoIcon />, path: "/about" },
    { text: "Clients", icon: <PeopleIcon />, path: "/clients" },
    { text: "Network", icon: <PublicIcon />, path: "/network" },
    { text: "Services", icon: <ServicesIcon />, path: "/services" },
    { text: "Contact", icon: <ContactIcon />, path: "/contact" },
  ];

  // Desktop Navigation List
  const DesktopNav = () => (
    <Box component="nav" sx={{ display: { xs: "none", md: "block" } }}>
      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          whiteSpace: "nowrap",
        }}
      >
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                color: "inherit",
                position: "relative",
                px: 2,
                py: 1,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                "&.Mui-selected": {
                  color: "orange",
                  backgroundColor: "transparent",
                  "&::after": {
                    transform: "scaleX(1)",
                  },
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: "16px",
                  bottom: "8px",
                  width: "calc(100% - 32px)",
                  height: "2px",
                  backgroundColor: "orange",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.3s ease",
                },
                "&:hover::after": {
                  transform: "scaleX(1)",
                },
              }}
            >
              <ListItemText
                primary={item.text}
                sx={{
                  fontWeight: "bold",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Mobile Drawer List
  const MobileDrawer = () => (
    <Box
      sx={{
        width: 280,
        backgroundColor: "black",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ display: "flex", justifyContent: "center", pt: 2, pb: 1 }}>
        <Typography variant="h4" fontWeight="bold" color="orange">
          Firmus
        </Typography>
        <Typography variant="h4" fontWeight="bold" color="white">
          Vision
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "white", mb: 1 }} />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "rgba(255, 165, 0, 0.1)",
                  borderLeft: "4px solid orange",
                  "& .MuiListItemIcon-root, & .MuiTypography-root": {
                    color: "orange",
                    fontWeight: "bold",
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "1.3rem", 
                    fontWeight:
                      location.pathname === item.path ? "bold" : "normal",
                    color: location.pathname === item.path ? "orange" : "white",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        px: { md: "1rem", xs: "1rem" },
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        py: 1,
      }}
    >
      {/* Logo with Link */}
      <Box
        component={RouterLink}
        to="/"
        sx={{
          display: "flex",
          textDecoration: "none",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          fontSize="2.5rem"
          color="orange"
        >
          Firmus
        </Typography>
        <Typography
          variant="h5"
          fontWeight="bold"
          fontSize="2.5rem"
          color="white"
        >
          Vision
        </Typography>
      </Box>

      <DesktopNav />

      {/* Mobile Menu Button */}
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          display: { xs: "block", md: "none" },
          p: 0,
          minWidth: "auto",
        }}
      >
        <MenuIcon color="warning" sx={{ fontSize: "2rem" }} />
      </Button>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        <MobileDrawer />
      </Drawer>
    </Box>
  );
};

export default Navbar;
