// "use client";
// import React, { useState } from "react";
// import Sidebar from "../Sidebar";
// import Nav from "../Nav";

// const DashBoardUi = ({ children }) => {
//   const [showSidebar, setShowSidebar] = useState(true);
//   const [showQuickBar, setShowQuickBar] = useState(true);

//   return (
//     <div className="flex justify-between transition-transform duration-500 ease-in-out">
//       <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
//       <div
//         className={`${
//           !showQuickBar ? "pr-0" : "pr-0"
//         }  ml-auto w-full custom-sidebar-animation  ${
//           showSidebar ? "sidebar-open" : "sidebar-closed"
//         }`}
//       >
        
//         <Nav
//           showQuickBar={showQuickBar}
//           setShowQuickBar={setShowQuickBar}
//           showSidebar={showSidebar}
//           setShowSidebar={setShowSidebar}
//         />
//         <div className="bg-gray min-h-[calc(100vh-72px)]">
//           <div
//             className={`${
//               showSidebar ? "mx-[2vw] mt-12" : "ml-[7vw] mx-[2vw] mt-12"
//             } h-[100%] flex flex-col justify-between transition-all duration-500 ease-in-out`}
//           >
//             {children}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashBoardUi;


// // "use client";
// // import React, { useState, useEffect, Children } from "react";
// // import Cookies from "js-cookie"; // Import the js-cookie library
// // import {
// //   ResizableHandle,
// //   ResizablePanel,
// //   ResizablePanelGroup,
// // } from "@/components/ui/resizable";
// // import { HiOutlineMenu, HiOutlineMenuAlt2 } from "react-icons/hi";


// // import { UserNav } from "@/components/Table/TableComponents/UserNav";
// // import SidebarProfile from "../SidebarProfile/SidebarProfile";

// // const DashBoardUi = ({Children}) => {
// //   // State to manage the visibility of the "One" panel
// //   const [isPanelOneVisible, setIsPanelOneVisible] = useState(true);
// //   const img = "/image/drug-international-logo.png";
// //   const logo = "/image/header-logo.png";
// //   // State for panel sizes
// //   const [sizes, setSizes] = useState({
// //     horizontalPanelSize: 4,
// //     verticalPanelOneSize: 10,
// //     verticalPanelTwoSize: 90,
// //   });

// //   // Read cookies and update panel sizes
// //   useEffect(() => {
// //     const horizontalPanelSize = Cookies.get("horizontal-panel-size");
// //     const verticalPanelOneSize = Cookies.get("vertical-panel-one-size");
// //     const verticalPanelTwoSize = Cookies.get("vertical-panel-two-size");

// //     setSizes({
// //       horizontalPanelSize: horizontalPanelSize
// //         ? JSON.parse(horizontalPanelSize)
// //         : 4,
// //       verticalPanelOneSize: verticalPanelOneSize
// //         ? JSON.parse(verticalPanelOneSize)
// //         : 10,
// //       verticalPanelTwoSize: verticalPanelTwoSize
// //         ? JSON.parse(verticalPanelTwoSize)
// //         : 90,
// //     });
// //   }, []);

// //   return (
// //     <div style={{ height: "100vh", width: "100vw" }}>
// //       <ResizablePanelGroup
// //         direction="vertical"
// //         style={{ height: "100%", width: "100%" }}
// //       >
// //         <ResizablePanel
// //           defaultSize={sizes.verticalPanelOneSize}
// //           minSize={6}
// //           maxSize={15}
// //         >
// //           <div className="flex h-full items-center justify-between bg-gray-200 px-5">
// //             <div className="flex h-full items-center justify-center">
// //               <button
// //                 onClick={() => setIsPanelOneVisible(!isPanelOneVisible)}
// //                 className=""
// //               >
// //                 {!isPanelOneVisible ? (
// //                   <HiOutlineMenu size={32} />
// //                 ) : (
// //                   <HiOutlineMenuAlt2 size={32} />
// //                 )}
// //               </button>
// //             </div>
// //             <div>
// //               <SidebarProfile logo={logo}></SidebarProfile>
// //             </div>

// //             <UserNav img={img}></UserNav>
// //           </div>
// //         </ResizablePanel>

// //         <ResizableHandle />

// //         <ResizablePanel defaultSize={sizes.verticalPanelTwoSize} minSize={10}>
// //           <ResizablePanelGroup
// //             direction="horizontal"
// //             style={{ height: "100%" }}
// //           >
// //             {isPanelOneVisible && (
// //               <ResizablePanel
// //                 defaultSize={sizes.horizontalPanelSize}
// //                 minSize={6}
// //               >
// //                 <div className="flex h-full items-center justify-center bg-gray-300">
// //                   <span className="font-semibold">One</span>
// //                 </div>
// //               </ResizablePanel>
// //             )}

// //             <ResizableHandle />

// //             <ResizablePanel defaultSize={90} minSize={70}>
// //               <div >
// //                 {Children}
// //               </div>
// //             </ResizablePanel>
// //           </ResizablePanelGroup>
// //         </ResizablePanel>
// //       </ResizablePanelGroup>
// //     </div>
// //   );
// // };

// // export default DashBoardUi;



"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Import the js-cookie library
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { HiOutlineMenu, HiOutlineMenuAlt2 } from "react-icons/hi";

// import Table from "../Table/Table";
import SidebarProfile from "../SidebarProfile/SidebarProfile";
import { UserNav } from "@/components/Table/TableComponents/UserNav";

const DashBoardUi = ({children}) => {
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
              
              {children}
              
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default DashBoardUi;
