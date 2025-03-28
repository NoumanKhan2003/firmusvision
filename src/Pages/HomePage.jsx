import React, { useRef } from "react";
import heroImage from "../Assets/img1.jpg";
import { Box, Button, Divider, Typography, useMediaQuery } from "@mui/material";
import MoreIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { motion, useInView } from "framer-motion";
import whoWeAreImg from "../Assets/img2.jpg";
import clients from "../Assets/ClientsData";
import indiaMap from "../Assets/network.png";
import officeImg from "../Assets/office.jpg";
import clientHeroImg from "../Assets/clientHeroImg.jpg";

const HomePage = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const marginValue = isSmallScreen ? "-50px" : "-100px";
  const isInView1 = useInView(ref1, { margin: marginValue, once: false });
  const isInView2 = useInView(ref2, { margin: marginValue, once: false });

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
            ref={ref1}
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
              isInView1
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
            ref={ref1}
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
              isInView1
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
            <Button
              variant="text"
              sx={{ color: "orange", fontWeight: "bold", mb: 3 }}
            >
              Read More <MoreIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Box>
      </section>
      <section>
        <Box
          sx={{
            // bgcolor: "#e5e5e5",

            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { md: "row", xs: "column" },
            padding: { md: "0 3rem", xs: "1rem" },
            pb: "2rem",
          }}
        >
          {/* Left Side - Title & Hero Image */}
          <Box
            ref={ref2}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { md: "50%", xs: "100%" },
              textAlign: { md: "left", xs: "center" },
              alignItems: { xs: "center", md: "flex-start" },
            }}
            component={motion.div}
            initial={
              isSmallScreen ? { opacity: 0, y: -100 } : { opacity: 0, x: -70 }
            }
            animate={isInView2 ? { opacity: 1, y: 0, x: 0 } : undefined}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Heading */}
            <Typography
              variant="h3"
              sx={{
                fontSize: { md: "4.5rem", xs: "3rem" },
                color: "black",
                fontWeight: "bold",
              }}
            >
              Our Clients
              <Divider
                sx={{
                  borderBottomWidth: "3px",
                  borderColor: "black",
                  width: "80%",
                  textAlign: "center",
                  margin: "auto",
                  mb: "2rem",
                }}
              />
            </Typography>

            {/* Hero Image */}
            <Box
              sx={{
                width: { md: "100%", xs: "80%" },
                maxWidth: "400px",
                mt: 2,
                ml: 0,
              }}
            >
              <img
                src={clientHeroImg}
                alt="Our Clients"
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
            </Box>
          </Box>

          {/* Right Side - Clients Logo Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                md: "repeat(3, 1fr)",
                xs: "repeat(1, 1fr)",
              },
              gap: "1rem",
              justifyContent: "flex-end",
              width: { md: "50%", xs: "100%" },
            }}
            component={isSmallScreen ? "div" : motion.div}
            initial={!isSmallScreen ? { opacity: 0, x: 70 } : undefined}
            animate={
              !isSmallScreen && isInView2 ? { opacity: 1, x: 0 } : undefined
            }
            transition={
              !isSmallScreen ? { duration: 1, ease: "easeInOut" } : undefined
            }
          >
            {clients.slice(0, 6).map((client, index) => (
              <Box
                key={index}
                sx={{
                  maxHeight: { md: "17rem", xs: "unset" },
                  maxWidth: { md: "17rem", xs: "80%" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                }}
              >
                <img
                  src={client.logo}
                  alt={`Client ${index + 1}`}
                  height="100%"
                  width="100%"
                  style={{ mixBlendMode: "darken" }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </section>

      <section>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "#bbfdff",
            pb: "3rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "4rem",
              fontWeight: "bold",
              pt: "1rem",
              textAlign: "center",
            }}
          >
            OUR NETWORK
          </Typography>
          <Divider
            sx={{
              borderBottomWidth: "3px",
              borderColor: "black",
              width: "40%",
              mb: "4rem",
            }}
          />
          <Box
            sx={{
              width: { xs: "100%", md: "80%" },
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={indiaMap}
              alt="India Map"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                display: "block",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </section>
      <section>
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
            // justifyContent: "center",
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
      </section>
    </Box>
  );
};

export default HomePage;
