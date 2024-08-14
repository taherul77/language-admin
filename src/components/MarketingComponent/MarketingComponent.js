"use client";
import React, { useEffect, useMemo } from "react";
import WeekReport from "../Home/WeekReport/WeekReport";
import DailyReport from "@/components/MarketingComponent/DailyReport/DailyReport";
import MorningShift from "@/components/MarketingComponent/MorningShift/MorningShift";
import EveningShift from "@/components/MarketingComponent/EveningShift/EveningShift";
import SelectedEmployee from "./SelectedEmployee/SelectedEmployee";
import { useQuery } from "@tanstack/react-query";
import { DesignationData, AllEmployee, AllLocationEmployee } from "@/api";
import SkeletonComponent from "../Ui/SkeletonComponent/SkeletonComponent";
import useStore from "@/store/store";

const MarketingComponent = () => {
  const { setDesignations,setAllEmployee } = useStore();
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

  const filteredAllLocationEmployee = useMemo(() => {
    return allLocationEmployee?.reduce((acc, current) => {
      const existingEmployee = acc.find(
        (item) => item.mkgProfNo === current.mkgProfNo
      );
      if (
        !existingEmployee ||
        current.gpsDataDateTime > existingEmployee.gpsDataDateTime
      ) {
        return acc
          .filter((item) => item.mkgProfNo !== current.mkgProfNo)
          .concat(current);
      }
      return acc;
    }, []);
  }, [allLocationEmployee]);

  const nonVacantEmployees = useMemo(() => {
    return allEmployee?.filter((employee) => employee.empName !== "VACANT");
  }, [allEmployee]);

  const totalNonVacantEmployees = nonVacantEmployees?.length || 0;

  const { activeCount, inactiveCount, activeEmployees } = useMemo(() => {
    let active = 0;
    let inactive = 0;
    const activeEmps = [];

    nonVacantEmployees?.forEach((employee) => {
      const isActive = filteredAllLocationEmployee?.some(
        (locationEmployee) => locationEmployee.mkgProfNo === employee.mkgProfNo
      );

      if (isActive) {
        active++;
        activeEmps.push(employee);
      } else {
        inactive++;
      }
    });

    return {
      activeCount: active,
      inactiveCount: inactive,
      activeEmployees: activeEmps,
    };
  }, [nonVacantEmployees, filteredAllLocationEmployee]);

  const {
    morningShiftEmployees,
    eveningShiftEmployees,
    inactiveMorningEmployees,
    inactiveEveningEmployees,
  } = useMemo(() => {
    if (!allEmployee || !allLocationEmployee) {
      return {
        morningShiftEmployees: [],
        eveningShiftEmployees: [],
        inactiveMorningEmployees: [],
        inactiveEveningEmployees: [],
      };
    }

    const morningShiftMap = new Map();
    const eveningShiftMap = new Map();
    const inactiveMorningEmployees = [];
    const inactiveEveningEmployees = [];

    allLocationEmployee.forEach((employee) => {
      // Skip VACANT employees
      if (employee.empName === "VACANT") {
        return;
      }

      const [time, period] = employee.gpsDataTime.split(" ");
      const [hours, minutes] = time.split(":").map(Number);

      let gpsHour = hours;
      if (period === "PM" && hours !== 12) {
        gpsHour += 12;
      } else if (period === "AM" && hours === 12) {
        gpsHour = 0;
      }

      // Morning shift (6:00 AM to 1:59 PM)
      if (gpsHour >= 6 && gpsHour < 14) {
        const existing = morningShiftMap.get(employee.mkgProfNo);
        if (
          !existing ||
          new Date(employee.gpsDataDateTime) >
            new Date(existing.gpsDataDateTime)
        ) {
          morningShiftMap.set(employee.mkgProfNo, employee);
        }
      }

      // Evening shift (2:00 PM to 9:59 PM)
      else if (gpsHour >= 14 && gpsHour < 22) {
        const existing = eveningShiftMap.get(employee.mkgProfNo);
        if (
          !existing ||
          new Date(employee.gpsDataDateTime) >
            new Date(existing.gpsDataDateTime)
        ) {
          eveningShiftMap.set(employee.mkgProfNo, employee);
        }
      }
    });

    const morningShiftEmployees = Array.from(morningShiftMap.values());
    const eveningShiftEmployees = Array.from(eveningShiftMap.values());

    allEmployee.forEach((employee) => {
      if (employee.empName === "VACANT") {
        return;
      }

      const isMorningActive = morningShiftEmployees.some(
        (emp) => emp.mkgProfNo === employee.mkgProfNo
      );
      const isEveningActive = eveningShiftEmployees.some(
        (emp) => emp.mkgProfNo === employee.mkgProfNo
      );

      if (!isMorningActive) {
        inactiveMorningEmployees.push(employee);
      }

      if (!isEveningActive) {
        inactiveEveningEmployees.push(employee);
      }
    });

    return {
      morningShiftEmployees,
      eveningShiftEmployees,
      inactiveMorningEmployees,
      inactiveEveningEmployees,
    };
  }, [allEmployee, allLocationEmployee]);

  const totalMorningEmployees = morningShiftEmployees.length;
  const totalEveningEmployees = eveningShiftEmployees.length;
  const totalInactiveMorning = inactiveMorningEmployees.length;
  const totalInactiveEvening = inactiveEveningEmployees.length;




 

  if (isLoadingDesignations || isLoadingEmployees || isLoadingLocations) {
    return (
      <div>
        <SkeletonComponent />
      </div>
    );
  }

  if (designationError || allEmployeeError || locationError) {
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
      <div className="flex flex-wrap justify-center text-2xl font-bold gap-5 py-10">
        Marketing Employee Reports
      </div>
      <div className="flex flex-wrap justify-center gap-5 pb-5">
        <WeekReport />
        <DailyReport
          isLoading={isLoadingLocations}
          totalEmployees={totalNonVacantEmployees}
          activeCount={activeCount}
          inactiveCount={inactiveCount}
        />
        <MorningShift
          activeEmployees={totalMorningEmployees}
          totalInactiveMorning={totalInactiveMorning}
        />
        {totalEveningEmployees > 0 && (
          <EveningShift
            totalEveningEmployees={totalEveningEmployees}
            totalInactiveEvening={totalInactiveEvening}
          />
        )}
      </div>
      <div className="flex flex-col justify-start items-center px-8">
        <SelectedEmployee
          designations={designations}
          allEmployee={allEmployee}
          allLocationEmployee={filteredAllLocationEmployee}
        />
      </div>
    </>
  );
};

export default MarketingComponent;
