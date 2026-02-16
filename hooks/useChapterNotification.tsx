import { useContext } from "react";
import { ChapterNotificationContext } from "@/app/providers/ChapterNotificationProvider";


export function useChapterNotification() {
  const context = useContext(ChapterNotificationContext);
  if (!context) {
    throw new Error(
      "useChapterNotification must be used within a ChapterNotificationProvider"
    );
  }
  return context;
}
