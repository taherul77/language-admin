import React, { useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/Ui/select';

const EmployeeSelect = ({ employees,setEmployeeSelected }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleSelectChange = (value) => {
    const selected = employees.find(employee => employee.mkgProfNo === value);
    if (selected) {
      
      setSelectedEmployee(selected);
      setEmployeeSelected(selected.mkgProfNo)
    }
  };


  return (
    <Select className="bg-white" onValueChange={handleSelectChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue>
          {selectedEmployee ? `${selectedEmployee.mkgProfNo} :: ${selectedEmployee.employeName}` : 'Select Employee'}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-white h-52">
        <SelectGroup>
          <SelectLabel>Employee Id :: Employee Name</SelectLabel>
          {employees.map((employee, index) => (
            <SelectItem key={index} value={employee.mkgProfNo}>
              {employee.mkgProfNo} :: {employee.employeName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default EmployeeSelect;
