import React from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import { SampleImage } from "@/components/sample-image/sample-image";
import { ChipLevel } from "@/components/chip-level/chip";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Students } from "@/components/student-testimonials/students-icon";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IosShareIcon from "@mui/icons-material/IosShare";

interface CourseType {
  name: string;
  description: string;
  level: string;
}

export const CourseHeader = ({ course }: { course: CourseType }) => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        overflow: "hidden",
        p: { xs: 2, md: 3 },
        borderRadius: 4,
        mb: { xs: 1.5, lg: 3 },
        border: "1px solid rgb(234, 236, 240)",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", px: 1, pb: 3 }}
      >
        <Typography variant="h4" fontWeight={500}>
          {course.name}
        </Typography>
        <ChipLevel label={course.level} />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          alignItems: { xs: "auto", lg: "center" },
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <SampleImage course={course.name} />
        </Box>
        <Box
          sx={{
            flex: 1,
            gap: 2,
            display: "flex",
            flexDirection: "column",
            color: "text.secondary",
          }}
        >
          <Typography>{course.description}</Typography>
          <Divider />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Typography sx={{ display: "flex", gap: 1 }}>
              <AccessTimeIcon />3 hrs
            </Typography>
            <Typography sx={{ display: "flex", gap: 1 }}>
              <SchoolOutlinedIcon />2 lessons
            </Typography>
            <Typography sx={{ display: "flex", gap: 1 }}>
              <IntegrationInstructionsOutlinedIcon />3 projects
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", lg: "center" },
          gap: 2,
          pt: 2,
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Students />
        <Box
          sx={{
            display: "flex",
            gap: 2,
            color: "text.secondary",
            flexDirection: { xs: "column", lg: "row" },
            width: "100%",
            justifyContent: { xs: "auto", lg: "flex-end" },
          }}
        >
          <Button
            variant="outlined"
            color="inherit"
            sx={{ fontWeight: 700, paddingY: 1, gap: 1 }}
            size="small"
          >
            <IosShareIcon /> Share Course
          </Button>
          {/* "Continue Learning" if already started by the user */}
          {/* "Start Over" if want to restart learning */}
          <Button
            variant="contained"
            color="primary"
            sx={{ fontWeight: 700, paddingY: 1 }}
            size="small"
          >
            Get Started <ArrowForwardIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
