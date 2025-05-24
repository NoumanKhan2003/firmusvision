import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import ClientsData from "../Assets/ClientsData.js";
// import clientpic from "../Assets/img4.jpg";
// import client1 from "../Assets/clientele1.jpg";
import client2 from "../Assets/clientele2.webp";
import MoreIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LessIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const ClientsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Box
        sx={{
          height: isMobile ? "180px" : "300px",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${client2})`,
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
          mb: isMobile ? 3 : 6,
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h2"}
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: isMobile ? "2.4rem" : "4rem",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            px: 2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          <span style={{ color: "red" }}>CLIENTELE</span>
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ pb: 6, px: isMobile ? 1 : 4 }}>
        {/* Title Section */}
        <Box sx={{ textAlign: "center", mb: { md: 6, xs: 3 } }}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
              fontWeight: "bold",
              color: "black",
              fontFamily: "'Playfair Display', serif",
              mb: 0,
              fontSize: {md:"4rem",xs:"3rem"},
            }}
          >
            All Our <span style={{ color: "red" }}>Clients</span>
          </Typography>
          <Divider
            sx={{
              borderBottomWidth: "5px",
              borderColor: "red",
              width: "100px",
              margin: "0px auto 0 auto",
              textAlign: "center",
            }}
          />
        </Box>

        {/* Responsive Logo Grid */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { md: "2rem", xs: "2rem" },
            width: "100%",
          }}
        >
          {/* Group clients into rows of 4 (desktop) or 2 (mobile) */}
          {Array.from({
            length: Math.ceil(ClientsData.length / (isMobile ? 2 : 4)),
          }).map((_, rowIdx) => (
            <Box
              key={rowIdx}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: { md: "3rem", xs: "1.5rem" },
              }}
            >
              {ClientsData.slice(
                rowIdx * (isMobile ? 2 : 4),
                rowIdx * (isMobile ? 2 : 4) + (isMobile ? 2 : 4)
              ).map((client, idx) => (
                <Box
                  key={client.name + idx}
                  sx={{
                    height: { md: "120px", xs: "100px" },
                    width: { md: "200px", xs: "140px" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem",
                    borderRadius: "8px",
                    background: "transparent",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.06)",
                      boxShadow: "0px 8px 24px rgba(255,0,0,0.10)",
                    },
                  }}
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                      background: "transparent",
                    }}
                  />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ClientsPage;
