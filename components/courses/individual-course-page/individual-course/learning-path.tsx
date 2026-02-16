import { Typography, Box } from "@mui/material";
import { CourseBox } from "../../courses-page/course-box";
import { getFilteredCourses } from "@/lib/helpers/get-courses";

export const LearningPath = async () => {
  const allCourses = await getFilteredCourses("All");
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        mt: 3,
        p: { xs: 2, md: 3 },
        borderRadius: 4,
        border: "1px solid rgb(234, 236, 240)",
      }}
    >
      <Typography variant="subtitle2" color="primary" fontWeight={600}>
        Learning Path
      </Typography>
      <Typography variant="h6" fontWeight={600}>
        Solidity Developer
      </Typography>
      <Box
        sx={{
          marginTop: 2,
          overflowX: "auto", // Enables horizontal scrolling
          display: "flex",
          flexWrap: "nowrap", // Prevents items from wrapping
          gap: 2,
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": { height: "6px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "4px",
          },
        }}
      >
        {allCourses.map((course) => (
          <CourseBox key={course.id} course={course} />
        ))}
      </Box>
    </Box>
  );
};
