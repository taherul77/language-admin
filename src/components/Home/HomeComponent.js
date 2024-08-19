"use client";
import React, { useEffect } from "react";
import WeekReport from "./WeekReport/WeekReport";
import DailyReport from "./DailyReport/DailyReport";
import MorningShift from "./MorningShift/MorningShift";
import EveningShift from "./EveningShift/EveningShift";
import MonthReport from "./MonthReport/MonthReport";

import { AllEmployee, DesignationData } from "@/api";
import useStore from "@/store/store";
import SkeletonComponent from "../Ui/SkeletonComponent/SkeletonComponent";
import { useQuery } from "@tanstack/react-query";

const HomeComponent = () => {
  const { setDesignations, setAllEmployee, setAllLocationEmployee } = useStore();

  const {
    data: allLocationEmployee,
    isLoading: isLoadingLocations,
    error: locationError,
  } = useQuery({
    queryKey: ["allLocationEmployee"],
    queryFn: async () => {
      const response = await fetch('/api/redis/allLocationEmployee');
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}. Response: ${errorText}`);
      }
      return response.json();
    },
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
    return <SkeletonComponent />;
  }

  if (locationError) {
    return (
      <div>
        Error: {designationError?.message || allEmployeeError?.message || locationError?.message}
      </div>
    );
  }

  return (
    <>
      <div>
        <div className="px-2 py-5">
          <MonthReport />
        </div>
        <div className="flex flex-wrap justify-center gap-5 py-5">
          <WeekReport />
          <DailyReport />
          <MorningShift />
          <EveningShift />
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
