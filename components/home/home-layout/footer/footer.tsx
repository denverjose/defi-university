import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 7,
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Typography variant="h3" fontFamily={"Gochi Hand"}>
        DeFiU
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 1, md: 2 },
        }}
      >
        <Box>
          <Button color="inherit" href="/privacy">
            <FacebookIcon fontSize="large" />
          </Button>{" "}
          <Button color="inherit" href="/privacy">
            <InstagramIcon fontSize="large" />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Link
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button sx={{ width: "max-content", p: 0, color: "text.primary" }}>
              Privacy Policy
            </Button>
          </Link>
          <Link
            href="/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button sx={{ width: "max-content", p: 0, color: "text.primary" }}>
              Mobile Terms & Conditions
            </Button>
          </Link>
        </Box>
      </Box>
      <Typography
        variant="h5"
        sx={{ fontFamily: "Gochi Hand", textAlign: "center" }}
      >
        Copyright ©2024 Metaverse Group.
      </Typography>
    </Box>
  );
};
