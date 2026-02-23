import { lessons } from "@/lib/constants/lessons";
import { getCourseById } from "@/lib/helpers/get-courses";
import { notFound } from "next/navigation";
import { ChapterHeader } from "@/components/courses/individual-course-page/chapter/chapter-header";
// import { isServerAuthenticated } from "@/lib/auth/isServerAuth";
import { chapterMetadata } from "@/lib/metadata";
import { Metadata } from "next";
// import { LessonSidebar } from "@/components/courses/individual-course-page/lessons-sidebar/lessons-sidebar";
// import { Box } from "@mui/material";

type ParamsType = {
  slug: string;
  lesson: string;
  chapter: string;
};

type Props = {
  params: Promise<ParamsType>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  return chapterMetadata({ params });
}

export default async function Page(props: { params: Promise<ParamsType> }) {
  const { slug, lesson, chapter } = await props.params;

  const lessonData = lessons.find((l) => l.id === lesson);
  const chapterData = lessonData?.chapters.find((c) => c.id === chapter);
  const course = await getCourseById(slug);

  if (!lessonData || !chapterData || !course) {
    return notFound();
  }

  // const isAuth = await isServerAuthenticated();

  // if (!isAuth) {
  //   // return notFound();
  // }

  return (
    <>
      <ChapterHeader chapter={chapterData} />
    </>
  );
}
