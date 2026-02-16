"use client";

import { Checkbox } from "@mui/material";
import { useChapterNotification } from "@/hooks/useChapterNotification";
import ChapterNotifications from "@/components/courses/individual-course-page/lessons-sidebar/chapter-notification";

function LessonCheckbox({
  chapterId,
  chapterTitle,
  // isAuth,
}: {
  chapterId: string;
  chapterTitle: string;
  // isAuth: boolean;
}) {
  const {
    chapterNotifications,
    setChapterNotifications,
    addChapterNotifications,
  } = useChapterNotification();

  const handleCheckboxChange = (
    chapterId: string,
    chapterTitle: string,
    eventChecked: boolean
  ) => {
    addChapterNotifications(chapterId, chapterTitle, eventChecked);
  };

  return (
    <>
      <Checkbox
        // disabled={!isAuth}
        onChange={(event) =>
          handleCheckboxChange(chapterId, chapterTitle, event.target.checked)
        }
      />
      <ChapterNotifications
        chapterNotifications={chapterNotifications}
        setChapterNotifications={setChapterNotifications}
      />
    </>
  );
}

export default LessonCheckbox;
