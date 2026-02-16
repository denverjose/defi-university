import { Box, Typography, Container, Avatar } from "@mui/material";
import { members } from "@/lib/constants/about";
import type { Metadata } from "next";
import { aboutMetadata } from "@/lib/metadata";

export const metadata: Metadata = aboutMetadata;

const page = () => {
  return (
    <Box
      sx={{
        paddingY: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            py: 12,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              color="primary"
              variant="subtitle1"
              sx={{ fontWeight: 600, marginBottom: 2 }}
            >
              Working at DeFiU
            </Typography>
            <Typography
              variant="h3"
              sx={{
                marginBottom: 6,
              }}
            >
              Waking up knowing you're changing tomorrow's world
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Home to some of the market's best smart contract security
              researchers and a stellar team - We gather leading professionals
              worldwide to build an industry-changing ecosystem. Coming from
              backgrounds like Chainlink, Alchemy, Aragon, WorldCoin, Microsoft,
              Google, and other popular FinTech companies, the team at DeFiU is
              spread remotely worldwide. A culture-first company built to make
              its individuals, partners, and industry set for success.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Avatar
              alt="DeFiU"
              src="/about.webp"
              variant="square"
              sx={{ height: "auto", width: { xs: "100%", md: "80%" } }}
            />
          </Box>
        </Box>
      </Container>
      {members.map((section, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor:
              index % 2 === 0 ? "background.paper" : "background.default",
            borderRadius: 4,
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ mb: 6, textAlign: "center" }}>
              {/* Section Title */}
              {section.department === "Leadership" && (
                <Typography
                  variant="subtitle1"
                  color="primary"
                  sx={{ fontWeight: 600 }}
                >
                  Our Team
                </Typography>
              )}
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
                {section.department}
              </Typography>
              {/* Members List */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: 4,
                }}
              >
                {section.members.map((member, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      maxWidth: 200,
                    }}
                  >
                    <Avatar
                      src={member.imageUrl}
                      sx={{ width: 80, height: 80, mb: 2 }}
                      alt={member.name}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.role}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {member.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>
      ))}
    </Box>
  );
};

export default page;
