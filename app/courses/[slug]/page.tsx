import { getCourseById } from "@/lib/helpers/get-courses";
import { courses } from "@/lib/constants/courses";
import { Metadata } from "next";
import { courseMetadata } from "@/lib/metadata";
import { CourseHeader } from "@/components/courses/individual-course-page/individual-course/course-header";
import { CourseOverview } from "@/components/courses/individual-course-page/individual-course/course-overview";
import { LearningPath } from "@/components/courses/individual-course-page/individual-course/learning-path";
import { notFound } from "next/navigation";

type Params = {
  slug: string;
};

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const params = await props.params;
  return courseMetadata({ params });
}

export function generateStaticParams() {
  return courses.flatMap((course) =>
    course.levels.map((level) => ({
      slug: level.id,
    }))
  );
}

export default async function Page(props: {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}) {
  const { slug } = await props.params;

  const course = await getCourseById(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <CourseHeader course={course} />
      <CourseOverview />
      <LearningPath />
    </>
  );
}