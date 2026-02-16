import { Box } from "@mui/material";
import { isServerAuthenticated } from "@/lib/auth/isServerAuth";

export default async function Auth() {
  const session = await isServerAuthenticated();
  if (!session) {
    return <>cannot access, not logged in</>;
  }

  return <Box sx={{ textAlign: "center", mt: 2 }}>auth page</Box>;
}
