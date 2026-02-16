"use client";
import { useParams } from "next/navigation";
import { AccordionDetails } from "@mui/material";

export default function AccordionDetailsWrapper({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const params = useParams();
  console.log(params);
  return (
    <AccordionDetails
      sx={{
        backgroundColor:
          params?.chapter === id ? "rgb(234, 236, 240)" : "background.default",
        p: 1,
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      {children}
    </AccordionDetails>
  );
}
