import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Link,
  Divider,
  useTheme,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        py: 2,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 8 }}
          justifyContent="space-between"
        >
          {/* Brand Section */}
          <Box sx={{ maxWidth: 350 }}>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                fontSize="3rem"
                color="orange"
              >
                Firmus
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                fontSize="3rem"
                color="black"
              >
                Vision
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Our dedication to crafting strategic communication plans,
              fostering positive media relationships, and delivering measurable
              outcomes.
            </Typography>
            <Stack direction="row" spacing={2}>
              {[
                { Icon: Facebook, name: "facebook" },
                { Icon: Twitter, name: "twitter" },
                { Icon: LinkedIn, name: "linkedin" },
                { Icon: Instagram, name: "instagram" },
              ].map(({ Icon, name }, index) => (
                <Link
                  key={index}
                  href="#"
                  color="inherit"
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: name === "instagram" ? "#E1306C" : "primary.main",
                      transform: "scale(1.2)",
                    },
                    transition: "all 0.3s ease",
                    display: "inline-flex",
                  }}
                >
                  <Icon />
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Links and Contact Section */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 4, sm: 8 }}
          >
            {/* Quick Links */}
            <Box>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ fontWeight: 600,fontSize:20 }}
              >
                Quick Links
              </Typography>
              <Stack component="nav" spacing={1}>
                {[
                  "About us",
                  "Services",
                  "Clients",
                  "Our Network",
                  "Contact Us",
                ].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      textDecoration: "none",
                      fontSize:15,
                      "&:hover": {
                        color: "primary.main",
                        textDecoration: "none",
                      },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Stack>
            </Box>

            {/* Contact Info */}
            <Box>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ fontWeight: 600,fontSize:20 }}
              >
                Contact Us
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Plot No-D 107, Vyapar Marg, Sector-2 Noida, UP-201301
                </Typography>
                <Link
                  href="mailto:info@firmus vision.com"
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: "primary.main",
                      textDecoration: "none",
                    },
                  }}
                >
                  info@firmusvision.com
                </Link>
                <Link
                  href="tel:+91999999999"
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: "primary.main",
                      textDecoration: "none",
                    },
                  }}
                >
                  +91 9999999999
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Stack>

        <Divider sx={{ my: 4 }} />

        <Stack
          direction={{ xs: "column-reverse", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            © {new Date().getFullYear()} firmus vision. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Designed and Developed by{" "}
            <Link
              href="#"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Nouman Khan
            </Link>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
