import React from "react";
import { Box, Typography, Button } from "@mui/material";
import heroImage from "../Assets/img1.webp";
import frontimg2 from "../Assets/frontimg2.webp";
import frontimg1 from "../Assets/frontimg1.webp";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const LandingSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.88)), url(${frontimg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "unset" },
        px: { xs: 2, sm: 4, md: 10 },
        textAlign: "center",
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        sx={{
          maxWidth: { xs: "95%", md: "70%" },
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "2.8rem", md: "3.5rem" },
            whiteSpace: "normal",
            wordWrap: "break-word",
            lineHeight: { xs: 1.3, sm: 1.5 },
            fontFamily: "noto-serif",
          }}
        >
          India’s Leading <span style={{ color: "rgb(185, 12, 12)" }}>PR Agency</span>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontFamily:"noto-serif",
            fontSize: { xs: "1.5rem", md: "1.9rem" },
            lineHeight: 1.6,
            width: "100%",
            textAlign: "center",
            px: { xs: 0, md: 0 },
          }}
        >
         We reach where India lives
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mt: 4,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              color: "white",
              fontWeight: "bold",
              px: 3,
              py: 1.2,
              borderRadius: "0 2rem 0 2rem",
              textTransform: "none",
              fontSize: { xs: "0.85rem", sm: "1rem" },
              width: { xs: "100%", sm: "auto" },
              "&:hover": { backgroundColor: "darkred" },
            }}
            onClick={()=>{
              navigate("/services")
            }}
          >
            OUR SERVICES &gt;
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2c3e50",
              color: "white",
              fontWeight: "bold",
              px: 3,
              py: 1.2,
              borderRadius: "0 2rem 0 2rem",
              textTransform: "none",
              fontSize: { xs: "0.85rem", sm: "1rem" },
              width: { xs: "100%", sm: "auto" },
              "&:hover": { backgroundColor: "#1c2833" },
            }}
            onClick={()=>{
              navigate("/contact")
            }}
          >
            CONTACT US &gt;
          </Button>
        </Box>
      </Box>
    </Box>
  );
};  

export default LandingSection;
