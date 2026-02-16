import React from "react";
import { Box, Typography } from "@mui/material";

interface SampleImageProps {
  course: string;
}

export const SampleImage: React.FC<SampleImageProps> = ({ course }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "168px",
        maxWidth: "700px",
        background:
          course === "Solidity"
            ? "linear-gradient(to bottom, white, rgb(231, 219, 224), #f080c0)"
            : course === "Python"
            ? "linear-gradient(to bottom, white, rgb(219, 224, 231), #80c0f0)"
            : course === "Production"
            ? "linear-gradient(to bottom, white, rgb(224, 231, 219), #80f080)"
            : "none",
        overflow: "hidden",
        borderRadius: "6px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color:
            course === "Solidity"
              ? "#6b1d4e" // Dark purple for contrast
              : course === "Python"
              ? "#003366" // Deep blue for contrast
              : course === "Production"
              ? "#135d25" // Dark green for contrast
              : "#000", // Default black
        }}
      >
        {course}
      </Typography>
    </Box>
  );
};
