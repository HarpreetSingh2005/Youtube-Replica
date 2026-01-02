"use client";
import { useState } from "react";
import NavBar from "@/components/navBar/navBar";
import SideBar from "@/components/sideBar/sideBar";
import Categories from "@/components/categories/categories";
import Videos from "@/components/heroSection/videos";

function App() {
  const [isSidebarOpen, setSidebar] = useState(false);

  return (
    <>
      <div className="HeroSection">
        <Categories />
        <Videos />
      </div>
    </>
  );
}

export default App;
