/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography, Avatar } from "@mui/material";
import { ChipLevel } from "@/components/chip-level/chip";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
// import { calculateTotalDuration } from "@/lib/helpers/minutes-to-hours";
import { getTotalDuration } from "@/lib/helpers/minutes-to-hours";

import { GetStartedButton } from "../../get-started-button/get-started";
export const CoursePath = ({ name, levels }: any) => {
  const noob = levels.find((level: any) => level.level === "Noob");
  const intermediate = levels.find((level: any) => level.level === "Intermediate");
  const advanced = levels.find((level: any) => level.level === "Advanced");
  
  const noobDuration = getTotalDuration(noob);
  const intermediateDuration = getTotalDuration(noob);
  const advancedDuration = getTotalDuration(noob);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 6 }}
    >
      <Typography variant="h4">The {name} Path</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            border: "1px solid #99AABB",
            borderRadius: 4,
            boxShadow: "0 4px 8px -2px #1018281a, 0 2px 4px -2px #1018280f",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 2,
                borderBottom: "2px solid #ccc",
              }}
            >
              <Typography variant="h5">Intro to {name}</Typography>
              <ChipLevel label={noob.level} />
            </Box>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginTop: "10px", flexGrow: 1 }}
            >
              {noob.description}
            </Typography>
            <Avatar
              src="/solidity-overview.png"
              alt="start here"
              sx={{
                width: "70%",
                height: "auto",
                marginTop: 6,
                display: { xs: "none", md: "block" },
              }}
              variant="square"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              color: "text.secondary",
              p: 3,
              pt: 0,
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Typography sx={{ display: "flex", gap: 0.5 }}>
                <AccessTimeIcon />
                {noobDuration}
              </Typography>
              <Typography sx={{ display: "flex", gap: 0.5 }}>
                <SchoolOutlinedIcon />
                {noob.lessons.length} lessons
              </Typography>
              <Typography sx={{ display: "flex", gap: 0.5 }}>
                <IntegrationInstructionsOutlinedIcon />3 projects
              </Typography>
            </Box>
            <GetStartedButton id={noob.id}>Get Started</GetStartedButton>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              flex: 1,
              border: "1px solid #99AABB",
              p: 3,
              borderRadius: 4,
              boxShadow: "0 4px 8px -2px #1018281a, 0 2px 4px -2px #1018280f",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 2,
                borderBottom: "2px solid #ccc",
              }}
            >
              <Typography variant="h5">
                {intermediate.level} {name}
              </Typography>
              <ChipLevel label={intermediate.level} />
            </Box>

            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ marginTop: "10px" }}
              >
                {intermediate.description}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "center" },
                color: "text.secondary",
                marginTop: 2,
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Typography sx={{ display: "flex", gap: 0.5 }}>
                  <AccessTimeIcon />
                  {intermediateDuration}
                </Typography>
                <Typography sx={{ display: "flex", gap: 0.5 }}>
                  <SchoolOutlinedIcon />
                  {intermediate.lessons.length} lessons
                </Typography>
                <Typography sx={{ display: "flex", gap: 0.5 }}>
                  <IntegrationInstructionsOutlinedIcon />3 projects
                </Typography>
              </Box>
              <GetStartedButton id={intermediate.id}>
                Get Started
              </GetStartedButton>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              border: "1px solid #99AABB",
              p: 3,
              borderRadius: 4,
              boxShadow: "0 4px 8px -2px #1018281a, 0 2px 4px -2px #1018280f",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 2,
                borderBottom: "2px solid #ccc",
              }}
            >
              <Typography variant="h5">
                {advanced.level} {name}
              </Typography>
              <ChipLevel label={advanced.level} />
            </Box>

            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ marginTop: "10px" }}
              >
                {advanced.description}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "text.secondary",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "flex-start", md: "center" },
                marginTop: 2,
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Typography sx={{ display: "flex", gap: 0.5 }}>
                  <AccessTimeIcon />
                  {advancedDuration}
                </Typography>
                <Typography sx={{ display: "flex", gap: 0.5 }}>
                  <SchoolOutlinedIcon />
                  {advanced.lessons.length} lessons
                </Typography>
                <Typography sx={{ display: "flex", gap: 0.5 }}>
                  <IntegrationInstructionsOutlinedIcon />3 projects
                </Typography>
              </Box>
              <GetStartedButton id={advanced.id}>Get Started</GetStartedButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
