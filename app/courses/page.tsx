import type { Metadata } from "next";
import { Suspense } from "react";
import { NextStep } from "@/components/courses/courses-page/next-step";
import { FilteredCourses } from "@/components/courses/courses-page/filtered-courses";
import { getFilteredCourses } from "../../lib/helpers/get-courses";
import { coursesMetadata } from "@/lib/metadata";

export const metadata: Metadata = coursesMetadata;

export default async function page({
  searchParams,
}: {
  searchParams: { level?: string };
}) {
  const { level = "All" } = await searchParams;
  const filteredCourses = await getFilteredCourses(level);

  return (
    <>
      <Suspense
        fallback={
          <p className="animate-pulse text-gray-500">Loading courses</p>
        }
      >
        <FilteredCourses courses={filteredCourses} selectedLevel={level} />
      </Suspense>
      <NextStep />
    </>
  );
}
