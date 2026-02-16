import 'server-only'
import { courses } from "@/lib/constants/courses";

export async function getFilteredCourses(level: string) {
  try {
    if (level === "All") {
      return courses.flatMap((course) =>
        course.levels.map((lvl) => ({
          id: lvl.id,
          name: course.name,
          level: lvl.level,
          description: lvl.description,
          lessons: lvl.lessons,
        }))
      );
    }

    return courses.flatMap((course) =>
      course.levels
        .filter((lvl) => lvl.level === level)
        .map((lvl) => ({
          id: lvl.id,
          name: course.name,
          level: lvl.level,
          description: lvl.description,
          lessons: lvl.lessons,
        }))
    );
    // return []
  } catch (error) {
    console.error("Error fetching filtered courses:", error);
    return [];
  }
}


export async function getCourseById(levelId: string) {
  try {
    for (const course of courses) {
      const level = course.levels.find((lvl) => lvl.id === levelId);
      if (level) {
        return {
          name: course.name,
          ...level,
        };
      }
    }
    return null; 
  } catch (error) {
    console.error("Error fetching course by ID:", error);
    return null;
  }
}
