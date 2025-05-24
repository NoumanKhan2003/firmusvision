import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Card, CardContent, Avatar, useMediaQuery, Button ,Divider} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import img1 from "../Assets/img1.webp";
import testimonials from '../Assets/TestimonialData.js'

export default function TestimonialSection() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [index, setIndex] = useState(0);
  const intervalRef = useRef();

  const visibleCount = isMobile ? 1 : 2;
  const maxIndex = testimonials.length - visibleCount;

  // Auto-swipe logic
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex(prev =>
        prev >= maxIndex ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, [maxIndex, isMobile]);

  // Manual navigation resets auto-swipe timer
  const handlePrev = () => {
    setIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    resetInterval();
  };
  const handleNext = () => {
    setIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    resetInterval();
  };
  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex(prev =>
        prev >= maxIndex ? 0 : prev + 1
      );
    }, 2000);
  };

  return (
    <Box
      sx={{
        background: "rgb(0,0,0)",
        py: { xs: 4, md: 8 },
        px: { xs: 1, md: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "white",
          
          fontFamily: "noto-serif",
        }}
      >
        In{" "}
        <Box component="span" sx={{ color: "red" }}>
          Their
        </Box>{" "}
        Words
      </Typography>
       <Divider
          sx={{
            width: "80px",
            borderBottomWidth: "5px",
            borderColor: "red",
            margin: "auto",
            mt: 0,
            mb:10,
          }}
        />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          justifyContent: "center",
          alignItems: "stretch",
          width: "100%",
          maxWidth: 1200,
          position: "relative",
          px: { xs: 0, md: 2 },
        }}
      >
        {/* Left Arrow */}
        <Button
          onClick={handlePrev}
          sx={{
            minWidth: 0,
            color: "#fff",
            position: "absolute",
            left: { md: 8, xs: 0 }, 
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            display: { xs: "none", md: "flex" },
            background: "#222",
            borderRadius: "50%",
            boxShadow: 2,
            width: 48,
            height: 48,
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s, color 0.2s",
            "&:hover": {
              color: "#e72640",
              background: "#fff",
              border: "1.5px solid #e72640",
            },
          }}
        >
          <ArrowBackIos fontSize="medium" />
        </Button>

        {/* Testimonials */}
        {testimonials.slice(index, index + visibleCount).map((t, idx) => (
          <Card
            key={t.name + idx}
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: { xs: "100%", md: 600 },
              mx: { xs: 0, md: 2 },
              background: "#fff",
              borderRadius: 3,
              boxShadow: 3,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "stretch" },
              p: { xs: 2, md: 3 },
              mb: 2,
              minHeight: 180,
            }}
          >
            {/* Left: Photo, Name, Designation */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 120,
                maxWidth: { xs: "100%", md: 180 },
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
                py: { xs: 1, md: 0 },
                borderRight: { md: "2px solid #eee" },
                borderBottom: { xs: "2px solid #eee", md: "none" },
              }}
            >
              <Avatar
                src={t.image || "https://ui-avatars.com/api/?name=" + encodeURIComponent(t.name)}
                alt={t.name}
                sx={{
                  width: 70,
                  height: 70,
                  mb: 1,
                  bgcolor: "#e72640",
                  fontWeight: "bold",
                  fontSize: 28,
                }}
              >
                {(!t.image && t.name) ? t.name[0] : ""}
              </Avatar>
              <Typography
                variant="h6"
                sx={{
                  color: "#e72640",
                  fontWeight: "bold",
                  fontSize: "1.05rem",
                  textAlign: "center",
                }}
              >
                {t.name}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#4B5563",
                  fontSize: "0.95rem",
                  textAlign: "center",
                }}
              >
                {t.designation}
              </Typography>
            </Box>
            {/* Right: Testimonial Text */}
            <CardContent sx={{ flex: 1, p: 0, display: "flex", alignItems: "center" }}>
              <Typography
                variant="body1"
                sx={{
                  fontStyle: "italic",
                  color: "#374151",
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  px: { xs: 0, md: 2 },
                }}
              >
                “{t.text}”
              </Typography>
            </CardContent>
          </Card>
        ))}

        {/* Right Arrow */}
        <Button
          onClick={handleNext}
          sx={{
            minWidth: 0,
            color: "#fff",
            position: "absolute",
            right: { md: 8, xs: 0 }, 
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            display: { xs: "none", md: "flex" },
            background: "#222",
            borderRadius: "50%",
            boxShadow: 2,
            width: 48,
            height: 48,
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s, color 0.2s",
            "&:hover": {
              color: "#e72640",
              background: "#fff",
              border: "1.5px solid #e72640",
            },
          }}
        >
          <ArrowForwardIos fontSize="medium" />
        </Button>
      </Box>
    </Box>
  );
}