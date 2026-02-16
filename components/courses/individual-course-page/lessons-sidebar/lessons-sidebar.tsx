import {
  AccordionSummary,
  Typography,
  Accordion,
  Box,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CourseType } from "@/lib/types/data-type";
import ChapterProgress from "./chapter-progress";
import ChapterTitle from "./chapter-title";
import LessonCheckbox from "./checkbox";
import { isServerAuthenticated } from "@/lib/auth/isServerAuth";
import AccordionDetailsWrapper from "./accordion-details-wrapper";

export async function LessonSidebar({ course }: { course: CourseType }) {
  const isAuth = await isServerAuthenticated();

  return (
    <Box sx={{ minWidth: { xs: 0, lg: "363px" } }}>
      <Box sx={{ p: "20px", pb: 0 }}>
        <Typography variant="subtitle2" color="text.secondary">
          {course.name} developer
        </Typography>
        <Typography variant="h6" color="text.primary" fontWeight={600}>
          {course.level} {course.name}
        </Typography>
        <ChapterProgress progress={23} />
      </Box>
      <Box
        sx={{
          maxHeight: { lg: "800px" },
          overflowX: { lg: "hidden" },
          overflowY: "auto",
          p: "20px 10px 20px 20px",
          pt: 0,
          scrollbarGutter: "stable",
        }}
      >
        <Divider sx={{ mt: "12px" }} />
        {course.lessons?.map((lesson, index) => (
          <Accordion key={index} disableGutters sx={{ boxShadow: 0 }}>
            <AccordionSummary
              sx={{
                backgroundColor: "background.default",
                p: 1,
                display: "flex",
                justifyContent: "space-between",
                gap: 1,
              }}
              expandIcon={<ExpandMoreIcon />}
            >
              <Box>
                <Typography fontWeight={600}>{`Lesson ${index + 1}: ${
                  lesson.title
                }`}</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Duration: 2h 55min • 0/35
                </Typography>
              </Box>
            </AccordionSummary>

            {lesson.chapters.map((chapter, index) => (
              <Box key={index}>
                {/* <AccordionDetails
                  sx={{
                    backgroundColor:
                      currentChapter === chapter.id
                        ? "rgb(234, 236, 240)"
                        : "background.default",
                    p: 1,
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                > */}
                <AccordionDetailsWrapper id={chapter.id}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/* <fieldset disabled={!isAuth}> */}
                    <LessonCheckbox
                      chapterId={chapter.id}
                      chapterTitle={chapter.title}
                      isAuth={isAuth}
                    />
                    {/* </fieldset> */}
                  </Box>
                  <Box>
                    <ChapterTitle
                      index={index}
                      courseId={course.id}
                      lessonId={lesson.id}
                      chapterId={chapter.id}
                      chapterTitle={chapter.title}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {chapter.description}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="span"
                    >
                      Duration:&nbsp;
                    </Typography>
                    <Typography variant="body2" component="span">
                      {chapter.duration}
                    </Typography>
                  </Box>
                </AccordionDetailsWrapper>
              </Box>
            ))}
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
// import {
//   AccordionSummary,
//   Typography,
//   Accordion,
//   Box,
//   Divider,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { CourseType } from "@/lib/types/data-type";
// import ChapterProgress from "./chapter-progress";
// import ChapterTitle from "./chapter-title";
// import LessonCheckbox from "./checkbox";
// import { isServerAuthenticated } from "@/lib/auth/isServerAuth";
// import ChapterDetails from "./chapter-details";

// export async function LessonSidebar({ course }: { course: CourseType }) {
//   const isAuth = await isServerAuthenticated();
//   return (
//     <Box sx={{ minWidth: "363px" }}>
//       <Box sx={{ p: "20px", pb: 0 }}>
//         <Typography variant="subtitle2" color="text.secondary">
//           {course.name} developer
//         </Typography>
//         <Typography variant="h6" color="text.primary" fontWeight={600}>
//           {course.level} {course.name}
//         </Typography>
//         <ChapterProgress progress={23} />
//       </Box>
//       <Box
//         sx={{
//           maxHeight: { lg: "800px" },
//           overflowX: { lg: "hidden" },
//           overflowY: "auto",
//           p: "20px 10px 20px 20px",
//           pt: 0,
//           scrollbarGutter: "stable",
//         }}
//       >
//         <Divider sx={{ mt: "12px" }} />
//         {course.lessons?.map((lesson, index) => (
//           <Accordion key={index} disableGutters sx={{ boxShadow: 0 }}>
//             <AccordionSummary
//               sx={{
//                 backgroundColor: "background.default",
//                 p: 1,
//                 display: "flex",
//                 justifyContent: "space-between",
//                 gap: 1,
//               }}
//               expandIcon={<ExpandMoreIcon />}
//             >
//               <Box>
//                 <Typography
//                   fontWeight={600}
//                 >{`Lesson ${index}: ${lesson.title}`}</Typography>
//                 <Typography variant="subtitle2" color="text.secondary">
//                   Duration: 2h 55min • 0/35
//                 </Typography>
//               </Box>
//             </AccordionSummary>

//             {lesson.chapters.map((chapter, index) => (
//               <Box key={index}>
//                 <ChapterDetails chapterId={chapter.id}>
//                   <Box sx={{ display: "flex", alignItems: "center" }}>
//                     {/* <fieldset disabled={!isAuth}> */}
//                     <LessonCheckbox isAuth={isAuth} chapter={chapter} />
//                     {/* </fieldset> */}
//                   </Box>
//                   <Box>
//                     <ChapterTitle
//                       index={index}
//                       courseId={course.id}
//                       lessonId={lesson.id}
//                       chapterId={chapter.id}
//                       chapterTitle={chapter.title}
//                     />
//                     <Typography variant="body2" color="text.secondary">
//                       {chapter.description}
//                     </Typography>

//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       component="span"
//                     >
//                       Duration:&nbsp;
//                     </Typography>
//                     <Typography variant="body2" component="span">
//                       {chapter.duration}
//                     </Typography>
//                   </Box>
//                 </ChapterDetails>
//               </Box>
//             ))}
//           </Accordion>
//         ))}
//       </Box>
//     </Box>
//   );
// }
