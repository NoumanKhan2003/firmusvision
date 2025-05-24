import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";
import { LinkedIn } from "@mui/icons-material";
import CounterSection from "../Components/ViewsSection";
import founderImg from "../Assets/founder.webp";
import exp2 from "../Assets/expertise2.webp";
import result from "../Assets/resultdriven.webp";
import result2 from "../Assets/resultdriven2.webp";
import regional from "../Assets/regionalmastery.webp";
import AboutUsVideo from "../Assets/AboutUs.mp4";

const quotes = [
  {
    title: "Result Driven",
    text: "At Firmus Vision, we believe in actions over words. We don’t just make promises—we consistently exceed them by delivering measurable, impactful results. Our commitment to strategic execution, deep media expertise, and a results-driven approach ensures that every campaign we undertake creates meaningful impact and lasting value for our clients. With a relentless focus on performance and precision, we turn visions into reality and promises into tangible success.",
    image: result,
  },
  {
    title: "Expertise & Experience",
    text: "With 15+ years of excellence in regional PR, we bring a wealth of knowledge and a proven track record of success to the table. From national publications to regional newsrooms, we know how to navigate the complexities of local and mainstream media, ensuring that your brand’s story gets the visibility and credibility it deserves.",
    image: exp2,
  },
  {
    title: "Regional Mastery",
    text: "We understand the operational realities, ground realities, modus operandi and modus vivendi of media in non-metro or Tier II and Tier III towns and act as per the requirements of corporates and PR agencies. We interact with regional media, advise them with our sphere of interests and help our clients get the desired results.",
    image: regional,
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
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          px: 3,
          py: 0,
          overflow: "hidden",
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={AboutUsVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Foreground Content */}
        <Container maxWidth="md" sx={{ zIndex: 1 }}>
          <Typography
            variant={isMobile ? "h3" : "h2"}
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              lineHeight: 1.2,
              textTransform: "uppercase",
              textAlign:"center"
            }}
          >
            Connecting <span style={{ color: "red" }}>Brands</span> to Bharat
          </Typography>

          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              mb: 8,
              fontWeight: 900,
              lineHeight: 1.6,
              maxWidth: "100px",
              mx: "auto",
              color: "white",
            }}
          ></Typography>
        </Container>
      </Box>

      {/* Industries Section */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.88)), url(${result2})`,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: "bold",
              mb: 4,
              textAlign: "center",
              color: "white",
            }}
          >
            We've Worked With <span style={{ color: "red" }}>150+ Brands</span>{" "}
            Across Industries
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              // bgcolor: "red",

              justifyContent: "center",
            }}
          >
            {[
              "E-commerce",
              "Consumer Technology",
              "Education",
              "Startups",
              "Fintech",
              "Legal-tech",
              "HR",
              "Healthcare",
              "Real Estate",
              "Fashion",
            ].map((industry) => (
              <Paper
                key={industry}
                sx={{
                  p: 2,
                  textAlign: "center",
                  minWidth: "120px",
                  flex: "1 0 auto",
                  bgcolor: "red",
                  color: "white",
                }}
              >
                <Typography>{industry}</Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Testimonial Slider Section */}
      <Box
        sx={{
          minHeight: "50vh",
          position: "relative",
          backgroundColor: "white",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "2rem 1rem", md: "4rem 0" },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0%",
            left: "-0%",
            width: "60%",
            height: "100%",
            borderTopRightRadius: "50%",
            borderBottomRightRadius: "50%",
            backgroundColor: "white",
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 4,
              alignItems: "center",
            }}
          >
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
                  color="red"
                  fontFamily="noto-serif"
                >
                  {quotes[index].title}
                </Typography>
                <Typography variant={isMobile ? "body1" : "h6"} color="black">
                  {quotes[index].text}
                </Typography>
              </motion.div>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 4,
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: "black",
                    color: "red",
                    "&:hover": { backgroundColor: "black" },
                    boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
                  }}
                  onClick={prevSlide}
                >
                  <ChevronLeft />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "black",
                    color: "red",
                    "&:hover": { backgroundColor: "black" },
                    boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
                  }}
                  onClick={nextSlide}
                >
                  <ChevronRight />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: "rgb(0, 0, 0)" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                <span style={{ color: "red" }}> MEET THE</span> FOUNDER
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }} color="#acacac">
                Sunil Singh is the visionary founder of Firmus Vision, a leading
                public relations and brand strategy firm committed to reshaping
                how brands engage with India’s diverse and dynamic regional
                markets. With over 10 years of experience in strategic
                communication, media relations, and storytelling, Sunil has
                carved a niche by championing Bharat-centric campaigns that
                resonate beyond urban centers. His deep-rooted understanding of
                India’s linguistic, cultural, and geographic diversity has
                allowed him to build a powerful network that spans 250+ cities
                and 29 states. Sunil believes that successful communication must
                be authentic, hyper-local, and emotionally intelligent — values
                that are at the core of every campaign crafted by Firmus Vision.
                Under his leadership, the firm has executed high-impact regional
                PR strategies, managed complex crises, launched innovative brand
                campaigns, and built influential media relationships. Known for
                his practical approach, result-oriented mindset, and
                integrity-driven leadership, Sunil continues to mentor a team of
                young professionals, encouraging creativity and precision. His
                mission remains clear — to give every brand a meaningful voice
                in the heart of India. With a bold vision and a deep passion for
                storytelling, Sunil Singh is not just leading Firmus Vision,
                he’s shaping the future of public relations in India.
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",

                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                component="img"
                src={founderImg}
                alt="Sunil singh"
                sx={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "white",fontFamily: "noto-serif" }}
                >
                  Sunil Singh
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "grey", mb: 1 }}>
                  Founder and CEO
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  href="https://www.linkedin.com/in/sunil-singh-a1a93414/"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<LinkedIn />}
                  sx={{
                    textTransform: "none",
                    color: "#0077b5",
                    borderColor: "#0077b5",
                    "&:hover": {
                      backgroundColor: "rgba(0, 119, 181, 0.08)",
                      borderColor: "#0077b5",
                    },
                  }}
                >
                  Connect on LinkedIn
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <CounterSection />
    </Box>
  );
};

export default AboutPage;
