import { Box, Typography, Button } from "@mui/material";
import img1 from "../Assets/campaign.jpg"; // Your image path
import { useNavigate } from "react-router-dom";

const PRMarketingSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#090909",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "0rem 0rem", md: "0rem 6rem" },
        pb: { xs: "3rem", md: "3rem" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1900px",
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "self-start", xs: "center" },
          mt: "3rem",
        }}
      >
        {/* Image Background */}
        <Box
          sx={{
            width: { md: "80%", xs: "90%" },
            height: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={img1}
            alt="Meeting"
            style={{
              width: "100%",
              boxShadow: "3px 3px 15px rgba(255, 255, 255, 0.1)",
            }}
          />
        </Box>

        {/* Text Content Box */}
        <Box
          sx={{
            backgroundColor: "#000",
            color: "white",
            padding: "2.5rem",
            borderRadius: "8px",
            boxShadow: "5px 5px 15px rgba(255, 255, 255, 0.1)",
            width: { xs: "70%", md: "60%" },
            maxWidth: "500px",
            marginTop: { xs: "1rem", md: "4rem" }, // Moves up on larger screens
            marginLeft: { md: "-12rem" }, // Moves left to overlay image
            textAlign: { xs: "left", md: "left" },
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Integrated PR & Marketing Agency
          </Typography>
          <Box
            sx={{
              width: "50px",
              height: "3px",
              backgroundColor: "#007bff",
              marginTop: "8px",
              marginBottom: "16px",
            }}
          />
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", lineHeight: "1.6" }}
          >
            Welcome to Firmus Vision, your partner in strategic communication
            excellence. We specialize in crafting compelling narratives,
            building media relationships, and delivering measurable results.
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "1rem", fontSize: "1rem", lineHeight: "1.6" }}
          >
            Our team of industry experts customizes PR solutions that align
            seamlessly with your unique goals. With global reach and local
            expertise, we work round-the-clock for your success.
          </Typography>
          <Button
            variant="text"
            sx={{
              color: "#007bff",
              marginTop: "1rem",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "1rem",
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
