import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Navbar = () => {
  const [state, setState] = React.useState({
    right: false,
  });

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
    { text: "Home", icon: <HomeIcon /> },
    { text: "About Us", icon: <InfoIcon /> },
    { text: "Our Clients", icon: <PeopleIcon /> },
    { text: "Our Network", icon: <PublicIcon /> },
    { text: "Services", icon: <HomeRepairServiceIcon /> },
    { text: "Contact", icon: <PermContactCalendarIcon /> },
  ];

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ display: "flex", justifyContent: "center", pt: "1rem" }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          fontSize="2rem"
          color="orange"
        >
          Firmus
        </Typography>
        <Typography
          variant="h5"
          fontWeight="bold"
          fontSize="2rem"
          color="black"
        >
          Vision
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "grey", width: "100%" }} />

      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
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
        px: {md:"2rem",xs:"1rem"},
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#282828",
        color:"white"
      }}
    >
      {/* Logo */}
      <Box sx={{ display: "flex" }}>
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

      {/* Laptop width */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <NavList>
          {[
            "Home",
            "About Us",
            "Clients",
            "Our Network",
            "Services",
            "Contact",
          ].map((item) => (
            <NavItem key={item} sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
              {item}
            </NavItem>
          ))}
        </NavList>
      </Box>

      <Box sx={{ display: { xs: "block", md: "none" }, }}>
        <Button onClick={toggleDrawer(true)} sx={{pr:0}}>
          <MenuIcon color="warning" sx={{ fontSize: "2rem" }}  />
        </Button>
      </Box>

      <Drawer anchor="right" open={state.right} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </Box>
  );
};

const NavList = styled("ul")({
  display: "flex",
  gap: 25,
  listStyle: "none",
  margin: 0,
  padding: 0,
});

const NavItem = styled("li")({
  position: "relative",
  cursor: "pointer",
  paddingBottom: "5px",
  transition: "transform 0.3s ease-in-out",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "0%",
    height: "2px",
    backgroundColor: "orange",
    transition: "width 0.4s ease-in-out",
  },
  "&:hover": {
    transform: "scale(1.2)", // Scale the text on hover
  },
  "&:hover::after": {
    width: "100%",
  },
});

export default Navbar;
