
"use client"
import React, { useState, useEffect } from "react";
import DesignationSelect from "./DesignationSelect/DesignationSelect";
import DateSelect from "./DateSelect/DateSelect";
import TimeSelect from "./TimeSelect/TimeSelect";
import EmployeeSelect from "./EmployeeSelect/EmployeeSelect";
import { Button } from "@/components/Ui/button";

import { staticColumns,Columns } from "@/components/Table/TableComponents/columns";

import DataTable from "@/components/Table/TableComponents/DataTable";

const SelectedEmployee = ({ designations, allEmployee }) => {
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const [filteredEmployees, setFilteredEmployees] = useState(allEmployee);

  useEffect(() => {
    if (selectedDesignation) {
      const filtered = allEmployee.filter(
        (employee) => employee.designationCode === selectedDesignation
      );
      setFilteredEmployees(filtered);
    } else {
      setFilteredEmployees(allEmployee);
    }
  }, [selectedDesignation, allEmployee]);

  return (
    <div className="flex flex-col items-center gap-4 py-10 justify-center">
      <div className="flex flex-wrap gap-4 justify-center">
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
      </div>
      <DataTable data={filteredEmployees} columns={Columns} />
    </div>
  );
};

export default SelectedEmployee;
