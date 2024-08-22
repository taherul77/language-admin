
import React from "react";
import dynamic from "next/dynamic";
const MarketingComponent = dynamic(() => import("../../../../components/MarketingComponent/MarketingComponent.js"), { ssr: false });

const page = () => {
  return (
    <>
      {/* <MarketingComponent></MarketingComponent> */}
    </>
  );
};

export default page;
