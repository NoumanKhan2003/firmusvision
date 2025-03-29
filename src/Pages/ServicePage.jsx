import React from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  Divider,
} from "@mui/material";
import clientpic from "../Assets/clientpage.jpg";
import servicesData from "../Assets/ServicesData";

const ServicesPage = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box sx={{ backgroundColor: "#f8f9fa", pb: 10 }}>
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
          OUR SERVICES
        </Typography>
      </Box>

      <Box maxWidth="lg">
        {servicesData.map((service, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: isMobile
                ? "column"
                : index % 2 === 0
                ? "row"
                : "row-reverse",
              alignItems: "center",
              gap: 6,
              mb: 10,
              "&:last-child": { mb: 0 },
              borderBottom: { xs: "2px solid black", md: "4px solid black" },
              px: 4,
              pb: 4,
            }}
          >
            {/* Image Box */}
            <Box
              sx={{
                flex: 1,
                minWidth: isMobile ? "100%" : "45%",
                height: isMobile ? "300px" : "400px",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              />
            </Box>
            {/* Content Box */}
            <Box
              sx={{
                flex: 1,
                minWidth: isMobile ? "100%" : "45%",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: "orange",
                  mb: 0,
                  fontSize: isMobile ? "2rem" : "2.5rem",
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  fontSize: "1.1rem",
                  color: "#333",
                }}
              >
                {service.longDescription}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesPage;
