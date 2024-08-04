"use client";
import React from "react";
import SidebarProfile from "./SidebarProfile/SidebarProfile";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
    const logo = "/image/header-logo.png"
  return (
    <div
      className={`${
        showSidebar ? "-translate-x-[100%] h-[100%]" : ""
      }w-[32vw]  md:w-[6vw] fixed  h-[100vh] flex flex-col 
        bg-gray-100 transition-transform duration-300 ease-in-out z-50 `}
      onContexMenu={(e) => e.preventDefault}
    >
      <div>
        <SidebarProfile
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
          logo={logo}
        ></SidebarProfile>
      </div>
    </div>
  );
};

export default Sidebar;
