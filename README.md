## Getting Started


## Environment Variables

This project requires a `.env` file to run properly. The `.env` file contains sensitive information such as API keys and other configuration values.  

**Important:** The `.env` file is not included in the repository for security reasons.  

If you want to run the project locally, **please contact the project owner** (or me) to provide the `.env` file.  

Once you have the `.env` file, place it in the root directory of the project and run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# My Course Platform

# Taxpro Accelerator (Previous Version)

This is a previous version of the learning platform I built while working for a US client.  
This is a Next.js + TypeScript + MUI + framer motion templated web application for browsing and learning courses.

**Live version:** [https://taxproacademy.tax](https://taxproacademy.tax)  

## Available Pages

### 1. Courses Page
- **Route:** `/courses`
- **Description:** Lists all available courses.  
  Courses can be filtered by level using the `level` query parameter (server-side filtering).  
  Example: `/courses?level=Noob` will show only courses with the "Noob" level.
- **Implementation Details:**
  - Uses server-side fetching via `getFilteredCourses(level)` to get courses based on the selected level.
  - `FilteredCourses` component displays the list of courses.
  - `NextStep` component shows recommendations or next actions.
  - Suspense fallback shows a loading message while courses are being fetched.


### 2. Single Course Page
- **Route:** `/courses/[slug]`
- **Description:** Displays a single course with its chapters and lessons.
- **Example:** [http://localhost:3000/courses/noob-solidity](http://localhost:3000/courses/noob-solidity)

### 3. Lesson Page
- **Route:** `/courses/[slug]/[chapter]/[lesson]`
- **Description:** Displays a lesson with video and lesson description.  
  Navigate here by clicking a lesson inside the single course page.
- **Example:** [http://localhost:3000/courses/noob-solidity/simple-storage/simple-storage-introduction](http://localhost:3000/courses/noob-solidity/simple-storage/simple-storage-introduction)

#### Lesson Features
- Click the checkbox to mark a lesson as complete or incomplete.  
  - **Checked:** Shows a notification that `<lesson.name>` is complete.
  - **Unchecked:** Shows a notification that `<lesson.name>` is incomplete.
- Authentication is temporarily commented out. If the user is not authenticated, the checkbox is disabled.


This makes it clear the project is inspired by **Updraft**, while keeping all your features and `.env` instructions. 
