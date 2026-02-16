import {
  Avatar,
  Box,
  Typography,
  Chip,
  Button,
  Container,
} from "@mui/material";
import React from "react";
import { Students } from "../../student-testimonials/students-icon";

export const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            paddingY: { xs: 8, md: 12 },
            gap: 4,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "flex-start",
              }}
            >
              <Chip label="Powered by Web3" variant="outlined" />

              <Typography variant="h2">
                Web3.ai bootcamp for FinTech Applications in the DeFi space
              </Typography>
            </Box>
            <Typography variant="h6" color="text.secondary">
              DeFiU helps you launch your Web3 development career with free
              courses designed to equip you with the skills needed to become a
              smart contract engineer or security auditor.
            </Typography>
            <Students isTen />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 2,
                alignItems: { sm: "flex-start" },
              }}
            >
              <Button sx={{ fontWeight: 700, paddingY: 1 }} variant="outlined">
                Explore All Courses
              </Button>
              <Button sx={{ fontWeight: 700, paddingY: 1 }} variant="contained">
                Start Learning
              </Button>
            </Box>
          </Box>
          <Box>
            <Avatar
              sx={{ width: { xs: "100%", sm: 400, md: 500 }, height: "auto" }}
              alt="header-image"
              src="/header-image.png"
              variant="square"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
