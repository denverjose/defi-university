import React from "react";
import { Box, Typography, Button, Container, Avatar } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const NextStep = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(circle, rgba(195, 242, 235, 0.6) 0%, #FFFFFF 85%)",
        backdropFilter: "blur(10px)",
        justifyContent: "center",
        px: 3,
        py: 24,
      }}
    >
      <Container
        disableGutters
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#0B0E13", // Dark container background
          borderRadius: 4,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            flex: 1,
            color: "white",
            textAlign: "left",
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Not sure where to go after completing our courses?
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.8 }}>
            Apply your skills at the CodeHawks competitive audits platform.
            Hack, win prizes, and shape the future of Web3!
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "white",
              color: "black",
              px: 3,
              py: 1.5,
              borderRadius: 2,
              fontWeight: "bold",
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Visit CodeHawks
          </Button>
        </Box>

        {/* Right Section (Mock Leaderboard) */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: { xs: 4, md: 0 },
            px: { xs: 3, md: 0 },
            pb: { xs: 10, md: 0 },
          }}
        >
          <Avatar
            src="/codehawks.png"
            sx={{ width: "100%", height: "100%", borderRadius: 4 }}
            variant="square"
          />
        </Box>
      </Container>
    </Box>
  );
};
