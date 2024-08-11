import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/Ui/select'
import React from 'react'

const EmployeeSelect = () => {
  return (
    <Select className="bg-white">
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select Employee" />
    </SelectTrigger>
    <SelectContent className="bg-white h-52">
      {/* <SelectGroup>
        <SelectLabel>Designation</SelectLabel>
        {designations.map((designation) => (
          <SelectItem
            key={designation.designationId}
            value={designation.designationName}
          >
            {designation.designationName}
          </SelectItem>
        ))}
      </SelectGroup> */}
    </SelectContent>
  </Select>
  )
}

export default EmployeeSelect