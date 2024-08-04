"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Nav from "../Nav";

const DashBoardUi = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showQuickBar, setShowQuickBar] = useState(true);
  return (
    <div className="flex justify-between transition-transform duration-500 ease-in-out">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`${
          !showQuickBar ? "pr-0" : "pr-0"
        }  ml-auto w-full custom-sidebar-animation  ${
          showSidebar ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <Nav
          showQuickBar={showQuickBar}
          setShowQuickBar={setShowQuickBar}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        <div className="bg-gray min-h-[calc(100vh-72px)]">
          <div
            className={`${
              showSidebar ? "mx-[1vw]" : "ml-[7vw] mx-[1vw]"
            } h-[100%] flex flex-col justify-between `}
          >
            {" "}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardUi;
