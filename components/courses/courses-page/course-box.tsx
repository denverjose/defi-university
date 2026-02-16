import React from "react";
import { Box, Typography } from "@mui/material";
import { ChipLevel } from "../../chip-level/chip";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { SampleImage } from "@/components/sample-image/sample-image";
import { GetStartedButton } from "../../get-started-button/get-started";
import { CourseType } from "@/lib/types/data-type";

export const CourseBox = ({ course }: { course: CourseType }) => {
  return (
    <Box
      key={course.id}
      sx={{
        p: { xs: 2, sm: 3 },
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: 4,
        border: "1px solid rgb(234, 236, 240)",
        minWidth: "344px",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 1,
          }}
        >
          <Typography variant="subtitle2" color="text.secondary">
            {course.name} Developer
          </Typography>

          <ChipLevel label={course.level} />
        </Box>
        <Typography variant="h6" fontWeight={700}>
          {course.name}
        </Typography>
      </Box>
      <SampleImage course={course.name} />

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          WebkitLineClamp: 3, // Limits to 3 lines
        }}
      >
        {course.description}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          color: "text.secondary",
          pt: 0,
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            flexWrap: "wrap",
          }}
        >
          <Typography sx={{ display: "flex", gap: 0.5 }}>
            <AccessTimeIcon />3 hrs
          </Typography>
          <Typography sx={{ display: "flex", gap: 0.5 }}>
            <SchoolOutlinedIcon />2 lessons
          </Typography>
          <Typography sx={{ display: "flex", gap: 0.5 }}>
            <IntegrationInstructionsOutlinedIcon />3 projects
          </Typography>
        </Box>
        <GetStartedButton id={course.id}>View the Course</GetStartedButton>
      </Box>
    </Box>
  );
};
