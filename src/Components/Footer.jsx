import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import React from "react";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";


const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#282828",
        py: "2rem",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        px: 2,
      }}
    >
      <Box sx={{ display: "flex", margin: "auto" }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          fontSize="2rem"
          color="orange"
        >
          Firmus
        </Typography>
        <Typography
          variant="h5"
          fontWeight="bold"
          fontSize="2rem"
          color="black"
        >
          Vision
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          py:{xs:1,md:0}
        }}
      >
        <Typography variant="body1" color="white" sx={{ textAlign: "center" }}>
          Copyright © 2025, Firmus Vision, All Rights Reserved
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          margin: "auto",
        }}
      >
        <Tooltip title="Email" arrow>
          <IconButton
            sx={{
              backgroundColor: "#fff",
              color: "#1DA1F2",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "#1DA1F2",
                color: "#fff",
              },
            }}
          >
            <Email />
          </IconButton>
        </Tooltip>
        <Tooltip title="Instagram" arrow>
          <IconButton
            sx={{
              backgroundColor: "#fff",
              color: "#E4405F",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "#E4405F",
                color: "#fff",
              },
            }}
          >
            <Instagram />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn" arrow>
          <IconButton
            sx={{
              backgroundColor: "#fff",
              color: "#0077B5",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "#0077B5",
                color: "#fff",
              },
            }}
          >
            <LinkedIn />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Footer;
