## Getting Started
Make sure you run 
`npm install`

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# My Course Platform

This is a Next.js + TypeScript + MUI + framer motion templated web application for browsing and learning courses.

## Available Pages

### 1. Courses Page
- **Route:** `/courses`
- **Description:** Lists all available courses.

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
