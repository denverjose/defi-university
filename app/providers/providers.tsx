"use client";

import { useState, useEffect } from "react";
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import { theme } from "@/lib/theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { SessionProvider } from "next-auth/react";

const responsiveTheme = responsiveFontSizes(theme);

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents mismatched SSR render

  return (
    <SessionProvider>
      <ThemeProvider theme={responsiveTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
