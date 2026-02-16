import CoursesFilterButton from "@/components/courses/courses-page/courses-filter";
import { Container, Box, Typography, Alert } from "@mui/material";
import { CourseBox } from "./course-box";

export const FilteredCourses = ({
  courses,
  selectedLevel,
}: {
  courses: {
    id: string;
    name: string;
    level: string;
    description: string;
  }[];
  selectedLevel: string;
}) => {
  let status = true;
  if (courses.length === 0) status = !status;

  return (
    <Box sx={{ backgroundColor: "background.paper" }}>
      <Container maxWidth="lg" sx={{ paddingY: 9 }}>
        <Box>
          <Typography variant="h3" sx={{ marginTop: 2, marginBottom: 2 }}>
            Hands-on courses for all levels
          </Typography>
          <Typography
            color="text.secondary"
            variant="body1"
            sx={{ maxWidth: 768 }}
          >
            Learn blockchain fundamentals, smart contract development, and the
            auditing skills you need, online at your own pace. From blockchain
            concepts, essentials to Solidity, security, and web3 DevOps.
          </Typography>
          <CoursesFilterButton selectedLevel={selectedLevel} status={status} />
        </Box>
        <Box sx={{ py: 5 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: 2,
            }}
          >
            {courses.length === 0 ? (
              <Alert
                severity="warning"
                sx={{ width: "100%", gridColumn: "1 / -1" }}
              >
                Oops! No courses found
              </Alert>
            ) : (
              courses.map((course) => (
                <CourseBox key={course.id} course={course} />
              ))
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
