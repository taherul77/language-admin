"use client";

import { useState, useCallback } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const Check = () => {
  const [sizes, setSizes] = useState({
    left: 30,
    middle: 30,
    right: 30,
  });

  const handleResize = useCallback((panel, newSize) => {
    console.log(`${panel} Size:`, newSize);
    setSizes(prevSizes => ({
      ...prevSizes,
      [panel]: newSize
    }));
  }, []);

  return (
    <PanelGroup direction="horizontal" className="flex h-screen">
      <Panel
        defaultSize={sizes.left}
        minSize={20}
        className="border-r border-gray-300 p-2"
        onResize={(size) => handleResize('left', size)}
      >
        left
      </Panel>
      <PanelResizeHandle className="bg-gray-200 border-r border-gray-300" />
      <Panel
        defaultSize={sizes.middle}
        minSize={30}
        className="border-r border-gray-300 p-2"
        onResize={(size) => handleResize('middle', size)}
      >
        middle
      </Panel>
      <PanelResizeHandle className="bg-gray-200 border-r border-gray-300" />
      <Panel
        defaultSize={sizes.right}
        minSize={20}
        className="p-2"
        onResize={(size) => handleResize('right', size)}
      >
        right
      </Panel>
    </PanelGroup>
  );
};

export default Check;
