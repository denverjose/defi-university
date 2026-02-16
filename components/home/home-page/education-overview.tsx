import React from "react";
import { Box, Typography, Container, Avatar } from "@mui/material";
import { OvalTeam } from "./oval-team";

export const EducationOverview = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        paddingY: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: 768,
            margin: "auto",
            textAlign: "center",
          }}
        >
          <Typography
            color="primary"
            variant="subtitle1"
            sx={{ fontWeight: 600 }}
          >
            Web3 developer bootcamp for DeFi applications
          </Typography>
          <Typography
            variant="h3"
            sx={{
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            A blockchain course for noobs and experts
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{textAlign:''}}>
            Learn smart contract development through step-by-step tutorials and
            hands-on projects taught by Jose Tollinchi.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4, mt: 8 }}>
          {/* Section 1 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              alignItems: "center",
            }}
          >
            {/* Left Box */}
            <Box
              sx={{
                flex: 1.7,
                borderRadius: 4,
                textAlign: "center",
                height: { xs: "auto", md: "420px" },
                position: "relative",
                backgroundColor: "background.default",
                width: "100%",
                overflow: "hidden",
                boxShadow:
                  "0 12px 16px -4px #10182814, 0 4px 6px -2px #10182808",
              }}
            >
              <OvalTeam />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background:
                    "linear-gradient(0deg, #fff, #fffffff0 80%, #0000)",
                  py: 5,
                  borderRadius: 4,
                  p: 4,
                }}
              >
                <Typography variant="h4">
                  Industry-leading web3 education
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our smart contract development courses are created by
                  world-recognized experts and offer you the highest level of
                  education in web3.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                flex: 1,
                backgroundColor: "background.default",
                borderRadius: 4,
                position: "relative",
                width: "100%",
                height: { xs: "auto", md: "420px" },
                overflow: "hidden",
                display: "flex",
                justifyContent: "flex-end",
                textAlign: "center",
                boxShadow:
                  "0 12px 16px -4px #10182814, 0 4px 6px -2px #10182808",
              }}
            >
              <Avatar
                alt="Student 1"
                src="/calendar.webp"
                sx={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "328px",
                  borderRadius: 0,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background:
                    "linear-gradient(0deg, #fff, #fffffff0 80%, #0000)",
                  py: 5,
                  borderRadius: 4,
                  p: 4,
                }}
              >
                <Typography variant="h4" sx={{ whiteSpace: "nowrap" }}>
                  Start when you want
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Study full-time, part-time, and anywhere in between.
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* section 2 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", flex: 1, gap: 3 }}
            >
              <Box
                sx={{
                  flex: 1,
                  backgroundColor: "background.default",
                  borderRadius: 4,
                  position: "relative",
                  width: "100%",
                  height: { xs: "auto", md: "420px" },
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  boxShadow:
                    "0 12px 16px -4px #10182814, 0 4px 6px -2px #10182808",
                }}
              >
                <Avatar
                  alt="Practice"
                  src="/practice-skills.webp"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 0,
                    pb: { xs: 10, sm: 0 },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    background:
                      "linear-gradient(0deg, #fff, #fffffff0 80%, #0000)",
                    py: 5,
                    borderRadius: 4,
                    p: 4,
                  }}
                >
                  <Typography variant="h4" sx={{ whiteSpace: "nowrap" }}>
                    Practice your skills
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Complete exercises, and test yourself in every course to
                    practice your skills and strengthen your smart contract
                    development and security knowledge.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  backgroundColor: "background.default",
                  borderRadius: 4,
                  position: "relative",
                  width: "100%",
                  height: { xs: "auto", md: "420px" },
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  boxShadow:
                    "0 12px 16px -4px #10182814, 0 4px 6px -2px #10182808",
                }}
              >
                <Avatar
                  alt="Student 1"
                  src="/start-now.webp"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 0,
                    pb: { xs: 10, sm: 0 },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    background:
                      "linear-gradient(0deg, #fff, #fffffff0 80%, #0000)",
                    py: 5,
                    borderRadius: 4,
                    p: 4,
                  }}
                >
                  <Typography variant="h4" sx={{ whiteSpace: "nowrap" }}>
                    Start now
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Education should be accessible to everyone. That's why DeFiU
                    offers high-quality developer courses designed to provide
                    exceptional value.
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* long box */}
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{
                  flex: 1,
                  backgroundColor: "background.default",
                  borderRadius: 4,
                  position: "relative",
                  width: "100%",
                  height: { xs: "100%" },
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  boxShadow:
                    "0 12px 16px -4px #10182814, 0 4px 6px -2px #10182808",
                }}
              >
                <Avatar
                  alt="Student 1"
                  src="/build-projects.webp"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 0,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    background:
                      "linear-gradient(0deg, #fff, #fffffff0 80%, #0000)",
                    py: 5,
                    borderRadius: 4,
                    p: 4,
                  }}
                >
                  <Typography variant="h4" sx={{ whiteSpace: "nowrap" }}>
                    Build real world projects
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Create your smart contract development portfolio and apply
                    your knowledge to real-world use cases. Build a portfolio
                    with dozens of projects and bring your career to the next
                    level.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
