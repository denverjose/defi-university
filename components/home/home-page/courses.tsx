import { Box, Typography, Container } from "@mui/material";
import { OpenCourseChip } from "../../chip-level/chip";
import { CoursePath } from "./course-path";
import { FoundationalCourses } from "./foundational-courses";
import { courses } from "@/lib/constants/courses";

export const Courses = () => {
  return (
    <Box
      sx={{
        paddingY: { xs: 8, md: 12 },
      }}
    >
      {/* <Box> */}
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 768,
            margin: "auto",
          }}
        >
          <Typography
            color="primary"
            variant="subtitle1"
            sx={{ fontWeight: 600 }}
          >
            Everything you need
          </Typography>
          <Typography variant="h3">Our blockchain developer courses</Typography>
          <Typography variant="body2" color="text.secondary">
            Whether you're new to web3, a seasoned blockchain engineer, or an
            aspiring smart contract auditor, we have the right courses for you.
          </Typography>
          <Box
            sx={{
              display: "block",
            }}
          >
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ display: "inline" }}
            >
              Check out the online courses with the
            </Typography>{" "}
            <OpenCourseChip
              label="Open Courses"
              sx={{ transform: "rotate(-4deg)" }}
            />
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ display: "inline" }}
            >
              {" "}
              tag.
            </Typography>
          </Box>
        </Box>

        <FoundationalCourses />
        {courses.map((course) => (
          <CoursePath
            key={course.id}
            name={course.name}
            description={course.description}
            levels={course.levels}
          />
        ))}
      </Container>
    </Box>
  );
};
