"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { HiOutlineMenu, HiOutlineMenuAlt2 } from "react-icons/hi";
import { Archive, ArchiveX, File, Inbox, Send, Trash2 } from "lucide-react";
import SidebarProfile from "../SidebarProfile/SidebarProfile";
import { UserNav } from "@/components/Table/TableComponents/UserNav";
import SidebarComponent from "../SidebarComponent/SidebarComponent";
import { TooltipProvider } from '../tooltip';

const DashBoardUi = ({ children }) => {
  const [isPanelOneVisible, setIsPanelOneVisible] = useState(true);
  const img = "/image/drug-international-logo.png";
  const logo = "/image/header-logo.png";
  const pathname = usePathname();
  const [sizes, setSizes] = useState({
    horizontalPanelSize: 4,
    verticalPanelOneSize: 10,
    verticalPanelTwoSize: 90,
  });

  useEffect(() => {
    const horizontalPanelSize = Cookies.get("horizontal-panel-size");
    const verticalPanelOneSize = Cookies.get("vertical-panel-one-size");
    const verticalPanelTwoSize = Cookies.get("vertical-panel-two-size");

    // Function to safely parse size values
    const parseSize = (value, defaultValue) => {
      try {
        const parsedValue = JSON.parse(value);
        return !isNaN(parsedValue) ? parsedValue : defaultValue;
      } catch {
        return defaultValue;
      }
    };

    setSizes({
      horizontalPanelSize: parseSize(horizontalPanelSize, 4),
      verticalPanelOneSize: parseSize(verticalPanelOneSize, 5),
      verticalPanelTwoSize: parseSize(verticalPanelTwoSize, 90),
    });
  }, []);

  useEffect(() => {
    setSizes((prevSizes) => ({
      ...prevSizes,
      horizontalPanelSize: isPanelOneVisible ? 4 : 0,
    }));
  }, [isPanelOneVisible]);

  const handleResize = (newSize) => {
    setSizes((prevSizes) => ({
      ...prevSizes,
      horizontalPanelSize: newSize,
    }));
    Cookies.set("horizontal-panel-size", JSON.stringify(newSize));
  };

  return (
    <TooltipProvider>
      <div style={{ height: "100vh", width: "100vw" }}>
        {pathname === "/dashboard/map" && (
          <button
            onClick={() => setIsPanelOneVisible(!isPanelOneVisible)}
            className="fixed top-0 right-0 m-4 z-50 bg-gray-200 p-2 rounded"
          >
            {!isPanelOneVisible ? (
              <HiOutlineMenu size={32} />
            ) : (
              <HiOutlineMenuAlt2 size={32} />
            )}
          </button>
        )}

        <ResizablePanelGroup
          direction="vertical"
          style={{ height: "100%", width: "100%" }}
        >
          {pathname !== "/dashboard/map" && (
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
          )}

          <ResizableHandle />

          <ResizablePanel defaultSize={sizes.verticalPanelTwoSize} minSize={10}>
            <ResizablePanelGroup
              direction="horizontal"
              style={{ height: "100%" }}
              key={isPanelOneVisible}
            >
              {isPanelOneVisible && (
                <ResizablePanel
                  defaultSize={sizes.horizontalPanelSize}
                  minSize={6}
                  onResize={(e, dir, ref, delta) => {
                    const newSize = sizes.horizontalPanelSize + (delta?.width || delta?.deltaX || 0);
                    handleResize(newSize);
                  }}
                >
                  <div className="flex h-full items-center justify-center bg-gray-300">
                    <SidebarComponent
                      horizontalPanelSize={sizes.horizontalPanelSize}
                      links={[
                        { title: "Inbox", icon: Inbox },
                        { title: "Drafts", icon: File },
                        { title: "Sent", icon: Send },
                        { title: "Junk", icon: ArchiveX },
                        { title: "Trash", icon: Trash2 },
                        { title: "Archive", icon: Archive },
                      ]}
                    />
                  </div>
                </ResizablePanel>
              )}

              <ResizableHandle />

              <ResizablePanel defaultSize={90} minSize={70}>
                <div
                  className={`flex flex-col h-full ${
                    pathname !== "/dashboard/map" ? "overflow-y-auto" : ""
                  }`}
                >
                  {children}
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </TooltipProvider>
  );
};

export default DashBoardUi;
