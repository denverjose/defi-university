import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Container,
} from "@mui/material";
import students from "@/lib/constants/students";

const StudentTestimonials = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        margin: "auto",
        paddingY: 9,
        backgroundColor: "background.paper",
      }}
    >
      <Container disableGutters maxWidth="lg">
        <Box sx={{ marginBottom: 6, px: 2 }}>
          <Typography
            color="primary"
            variant="subtitle1"
            sx={{ fontWeight: 600 }}
          >
            Testimonials
          </Typography>
          <Typography
            variant="h3"
            sx={{
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            Students Reviews
          </Typography>
          <Typography color="text.secondary" variant="body1">
            Read what our students have to say about this course.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
            gap: 3,
            p: 4,
          }}
        >
          {students.slice(0, 9).map((student, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: "100%", md: "30%" },
                minWidth: "280px",
                display: "flex",
                backgroundColor: "background.default",
                flexDirection: "column",
                p: 4,
                gap: 3,
                justifyContent: "space-between",
                boxShadow: 0,
                borderRadius: "12px",
                border: "1px solid rgb(234, 236, 240)",
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography variant="body2" color="text.secondary" align="left">
                  This course was a game-changer for me. I transitioned into a
                  full-time role as a {student.jobTitle}! Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Accusantium iste atque
                  incidunt magnam nemo vitae!
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                  src={student.profilePicture}
                  alt={student.fullName}
                  sx={{ width: 48, height: 48 }}
                />
                <Box sx={{ textAlign: "left" }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {student.fullName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {student.jobTitle}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StudentTestimonials;
