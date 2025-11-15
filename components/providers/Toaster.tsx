"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast: "bg-background border border-border text-foreground",
          title: "text-foreground",
          description: "text-muted-foreground",
          success: "bg-green-600/10 border-green-600/20 text-green-600",
          error: "bg-destructive/10 border-destructive/20 text-destructive",
          warning: "bg-yellow-600/10 border-yellow-600/20 text-yellow-600",
          info: "bg-primary/10 border-primary/20 text-primary",
        },
      }}
    />
  );
}

