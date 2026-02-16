import { getCourseById } from "@/lib/helpers/get-courses";
import { courses } from "@/lib/constants/courses";
import { Metadata } from "next";
import { courseMetadata } from "@/lib/metadata";
import { CourseHeader } from "@/components/courses/individual-course-page/individual-course/course-header";
import { CourseOverview } from "@/components/courses/individual-course-page/individual-course/course-overview";
import { LearningPath } from "@/components/courses/individual-course-page/individual-course/learning-path";
import { notFound } from "next/navigation";
// import { Box } from "@mui/material";
// import { LessonSidebar } from "@/components/courses/individual-course-page/lessons-sidebar/lessons-sidebar";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return await courseMetadata({ params });
}

export function generateStaticParams() {
  return courses.flatMap((course) =>
    course.levels.map((level) => ({
      slug: level.id,
    }))
  );
}

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const course = await getCourseById(slug);
  if (!course) {
    notFound();
  }

  return (
    <>
      <CourseHeader course={course} />
      <CourseOverview />
      <LearningPath />
      {/* <Box
        sx={{
          display: "flex",
          gap: { xs: 1.5, lg: 3 },
          flexDirection: { xs: "column", lg: "row" },
          width: "100%", // Ensures it doesn't exceed the container
        }}
      >
        <Box sx={{ flex: 4, overflow: "hidden" }}> 
          <CourseHeader course={course} />
          <CourseOverview />
          <LearningPath />
         </Box>
        <Box
          sx={{
            backgroundColor: "background.default",
            borderRadius: 4,
            mb: 3,
            border: "1px solid rgb(234, 236, 240)",
            flex: 1,
            height: "fit-content",
            maxWidth: { xs: "100%", lg: "365px" },
          }}
        >
          <LessonSidebar course={course} />
        </Box>
      </Box> */}
    </>
  );
}
