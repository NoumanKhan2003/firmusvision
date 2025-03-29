import React from "react";
import officeImg from "../Assets/office.jpg";
import { Box, Button, Divider, Typography } from "@mui/material";
import MoreIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const ContactSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${officeImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        color: "white",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 128, 0, 0.7)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 10,
            fontSize: "3.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Contact Us
          <Divider
            sx={{
              borderBottomWidth: "5px",
              borderColor: "black",
              width: "40%",
              mb: "4rem",
            }}
          />
        </Typography>

        <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
          303, Star Infinity Tower, Plot No.-14, Sector-14, Kaushambi,
          Ghaziabad-Uttar Pradesh
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, fontSize: "2rem" }}>
          Pincode-201010
        </Typography>
        <Typography variant="h6" sx={{ mt: 3, fontSize: "1.5rem" }}>
          <strong>Contact : </strong> info@firmusvision.com
        </Typography>
        <Typography
          variant="h4"
          sx={{ mt: 3, color: "black", fontWeight: "bold" }}
        >
          If you want to talk to us, we want to hear from you
        </Typography>
        <Button
          variant="outlined"
          size="large"
          sx={{
            fontSize: "1.2rem",
            color: "black",
            fontWeight: "bold",
            bgcolor: "white",
            border: "2px solid black",
            transition: "all 0.3s ease-in-out",
            display: "flex",
            alignItems: "center",
            margin: "auto",
            mt: "1rem",

            "&:hover": {
              bgcolor: "black",
              color: "white",
              transform: "scale(1.05)",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            },

            "&:active": {
              transform: "scale(0.98)",
            },
          }}
        >
          Contact us
          <MoreIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default ContactSection;
