import React from "react";
import WeekReport from "./WeekReport/WeekReport";
import DailyReport from "./DailyReport/DailyReport";
import MorningShift from "./MorningShift/MorningShift";
import EveningShift from "./EveningShift/EveningShift";
import MonthReport from "./MonthReport/MonthReport";

const HomeComponent = () => {
  return (
    <>
    <div>
    <div className=" py-5">
       <MonthReport></MonthReport>
      </div>
      <div className="flex justify-center gap-5 py-10">
      <WeekReport></WeekReport>
        <DailyReport></DailyReport>
        
        <MorningShift></MorningShift>
        <EveningShift></EveningShift>
      </div>

    </div>
      
    </>
  );
};

export default HomeComponent;
