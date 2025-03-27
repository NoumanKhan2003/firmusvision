import React from "react";
import heroImage from "../Assets/img1.jpg";
import { Box, Button, Typography } from "@mui/material";
import MoreIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <Box className="main" sx={{ minHeight: "100vh" }}>
      <section>
        <Box
          sx={{
            minHeight: "100vh",
            backgroundImage: `url(${heroImage})`,
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
    </Box>
  );
};

export default HomePage;
