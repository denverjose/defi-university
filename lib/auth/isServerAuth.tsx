import { auth } from "@/lib/auth";

export async function isServerAuthenticated() {
  const session = await auth();
  return !!session;
}
