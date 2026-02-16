import { Box, Container } from "@mui/material";
import { notFound } from "next/navigation";
import { getCourseById } from "@/lib/helpers/get-courses";
import { BreadcrumbNav } from "@/components/courses/individual-course-page/individual-course/breadcrumb-navbar";
import { LessonSidebar } from "@/components/courses/individual-course-page/lessons-sidebar/lessons-sidebar";
import { ChapterNotificationProvider } from "@/app/providers/ChapterNotificationProvider";

export default async function layout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { slug: string } }>) {
  const { slug } = await params;
  const course = await getCourseById(slug);
  if (!course) {
    notFound();
  }

  return (
    <ChapterNotificationProvider>
      <Box sx={{ backgroundColor: "background.paper", paddingY: 4 }}>
        <Container maxWidth="xl">
          <BreadcrumbNav courseName={course.name} level={course.level} />
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1.5, lg: 3 },
              flexDirection: { xs: "column", lg: "row" },
              width: "100%", // Ensures it doesn't exceed the container
            }}
          >
            <Box sx={{ flex: 4, overflow: "hidden" }}>
              {children}
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
          </Box>
        </Container>
      </Box>
    </ChapterNotificationProvider>
  );
}

// import { Box, Container } from "@mui/material";
// import { notFound } from "next/navigation";
// import { getCourseById } from "@/lib/helpers/get-courses";
// import { BreadcrumbNav } from "@/components/courses/individual-course-page/individual-course/breadcrumb-navbar";
// import { ChapterNotificationProvider } from "@/app/providers/ChapterNotificationProvider";

// export default async function layout({
//   children,
//   params,
// }: Readonly<{ children: React.ReactNode; params: { slug: string } }>) {
//   const { slug } = await params;

//   const course = await getCourseById(slug);
//   if (!course) {
//     notFound();
//   }

//   return (
//     <ChapterNotificationProvider>
//       <Box
//         sx={{ backgroundColor: "background.paper", paddingY: { xs: 2, md: 4 } }}
//       >
//         <Container maxWidth="xl">
//           <BreadcrumbNav courseName={course.name} level={course.level} />
//           {children}
//         </Container>
//       </Box>
//     </ChapterNotificationProvider>
//   );
// }
