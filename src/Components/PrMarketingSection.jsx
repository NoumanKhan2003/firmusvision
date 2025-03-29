import { Box, Typography, Button } from "@mui/material";
import img1 from "../Assets/campaign.jpg";

const PRMarketingSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: "2rem",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Left - Image */}
        <Box
          component="img"
          src={img1} 
          alt="Meeting"
          sx={{
            width: { xs: "100%", md: "55%" },
            height: "auto",
            borderRadius: "8px",
            boxShadow: "3px 3px 15px rgba(255, 255, 255, 0.1)",
          }}
        />

        {/* Right - Content */}
        <Box
          sx={{
            backgroundColor: "#000",
            color: "white",
            padding: "2.5rem",
            borderRadius: "8px",
            boxShadow: "5px 5px 15px rgba(255, 255, 255, 0.1)",
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ fontSize: { xs: "1.8rem", md: "2rem" } }}
          >
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
            Welcome to Branding Area, your partner in strategic communication
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
          >
            Read More ➝
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PRMarketingSection;
