import { Header } from "@/components/home/home-page/header";
import { Stats } from "@/components/home/home-page/stats";
import { EducationOverview } from "@/components/home/home-page/education-overview";
import { Courses } from "@/components/home/home-page/courses";
import { Box } from "@mui/material";
import Faqs from "@/components/home/home-page/faqs";

export default function page() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Header />
      <Stats />
      <EducationOverview />
      <Courses />
      <Faqs />
    </Box>
  );
}
