import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import { Email, Phone, LocationOn, ImageOutlined } from "@mui/icons-material";
import {
  handleError,
  handleSuccess,
  handleWarning,
} from "../Components/handleUtils.js";
import LoaderComponent from "./Loader.jsx";
import img from "../Assets/bg4.webp";
import c1 from "../Assets/c1.webp";
import c2 from "../Assets/c2.webp";
import c3 from "../Assets/c3.webp";
import c4 from "../Assets/c4.webp";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [queries, setqueries] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setqueries((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddQuery = async (e) => {
    e.preventDefault();
    if (
      !queries.name ||
      !queries.lastName ||
      !queries.email ||
      !queries.phone ||
      !queries.message
    ) {
      handleWarning(" All fields are required.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/queries/queriesPost`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: queries.name,
            lastName: queries.lastName,
            email: queries.email,
            phone: queries.phone,
            company: queries.company,
            website: queries.website,
            message: queries.message,
          }),
        }
      );
      if (response.ok) {
        handleSuccess("Message Sent Successfully");
        setqueries({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          message: "",
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(" Failed to send message. Please try again.");
      }
    } catch (error) {
      handleError("Network Error. Please try again. ");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            color: "#fff",
            p: 4,
          }}
        >
          {/* Left Section - Contact Info */}
          <Box sx={{ maxWidth: 400 }}>
            <Typography
              variant="h6"
              sx={{
                color: "red",
                mb: 1,
                fontSize: { xs: "2.5rem", md: "3rem" },
                display: "flex",
                alignItems: "center",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              <Divider
                sx={{
                  width: 70,
                  height: 2,
                  borderColor: "red",
                  mr: 1,
                  display: { md: "block", xs: "none" },
                }}
              />
              CONTACT US
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color="black"
              sx={{ mb: 4, fontSize: 35 }}
            >
              Let’s Get in Touch
            </Typography>

            {/* Email */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Email sx={{ color: "red", mr: 2 }} />
              <Box>
                <Typography fontWeight="bold" color="black">
                  Email Address
                </Typography>
                <Typography color="black">info@firmusvision.com</Typography>
              </Box>
            </Box>

            {/* Phone */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Phone sx={{ color: "red", mr: 2 }} />
              <Box>
                <Typography fontWeight="bold" color="black">
                  Call Us
                </Typography>
                <Typography color="black">+91 79885 45077</Typography>
              </Box>
            </Box>

            {/* Address */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocationOn sx={{ color: "red", mr: 2 }} />
              <Box>
                <Typography fontWeight="bold" color="black">
                  Address
                </Typography>
                <Typography color="black">
                  Ghaziabad, Uttar Pradesh 201012
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
              borderRadius: 2,
              // backgroundImage: `url(${c1})`,
              backgroundSize: "cover",
            }}
          >
            <Box sx={{ backgroundColor: "rgb(0, 0, 0)", p: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  textAlign: "center",

                  color: "white",
                  fontSize: 30,
                  border: "2px solid red",
                }}
              >
                Send Message
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  name="name"
                  value={queries.name}
                  fullWidth
                  variant="outlined"
                  label="Name*"
                  slotProps={{
                    inputLabel: { style: { color: "#fff" } },
                  }}
                  sx={{
                    input: { color: "#fff" },
                    fieldset: { borderColor: "#444" },
                  }}
                  onChange={handleChange}
                />
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  name="email"
                  value={queries.email}
                  type="email"
                  fullWidth
                  variant="outlined"
                  label="Email Address*"
                  slotProps={{
                    inputLabel: { style: { color: "#fff" } },
                  }}
                  sx={{
                    mt: 2,
                    input: { color: "white" },
                    fieldset: { borderColor: "#444" },
                  }}
                  onChange={handleChange}
                />
                <TextField
                  name="company"
                  value={queries.company}
                  type="company"
                  fullWidth
                  variant="outlined"
                  label="Company"
                  slotProps={{
                    inputLabel: { style: { color: "#fff" } },
                  }}
                  sx={{
                    mt: 2,
                    input: { color: "white" },
                    fieldset: { borderColor: "#444" },
                  }}
                  onChange={handleChange}
                />
              </Box>
              <TextField
                name="phone"
                value={queries.phone}
                type="number"
                fullWidth
                variant="outlined"
                label="Phone No*"
                slotProps={{
                  inputLabel: { style: { color: "#fff" } },
                }}
                sx={{
                  mt: 2,
                  input: { color: "#fff" },
                  fieldset: { borderColor: "#444" },
                }}
                onChange={handleChange}
              />
              <TextField
                name="website"
                value={queries.website}
                type="text"
                fullWidth
                variant="outlined"
                label="Website"
                slotProps={{
                  inputLabel: { style: { color: "#fff" } },
                }}
                sx={{
                  mt: 2,
                  input: { color: "#fff" },
                  fieldset: { borderColor: "#444" },
                }}
                onChange={handleChange}
              />
              <TextField
                name="message"
                value={queries.message}
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
                onChange={handleChange}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "red",
                  "&:hover": { backgroundColor: "rgb(160, 43, 43)" },
                }}
                onClick={handleAddQuery}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ContactUs;
