"use client";
import React from "react";
import SidebarProfile from "./SidebarProfile/SidebarProfile";
import { TooltipProvider } from "./tooltip";
import { cn } from "@/lib/utils";
import SidebarComponent from "./SidebarComponent/SidebarComponent";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./resizable";
import { Separator } from "./separator";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
import { Input } from "./input";
const Sidebar = ({
  showSidebar,
  setShowSidebar,
  defaultLayout = [20, 32, 48],
  navCollapsedSize,
}) => {
  const logo = "/image/header-logo.png";
  return (
    <div
      className={`${
        showSidebar ? "-translate-x-[100%] h-[100%]" : ""
      }w-[32vw]  md:w-[6vw] fixed  h-[100vh] flex flex-col 
        bg-gray-100 transition-transform duration-300 ease-in-out z-50 `}
      onContexMenu={(e) => e.preventDefault}
    >
      {/* <div>
        <SidebarProfile
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
          logo={logo}
        ></SidebarProfile>
      </div> */}

      <div className="mt-16">
        {/* <TooltipProvider delayDuration={0}>
          <ResizablePanelGroup
            direction="horizontal"
            onLayout={(sizes) => {
              document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
                sizes
              )}`;
            }}
            className="h-full max-h-[800px] items-stretch"
          >
            <ResizablePanel
              defaultSize={defaultLayout[0]}
              collapsedSize={navCollapsedSize}
              collapsible={true}
              minSize={15}
              maxSize={20}
              onCollapse={() => {
                setShowSidebar(true);
                document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                  true
                )}`;
              }}
              onResize={() => {
                setShowSidebar(false);
                document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                  false
                )}`;
              }}
              className={cn(
                showSidebar &&
                  "min-w-[50px] transition-all duration-300 ease-in-out"
              )}
            >
            
              <Separator />
              <SidebarComponent
                showSidebar={showSidebar}
                links={[
                  {
                    title: "Inbox",
                    label: "128",
                    icon: Inbox,
                    variant: "default",
                  },
                  {
                    title: "Drafts",
                    label: "9",
                    icon: File,
                    variant: "ghost",
                  },
                  {
                    title: "Sent",
                    label: "",
                    icon: Send,
                    variant: "ghost",
                  },
                  {
                    title: "Junk",
                    label: "23",
                    icon: ArchiveX,
                    variant: "ghost",
                  },
                  {
                    title: "Trash",
                    label: "",
                    icon: Trash2,
                    variant: "ghost",
                  },
                  {
                    title: "Archive",
                    label: "",
                    icon: Archive,
                    variant: "ghost",
                  },
                ]}
              />

              <SidebarComponent
                showSidebar={showSidebar}
                links={[
                  {
                    title: "Social",
                    label: "972",
                    icon: Users2,
                    variant: "ghost",
                  },
                  {
                    title: "Updates",
                    label: "342",
                    icon: AlertCircle,
                    variant: "ghost",
                  },
                  {
                    title: "Forums",
                    label: "128",
                    icon: MessagesSquare,
                    variant: "ghost",
                  },
                  {
                    title: "Shopping",
                    label: "8",
                    icon: ShoppingCart,
                    variant: "ghost",
                  },
                  {
                    title: "Promotions",
                    label: "21",
                    icon: Archive,
                    variant: "ghost",
                  },
                ]}
              />
            </ResizablePanel>

            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
              <Tabs defaultValue="all">
                <div className="flex items-center px-4 py-2">
                  <h1 className="text-xl font-bold">Inbox</h1>
                  <TabsList className="ml-auto">
                    <TabsTrigger
                      value="all"
                      className="text-zinc-600 dark:text-zinc-200"
                    >
                      All mail
                    </TabsTrigger>
                    <TabsTrigger
                      value="unread"
                      className="text-zinc-600 dark:text-zinc-200"
                    >
                      Unread
                    </TabsTrigger>
                  </TabsList>
                </div>
                <Separator />
                <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  <form>
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search" className="pl-8" />
                    </div>
                  </form>
                </div>
              </Tabs>
            </ResizablePanel>
            <ResizableHandle withHandle />
          </ResizablePanelGroup>
        </TooltipProvider> */}
      </div>
    </div>
  );
};

export default Sidebar;
