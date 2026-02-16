"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface GetStartedProps {
  id: string;
  sx?: object;
  children: React.ReactNode;
}

export const GetStartedButton = ({ id, sx, children }: GetStartedProps) => {
  const router = useRouter();
  return (
    <Button
      variant="outlined"
      color="inherit"
      sx={{ fontWeight: 700, paddingY: 1, ...sx }}
      size="small"
      onClick={() => router.push(`/courses/${id}`)} // Navigate to course ID page
    >
      {children} <ArrowForwardIcon />
    </Button>
  );
};
