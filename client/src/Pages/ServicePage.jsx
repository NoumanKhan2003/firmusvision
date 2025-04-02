import React, { useEffect } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Divider,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";

import clientpic from "../Assets/clientpage.jpg";
import servicesData from "../Assets/ServicesData";

const ServicesPage = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ backgroundColor: "#f8f9fa", pb: 10 }}>
      {/* What We Do Section */}
      <Box sx={{ py: 8, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 700,
                color: "black",
                mb: 1,
                fontSize: isMobile ? "2rem" : "3rem",
              }}
            >
              What Can
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                color: "orange",
                mb: 1,
                fontSize: isMobile ? "2rem" : "3rem",
              }}
            >
              We Do For You
            </Typography>
            <Divider
              sx={{
                width: "100px",
                height: "4px",
                backgroundColor: "orange",
                margin: "0 auto",
                mb: 2,
                mt: 0,
              }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: isMobile ? "1rem" : "1.1rem",
              color: "text.primary",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Column Inches is a full-service PR agency in Delhi, driven by women.
            With a deep understanding of media and marketing communications, we
            leverage our vast expertise in creating brand value for clients
            across sectors. Specializing in PR and Media Relations, Digital
            Media Promotion, Crisis Communication, Brand Promotion, Startup PR,
            Event PR, and Influencer Marketing, we help clients navigate the
            ever-changing media landscape.
          </Typography>
        </Container>
      </Box>
      <Box
        textAlign="center"
        mb={6}
        component={motion.div}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "black",
            fontSize: { md: "3.5rem", xs: "2.5rem" },
          }}
        >
          <span style={{ color: "orange" }}>Our</span> Services
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
      <Box
        sx={{
          padding: { md: "2rem 3rem", xs: "2rem 1rem" },
          minHeight: "100vh",
        }}
      >
        <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
          {servicesData.map((service, index) => (
            <Box
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              sx={{
                display: "flex",
                flexDirection: isMobile
                  ? "column"
                  : index % 2 === 0
                  ? "row"
                  : "row-reverse",
                alignItems: "center",
                gap: { md: 6, xs: 0 },
                mb: 10,
                "&:last-child": { mb: 0 },
                px: { md: 4, xs: 0 },
                pb: 1,
              }}
            >
              {/* Image Box */}
              <Box
                sx={{
                  flex: 1,
                  width: isMobile ? "100%" : "45%",
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
                    transition: "transform 0.5s ease",
                    borderBottomRightRadius: { md: "6rem", xs: "0" },
                    borderTopLeftRadius: { md: "6rem", xs: "0" },
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
                  width: isMobile ? "90%" : "45%",
                  textAlign: isMobile ? "center" : "left",
                  bgcolor: "black",
                  px: { md: 5, xs: 2 },
                  py: { md: 4, xs: 4 },
                  borderBottomRightRadius: { md: "4rem", xs: "0" },
                  borderTopLeftRadius: { md: "4rem", xs: "0" },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "orange",
                    mb: 2,
                    fontSize: { md: "2rem", xs: "1.75rem" },
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: { md: "1.1rem", xs: "1rem" },
                    color: "white",
                  }}
                >
                  {service.longDescription}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesPage;
