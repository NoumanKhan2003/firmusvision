import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";

const ContactUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#000",
        color: "#fff",
        p: 4,
      }}
    >
      {/* Left Section - Contact Info */}
      <Box sx={{ maxWidth: 400 }}>
        <Typography
          variant="h6"
          sx={{
            color: "orange",
            mb: 1,
            fontSize: "3rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Divider
            sx={{ width: 70, height: 2, borderColor: "orange", mr: 1 }}
          />{" "}
          Contact Us
        </Typography>
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 4 }}>
          Let’s Get in Touch
        </Typography>

        {/* Email */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Email sx={{ color: "orange", mr: 2 }} />
          <Box>
            <Typography fontWeight="bold">Email Address</Typography>
            <Typography>info@firmusvision.com</Typography>
          </Box>
        </Box>

        {/* Phone */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Phone sx={{ color: "orange", mr: 2 }} />
          <Box>
            <Typography fontWeight="bold">Call Us</Typography>
            <Typography>+91 9999999999</Typography>
          </Box>
        </Box>

        {/* Address */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <LocationOn sx={{ color: "orange", mr: 2 }} />
          <Box>
            <Typography fontWeight="bold">Address</Typography>
            <Typography>
              Plot No-D 107, Vyapar Marg, Sector-2, Noida, UP-201301
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right Section - Contact Form */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "50%" },
          backgroundColor: "#111",
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
          Send Message
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            label="First Name"
            slotProps={{
              inputLabel: { style: { color: "#fff" } },
            }}
            sx={{ input: { color: "#fff" }, fieldset: { borderColor: "#444" } }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Last Name"
            slotProps={{
              inputLabel: { style: { color: "#fff" } },
            }}
            sx={{ input: { color: "#fff" }, fieldset: { borderColor: "#444" } }}
          />
        </Box>

        <TextField
          fullWidth
          variant="outlined"
          label="Email Address"
          slotProps={{
            inputLabel: { style: { color: "#fff" } },
          }}
          sx={{
            mt: 2,
            input: { color: "white" },
            fieldset: { borderColor: "#444" },
          }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Phone No"
          slotProps={{
            inputLabel: { style: { color: "#fff" } },
          }}
          sx={{
            mt: 2,
            input: { color: "#fff" },
            fieldset: { borderColor: "#444" },
          }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Message"
          multiline
          rows={4}
          slotProps={{
            inputLabel: { style: { color: "#fff" } },
            input: { style: { color: "#fff" } },
          }}
          sx={{
            mt: 2,
            textarea: { color: "#fff" },
            fieldset: { borderColor: "#444" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#444",
              },
              "&:hover fieldset": {
                borderColor: "#666",
              },
            },
          }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "orange",
            "&:hover": { backgroundColor: "#b30000" },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
