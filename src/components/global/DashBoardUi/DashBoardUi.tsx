"use client";

import React, { useState, useCallback, useRef, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";
import { HiOutlineMenu, HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdMailUnread } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { FaUser, FaUsers, FaAddressBook } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { Panel, PanelGroup, PanelResizeHandle, ImperativePanelHandle } from "react-resizable-panels";
import { TooltipProvider } from "@/components/ui/tooltip";
import SidebarProfile from "./SidebarProfile/SidebarProfile";
import { UserNav } from "./UserNav/UserNav";
import SidebarComponent from "./SidebarComponent/SidebarComponent";

// Define types for the component props
interface DashBoardUiProps {
  children: ReactNode;
}

// Define the panel size state types
interface PanelSizes {
  horizontalPanelSize: string | number;
  verticalPanelOneSize: string | number;
  verticalPanelTwoSize: string | number;
}

const DashBoardUi: React.FC<DashBoardUiProps> = ({ children }) => {
  const [isPanelOneVisible, setIsPanelOneVisible] = useState<boolean>(true);
  const [sizes, setSizes] = useState<PanelSizes>({
    horizontalPanelSize: Cookies.get("horizontalPanelSize") || 4,
    verticalPanelOneSize: Cookies.get("verticalPanelOneSize") || 10,
    verticalPanelTwoSize: Cookies.get("verticalPanelTwoSize") || 70,
  });

  const img = "/image/logo1.png";


  // Use correct type for the ref
  const horizontalPanelRef = useRef<ImperativePanelHandle | null>(null);

  const handleResize = useCallback(
    (panel: keyof PanelSizes, newSize: number) => {
      setSizes((prevSizes) => ({
        ...prevSizes,
        [panel]: newSize,
      }));
      Cookies.set(`${panel}-size`, newSize.toString());
    },
    []
  );

  useEffect(() => {
    if (!isPanelOneVisible) {
      setSizes((prevSizes) => ({
        ...prevSizes,
        horizontalPanelSize: 0,
      }));
    }
  }, [isPanelOneVisible]);

  return (
    <TooltipProvider>
      <div style={{ height: "100vh", width: "100vw" }}>
      
        <PanelGroup direction="vertical" style={{ height: "100%", width: "100%" }}>
          <Panel
            defaultSize={Number(sizes.verticalPanelOneSize)}
            minSize={5}
            maxSize={10}
            className="border-gray-300"
          >
            <div className="flex h-full items-center justify-between bg-gray-200 px-5">
              <div className="flex h-full items-center justify-center">
                <button onClick={() => setIsPanelOneVisible(!isPanelOneVisible)}>
                  {!isPanelOneVisible ? (
                    <HiOutlineMenu size={32} />
                  ) : (
                    <HiOutlineMenuAlt2 size={32} />
                  )}
                </button>
              </div>
              <div>
                <SidebarProfile  />
              </div>
              <UserNav img={img} />
            </div>
          </Panel>

          <PanelResizeHandle className="bg-gray-200 border-b border-gray-300" />

          <Panel
            defaultSize={Number(sizes.verticalPanelTwoSize)}
            minSize={15}
            className="flex flex-col"
          >
            <PanelGroup direction="horizontal" style={{ height: "100%" }}>
              {isPanelOneVisible && (
                <Panel
                  ref={horizontalPanelRef}
                  defaultSize={Number(sizes.horizontalPanelSize)}
                  minSize={15}
                  className="border-r border-gray-300"
                  onResize={(size) => handleResize("horizontalPanelSize", size)}
                >
                  <div className="flex h-full bg-gray-300">
                    <SidebarComponent
                      width={Number(sizes.horizontalPanelSize)}
                      links={[
                        {
                          title: "Dashboard",
                          url: "/",
                          icon: MdDashboard,
                        },
                        // {
                        //   title: "User",
                        //   icon: FaUser,
                        //   url: "/user",
                        // },

                        {
                          title: "Apply Info",
                          url: "/apply",
                          icon: GiArchiveRegister,
                        },
                        {
                          title: "Mail Info",
                          url: "/mail",
                          icon: IoMdMailUnread,
                        },
                        {
                          title: "Address Info",
                          url: "/address",
                          icon: FaAddressBook,
                        },
                        {
                          title: "Seminar Info",
                          url: "/seminar",
                          icon: FaUsers,
                        },
                      ]}
                    />
                  </div>
                </Panel>
              )}

              <PanelResizeHandle className="bg-gray-200 border-r border-gray-300" />

              <Panel defaultSize={85} minSize={85} className="flex-1">
                <div className={`flex flex-col max-h-screen overflow-auto `}>
                  {children}
                </div>
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </TooltipProvider>
  );
};

export default DashBoardUi;
