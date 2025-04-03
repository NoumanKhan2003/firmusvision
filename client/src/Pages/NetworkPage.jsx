import React, { useState, useRef } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NetworkData from "../Assets/NetworkData.js";
import northimg from "../Assets/bg5.jpg";
import southimg from "../Assets/bg6.jpg";
import eastimg from "../Assets/bg7.jpg";
import westimg from "../Assets/bg8.jpg";

// Define region-based background images
const regionBackgrounds = {
  North: northimg,
  South: southimg,
  East: eastimg,
  West: westimg,
};

const NetworkCoverage = () => {
  const [expanded, setExpanded] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [foundMessage, setFoundMessage] = useState("");
  const sectionRefs = useRef({});

  const handleToggle = (state) => {
    setExpanded(expanded === state ? null : state);
  };

  const handleSearch = () => {
    let found = false;
    let query = searchQuery.toLowerCase().trim();

    Object.entries(NetworkData).forEach(([region, states]) => {
      Object.entries(states).forEach(([state, cities]) => {
        const matchedCity = cities.find((city) => city.toLowerCase() === query);
        if (matchedCity) {
          setExpanded(state);
          setFoundMessage(`The city (${matchedCity}) is serviceable ✅`);
          found = true;

          // Scroll to the expanded section
          setTimeout(() => {
            sectionRefs.current[state]?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 300);
        }
      });
    });

    if (!found) {
      setFoundMessage("");
    }
    setNotFound(!found);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        padding: "30px",
        backgroundColor: "white",
        color: "black",
        minHeight: "100vh",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ marginTop: "8px",fontWeight:"bold",fontSize:"3rem" }}
      >
        Our Nationwide <span style={{color:"orange"}}>Network</span> 
      </Typography>

      {/* Search Bar */}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}
      >
        <TextField
          variant="outlined"
          placeholder="Search for a city..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown} // Pressing Enter triggers search
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            width: { xs: "90%", sm: "60%", md: "40%" },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Success or Not Found Message */}
      {foundMessage && (
        <Typography align="center" color="green" sx={{ marginBottom: "10px" }}>
          {foundMessage}
        </Typography>
      )}
      {notFound && (
        <Typography align="center" color="red" sx={{ marginBottom: "15px" }}>
          This City is Not Serviceable ❌
        </Typography>
      )}

      {/* Region Boxes */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, // Two per row on larger screens
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {Object.entries(NetworkData).map(([region, states]) => (
          <Box
            key={region}
            sx={{
              position: "relative",
              minHeight: "250px",
              padding: "30px",
              color: "#fff",
              overflow: "hidden",
              borderRadius: "10px",
              backgroundImage: `url(${regionBackgrounds[region]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Semi-transparent box for better text readability */}
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0)", // Only behind text, not affecting the image
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  color: "orange",
                }}
              >
                {region} Region
              </Typography>

              {Object.entries(states).map(([state, cities]) => (
                <Box
                  key={state}
                  sx={{ marginBottom: "10px" }}
                  ref={(el) => (sectionRefs.current[state] = el)}
                >
                  <Box
                    onClick={() => handleToggle(state)}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      padding: "12px",
                      backgroundColor: "rgba(79, 79, 79, 0.45)", // Slight transparency for dropdown
                      borderRadius: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    <Typography>{state}</Typography>
                    <ExpandMoreIcon
                      sx={{
                        transform:
                          expanded === state
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </Box>

                  {/* Expand City List */}
                  {expanded === state && (
                    <Box
                      component="ul"
                      sx={{
                        listStyle: "none",
                        padding: "10px",
                        backgroundColor: "rgba(63, 63, 63, 0.28)", // Transparent dark background
                        borderRadius: "4px",
                        marginTop: "5px",
                      }}
                    >
                      {cities.map((city) => (
                        <Typography
                          component="li"
                          key={city}
                          sx={{ padding: "5px 0" }}
                        >
                          {city}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NetworkCoverage;
