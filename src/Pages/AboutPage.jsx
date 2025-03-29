import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Container,
  Typography,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import styled from "styled-components";
import ViewsSection from "../Components/ViewsSection.jsx";
import ContactSection from "../Components/ContactSection.jsx";
const quotes = [
  {
    title: "We are Credible",
    text: "At the core of Media Mantra Group's credibility is a very strong leadership team with over 100 plus years of experience in communications consulting. With a deep understanding of the media landscape, communication trends, and consumer behavior, the firm exudes professionalism in every facet of its operations, ensuring that clients receive top-notch strategic counsel and execution.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "We Value Integrity",
    text: "Our team operates with the highest level of integrity, ensuring that our clients' best interests are always at the forefront. Transparency, trust, and ethics guide every decision we make.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Our Commitment is Unmatched",
    text: "We are committed to delivering excellence and measurable results. Our strategic approach is built on deep industry knowledge and a passion for success.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
];

const AboutPage = () => {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);

  const nextSlide = () =>
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <section>
        <Box
          id="about"
          sx={{
            py: 8,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              {/* Image Section */}
              <Box
                sx={{
                  flex: 1,
                  minWidth: isMobile ? "100%" : "300px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src="src\Assets\prImage.jpg" // Replace with your image path
                  alt="Firmus Vision Team"
                  sx={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: 2,
                  }}
                />
              </Box>

              {/* Content Section */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant={isMobile ? "h4" : "h3"}
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    textAlign: { xs: "center", md: "unset" },
                    color: "orange",
                  }}
                >
                  ABOUT US
                </Typography>

                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: theme.palette.text.primary,
                  }}
                >
                  Welcome to Firmus Vision: Crafting Stories, Building Legacies
                </Typography>

                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.05)"
                        : "rgba(0,0,0,0.03)",
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Typography sx={{ lineHeight: 1.8 }}>
                      At Firmus Vision, we fuse creativity with unwavering
                      dedication to deliver unparalleled excellence.
                      Specializing in crafting impactful stories, we navigate
                      the dynamic media landscape with a deep understanding of
                      its challenges.
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography sx={{ lineHeight: 1.8 }}>
                      With an established network of over 300 publications in
                      India and over 200 abroad, our strategic approach helps
                      brands build outstanding media relationships grounded in
                      trust and authenticity.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ lineHeight: 1.8 }}>
                      We provide comprehensive services including social media
                      management, PR, event management, and much more. At
                      Publieze, we ensure your stories are not just told, but
                      resonate profoundly and leave a lasting impression on your
                      target audience.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </section>
      <section>
        <Box
          sx={{
            minHeight: "50vh",
            position: "relative",
            backgroundColor: "#E87E1C",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: "2rem 1rem", md: "4rem 0" },
            overflow: "hidden",
          }}
        >
          {/* Semi-Circle Background */}
          <Box
            sx={{
              position: "absolute",
              top: "0%",
              left: "-0%",
              width: "60%",
              height: "100%",
              borderTopRightRadius: "50%",
              borderBottomRightRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.2)",
              zIndex: 0,
            }}
          />

          <Container maxWidth="lg">
            <Stack
              direction={isMobile ? "column" : "row"}
              spacing={4}
              alignItems="center"
            >
              {/* Image on Left */}
              <Box
                sx={{
                  width: isMobile ? "100%" : "40%",
                  height: isMobile ? "300px" : "400px",
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  zIndex: 1,
                }}
              >
                <motion.img
                  key={`image-${index}`}
                  src={quotes[index].image}
                  alt={quotes[index].title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </Box>

              {/* Quote Text on Right */}
              <Box
                sx={{
                  width: isMobile ? "100%" : "55%",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <motion.div
                  key={`text-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    fontWeight="bold"
                    mb={2}
                  >
                    {quotes[index].title}
                  </Typography>
                  <Typography variant={isMobile ? "body1" : "h6"}>
                    {quotes[index].text}
                  </Typography>
                </motion.div>

                {/* Navigation Buttons */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mt: 4,
                  }}
                >
                  <IconButton
                    sx={{
                      backgroundColor: "white",
                      color: "#E87E1C",
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.8)" },
                      boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
                    }}
                    onClick={prevSlide}
                  >
                    <ChevronLeft />
                  </IconButton>
                  <IconButton
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.3)",
                      color: "white",
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.5)" },
                      boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
                    }}
                    onClick={nextSlide}
                  >
                    <ChevronRight />
                  </IconButton>
                </Box>
              </Box>
            </Stack>
          </Container>
        </Box>
      </section>
      <ViewsSection />
      <ContactSection />
    </Box>
  );
};

export default AboutPage;
