export interface CourseType {
  id: string;
  name: string;
  description: string;
  level?: string;
  lessons?: LessonType[];
}

export interface LessonType {
  id: string;
  title: string;
  chapters: ChapterType[];
}

export interface ChapterType {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
}
