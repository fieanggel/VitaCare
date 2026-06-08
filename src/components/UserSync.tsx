"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";

export function UserSync() {
  const { isLoaded, isSignedIn } = useAuth();
  const [hasSynced, setHasSynced] = useState(false);

  useEffect(() => {
    async function syncCurrentUser() {
      if (!isLoaded || !isSignedIn || hasSynced) {
        return;
      }

      try {
        const response = await fetch("/api/users/sync", {
          method: "POST",
          credentials: "include",
        });

        if (!response.ok) {
          console.error("User sync failed:", response.status, await response.text());
          return;
        }

        console.log("User synced successfully");
      } catch (error) {
        console.error("Error syncing user:", error);
      } finally {
        setHasSynced(true);
      }
    }

    syncCurrentUser();
  }, [isLoaded, isSignedIn, hasSynced]);

  return null;
}
