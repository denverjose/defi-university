import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

export const CourseOverview = () => {
  const topics = [
    "Blockchain developer fundamentals",
    "Introduction to blockchain gas",
    "Transaction signatures",
    "Smart contract development",
    "Solidity gas optimization techniques",
  ];
  const careers = [
    {
      title: "Smart Contract Auditor",
      salary: "$100,000 - $200,000",
    },
    {
      title: "Smart Contract Engineer",
      salary: "$100,000 - $150,000",
    },
    {
      title: "Web3 Developer Relations",
      salary: "$85,000 - $125,000",
    },
    {
      title: "Blockchain Developer",
      salary: "$80,000 - $120,000",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        p: { xs: 2, md: 3 },
        borderRadius: 4,
        border: "1px solid rgb(234, 236, 240)",
      }}
    >
      <Typography color="primary" variant="subtitle1" sx={{ fontWeight: 600 }}>
        Course Overview
      </Typography>
      <Typography variant="h6" fontWeight={600}>
        About the Course
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography gutterBottom variant="h6" fontWeight={600}>
        What you'll learn
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {topics.map((topic, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              width: { xs: "100%", sm: "48%" },
            }}
          >
            <CheckCircleIcon sx={{ color: "lightgreen" }} />
            <Typography variant="body2">{topic}</Typography>
          </Box>
        ))}
      </Box>
      <Divider sx={{ my: 2 }} />
      <Typography gutterBottom variant="subtitle1" fontWeight={600}>
        Course Description
      </Typography>
      <Typography sx={{ mt: 2 }} gutterBottom variant="body2">
        Learn Solidity with DeFiU. This Solidity course will teach you how to
        become a smart contract developer. Learn one of the most in-demand
        skills of this year!
      </Typography>

      <Typography sx={{ mt: 2 }} gutterBottom variant="body2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
        veritatis.
      </Typography>
      <Typography sx={{ mt: 2 }} gutterBottom variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis
        sequi debitis voluptates aut repellendus, ipsam vitae dicta iste
        tempore.{" "}
      </Typography>

      <Typography sx={{ mt: 2 }} gutterBottom variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
        dolores iusto hic explicabo esse culpa.{" "}
      </Typography>
      <ul style={{ marginTop: 10, paddingLeft: 40 }}>
        <li>
          <Typography gutterBottom variant="subtitle2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            similique?
          </Typography>
        </li>
        <li>
          <Typography gutterBottom variant="subtitle2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
            deserunt. Aliquid sequi quibusdam commodi voluptates odio quaerat
            distinctio! Officia, consectetur.
          </Typography>
        </li>
        <li>
          <Typography gutterBottom variant="subtitle2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            laboriosam fuga ex dolores. Nobis, ex?
          </Typography>
        </li>
        <li>
          <Typography gutterBottom variant="subtitle2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            fugiat rem fuga est itaque. Enim perspiciatis aspernatur sunt minima
            quo dicta eum velit unde quibusdam.
          </Typography>
        </li>
      </ul>
      <Typography sx={{ mt: 2 }} gutterBottom variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
        dolores iusto hic explicabo esse culpa.{" "}
      </Typography>
      <Typography sx={{ mt: 2 }} gutterBottom variant="body2">
        Learn Solidity with DeFiU. This Solidity course will teach you how to
        become a smart contract developer. Learn one of the most in-demand
        skills of this year! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Officia dolores iusto hic explicabo esse culpa. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Nulla laboriosam fuga ex dolores.
        Nobis, ex? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nulla laboriosam fuga ex dolores. Nobis, ex?
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography gutterBottom variant="subtitle1" fontWeight={600}>
        Who is this course for?
      </Typography>
      <ul style={{ marginTop: 10, paddingLeft: 40 }}>
        <li>
          <Typography gutterBottom variant="subtitle2">
            Software Engineer
          </Typography>
        </li>
        <li>
          <Typography gutterBottom variant="subtitle2">
            Web3 developers
          </Typography>
        </li>
        <li>
          <Typography gutterBottom variant="subtitle2">
            Finance professionals
          </Typography>
        </li>
        <li>
          <Typography gutterBottom variant="subtitle2">
            Security researchers
          </Typography>
        </li>
        <li>
          <Typography gutterBottom variant="subtitle2">
            CTOs
          </Typography>
        </li>
      </ul>
      <Divider sx={{ my: 2 }} />

      <Typography gutterBottom variant="subtitle1" fontWeight={600}>
        Potential Careers{" "}
      </Typography>
      <Box
        sx={{
          overflowX: "auto", // Enables horizontal scrolling
          display: "flex",
          gap: 2,
          scrollbarWidth: "thin", // Thin scrollbar (Firefox)
          "&::-webkit-scrollbar": { height: "6px" }, // Custom scrollbar (WebKit browsers)
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "4px",
          },
        }}
      >
        {careers.map((career, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{
              flexShrink: 0, // Prevents items from shrinking
              backgroundColor: "background.default",
            }}
          >
            <CardContent>
              <Typography variant="subtitle2" fontWeight="bold">
                {career.title}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                <WorkOutlineIcon
                  fontSize="small"
                  sx={{ verticalAlign: "middle", mr: 0.5 }}
                />
                {career.salary} (avg. salary)
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
