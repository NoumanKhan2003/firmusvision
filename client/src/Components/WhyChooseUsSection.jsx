import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import WhyChooseUsData from "../Assets/WhyChooseUsData.js";
import { useNavigate } from "react-router-dom";
import prImage from "../Assets/img5.webp";

const WhyChooseUs = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        padding: { md: "2.5rem 3rem", xs: "0rem 2rem" },
        background: "black",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: { md: "3rem", xs: "2rem" },
          color: "white",
          mb: { md: 2, xs: 2 },
          ml: 0,
        }}
      >
        Why <span style={{ color: "red" }}>Choose Us</span>
      </Typography>

      {/* Content Wrapper */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1, maxWidth: "500px", textAlign: "left" }}>
          <Box
            sx={{
              borderLeft: "3px solid red",
              paddingLeft: "1rem",
              ml: 4,
              color: "white",
            }}
          >
            <Typography variant="body1" color="#dfdfdf">
              We understand the operational and ground realities of media across
              both metro and non-metro India, especially in Tier II and Tier III
              towns. With deep insights into the modus operandi of regional
              outlets, we align our approach to meet the unique needs of
              corporates and PR agencies. By engaging directly with local media
              and guiding them within our sphere of expertise, we ensure our
              clients achieve impactful and desired outcomes.
            </Typography>
          </Box>
          <Button
            variant="text"
            sx={{ mt: 3, color: "red", fontWeight: "bold" }}
            onClick={() => navigate("/about")}
          >
            See More →
          </Button>
          <Box sx={{ mt: 2, ml: { md: 8, xs: 0 } }}>
            <img
              src={prImage}
              alt="Team Illustration"
              style={{
                width: "100%",
                maxWidth: "300px",
                mixBlendMode: "hard-light",
              }}
            />
          </Box>
        </Box>

        {/* Right Section */}
        <Box
          sx={{ flex: 1, maxWidth: "500px", mt: isSmallScreen ? "3rem" : "0" }}
        >
          {WhyChooseUsData.map((stat, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
                color: "white",
              }}
            >
              {/* Round Percentage Circle
              <Box
                component={motion.div}
                whileHover={{ scale: 1.1 }}
                sx={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "3px solid red",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  mr: 3,
                  flexShrink: 0, 
                }}
              >
                {stat.percentage}
              </Box> */}

              {/* Text Right */}
              <Box>
                <Typography variant="h6" fontWeight="bold" color="red">
                  {stat.title}
                </Typography>
                <Typography variant="body2" color="#c8c8c8">
                  {stat.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
