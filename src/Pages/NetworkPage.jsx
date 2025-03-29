import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import regions from "../Assets/RegionsData";
import ContactSection from "../Components/ContactSection";

const NetworkCoverage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const statsRef = useRef(null);

  const [countValues, setCountValues] = useState({
    cities: 0,
    partners: 0,
    years: 0,
  });

  const animationDuration = 3000;
  const targetValues = {
    cities: 50,
    partners: 1000,
    support: "24/7",
    years: 10,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounts();
          } else {
            setCountValues({
              cities: 0,
              partners: 0,
              years: 0,
            });
          }
        });
      },
      { threshold: 0.5 }
    );
  
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
  
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateCounts = () => {
    const startTime = Date.now();
    let animationFrameId;
  
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
  
      setCountValues({
        cities: Math.floor(progress * targetValues.cities),
        partners: Math.floor(progress * targetValues.partners),
        years: Math.floor(progress * targetValues.years),
      });
  
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
  
    animationFrameId = requestAnimationFrame(animate);
  
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  };
  return (
    <Box>

    <Container maxWidth="lg" sx={{ py: 6}}>
      {/* Main Heading */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: "bold",
          mb: 6,
          color: "orange",
          fontSize: isMobile ? "3rem" : "2.8rem",
        }}
      >
        Our Network Across India
      </Typography>

      {/* Map and Regions Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          gap: 4,
          mb: 6,
        }}
      >
        {/* India Map Placeholder */}
        <Box
          sx={{
            flex: 1,
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f0f4f8",
            borderRadius: "12px",
            boxShadow: theme.shadows[3],
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="src\Assets\indiamap.png" 
            alt="India Map Showing Coverage"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Regions List */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            width: "50%",
            flexWrap: "wrap",
          }}
        >
          {Object.entries(regions).map(([region, cities]) => (
            <Paper
              key={region}
              elevation={3}
              sx={{
                p: 5,
                borderRadius: "8px",
                borderLeft: `4px solid orange`,
                minWidth:{md:"10rem",xs:"15rem"},
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "orange",
                }}
              >
                {region} Region
              </Typography>
              <Box
                component="ul"
                sx={{
                  pl: 0,
                  listStyleType: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {cities.map((city) => (
                  <Box
                    component="li"
                    key={city}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "orange",
                        borderRadius: "50%",
                        mr: 1.5,
                      }}
                    />
                    <Typography variant="body1">{city}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>

      {/* Stats Section */}
      <Box
  id="stats-section"
  ref={statsRef}  // Add this ref
  sx={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: 3,
    mt: 4,
  }}
>
        <Paper
          sx={{
            flex: 1,
            p: 3,
            textAlign: "center",
            borderRadius: "8px",
            minWidth: isMobile ? "70%" : "auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "orange",
              mb: 1,
            }}
          >
            {countValues.cities}+
          </Typography>
          <Typography variant="subtitle1">Cities Covered</Typography>
        </Paper>

        <Paper
          sx={{
            flex: 1,
            p: 3,
            textAlign: "center",
            borderRadius: "8px",
            minWidth: isMobile ? "70%" : "auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "orange",
              mb: 1,
            }}
          >
            {countValues.partners}+
          </Typography>
          <Typography variant="subtitle1">Media Partners</Typography>
        </Paper>

        <Paper
          sx={{
            flex: 1,
            p: 3,
            textAlign: "center",
            borderRadius: "8px",
            minWidth: isMobile ? "70%" : "auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "orange",
              mb: 1,
            }}
          >
            24/7
          </Typography>
          <Typography variant="subtitle1">Support</Typography>
        </Paper>

        <Paper
          sx={{
            flex: 1,
            p: 3,
            textAlign: "center",
            borderRadius: "8px",
            minWidth: isMobile ? "70%" : "auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "orange",
              mb: 1,
            }}
          >
            {countValues.years}+
          </Typography>
          <Typography variant="subtitle1">Years Experience</Typography>
        </Paper>
      </Box>
    </Container>
    <ContactSection/>
    </Box>
  );
};

export default NetworkCoverage;
