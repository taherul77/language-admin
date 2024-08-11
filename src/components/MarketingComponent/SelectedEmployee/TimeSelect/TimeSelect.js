"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const TimePicker = dynamic(() => import("react-time-picker"), { ssr: false });

const TimeSelect = () => {
  const [value, setValue] = useState("10:00");

  return (
    <>
      <input
        type="time"
        name=""
        // value={selectFromTime}
        // onChange={handleFromTimeChange}
        className="h-auto border cursor-pointer rounded-md w-[140px] p-2"
        autoComplete="off"
      />
    </>
  );
};

export default TimeSelect;
