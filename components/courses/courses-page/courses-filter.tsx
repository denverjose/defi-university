"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormControl, Select, MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

export default function CoursesFilterButton({
  selectedLevel,
  status,
}: {
  selectedLevel: string;
  status: boolean;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  if (status === false) {
    window.location.reload();
    return null; // Ensure the function always returns a valid JSX element or null
  }

  const handleChange = (event: SelectChangeEvent<string>) => {
    const level = event.target.value as string;
    const params = new URLSearchParams(searchParams?.toString());
    params.set("level", level);
    router.push(`/courses?${params.toString()}`, { scroll: false });
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <Select
        value={selectedLevel}
        onChange={handleChange}
        autoWidth
        size="small"
      >
        <MenuItem value="All">All Courses</MenuItem>
        <MenuItem value="Noob">Noob</MenuItem>
        <MenuItem value="Intermediate">Intermediate</MenuItem>
        <MenuItem value="Advanced">Advanced</MenuItem>
      </Select>
    </FormControl>
  );
}
