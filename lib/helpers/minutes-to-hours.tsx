interface Module {
  id: string;
  title: string;
  duration: string; // Duration in format "Xm" (e.g., "35m" for 35 minutes)
}

export const calculateTotalDuration = (modules: Module[]): string => {
  let totalMinutes = 0;

  // Sum up the total minutes
  modules.forEach((module) => {
    const minutes = parseInt(module.duration.replace("m", ""), 10); // Extract minutes from the duration string
    totalMinutes += minutes;
  });

  // Round up to the nearest hour if more than 30 minutes
  const roundedHours = Math.ceil(totalMinutes / 60);

  // Return the formatted result
  if (roundedHours > 0) {
    return `${roundedHours}hr${roundedHours > 1 ? "s" : ""}`;
  } else {
    return `${totalMinutes}min`;
  }
};
interface Module {
  id: string;
  title: string;
  duration: string; // Format: "Xm" (e.g., "35m")
}

export const getTotalDuration = (
  level: { lessons?: { chapters?: { duration: string }[] }[] } | undefined
): string => {
  if (!level) return "0min";

  // Extract all durations from chapters
  const modules: Module[] =
    level.lessons?.flatMap(
      (lesson) =>
        lesson.chapters?.map((chapter) => ({
          id: lesson.id, // Keeping the lesson ID for reference
          title: lesson.title, // Keeping the lesson title for reference
          duration: chapter.duration, // Extracted duration
        })) || []
    ) || [];

  // Use the existing function to calculate total duration
  return calculateTotalDuration(modules);
};
