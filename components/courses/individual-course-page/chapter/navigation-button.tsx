"use client";

import {
  Button,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useChapterNotification } from "@/hooks/useChapterNotification";
import { ChapterType } from "@/lib/types/data-type";

export const NavigationButtons = ({ chapter }: { chapter: ChapterType }) => {
  const { addChapterNotifications } = useChapterNotification();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        marginTop: 4,
        paddingBottom: 2,
        display: "flex",
        justifyContent: "space-between",
        color: "text.secondary",
      }}
    >
      <Button
        onClick={() =>
          addChapterNotifications(chapter.id, chapter.title, false)
        }
        variant="outlined"
        color="inherit"
        sx={{ gap: 1 }}
      >
        <ArrowBackIcon />

        <Typography variant="subtitle2">
          {isMobile ? "Previous" : "Previous Lesson"}
        </Typography>
      </Button>
      <Button
        onClick={() => addChapterNotifications(chapter.id, chapter.title, true)}
        variant="outlined"
        color="inherit"
        sx={{ gap: 1 }}
      >
        <Typography variant="subtitle2">
          {isMobile ? "Next" : "Next Lesson"}
        </Typography>
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
};
