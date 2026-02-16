import SignIn from "@/components/auth/social-media-login";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { loginMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = loginMetadata;

export default async function page({
  searchParams: searchParamsPromise,
}: {
  searchParams?: Promise<{ callbackUrl?: string }>;
}) {
  const session = await auth();
  const searchParams = await searchParamsPromise; // Await the Promise

  if (session) {
    redirect(searchParams?.callbackUrl || "/courses");
  } else {
    console.log(searchParams?.callbackUrl);
    console.log("Not Authenticated");
  }

  return (
    <Box
      sx={{
        display: "flex",
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
            <Typography variant="h3">Login to your account </Typography>
            <Typography variant="h6" color="text.secondary">
              Welcome back! Please enter your details.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              textAlign: "center",
              marginBottom: 5,
              width: "100%",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Email"
              type="email"
              size="small"
              fullWidth
            />
            <TextField
              variant="outlined"
              placeholder="Password"
              type="password"
              size="small"
              fullWidth
            />
            <Button size="large" variant="contained" color="primary">
              Submit
            </Button>
            {/* <SignIn /> */}
            <Divider sx={{ color: "text.secondary" }}>OR</Divider>
            <SignIn />
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            Don&apos;t have an account?{" "}
            <Link href="/register" passHref>
              <Typography
                component="span"
                color="primary"
                sx={{ cursor: "pointer" }}
              >
                Sign up
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
