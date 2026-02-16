"use client";
import { useState } from "react";
import { Button, Box, CircularProgress } from "@mui/material";
import { handleSignIn } from "@/app/server-actions/auth-actions"; // Import server actions
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SignIn() {
  // loading holds the provider that is currently processing (or null if none)
  const [loading, setLoading] = useState<string | null>(null);

  const onProviderSignIn = async (provider: string) => {
    setLoading(provider);
    try {
      await handleSignIn(provider);
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <Button
        onClick={() => onProviderSignIn("github")}
        sx={{
          flex: 1,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #D0d5dd",
          paddingY: { xs: 1, lg: "10px" },
          paddingX: { xs: 1.2, lg: "12px" },
          borderRadius: 2,
          color: "black",
          opacity: `${loading !== null && 0.3}`,
        }}
        type="button"
        disabled={loading !== null}
      >
        {loading === "github" ? <CircularProgress size={24} /> : <GitHubIcon />}
      </Button>
      <Button
        onClick={() => onProviderSignIn("google")}
        sx={{
          flex: 1,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #D0d5dd",
          borderRadius: 2,
          paddingY: { xs: 1, lg: "10px" },
          paddingX: { xs: 1.2, lg: "12px" },
          opacity: `${loading !== null && 0.3}`,
        }}
        type="button"
        disabled={loading !== null}
      >
        {loading === "google" ? (
          <CircularProgress size={24} />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8
              c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
              C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20
              c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12
              c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
              C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238
              C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025
              C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303
              c-0.792,2.237-2.231,4.166-4.087,5.571
              c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238
              C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
        )}
      </Button>
      <Button
        onClick={() => onProviderSignIn("facebook")}
        sx={{
          flex: 1,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #D0d5dd",
          paddingY: { xs: 1, lg: "10px" },
          paddingX: { xs: 1.2, lg: "12px" },
          borderRadius: 2,
          cursor: "pointer",
          opacity: `${loading !== null && 0.3}`,
        }}
        type="button"
        disabled={loading !== null}
      >
        {loading === "facebook" ? (
          <CircularProgress size={24} />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="24"
            height="24"
            fill="#1877F2"
          >
            <path
              d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3
            c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1
            c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
            />
          </svg>
        )}
      </Button>
    </Box>
  );
}

// import { Button, Box } from "@mui/material";
// import {
//   handleGoogleSignIn,
//   handleFacebookSignIn,
//   handleGithubSignIn,
// } from "@/app/server/auth-actions"; // Import server actions
// import GitHubIcon from "@mui/icons-material/GitHub";

// export default function SignIn() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         width: "100%",
//         gap: "16px",
//         alignItems: "center",
//       }}
//     >
//       <Button
//         onClick={handleGithubSignIn}
//         sx={{
//           flex: 1,
//           display: "inline-flex",
//           alignItems: "center",
//           justifyContent: "center",
//           border: "1px solid #D0d5dd",
//           paddingY: { xs: 1, lg: "10px" },
//           paddingX: { xs: 1.2, lg: "12px" },
//           borderRadius: 2,
//           color:'black'
//         }}
//         type="submit"
//       >
//         <GitHubIcon />
//       </Button>
//       <Button
//         onClick={handleGoogleSignIn}
//         sx={{
//           flex: 1,
//           display: "inline-flex",
//           alignItems: "center",
//           justifyContent: "center",
//           border: "1px solid #D0d5dd",
//           borderRadius: 2,
//           paddingY: { xs: 1, lg: "10px" },
//           paddingX: { xs: 1.2, lg: "12px" },
//         }}
//         type="submit"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 48 48">
//           <path
//             fill="#FFC107"
//             d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
//           />
//           <path
//             fill="#FF3D00"
//             d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
//           />
//           <path
//             fill="#4CAF50"
//             d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
//           />
//           <path
//             fill="#1976D2"
//             d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
//           />
//         </svg>
//       </Button>
//       <Button
//         onClick={handleFacebookSignIn}
//         sx={{
//           flex: 1,
//           display: "inline-flex",
//           alignItems: "center",
//           justifyContent: "center",
//           border: "1px solid #D0d5dd",
//           paddingY: { xs: 1, lg: "10px" },
//           paddingX: { xs: 1.2, lg: "12px" },
//           borderRadius: 2,
//           cursor: "pointer",
//         }}
//         type="submit"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 512 512"
//           width="24"
//           height="24"
//           fill="#1877F2"
//         >
//           <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
//         </svg>
//       </Button>
//     </Box>
//   );
// }
