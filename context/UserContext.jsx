"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const { data: session } = useSession();
  const id = session?.user?.id;
  //   console.log("User id :", id)

  useEffect(() => {
    if (!id) return;
    async function fetchUser() {
      try {
        const res = await fetch(`/api/company/users/${id}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        // console.log("User Data :", data);
        const normalizedUser = {
          id: data?.id || "",
          first_name: data?.first_name || "",
          last_name: data?.last_name || "",
          email: data?.email || "",
          phone: data?.phone || "",
          roles: data?.roles || [],
        };

        setUser(normalizedUser);
      } catch (err) {
        toast.error(err.message || "Failed to create user.");
        // console.error("Error fetching user:", err);
      }
    }
    fetchUser();
  }, [id]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
