import { Box, Divider, Link, Typography, List, ListItem } from "@mui/material";

// export default function WrittenLesson({ lessonType }: { lessonType: string }) {
export default function WrittenLesson() {
  return (
    // <Box sx={{ display: lessonType === "video" ? "none" : "block" }}>
    <Box>
      <Typography
        variant="subtitle1"
        sx={{ fontStyle: "italic" }}
        color="text.secondary"
      >
        Follow along with the video
      </Typography>
      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" fontWeight={600} gutterBottom>
        Introduction
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to the DeFiU. This platform offers a comprehensive learning
        experience by combining video lessons, written content, and interactive
        discussions.
      </Typography>

      <Typography variant="h5" fontWeight={600} gutterBottom>
        Resources
      </Typography>
      <Typography variant="body1" paragraph>
        In the top right corner of the lesson view, you'll find a link to the
        <Link
          href="https://github.com/Cyfrin/foundry-full-course-cu"
          target="_blank"
        >
          GitHub resources 📂
        </Link>
        page. This guide contains all the code, information, and materials
        necessary for the course. On GitHub, the{" "}
        <Link
          href="https://github.com/Cyfrin/foundry-full-course-cu/discussions"
          target="_blank"
        >
          discussions tab 💬
        </Link>
        allows you to interact with fellow learners and the community, where you
        can ask questions, share insights, and solve problems collaboratively.
      </Typography>

      <Typography variant="body1" paragraph>
        Next to the video lesson, there is a <strong>written lesson</strong> tab
        📝. This tab provides the course content in text format, which is useful
        for reading along, copy-pasting code snippets, or reviewing updates.
      </Typography>

      <Typography variant="body1" paragraph>
        If you're watching on YouTube, links to these resources are available in
        the video description. However, watching this course on DeFiU offers
        additional benefits like tracking your progress and accessing written
        lessons, which will enhance your learning experience.
      </Typography>

      <Typography variant="h5" fontWeight={600} gutterBottom>
        Best Practices for Learning
      </Typography>
      <List sx={{ pl: 4, listStyle: "decimal" }}>
        <ListItem sx={{ display: "list-item", padding: 0 }}>
          <Typography variant="body1">
            🌐 <strong>Engage with the Community</strong>: Use GitHub
            discussions and Discord for real-time communication. Asking
            questions and interacting with others can greatly enhance your
            understanding.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: "list-item", padding: 0 }}>
          <Typography variant="body1">
            🏝️ <strong>Take Regular Breaks</strong>: Avoid cramming all the
            information in one go. Your brain needs time to process and absorb
            knowledge.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: "list-item", padding: 0 }}>
          <Typography variant="body1">
            ⏩ <strong>Adjust the Video Playback Speed</strong>: Use the speed
            controls in the video player to match the lesson pace with your
            learning speed.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: "list-item", padding: 0 }}>
          <Typography variant="body1">
            📝 <strong>Use Subtitles if Needed</strong>: If English isn't your
            first language, take advantage of subtitle options in the video
            settings.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: "list-item", padding: 0 }}>
          <Typography variant="body1">
            🔄 <strong>Follow a Modular Approach</strong>: The course is
            flexible. Jump between topics based on your interests and needs.
            Revisit lessons to reinforce knowledge.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: "list-item", padding: 0 }}>
          <Typography variant="body1">
            🎯 <strong>Utilize Quizzes and Coding Challenges</strong>: DeFiU
            offers quizzes and coding challenges at the end of each section.
            Completing them helps solidify learning.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: "list-item", padding: 0 }}>
          <Typography variant="body1">
            ❓ <strong>Learn to Ask Well-Formatted Questions</strong>: Asking
            clear, concise questions in forums and discussions will get you
            better help from others.
          </Typography>
        </ListItem>
      </List>

      <Typography variant="h5" fontWeight={600} gutterBottom>
        🧑‍💻 Test Yourself
      </Typography>
      <Typography variant="body1" paragraph>
        📕 Provide at least 5 recommended best practices to follow throughout
        this course.
      </Typography>

      <Typography variant="h5" fontWeight={600} gutterBottom>
        Conclusion
      </Typography>
      <Typography variant="body1" paragraph>
        By following these guidelines, you'll be well-equipped to make the most
        out of this course. Engaging with the community, pacing your learning,
        and utilizing DeFiU resources will significantly enhance your learning
        experience.
      </Typography>
    </Box>
  );
}
