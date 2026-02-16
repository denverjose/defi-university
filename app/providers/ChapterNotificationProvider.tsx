"use client";
import { createContext, useState, ReactNode } from "react";

export type ChapterNotificationType = {
  id: string;
  title: string;
  completed: boolean;
};

type ChapterNotificationContextType = {
  chapterNotifications: ChapterNotificationType[];
  addChapterNotifications: (
    id: string,
    title: string,
    completed: boolean
  ) => void;
  removeChapterNotifications: (id: string) => void;
  setChapterNotifications: React.Dispatch<
    React.SetStateAction<ChapterNotificationType[]>
  >;
};

// Create the context
export const ChapterNotificationContext = createContext<
  ChapterNotificationContextType | undefined
>(undefined);

// Provider component
export function ChapterNotificationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [chapterNotifications, setChapterNotifications] = useState<
    ChapterNotificationType[]
  >([]);

  const addChapterNotifications = (
    id: string,
    title: string,
    completed: boolean
  ) => {
    const newChapterNotification: ChapterNotificationType = {
      id: `${id}${Math.random()}`,
      title: title,
      completed,
    };
    setChapterNotifications((prev) => [...prev, newChapterNotification]);

    setTimeout(() => {
      removeChapterNotifications(newChapterNotification.id);
    }, 5000);
  };

  const removeChapterNotifications = (id: string) => {
    setChapterNotifications((prev) => prev.filter((chp) => chp.id !== id));
  };

  return (
    <ChapterNotificationContext.Provider
      value={{
        chapterNotifications,
        addChapterNotifications,
        removeChapterNotifications,
        setChapterNotifications,
      }}
    >
      {children}
    </ChapterNotificationContext.Provider>
  );
}
