import React from "react";
import { Box, Button, Typography, Divider, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import servicesData from "../Assets/ServicesData.js";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: { md: "1rem", xs: "2rem" }, background: "black" }}>
      {/* Title */}
      <Box
        textAlign="center"
        mb={4}
        component={motion.div}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "orange" }}>
          Our Services
        </Typography>
        <Divider
          sx={{
            width: "80px",
            borderBottomWidth: "3px",
            borderColor: "orange",
            margin: "auto",
            mt: 0,
          }}
        />
      </Box>

      {/* Services Grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {servicesData.map((service, index) => (
          <Box
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              display: "flex",
              flexDirection: isSmallScreen ? "column" : "row",
              alignItems: "center",
              width: { md: "45%", xs: "100%" },
              bgcolor:"black",
              boxShadow: "0 4px 10px rgba(65, 65, 65, 0.7)",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <Box sx={{ flex: "1",ml:{md:2,xs:0} }}>
              <img
                src={service.image}
                alt={service.title}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </Box>
            <Box sx={{ flex: "1", padding: "1.5rem" }}>
              <Typography variant="h5" fontWeight="bold" color="white">
                {service.title}
              </Typography>
              <Typography variant="body2" color="white" mt={1}>
                {service.shortDescription}
              </Typography>
              <Button
                variant="text"
                sx={{ mt: 2, color: "orange", fontWeight: "bold" }}
                onClick={()=>navigate("/services")}
              >
                Read More →
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* View All Button */}
      <Box textAlign="center" mt={4}>
        <Button
          variant="outlined"
          sx={{
            borderColor: "orange",
            color: "orange",
            "&:hover": { background: "orange", color: "black" },
            width: { md: "15rem", xs: "80%" },
            mb: "2rem",
          }}
          onClick={()=>navigate("/services")}
        >
          View All Servies
        </Button>
      </Box>
    </Box>
  );
};

export default ServicesSection;
