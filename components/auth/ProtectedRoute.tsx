"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";
import Cookies from "js-cookie";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const { user, getCurrentUser } = useAuthStore();
  const token = Cookies.get("token");

  useEffect(() => {
    const checkAuth = async () => {
      if (!token) {
        router.push("/login");
        return;
      }

      if (token && !user) {
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
  }, [token, user, router, getCurrentUser]);

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
