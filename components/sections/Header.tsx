"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Header() {
  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toast.info("Backend not deployed - Once deployed, will be accessible.");
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 mx-4 lg:mx-6">
      <div className="max-w-7xl mx-auto border-b border-border bg-background/70 backdrop-blur-md rounded-lg px-6 lg:px-12 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-w.png"
              alt="News Sphere"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="hidden md:inline text-xl font-bold">
              News Sphere
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/login" onClick={handleButtonClick}>
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/dashboard" onClick={handleButtonClick}>
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
