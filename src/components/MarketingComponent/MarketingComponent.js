"use client"
import React from "react";
import WeekReport from "../Home/WeekReport/WeekReport";
import DailyReport from "../Home/DailyReport/DailyReport";
import MorningShift from "../Home/MorningShift/MorningShift";
import EveningShift from "../Home/EveningShift/EveningShift";
import SelectedEmployee from "./SelectedEmployee/SelectedEmployee";
import { useQuery } from "@tanstack/react-query";
import Table from "../Table/Table";
import { AllEmployee, DesignationData } from "@/api";
import SkeletonComponent from "../Ui/SkeletonComponent/SkeletonComponent";

const MarketingComponent =  () => {
  const { data: designations } = useQuery({
    queryKey: ["designations"],
    queryFn: DesignationData,
  });
  const { data: allEmployee, isLoading, error } = useQuery({
    queryKey: ["allEmployee"],
    queryFn: AllEmployee,
  });

  if (isLoading) {
    return <div><SkeletonComponent></SkeletonComponent></div>; 
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }


  return (
    <>
      <div className="flex flex-wrap justify-center text-2xl font-bold gap-5 py-10">
        Marketing Employee Reports
      </div>
      <div className="flex flex-wrap justify-center gap-5 pb-5">
        <WeekReport></WeekReport>
        <DailyReport></DailyReport>

        <MorningShift></MorningShift>
        <EveningShift></EveningShift>
      </div>
      <div className="flex flex-col justify-start items-center px-8 ">
        <SelectedEmployee designations={designations} allEmployee={allEmployee}></SelectedEmployee>
        <Table></Table>
      </div>
    </>
  );
};

export default MarketingComponent;
