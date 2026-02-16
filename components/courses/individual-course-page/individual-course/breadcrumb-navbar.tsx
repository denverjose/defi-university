"use client";

import Link from "next/link";
import { Breadcrumbs, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { usePathname } from "next/navigation"; // ✅ Import to check current route

interface BreadcrumbProps {
  courseName: string;
  level: string;
}

export function BreadcrumbNav({ courseName, level }: BreadcrumbProps) {
  const pathname = usePathname();
  const pathSegments = pathname?.split("/").filter(Boolean) || [];

  // ✅ Only show Breadcrumbs on `/course/[slug]`
  if (pathSegments.length > 3 || pathSegments[0] !== "courses") return null;

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ paddingBottom: { xs: 2, md: 4 } }}
    >
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", color: "#555" }}
      >
        <HomeIcon fontSize="small" />
      </Link>

      <Link href="/courses" style={{ color: "#555", textDecoration: "none" }}>
        <Typography variant="subtitle1" color="#text.secondary">
          Courses
        </Typography>
      </Link>

      <Link
        href={`/courses?level=${level}`}
        style={{ color: "#555", textDecoration: "none" }}
      >
        <Typography variant="subtitle1" color="#text.secondary">
          {level}
        </Typography>
      </Link>

      <Typography variant="subtitle1" color="primary" fontWeight="bold">
        {courseName}
      </Typography>
    </Breadcrumbs>
  );
}
