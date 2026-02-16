"use client"; 

import { useSession } from "next-auth/react";

export function useClientAuth() {
  const { status } = useSession(); // Possible values: "authenticated", "loading", "unauthenticated"

  return {
    isAuthenticated: status === "authenticated",
    isLoading: status === "loading",
  };
}
