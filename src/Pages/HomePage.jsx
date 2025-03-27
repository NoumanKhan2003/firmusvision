import React, { useRef } from "react";
import heroImage from "../Assets/img1.jpg";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import MoreIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { motion, useInView } from "framer-motion";
import whoWeAreImg from "../Assets/img2.jpg";
const HomePage = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const ref = useRef(null);
  const marginValue = isSmallScreen ? "-50px" : "-100px";
  const isInView = useInView(ref, { margin: marginValue, once: false });
  return (
    <Box className="main" sx={{ minHeight: "100vh" }}>
      <section>
        <Box
          sx={{
            minHeight: "100vh",
            backgroundImage: `linear-gradient(rgba(107, 107, 107, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              zIndex: 1,
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: { md: "40%", xs: "30%" },
              right: "5%",
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              width: { xs: "80%", sm: "60%", md: "30%" },
              zIndex: 3,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -130 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "2.5rem",
                cursor: "text",
              }}
            >
              Crisis & Issue Management
            </Typography>

            <Box
              sx={{
                backgroundColor: "orange",
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, color: "white" }}
              >
                &
              </Typography>
            </Box>

            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "2.5rem",
                mt: 0,
                cursor: "text",
              }}
            >
              PR and Media Activities
            </Typography>
          </Box>
        </Box>
      </section>
      <section>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <Box
            sx={{
              p: 3.7,
              textAlign: "center",
              backgroundColor: "white",
              width: { xs: "100%", md: "20%" },

              "&:hover": {
                backgroundColor: "#c1c1c1",
                cursor: "pointer",
              },
            }}
          >
            <Typography variant="h4" color="black">
              Our Group
            </Typography>
            <Typography variant="body1" color="black">
              2nd fastest growing public relations group in Asia with offices in
              Gurugram, Mumbai, and Bangalore.
            </Typography>
            <Button
              fontSize="1.2rem"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 1,
                m: "auto",
              }}
              color="inherit"
            >
              Read More <MoreIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
          <Box
            sx={{
              p: 3.7,
              textAlign: "center",
              backgroundColor: "#0762a6",
              width: { xs: "100%", sm: "100%", md: "20%" },

              "&:hover": {
                backgroundColor: "#054a80",
                color: "#ffcc00",
                cursor: "pointer",
              },
            }}
          >
            <Typography variant="h4" color="black">
              Clients
            </Typography>
            <Typography variant="body1" color="black">
              2nd fastest growing public relations group in Asia with offices in
              Gurugram, Mumbai, and Bangalore.
            </Typography>
            <Button
              fontSize="1.2rem"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 1,
                m: "auto",
              }}
              color="inherit"
            >
              Read More <MoreIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
          <Box
            sx={{
              p: 3.7,
              textAlign: "center",
              backgroundColor: "#d19410",
              width: { xs: "100%", md: "20%" },

              "&:hover": {
                backgroundColor: "#906710",
                color: "#ffcc00",
                cursor: "pointer",
              },
            }}
          >
            <Typography variant="h4" color="black">
              Services
            </Typography>
            <Typography variant="body1" color="black">
              2nd fastest growing public relations group in Asia with offices in
              Gurugram, Mumbai, and Bangalore.
            </Typography>
            <Button
              fontSize="1.2rem"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 1,
                m: "auto",
              }}
              color="inherit"
            >
              Read More <MoreIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
          <Box
            sx={{
              p: 3.7,
              textAlign: "center",
              backgroundColor: "#2bba09",
              width: { xs: "100%", md: "20%" },
              "&:hover": {
                backgroundColor: "#229208",
                color: "#ffcc00",
                cursor: "pointer",
              },
            }}
          >
            <Typography variant="h4" color="black">
              Our Network
            </Typography>
            <Typography variant="body1" color="black">
              2nd fastest growing public relations group in Asia with offices in
              Gurugram, Mumbai, and Bangalore.
            </Typography>
            <Button
              fontSize="1.2rem"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 1,
                m: "auto",
              }}
              color="inherit"
            >
              Read More <MoreIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Box>
      </section>
      <section>
        <Box
          className="Who we are Main Div"
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${whoWeAreImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Box
            ref={ref}
            className="name div"
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              height: "fit-content",
              width: { md: "fit-content", xs: "100%" },
              ml: { md: "7rem", xs: "0" },
              mt: { md: "5rem", xs: "1rem" },
              textAlign: { md: "unset", xs: "center" },
            }}
            component={motion.div}
            initial={
              isSmallScreen ? { opacity: 0, y: 100 } : { opacity: 0, x: -70 }
            }
            animate={
              isInView
                ? { opacity: 1, y: 0, x: 0 }
                : isSmallScreen
                ? { opacity: 0, y: 100 }
                : { opacity: 0, x: -70 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { md: "4.5rem", xs: "3rem" },
                color: "white",
                fontWeight: "bold",
              }}
            >
              Who
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { md: "4.5rem", xs: "3rem" },
                color: "white",
                fontWeight: "bold",
                pl: { md: 7 },
              }}
            >
              We Are
            </Typography>
          </Box>
          <Box
          ref={ref}
            className="Intro div"
            sx={{
              width: { md: "40%", xs: "100%" },
              mt: { md: "7rem", xs: "0" },
              mr: { md: "3rem", xs: "0" },
              textAlign: { md: "unset", xs: "center" },
              px: { xs: "1.5rem" },
            }}
            component={motion.div}
            initial={
              isSmallScreen ? { opacity: 0, y: 100 } : { opacity: 0, x: 70 }
            }
            animate={
              isInView
                ? { opacity: 1, y: 0, x: 0 }
                : isSmallScreen
                ? { opacity: 0, y: 100 }
                : { opacity: 0, x: 70 }
            }
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <Typography variant="body1" color="white">
              Firmus Vision is one of the fastest growing PR and Communications,
              Event Management and Advertising Agency in the industry that
              provides one-stop solution for all type of media communication
              services. We provide focused services for public and media
              relations, corporate and crisis communications, image and
              brandmanagement and issue management and content creation. Our
              greatest strength lies in our robust media relations and
              penetration, pro-active approach towards problems and content and
              message development. We help you tell your stories in the media
              positively and effectively in order to build and enhance your
              brand and image.
            </Typography>
            <Button variant="text" sx={{ color: "orange", fontWeight: "bold" }}>
              Read More <MoreIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Box>
      </section>
    </Box>
  );
};

export default HomePage;
