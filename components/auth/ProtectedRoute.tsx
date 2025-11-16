"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";
import Cookies from "js-cookie";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const { user, getCurrentUser } = useAuthStore();
  const [mounted, setMounted] = useState(false);
  const [token, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    setMounted(true);
    setToken(Cookies.get("token"));
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const checkAuth = async () => {
      const currentToken = Cookies.get("token");

      if (!currentToken) {
        router.push("/login");
        return;
      }

      if (currentToken && !user) {
        try {
          const currentUser = await getCurrentUser();
          if (!currentUser) {
            Cookies.remove("token");
            router.push("/login");
          }
        } catch (error: any) {
          if (!error.response && process.env.NODE_ENV === "development") {
            console.warn(
              "Backend API not available, allowing access with token for development"
            );
          } else {
            Cookies.remove("token");
            router.push("/login");
          }
        }
      }
    };

    checkAuth();
  }, [mounted, token, user, router, getCurrentUser]);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (token && !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Authenticating...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
