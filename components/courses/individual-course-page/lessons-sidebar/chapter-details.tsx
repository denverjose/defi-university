"use client";
import { AccordionDetails } from "@mui/material";
import { useParams } from "next/navigation";

export default function ChapterDetails({
  children,
  chapterId,
}: Readonly<{ children: React.ReactNode; chapterId: string }>) {
  const params = useParams();
  const chapter = params?.chapter;

  return (
    <AccordionDetails
      sx={{
        backgroundColor:
          chapter === chapterId ? "rgb(234, 236, 240)" : "background.default",
        p: 1,
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      {children}
    </AccordionDetails>
  );
}
