import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export type Message = {
  id: string;
  title: string;
  completed: boolean;
};

export default function ChapterNotifications({
  chapterNotifications,
  setChapterNotifications,
}: {
  chapterNotifications: Message[];
  setChapterNotifications: React.Dispatch<React.SetStateAction<Message[]>>;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        maxWidth: "276px",
        overflow: "hidden",
        zIndex: 10,
      }}
    >
      <AnimatePresence>
        {chapterNotifications.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              backgroundColor: item.completed ? "#4caf50" : "#FFA000",
              color: "#fff",
              padding: "16px 24px",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              position: "relative",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="subtitle1" fontWeight={600}>
                {item.completed ? "Lesson Complete" : "Lesson Incomplete"}
              </Typography>
              <Typography variant="body2">
                Lesson "{item.title}" has been marked as{" "}
                {item.completed ? "complete" : "incomplete"}
              </Typography>
            </Box>
            <Box sx={{ position: "absolute", top: 10, right: 10 }}>
              <IconButton
                size="small"
                color="inherit"
                onClick={() => {
                  setChapterNotifications((prev) =>
                    prev.map((msg) =>
                      msg.id === item.id ? { ...msg, exiting: true } : msg
                    )
                  );

                  setTimeout(() => {
                    setChapterNotifications((prev) =>
                      prev.filter((msg) => msg.id !== item.id)
                    );
                  }, 0);
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
