import React from "react";
import { Box, Typography } from "@mui/material";
import heroImage from "../Assets/img1.jpg";
import { motion } from "framer-motion";

const LandingSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(107, 107, 107, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: { md: "40%", xs: "30%" },
          right: "5%",
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
          width: { xs: "80%", sm: "60%", md: "30%" },
          zIndex: 3,
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -130 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "2.5rem",
            cursor: "text",
          }}
        >
          Crisis & Issue Management
        </Typography>

        <Box
          sx={{
            backgroundColor: "orange",
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, color: "white" }}
          >
            &
          </Typography>
        </Box>

        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "2.5rem",
            mt: 0,
            cursor: "text",
          }}
        >
          PR and Media Activities
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingSection;
