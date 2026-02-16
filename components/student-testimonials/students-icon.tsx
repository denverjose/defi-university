import React from "react";
import { Avatar, Box, Typography, AvatarGroup } from "@mui/material";

import { SxProps } from "@mui/system";
import students from "@/lib/constants/students";

interface StudentsProps {
  isTen?: boolean;
  sx?: SxProps;
}

export const Students: React.FC<StudentsProps> = ({ isTen = true, sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 1,
        borderRadius: 2,
        overflow:'hidden',
        width:'100%',
        ...sx,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {isTen ? "Over 200,000+ students taught" : ""}
      </Typography>
      <AvatarGroup
        max={isTen ? 10 : 6}
        spacing="small"
        // sx={{
        //   display: "flex",
        //   gap:-2
        // "& .MuiAvatar-root": {
        //   width: 40, // Adjust size of avatars
        //   height: "auto",
        //   border: "2px solid white", // Add white border between avatars
        //   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional shadow for a subtle effect
        // },
        // }}
      >
        {students.map((student, index) => (
          <Avatar
            key={index}
            alt={student.fullName}
            src={student.profilePicture}
          />
        ))}
        {/* <Avatar alt="Student 1" src="/students/student1.png" />
        <Avatar alt="Student 2" src="/students/student2.png" />
        <Avatar alt="Student 3" src="/students/student3.png" />
        <Avatar alt="Student 4" src="/students/student4.png" />
        <Avatar alt="Student 5" src="/students/student5.jpg" />
        <Avatar alt="Student 6" src="/students/student6.png" />
        <Avatar alt="Student 7" src="/students/student7.png" />
        <Avatar alt="Student 8" src="/students/student8.png" />
        <Avatar alt="Student 9" src="/students/student9.jpg" />
        <Avatar alt="Student 10" src="/students/student10.png" />
        */}
      </AvatarGroup>
    </Box>
  );
};
