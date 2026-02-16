"use client";
import { useRouter, useParams } from "next/navigation";
import { Typography } from "@mui/material";

export default function ChapterTitle({
  courseId,
  lessonId,
  chapterId,
  chapterTitle,
  index,
}: {
  courseId: string;
  lessonId: string;
  chapterId: string;
  chapterTitle: string;
  index: number;
}) {
  const params = useParams();

  const router = useRouter();
  return (
    <Typography
      onClick={() =>
        router.push(`/courses/${courseId}/${lessonId}/${chapterId}`)
      }
      variant="subtitle1"
      fontWeight={600}
      sx={{
        cursor: "pointer",
        color: params?.chapter === chapterId ? "primary.main" : "text.primary",
        ":hover": { color: "primary.main" },
      }}
    >
      {index + 1}. {chapterTitle}
    </Typography>
  );
}
