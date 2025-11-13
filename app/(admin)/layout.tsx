"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const checkCollapsed = () => {
      const collapsed = localStorage.getItem("sidebarCollapsed") === "true";
      setIsCollapsed(collapsed);
    };
    
    checkCollapsed();
    
    const handleToggle = () => {
      checkCollapsed();
    };
    
    window.addEventListener("sidebarToggle", handleToggle);
    return () => window.removeEventListener("sidebarToggle", handleToggle);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      {!isMobile && <Sidebar />}
      <div className={`flex-1 transition-all duration-300 w-full ${
        isMobile ? "pb-16" : isCollapsed ? "ml-20" : "ml-64"
      }`}>
        <Header />
        <main className="p-4 md:p-6">{children}</main>
      </div>
      {isMobile && <Sidebar />}
    </div>
  );
}
