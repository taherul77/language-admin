import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/Ui/select';

const EmployeeSelect = ({ employees }) => {
  return (
    <Select className="bg-white">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Employee" />
      </SelectTrigger>
      <SelectContent className="bg-white h-52">
        <SelectGroup>
          <SelectLabel>Employee Id ::- Employee Name</SelectLabel>
          {employees.map((employee,index) => (
            <SelectItem key={index} value={employee.empNo}>
             {employee.mkgProfNo} :: {employee.empName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default EmployeeSelect;
