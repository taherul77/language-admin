"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Import the js-cookie library
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { HiOutlineMenu, HiOutlineMenuAlt2 } from "react-icons/hi";
import { UserNav } from "../Table/TableComponents/UserNav";
import SidebarProfile from "../Ui/SidebarProfile/SidebarProfile";
import MonthReport from "../Home/MonthReport/MonthReport";
import WeekReport from "../Home/WeekReport/WeekReport";
import DailyReport from "../Home/DailyReport/DailyReport";
import MorningShift from "../Home/MorningShift/MorningShift";
import EveningShift from "../Home/EveningShift/EveningShift";
import Table from "../Table/Table";

const Check = () => {
  // State to manage the visibility of the "One" panel
  const [isPanelOneVisible, setIsPanelOneVisible] = useState(true);
  const img = "/image/drug-international-logo.png";
  const logo = "/image/header-logo.png";
  // State for panel sizes
  const [sizes, setSizes] = useState({
    horizontalPanelSize: 4,
    verticalPanelOneSize: 10,
    verticalPanelTwoSize: 90,
  });

  // Read cookies and update panel sizes
  useEffect(() => {
    const horizontalPanelSize = Cookies.get("horizontal-panel-size");
    const verticalPanelOneSize = Cookies.get("vertical-panel-one-size");
    const verticalPanelTwoSize = Cookies.get("vertical-panel-two-size");

    setSizes({
      horizontalPanelSize: horizontalPanelSize
        ? JSON.parse(horizontalPanelSize)
        : 4,
      verticalPanelOneSize: verticalPanelOneSize
        ? JSON.parse(verticalPanelOneSize)
        : 10,
      verticalPanelTwoSize: verticalPanelTwoSize
        ? JSON.parse(verticalPanelTwoSize)
        : 90,
    });
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ResizablePanelGroup
        direction="vertical"
        style={{ height: "100%", width: "100%" }}
      >
        <ResizablePanel
          defaultSize={sizes.verticalPanelOneSize}
          minSize={6}
          maxSize={15}
        >
          <div className="flex h-full items-center justify-between bg-gray-200 px-5">
            <div className="flex h-full items-center justify-center">
              <button
                onClick={() => setIsPanelOneVisible(!isPanelOneVisible)}
                className=""
              >
                {!isPanelOneVisible ? (
                  <HiOutlineMenu size={32} />
                ) : (
                  <HiOutlineMenuAlt2 size={32} />
                )}
              </button>
            </div>
            <div>
              <SidebarProfile logo={logo}></SidebarProfile>
            </div>

            <UserNav img={img}></UserNav>
          </div>
        </ResizablePanel>

        <ResizableHandle />

        <ResizablePanel defaultSize={sizes.verticalPanelTwoSize} minSize={10}>
          <ResizablePanelGroup
            direction="horizontal"
            style={{ height: "100%" }}
          >
            {isPanelOneVisible && (
              <ResizablePanel
                defaultSize={sizes.horizontalPanelSize}
                minSize={6}
              >
                <div className="flex h-full items-center justify-center bg-gray-300">
                  <span className="font-semibold">One</span>
                </div>
              </ResizablePanel>
            )}

            <ResizableHandle />

            <ResizablePanel defaultSize={90} minSize={70}>
              <div className="flex flex-col h-full overflow-y-auto px-2 ">
              
                  {" "}
                  <div>
                    <div className=" py-5">
                      <MonthReport></MonthReport>
                      
                    </div>
                    <div className="flex flex-wrap justify-center gap-5 py-5">
                      <WeekReport></WeekReport>
                      <DailyReport></DailyReport>

                      <MorningShift></MorningShift>
                      <EveningShift></EveningShift>

                    </div>
                    {/* <Table></Table> */}
                  </div>
              
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Check;
