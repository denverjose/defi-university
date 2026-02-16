import { Card, CardMedia } from "@mui/material";

export default function VideoLesson({
  videoUrl,
  videoTitle,
  isAuth,
}: // lessonType,
{
  videoUrl: string;
  videoTitle: string;
  isAuth: boolean;
  // lessonType: string;
}) {
  return (
    <Card
      sx={{
        width: "100%",
        position: "relative",
        paddingTop: "56.25%",
        // display: lessonType === "video" ? "block" : "none",
      }}
    >
      <CardMedia
        component="iframe"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          pointerEvents: `${isAuth ? "auto" : "none"}`,
        }}
        src={videoUrl}
        title={videoTitle}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </Card>
  );
}
