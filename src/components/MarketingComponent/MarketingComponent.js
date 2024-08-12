"use client";
import React from "react";
import WeekReport from "../Home/WeekReport/WeekReport";
import DailyReport from "../Home/DailyReport/DailyReport";
import MorningShift from "../Home/MorningShift/MorningShift";
import EveningShift from "../Home/EveningShift/EveningShift";
import SelectedEmployee from "./SelectedEmployee/SelectedEmployee";
import { useQuery } from "@tanstack/react-query";
import { AllEmployee, DesignationData, AllLocationEmployee } from "@/api";
import SkeletonComponent from "../Ui/SkeletonComponent/SkeletonComponent";

const MarketingComponent = () => {
  const { data: designations } = useQuery({
    queryKey: ["designations"],
    queryFn: DesignationData,
  });

  const { data: allEmployee } = useQuery({
    queryKey: ["allEmployee"],
    queryFn: AllEmployee,
  });

  const { data: allLocationEmployee, isLoading, error } = useQuery({
    queryKey: ["allLocationEmployee"],
    queryFn: AllLocationEmployee,
  });

  
  const filteredAllLocationEmployee = allLocationEmployee?.reduce((acc, current) => {
    const existingEmployee = acc.find(item => item.mkgProfNo === current.mkgProfNo);
    if (!existingEmployee || current.gpsDataDateTime > existingEmployee.gpsDataDateTime) {
      return acc.filter(item => item.mkgProfNo !== current.mkgProfNo).concat(current);
    }
    return acc;
  }, []);

  if (isLoading) {
    return (
      <div>
        <SkeletonComponent />
      </div>
    );
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
        <WeekReport />
        <DailyReport />
        <MorningShift />
        <EveningShift />
      </div>
      <div className="flex flex-col justify-start items-center px-8 ">
        <SelectedEmployee designations={designations} allEmployee={filteredAllLocationEmployee} />
      </div>
    </>
  );
};

export default MarketingComponent;
