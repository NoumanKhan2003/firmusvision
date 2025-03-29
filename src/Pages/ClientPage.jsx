import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ClientsData from "../Assets/ClientsData.js";
import clientpic from "../Assets/clientpage.jpg";
import MoreIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LessIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ContactSection from "../Components/ContactSection.jsx";

const ClientsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ backgroundColor: theme.palette.background.paper }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: isMobile ? "200px" : "300px",
          backgroundImage: `url(${clientpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
          },
          mb: 6,
        }}
      >
        <Typography
          variant={isMobile ? "h3" : "h2"}
          sx={{
            color: "orange",
            fontWeight: 700,
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            px: 2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          OUR CLIENTS
        </Typography>
      </Box>

      {/* Client Logos Grid */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <LessIcon sx={{ fontSize: "3rem" }} />
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mb: 6,
              fontWeight: 600,
              color: "orange",
            }}
          >
            Trusted by Industry Leaders
          </Typography>
          <MoreIcon sx={{ fontSize: "3rem" }} />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "repeat(2, 1fr)"
              : isTablet
              ? "repeat(3, 1fr)"
              : "repeat(4, 1fr)",
            gap: 4,
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {ClientsData.map((client) => (
            <Box
              key={client.name}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                p: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              <Box
                component="img"
                src={client.logo}
                alt={client.name}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "80px",
                  objectFit: "contain",
                  filter:
                    theme.palette.mode === "dark" ? "brightness(0.9)" : "none",
                  mb: 1,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  mt: 1,
                  fontWeight: 500,
                  color: theme.palette.text.secondary,
                }}
              >
                {client.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
      <ContactSection />
    </Box>
  );
};

export default ClientsPage;
