"use client";

import { useState } from "react";

const TimeSelect = (placeholder) => {
  const [value, setValue] = useState("10:00");

  return (
    <>
      <input
        type="time"
        name=""
        placeholder={placeholder}
        // value={selectFromTime}
        // onChange={handleFromTimeChange}
        className="h-auto border cursor-pointer rounded-md w-[140px] p-2"
        autoComplete="off"
      />
    </>
  );
};

export default TimeSelect;
