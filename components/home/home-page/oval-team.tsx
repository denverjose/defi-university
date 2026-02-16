import { Box, Avatar } from "@mui/material";

export const OvalTeam = () => {
  const teamMembers = [
    {
      src: "/member1.jpg",
      alt: "C 3",
      size: 100,
      top: "52%",
      left: "75%",
    },
    {
      src: "/member2.jpg",
      alt: "D 4",
      size: 60,
      top: "10%",
      left: "25%",
    },
    {
      src: "/member3.jpg",
      alt: "E 5",
      size: 90,
      top: "1%",
      left: "70%",
    },
    {
      src: "/member4.jpg",
      alt: "F",
      size: 80,
      top: "40%",
      left: "10%",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        pb: { xs: 15, sm: 10 },
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle,rgb(74, 107, 192), rgb(42, 83, 187),#FFFFFF, #FFFFFF)",
        }}
      >
        {/* Center Avatar */}
        <Box
          sx={{
            p: 7,
          }}
        >
          <Avatar
            src="/center.jpg"
            alt="Center Member"
            sx={{
              width: { xs: 120, md: 150 },
              height: { xs: 120, md: 150 },
              border: "5px solid  rgb(31, 91, 233)",
            }}
          />
        </Box>
        {/* Radial Team Members */}
        {teamMembers.map((member, index) => (
          <Avatar
            key={index}
            src={member.src}
            alt={member.alt}
            sx={{
              position: "absolute",
              width: { xs: member.size / 1.5, md: member.size },
              height: { xs: member.size / 1.5, md: member.size },
              border: "3px solid rgb(165, 170, 214)",
              top: member.top,
              left: member.left,
            }}
          />
        ))}
        {/* Circular Rings */}
        <Box
          sx={{
            position: "absolute",
            borderRadius: "50%",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            width: 300,
            height: 300,
            animation: "spin 10s linear infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            borderRadius: "50%",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            width: 500,
            height: 500,
            animation: "spin 15s linear infinite reverse",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            borderRadius: "50%",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            width: 700,
            height: 700,
          }}
        />
      </Box>
    </Box>
  );
};
