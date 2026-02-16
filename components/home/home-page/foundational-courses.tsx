import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { ChipLevel } from "@/components/chip-level/chip";
import { Students } from "../../student-testimonials/students-icon";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const FoundationalCourses = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 6,
          marginBottom: 2,
          position: "relative",
        }}
      >
        <Typography variant="h4">Foundational Courses</Typography>
        <Avatar
          src="/start-here.webp"
          alt="start here"
          sx={{
            width: "152px",
            position: "absolute",
            top: "-90px",
            right: 0,
            height: "auto",
            display: { xs: "none", md: "block" },
          }}
          variant="square"
        />
      </Box>
      <Box
        sx={{
          padding: "3px",
          borderRadius: 4,
          backgroundImage:
            "linear-gradient(270deg, red, #ff5c00 17%, #ffe500 34%, #04bd00 53%, #00a3ff 69%, #30f 84%, #fa00ff)",
          backgroundSize: "cover", // Ensures the background covers the element
          backgroundRepeat: "no-repeat", // Prevents tiling
        }}
      >
        <Box
          sx={{
            borderRadius: 4,
            backgroundColor: "background.default",
            padding: "20px 20px 0 20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: 2,
              borderBottom: "2px solid #ccc", // Adds a bottom border
            }}
          >
            <Typography variant="h5" >
              Blockchain Basics
            </Typography>
            <ChipLevel label="Noob" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "stretch", // Ensures both items stretch to match height
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flex: { xs: 1, lg: 0.7 },
                gap: 2,
                paddingBottom: "20px",
              }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ marginTop: "10px" }}
              >
                Start where you’re comfortable and spark your interest in
                blockchain technology! Learn how blockchains work, what smart
                contracts are, and how to sign your first transaction. Whether
                you’re a new developer or are a seasoned pro, there’s something
                here for you.
              </Typography>
              <Students isTen={false} />
              <Button variant="outlined"  sx={{fontWeight:700, paddingY:1 }}>
                Get Started <ArrowForwardIcon />
              </Button>
            </Box>
            <Box sx={{ margin: "auto" }}>
              <Avatar
                src="/course-overview.png"
                alt="course-overview"
                sx={{
                  height: "100%", // Matches the height of the Box
                  width: "420px", // Keeps aspect ratio intact
                  objectFit: "cover",
                  display: { xs: "none", lg: "block" },
                }}
                variant="square"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
