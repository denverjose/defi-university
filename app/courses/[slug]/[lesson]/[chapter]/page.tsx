import { lessons } from "@/lib/constants/lessons";
import { getCourseById } from "@/lib/helpers/get-courses";
import { notFound } from "next/navigation";
import { ChapterHeader } from "@/components/courses/individual-course-page/chapter/chapter-header";
import { isServerAuthenticated } from "@/lib/auth/isServerAuth";
import { chapterMetadata } from "@/lib/metadata";
import { Metadata } from "next";
// import { LessonSidebar } from "@/components/courses/individual-course-page/lessons-sidebar/lessons-sidebar";
// import { Box } from "@mui/material";

type Props = {
  params: { slug: string; lesson: string; chapter: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return await chapterMetadata({ params });
}
export default async function page({
  params,
}: {
  params: { slug: string; lesson: string; chapter: string };
}) {
  const { slug, lesson, chapter } = await params;
  const lessonData = lessons.find((l) => l.id === lesson);
  const chapterData = lessonData?.chapters.find((c) => c.id === chapter);
  const course = await getCourseById(slug);

  if (!lessonData || !chapterData || !course) {
    return notFound();
  }

  const isAuth = await isServerAuthenticated();

  if (!isAuth) {
    // return notFound();
  }

  return (
    <>
      <ChapterHeader chapter={chapterData} />
      {/* <Box
        sx={{
          display: "flex",
          gap: { xs: 1.5, lg: 3 },
          flexDirection: { xs: "column", lg: "row" },
          width: "100%", // Ensures it doesn't exceed the container
        }}
      >
        <Box sx={{ flex: 4, overflow: "hidden" }}> 
      <ChapterHeader chapter={chapterData} />
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
          <LessonSidebar
            course={course}
            currentChapter={chapter}
            currentLesson={lesson}
          />
        </Box>
      </Box> */}
    </>
  );
}
