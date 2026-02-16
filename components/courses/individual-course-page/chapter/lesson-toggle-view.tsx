"use client";

import { useState } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import VideoLesson from "./video-lesson";
import WrittenLesson from "./written-lesson";
import { ChapterType } from "@/lib/types/data-type";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

export const LessonToggle = ({
  isAuth,
  chapter,
}: {
  isAuth: boolean;
  chapter: ChapterType;
}) => {
  const [lessonType, setLessonType] = useState<"video" | "written">("video");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newType: "video" | "written" | null
  ) => {
    if (newType !== null) {
      setLessonType(newType);
    }
  };

  return (
    <Box>
      <ToggleButtonGroup
        value={lessonType}
        exclusive
        onChange={handleChange}
        sx={{ mb: 1 }}
      >
        <ToggleButton size="small" value="video" sx={{ borderRadius: 2 }}>
          <VideoLibraryOutlinedIcon sx={{ mr: 1 }} />
          {!isMobile && (
            <Typography variant="subtitle2" fontWeight={600}>
              Video Lesson
            </Typography>
          )}
        </ToggleButton>
        <ToggleButton size="small" value="written" sx={{ borderRadius: 2 }}>
          <ArticleOutlinedIcon sx={{ mr: 1 }} />
          {!isMobile && (
            <Typography variant="subtitle2" fontWeight={600}>
              Written Lesson
            </Typography>
          )}
        </ToggleButton>
      </ToggleButtonGroup>

      {lessonType === "video" ? (
        <VideoLesson
          isAuth={isAuth}
          videoUrl={chapter.videoUrl}
          videoTitle={chapter.title}
        />
      ) : (
        <WrittenLesson />
      )}
    </Box>
  );
};
