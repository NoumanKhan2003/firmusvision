import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

const quotes = [
  {
    title: "We are Credible",
    text: "At the core of Media Mantra Group's credibility is a very strong leadership team with over 100 plus years of experience in communications consulting. With a deep understanding of the media landscape, communication trends, and consumer behavior, the firm exudes professionalism in every facet of its operations, ensuring that clients receive top-notch strategic counsel and execution.",
  },
  {
    title: "We Value Integrity",
    text: "Our team operates with the highest level of integrity, ensuring that our clients' best interests are always at the forefront. Transparency, trust, and ethics guide every decision we make.",
  },
  {
    title: "Our Commitment is Unmatched",
    text: "We are committed to delivering excellence and measurable results. Our strategic approach is built on deep industry knowledge and a passion for success.",
  },
];

const AboutPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);

  const nextSlide = () =>
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);

  return (
    <Box className="main div" sx={{ minHeight: "100vh" }}>
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
            padding: { xs: "3rem 1rem", md: "5rem 0rem" },
            pt: { xs: "3rem 1rem", md: "2rem 0rem" } ,
            textAlign: "left",
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

          {/* Quote Text */}
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              maxWidth: "70%",
              position: "relative",
              zIndex: 1,
              paddingLeft: "0rem",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              mb={2}
              sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" } }}
            >
              {quotes[index].title}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "0.9rem", md: "1.2rem" } }}
            >
              {quotes[index].text}
            </Typography>
          </motion.div>

          {/* Navigation Buttons */}
          <IconButton
            sx={{
              position: "absolute",
              bottom: "10%",
              right: { md: "8.5%", xs: "17%" },
              backgroundColor: "white",
              color: "#E87E1C",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.8)" },
              boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
              zIndex: 2,
            }}
            onClick={prevSlide}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              bottom: "10%",
              right: "5%",
              backgroundColor: "rgba(255,255,255,0.3)",
              color: "white",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.5)" },
              boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
              zIndex: 2,
            }}
            onClick={nextSlide}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </section>
      <section>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            padding: { xs: "3rem 1.5rem", md: "4rem 6rem" },
            backgroundColor: "#1E5373",
            color: "white",
            textAlign: "left",
            overflow: "hidden",
          }}
        >
          {/* Semi-Circle Background */}
          <Box
            sx={{
              position: "absolute",
              top: "0",
              right: "-1%",
              width: "70%",
              height: "100%",
              borderTopLeftRadius: "50%",
              borderBottomLeftRadius: "50%",
              backgroundColor: "#4682B4",
              zIndex: 0,
            }}
          />

          {/* Content Section */}
          <Box
            sx={{
              maxWidth: "60%",
              zIndex: 1,
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}
            >
              Who <br /> Are We?
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, marginTop: "1rem" }}
            >
              Since its inception in 2012, Media Mantra Group has experienced
              impressive expansion through client and journalist referrals. As a
              result, it has become one of India’s leading communication and PR
              agencies. The firm currently flaunts an outstanding and satisfied
              client list, driven and competent team members, and a stellar
              corporate trajectory.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, marginTop: "1rem" }}
            >
              Through creativity and persistent work, Media Mantra is fiercely
              focused on making a real-time measurable change in client
              businesses. We offer to design and successfully implement a
              strategy to position your company as a knowledge and commercial
              leader, giving you an advantage over competitors in the market.
            </Typography>
          </Box>
        </Box>
      </section>
    </Box>
  );
};

export default AboutPage;
