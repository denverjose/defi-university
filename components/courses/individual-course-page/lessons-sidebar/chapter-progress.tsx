
import { LinearProgress, Box, Typography } from "@mui/material";

interface ChapterProgressProps {
  progress: number;
}

const ChapterProgress: React.FC<ChapterProgressProps> = ({ progress }) => {
  return (
    <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ flexGrow: 1, height: 8, borderRadius: 5, bgcolor: "#f0f0f0" }}
      />
      <Typography variant="subtitle2" color="text.secondary" sx={{ ml: 1 }}>
        {progress}%
      </Typography>
    </Box>
  );
};

export default ChapterProgress;
  