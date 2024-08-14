"use client";
import React, { useState, useEffect } from "react";
import DesignationSelect from "./DesignationSelect/DesignationSelect";
import DateSelect from "./DateSelect/DateSelect";
import TimeSelect from "./TimeSelect/TimeSelect";
import EmployeeSelect from "./EmployeeSelect/EmployeeSelect";
import { Button } from "@/components/Ui/button";
import { Columns } from "@/components/Table/TableComponents/columns";
import DataTable from "@/components/Table/TableComponents/DataTable";

const SelectedEmployee = ({ designations, allEmployee, allLocationEmployee }) => {
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const [filteredEmployees, setFilteredEmployees] = useState(allEmployee);
  const [filteredLocationEmployees, setFilteredLocationEmployees] = useState(allLocationEmployee);
  const [employeeSelected, setEmployeeSelected] = useState(null);
  const [matchingEmployees, setMatchingEmployees] = useState([]);

  useEffect(() => {
    if (selectedDesignation) {
      // Filter employees based on the selected designation and remove 'VACANT' names
      const filtered = allEmployee.filter(
        (employee) => employee.designationCode === selectedDesignation && employee.empName !== "VACANT"
      );
      setFilteredEmployees(filtered);

      // Filter location employees based on the filtered employees
      const filteredLocationData = allLocationEmployee.filter((locationEmployee) =>
        filtered.some((employee) => employee.mkgProfNo === locationEmployee.mkgProfNo)
      );
      setFilteredLocationEmployees(filteredLocationData);
    } else {
      // Filter out 'VACANT' names if no designation is selected
      const filteredAllEmployees = allEmployee.filter(employee => employee.empName !== "VACANT");
      setFilteredEmployees(filteredAllEmployees);
      const filteredAllLocationEmployees = allLocationEmployee.filter(locationEmployee => 
        filteredAllEmployees.some(employee => employee.mkgProfNo === locationEmployee.mkgProfNo)
      );
      setFilteredLocationEmployees(filteredAllLocationEmployees);
    }
  }, [selectedDesignation, allEmployee, allLocationEmployee]);

  useEffect(() => {
    if (employeeSelected) {
      // Filter matching employees based on selected employee and remove 'VACANT' names
      const matching = allEmployee.filter(
        (employee) => employee.ptgprofno === employeeSelected && employee.empName !== "VACANT"
      );


      const filtereChiledEmployees = allLocationEmployee.filter(locationEmployee => 
        matching.some(employee => employee.mkgProfNo === locationEmployee.mkgProfNo)
      );
      console.log(filtereChiledEmployees);
      
      setMatchingEmployees(filtereChiledEmployees);


      // // setMatchingEmployees(matching);
      // console.log("Number of matching employees:", matching.length);
      // console.log("Matching Employees:", matching);
    } else {
      setMatchingEmployees([]);
    }
  }, [employeeSelected, allEmployee, allLocationEmployee]);

  // Determine the data to display in the table
  const dataToDisplay = employeeSelected
    ? matchingEmployees
    : selectedDesignation
    ? filteredLocationEmployees
    : allLocationEmployee;

  return (
    <div className="flex flex-col items-center gap-4 py-10 justify-center">
      <div className="flex flex-wrap gap-4 justify-center">
        <DesignationSelect
          designations={designations}
          onDesignationSelect={(code) => setSelectedDesignation(code)}
        />
        {selectedDesignation && (
          <>
            <EmployeeSelect employees={filteredLocationEmployees} setEmployeeSelected={setEmployeeSelected} />
            <DateSelect />
            <TimeSelect placeholder="from time" />
            <TimeSelect placeholder="to time" />
            <Button className="bg-gray-200 h-auto border w-[180px]">
              Search
            </Button>
          </>
        )}
      </div>
      <DataTable data={dataToDisplay} columns={Columns} />
    </div>
  );
};

export default SelectedEmployee;
