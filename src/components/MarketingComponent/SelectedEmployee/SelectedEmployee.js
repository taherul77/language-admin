"use client"
import React, { useState, useEffect } from "react";
import DesignationSelect from "./DesignationSelect/DesignationSelect";
import DateSelect from "./DateSelect/DateSelect";
import TimeSelect from "./TimeSelect/TimeSelect";
import EmployeeSelect from "./EmployeeSelect/EmployeeSelect";
import { Button } from "@/components/Ui/button";

import { staticColumns, Columns } from "@/components/Table/TableComponents/columns";
import DataTable from "@/components/Table/TableComponents/DataTable";

const SelectedEmployee = ({ designations, allEmployee, allLocationEmployee }) => {
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const [filteredEmployees, setFilteredEmployees] = useState(allEmployee);
  const [filteredLocationEmployees, setFilteredLocationEmployees] = useState(allLocationEmployee);

  useEffect(() => {
    if (selectedDesignation) {
      // Filter employees based on the selected designation
      const filtered = allEmployee.filter(
        (employee) => employee.designationCode === selectedDesignation
      );
      setFilteredEmployees(filtered);

      // Filter location employees based on the filtered employees
      const filteredLocationData = allLocationEmployee.filter((locationEmployee) =>
        filtered.some((employee) => employee.mkgProfNo === locationEmployee.mkgProfNo)
      );
      setFilteredLocationEmployees(filteredLocationData);
    } else {
      setFilteredEmployees(allEmployee);
      setFilteredLocationEmployees(allLocationEmployee);
    }
  }, [selectedDesignation, allEmployee, allLocationEmployee]);

  return (
    <div className="flex flex-col items-center gap-4 py-10 justify-center">
      <div className="flex flex-wrap gap-4 justify-center">
        <DesignationSelect
          designations={designations}
          onDesignationSelect={(code) => setSelectedDesignation(code)}
        />
        {selectedDesignation && (
          <>
            <EmployeeSelect employees={filteredLocationEmployees} /> {/* Updated to pass filteredLocationEmployees */}
            <DateSelect />
            <TimeSelect placeholder="from time" />
            <TimeSelect placeholder="to time" />
            <Button className="bg-gray-200 h-auto border w-[180px]">
              Search
            </Button>
          </>
        )}
      </div>
      <DataTable data={filteredLocationEmployees} columns={Columns} />
    </div>
  );
};

export default SelectedEmployee;
