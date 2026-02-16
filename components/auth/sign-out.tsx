import { Button } from "@mui/material";
import { handleSignOut } from "@/app/server-actions/auth-actions"; // ✅ Import the Server Action

export default function SignOut() {
  return (
    <form
      action={handleSignOut}
      onClick={(e) => e.stopPropagation()} // ✅ Prevents ListItem click
    >
      <Button
        type="submit" // ✅ Uses a form action instead of async event handler
        sx={{
          color: "white",
          fontWeight: 700,
          paddingY: 1,
        }}
        variant="contained"
        color="primary"
      >
        Sign Out
      </Button>
    </form>
  );
}
