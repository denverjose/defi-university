import { ChapterType } from "@/lib/types/data-type";
import { Box, Typography } from "@mui/material";
import { LessonToggle } from "./lesson-toggle-view";
import { NavigationButtons } from "./navigation-button";
import { isServerAuthenticated } from "@/lib/auth/isServerAuth";

export const ChapterHeader = async ({ chapter }: { chapter: ChapterType }) => {
  const isAuth = await isServerAuthenticated();

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        p: 3,
        borderRadius: 4,
        mb: { xs: 1.5, lg: 3 },
        border: "1px solid rgb(234, 236, 240)",
      }}
    >
      <LessonToggle isAuth={isAuth} chapter={chapter} />
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5">{chapter.title}</Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          {chapter.description}
        </Typography>
      </Box>
      <NavigationButtons chapter={chapter} />
    </Box>
  );
};
