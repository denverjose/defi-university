"use server";

import { signOut, signIn } from "@/lib/auth";

export async function handleSignOut() {
  await signOut();
}

export async function handleSignIn(provider:string) {
  await signIn(provider);
}

