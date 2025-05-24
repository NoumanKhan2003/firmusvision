import { Box, Typography, Button } from "@mui/material";
import img1 from "../Assets/img2.webp";
// import whoweare2 from "../Assets/whoweare2.webp";
import { useNavigate } from "react-router-dom";

const PRMarketingSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "rgb(0,0,0)",
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "2rem 1rem", md: "0rem 6rem" },
        py: { xs: "3rem", md: "3rem" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1900px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "stretch" },
          justifyContent: "center",
          gap: { xs: "2rem", md: "4rem" },
        }}
      >
        {/* Image Section - Responsive */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: "300px", md: "25rem" },
            minHeight: { xs: "300px", md: "300px" },
            margin:"auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            order: { xs: 1, md: 1 },
            overflow: "hidden",
            borderRadius: { xs: "8px", md: "1rem" },
          }}
        >
          <img
            src={img1}
            alt="Meeting"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              boxShadow: "3px 3px 15px rgba(255, 255, 255, 0.1)",
            }}
          />
        </Box>

        {/* Text Content Section - Responsive */}
        <Box
          sx={{
            backgroundColor: "#000",
            color: "white",
            padding: { xs: "1.5rem", md: "2rem" },
            borderRadius: "8px",
            boxShadow: "2px 2px 15px rgba(255, 255, 255, 0.36)",
            width: { xs: "80%", md: "40%" },
            maxWidth: { xs: "100%", md: "500px" },
            textAlign: { xs: "center", md: "left" },
            order: { xs: 2, md: 2 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: { xs: "auto", md: "auto" },
            minHeight: { xs: "auto", md: "400px" },
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: "1.5rem", md: "3rem"} }}>
            WHO <span style={{color:"red"}}>WE </span> ARE
          </Typography>
          <Box
            sx={{
              width: "70px",
              height: "3px",
              backgroundColor: "red",
              margin: { xs: "8px auto", md: "2px 0 16px 0" },
            }}
          />
          <Typography
            variant="body1"
            sx={{ 
              fontSize: { xs: "0.9rem", md: "1rem" }, 
              lineHeight: "1.6",
              textAlign: { xs: "center", md: "left" }
            }}
          >
           At Firmus Vision, we don’t just tell stories—we ensure they resonate effectively 
           and positively across every region through meaningful conversations and strategic communication.
          </Typography>
          <Typography
            variant="body1"
            sx={{ 
              marginTop: "1rem", 
              fontSize: { xs: "0.9rem", md: "1rem" }, 
              lineHeight: "1.6",
              textAlign: { xs: "center", md: "left" }
            }}
          >
            As a powerhouse in Public Relations, we have an unparalleled reach across 200+ cities in
             29 states of India, making us pioneers in regional PR. We bridge the gap between brands
              and diverse local markets, ensuring your message goes beyond metro cities and connects
               authentically with audiences across urban and rural landscapes.
          </Typography>
          <Button
            variant="text"
            sx={{
              color: "red",
              marginTop: "1rem",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", md: "1rem" },
              alignSelf: { xs: "center", md: "flex-start" },
              px: 0,
            }}
            onClick={() => navigate("/about")}
          >
            Read More ➝
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PRMarketingSection;