"use client";
import React, { useEffect } from "react";
import WeekReport from "./WeekReport/WeekReport";
import DailyReport from "./DailyReport/DailyReport";
import MorningShift from "./MorningShift/MorningShift";
import EveningShift from "./EveningShift/EveningShift";
import MonthReport from "./MonthReport/MonthReport";

import { AllEmployee, AllLocationEmployee, DesignationData } from "@/api";
import useStore from "@/store/store";
import SkeletonComponent from "../Ui/SkeletonComponent/SkeletonComponent";
import { useQuery } from "@tanstack/react-query";
const HomeComponent = () => {
  const { setDesignations, setAllEmployee, setAllLocationEmployee } =
    useStore();
  const {
    data: allLocationEmployee,
    isLoading: isLoadingLocations,
    error: locationError,
  } = useQuery({
    queryKey: ["allLocationEmployee"],
    queryFn: AllLocationEmployee,
    staleTime: 15 * 60 * 1000,
    refetchInterval: 15 * 60 * 1000,
    cacheTime: Infinity,
  });

  useEffect(() => {
    if (allLocationEmployee) {
      setAllLocationEmployee(allLocationEmployee);
    }
  }, [allLocationEmployee, setAllLocationEmployee]);

  const {
    data: designations,
    error: designationError,
    isLoading: isLoadingDesignations,
    isSuccess: designationSuccess,
  } = useQuery({
    queryKey: ["designations"],
    queryFn: DesignationData,
  });

  useEffect(() => {
    if (designations) {
      setDesignations(designations);
    }
  }, [designations, setDesignations]);

  const {
    data: allEmployee,
    error: allEmployeeError,
    isLoading: isLoadingEmployees,
  } = useQuery({
    queryKey: ["allEmployee"],
    queryFn: AllEmployee,
  });

  useEffect(() => {
    if (allEmployee) {
      setAllEmployee(allEmployee);
    }
  }, [allEmployee, setAllEmployee]);
  if (isLoadingLocations || isLoadingEmployees || isLoadingDesignations) {
    return (
      <div>
        <SkeletonComponent />
      </div>
    );
  }

  if (locationError) {
    return (
      <div>
        Error:{" "}
        {designationError?.message ||
          allEmployeeError?.message ||
          locationError?.message}
      </div>
    );
  }

  return (
    <>
      <div>
        <div className=" px-2 py-5">
          <MonthReport></MonthReport>
        </div>
        <div className="flex flex-wrap justify-center gap-5 py-5">
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
