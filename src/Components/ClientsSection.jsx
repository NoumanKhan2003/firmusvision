import React, { useRef } from "react";
import clients from "../Assets/ClientsData";
import clientHeroImg from "../Assets/clientHeroImg.jpg";
import { Box, Button, Divider, Typography, useMediaQuery } from "@mui/material";
import { motion, useInView } from "framer-motion";

const ClientsSection = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const ref = useRef(null);
  const marginValue = isSmallScreen ? "-50px" : "-100px";
  const isInView = useInView(ref, { margin: marginValue, once: false });
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { md: "row", xs: "column" },
        padding: { md: "0 3rem", xs: "1rem" },
        pb: "2rem",
      }}
    >
      {/* Left Side - Title & Hero Image */}
      <Box
        ref={ref}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { md: "50%", xs: "100%" },
          textAlign: { md: "left", xs: "center" },
          alignItems: { xs: "center", md: "flex-start" },
        }}
        component={motion.div}
        initial={
          isSmallScreen ? { opacity: 0, y: -100 } : { opacity: 0, x: -70 }
        }
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : undefined}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            fontSize: { md: "4.5rem", xs: "3rem" },
            color: "black",
            fontWeight: "bold",
          }}
        >
          Our Clients
          <Divider
            sx={{
              borderBottomWidth: "3px",
              borderColor: "black",
              width: "80%",
              textAlign: "center",
              margin: "auto",
              mb: "2rem",
            }}
          />
        </Typography>

        {/* Hero Image */}
        <Box
          sx={{
            width: { md: "100%", xs: "80%" },
            maxWidth: "400px",
            mt: 2,
            ml: 0,
          }}
        >
          <img
            src={clientHeroImg}
            alt="Our Clients"
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          />
        </Box>
      </Box>

      {/* Right Side - Clients Logo Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            md: "repeat(3, 1fr)",
            xs: "repeat(1, 1fr)",
          },
          gap: "1rem",
          justifyContent: "flex-end",
          width: { md: "50%", xs: "100%" },
        }}
        component={isSmallScreen ? "div" : motion.div}
        initial={!isSmallScreen ? { opacity: 0, x: 70 } : undefined}
        animate={!isSmallScreen && isInView ? { opacity: 1, x: 0 } : undefined}
        transition={
          !isSmallScreen ? { duration: 1, ease: "easeInOut" } : undefined
        }
      >
        {clients.slice(0, 6).map((client, index) => (
          <Box
            key={index}
            sx={{
              maxHeight: { md: "17rem", xs: "unset" },
              maxWidth: { md: "17rem", xs: "80%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <img
              src={client.logo}
              alt={`Client ${index + 1}`}
              height="100%"
              width="100%"
              style={{ mixBlendMode: "darken" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ClientsSection;
