// lib/helpers/minutes-to-hours.ts

// Represents a single chapter of a lesson
interface Chapter {
  duration: string; // Duration in format "Xm" (e.g., "35m")
}

// Represents a lesson, which may contain multiple chapters
interface Lesson {
  id: string;
  title: string;
  chapters?: Chapter[];
}

// Represents a course level containing multiple lessons
interface Level {
  lessons?: Lesson[];
}

// Standardized module used to calculate total duration
interface Module {
  id: string;
  title: string;
  duration: string; // Format: "Xm"
}

/**
 * Converts an array of Modules into a total duration string
 * e.g., "2hrs" or "45min"
 */
export const calculateTotalDuration = (modules: Module[]): string => {
  let totalMinutes = 0;

  // Sum up the total minutes
  modules.forEach((module) => {
    const minutes = parseInt(module.duration.replace("m", ""), 10); // Extract minutes
    totalMinutes += minutes;
  });

  // Round up to nearest hour if more than 30 minutes
  const roundedHours = Math.ceil(totalMinutes / 60);

  // Return formatted string
  if (roundedHours > 0) {
    return `${roundedHours}hr${roundedHours > 1 ? "s" : ""}`;
  } else {
    return `${totalMinutes}min`;
  }
};

/**
 * Calculates the total duration of a course level
 */
export const getTotalDuration = (level: Level | undefined): string => {
  if (!level) return "0min";

  // Convert all chapters into Module[] with lesson info
  const modules: Module[] =
    level.lessons?.flatMap((lesson) =>
      lesson.chapters?.map((chapter) => ({
        id: lesson.id,          // Lesson ID
        title: lesson.title,    // Lesson Title
        duration: chapter.duration, // Chapter duration
      })) || []
    ) || [];

  return calculateTotalDuration(modules);
};