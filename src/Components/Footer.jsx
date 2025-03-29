import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Divider,
  useTheme,
  Link as MuiLink,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

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
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 ,fontSize:15}}>
              Our dedication to crafting strategic communication plans,
              fostering positive media relationships, and delivering measurable
              outcomes.
            </Typography>
            <Stack direction="row" spacing={2}>
              {[
                {
                  Icon: Facebook,
                  name: "facebook",
                  url: "https://facebook.com",
                },
                { Icon: Twitter, name: "twitter", url: "https://twitter.com" },
                {
                  Icon: LinkedIn,
                  name: "linkedin",
                  url: "https://linkedin.com",
                },
                {
                  Icon: Instagram,
                  name: "instagram",
                  url: "https://instagram.com",
                },
              ].map(({ Icon, name, url }) => (
                <MuiLink
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.secondary",
                    textDecoration: "none",
                    
                    "&:hover": {
                      color:
                        name === "instagram"
                          ? "#E1306C"
                          : theme.palette.primary.main,
                      transform: "scale(1.2)",
                    },
                    transition: "all 0.3s ease",
                    display: "inline-flex",
                  }}
                >
                  <Icon fontSize="large" />
                </MuiLink>
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
                sx={{ fontWeight: 600, fontSize: 30 }}
              >
                QuickLinks
              </Typography>
              <Stack component="nav" spacing={1}>
                {[
                  { text: "About us", path: "/about" },
                  { text: "Services", path: "/services" },
                  { text: "Clients", path: "/clients" },
                  { text: "Our Network", path: "/network" },
                  { text: "Contact Us", path: "/contact" },
                ].map((item) => (
                  <MuiLink
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      color: "text.secondary",
                      textDecoration: "none",
                      fontSize: 20,
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {item.text}
                  </MuiLink>
                ))}
              </Stack>
            </Box>

            {/* Contact Info */}
            <Box>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ fontWeight: 600, fontSize: 30 }}
              >
                Contact Us
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2" sx={{ color: "text.secondary",fontSize:20 }}>
                  Plot No-D 107, Vyapar Marg, Sector-2 Noida, UP-201301
                </Typography>
                <MuiLink
                  href="mailto:info@firmusvision.com"
                  sx={{
                    color: "text.secondary",
                    textDecoration: "none",
                    fontSize:20,
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  info@firmusvision.com
                </MuiLink>
                <MuiLink
                  href="tel:+91999999999"
                  sx={{
                    color: "text.secondary",
                    textDecoration: "none",
                    fontSize:20,
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  +91 9999999999
                </MuiLink>
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
            <MuiLink
              href="http://www.linkedin.com/in/nouman-khan-95923a256"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                fontWeight: "bold",
                "&:hover": {
                  textDecoration: "none",
                },
              }}
            >
              Nouman Khan
            </MuiLink>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
