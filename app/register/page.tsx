import { Box, Avatar, Typography } from "@mui/material";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { registerMetadata } from "@/lib/metadata";
import Link from "next/link";
import RegisterForm from "@/components/auth/sign-up-form";

export const metadata: Metadata = registerMetadata;

export default async function page() {
  const session = await auth();

  if (session) {
    redirect("/authenticated");
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          flex: { lg: 1 },
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ p: { xs: 2, md: 5, lg: 15 }, marginTop: { xs: 10, lg: 0 } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            <Typography variant="h3">Create an account</Typography>
            <Typography variant="h6" color="text.secondary">
              Join us today! Fill in your details to get started.
            </Typography>
          </Box>
          <RegisterForm />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            Already have an account?{" "}
            <Link href="/login" passHref>
              <Typography
                component="span"
                color="primary"
                sx={{ cursor: "pointer" }}
              >
                Log in
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Box>
      <Avatar
        variant="square"
        sx={{
          display: { xs: "none", lg: "block" },
          flex: 1,
          p: 2,
          paddingRight: 0,
          height: "100%",
          width: "auto",
          borderRadius: 4,
        }}
        src="/login.png"
      />
    </Box>
  );
}
