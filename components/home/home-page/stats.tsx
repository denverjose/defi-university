import React from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import { stats } from "../../../lib/constants/stats";

export const Stats = () => {
  return (
    <Container
      maxWidth="lg"
      // disableGutters
      // sx={{ paddingX: { xs: 4, sm: 6, md: 12 } }}
    >
      <Box
        sx={{
          paddingY: { xs: 8, md: 12 },
        }}
      >
        {/* Heading Section */}
        <Box sx={{ marginBottom: 6 }}>
          <Typography
            color="primary"
            variant="subtitle1"
            sx={{ fontWeight: 600 }}
          >
            Smart contract development courses
          </Typography>
          <Typography
            variant="h3"
            sx={{
              marginTop: 2,
              marginBottom: 2,
              fontFamily: "Gochi Hand",
            }}
          >
            What is DeFiU?
          </Typography>
          <Typography
            color="text.secondary"
            variant="body1"
            sx={{ maxWidth: 768 }}
          >
            DeFiU is an AI-powered Web3 bootcamp focused on blockchain and smart contract development for FinTech and DeFi applications, providing the knowledge needed to excel in the industry.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {stats.map((stat, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  padding: 8,
                  textAlign: "center",
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                }}
              >
                <stat.icon
                  color="info"
                  sx={{ fontSize: 24, marginBottom: 1 }}
                />
                <Typography variant="body2" fontWeight={600}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {" "}
                  {stat.description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
