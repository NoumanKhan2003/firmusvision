import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NetworkData from "../Assets/NetworkData.js";
import ContactSection from "../Components/ContactSection.jsx";
import { Box } from "@mui/material";

const NetworkCoverage = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (state) => {
    setExpanded(expanded === state ? null : state);
  };
  return (
    <Box>
      <div
        style={{
          padding: "30px",
          backgroundColor: "#121212",
          color: "#ffffff",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ textAlign: "center", marginTop: "8px", fontSize: "3rem" }}>
          Our Nationwide Network
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "0",
          }}
        >
          {Object.entries(NetworkData).map(([region, states]) => (
            <div
              key={region}
              style={{
                backgroundColor: "#1e1e1e",
                padding: "20px",
                borderRadius: "8px",
                width: "45%",
                minWidth: "270px",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  fontSize: "1.5rem",
                }}
              >
                {region} Region
              </h3>
              {Object.entries(states).map(([state, cities]) => (
                <div key={state} style={{ marginBottom: "10px" }}>
                  <div
                    onClick={() => handleToggle(state)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      padding: "10px",
                      backgroundColor: "#333",
                      borderRadius: "4px",
                    }}
                  >
                    <span>{state}</span>
                    <ExpandMoreIcon
                      style={{
                        transform:
                          expanded === state
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  {expanded === state && (
                    <ul
                      style={{
                        listStyle: "none",
                        padding: "10px",
                        backgroundColor: "#222",
                        borderRadius: "4px",
                        marginTop: "5px",
                      }}
                    >
                      {cities.map((city) => (
                        <li key={city} style={{ padding: "5px 0" }}>
                          {city}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <ContactSection />
    </Box >
  );
};

export default NetworkCoverage;
