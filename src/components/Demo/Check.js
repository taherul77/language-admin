import React from "react";
import useStore from "@/store/store";

const AnotherComponent = () => {
  const { designations } = useStore();

  return (
    <div>
      <h1>Designations</h1>
      <pre>{JSON.stringify(designations, null, 2)}</pre>
    </div>
  );
};

export default AnotherComponent;
