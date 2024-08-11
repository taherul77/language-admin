"use client";
import React, { useState, useEffect } from "react";
import DesignationSelect from "./DesignationSelect/DesignationSelect";
import DateSelect from "./DateSelect/DateSelect";
import TimeSelect from "./TimeSelect/TimeSelect";
import EmployeeSelect from "./EmployeeSelect/EmployeeSelect";
import { Button } from "@/components/Ui/button";

const SelectedEmployee = ({ designations, allEmployee }) => {
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [employeeCount, setEmployeeCount] = useState(0);
  console.log(selectedDesignation);

  useEffect(() => {
    if (selectedDesignation) {
      const filtered = allEmployee.filter(
        (employee) => employee.designationCode === selectedDesignation
      );
      setFilteredEmployees(filtered);
      setEmployeeCount(filtered.length);
    } else {
      setFilteredEmployees([]);
      setEmployeeCount(0);
    }
  }, [selectedDesignation, allEmployee]);

  return (
    <div className="flex flex-wrap gap-4 py-10 justify-center">
      <DesignationSelect
        designations={designations}
        onDesignationSelect={(code) => setSelectedDesignation(code)}
      />
      {selectedDesignation && (
        <>
          <EmployeeSelect employees={filteredEmployees} />
          <DateSelect />
          <TimeSelect placeholder="from time" />
          <TimeSelect placeholder="to time" />
          <Button className="bg-gray-200 h-auto border w-[180px]">
            Search
          </Button>
        </>
      )}

      {selectedDesignation && (
        <div className="text-center mt-4">
          <p>{`Number of employees with designation ${selectedDesignation}: ${employeeCount}`}</p>
        </div>
      )}
    </div>
  );
};

export default SelectedEmployee;
