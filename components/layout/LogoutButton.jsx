"use client";

import { signOut } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      toast.success("You have been logged out.");
      router.push("/login");
      router.refresh();
    } catch (error) {
      // console.error("Logout failed", error);
      toast.error("Failed to logout. Please try again.");
    }
  };

  return { handleLogout };
}
