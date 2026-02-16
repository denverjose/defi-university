import { useSession } from "next-auth/react";
import SignOut from "@/components/auth/sign-out";
import { Box, CircularProgress, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export function AuthButton() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <Box display="flex" alignItems="center">
        <CircularProgress size={24} color="primary" />
      </Box>
    );
  }
  return session?.user ? (
    <SignOut />
  ) : (
    <Button
      onClick={() => router.push("/login")}
      sx={{
        color: "white",
        fontWeight: 700,
        paddingY: 1,
      }}
      variant="contained"
    >
      Sign In
    </Button>
  );
}
