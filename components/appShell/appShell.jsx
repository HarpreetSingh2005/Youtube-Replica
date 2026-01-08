"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/navBar/navBar";
import SideBar from "@/components/sideBar/sideBar";

export default function AppShell({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const isVideo = pathname.includes("/watch/");

  return (
    <>
      <NavBar onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />

      <div className="MainSection">
        {!isVideo && <SideBar open={isSidebarOpen} />}

        {isSidebarOpen && (
          <>
            <SideBar open={isSidebarOpen} />
            <div className="overlay" onClick={() => setSidebarOpen(false)} />
          </>
        )}

        {children}
      </div>
    </>
  );
}
