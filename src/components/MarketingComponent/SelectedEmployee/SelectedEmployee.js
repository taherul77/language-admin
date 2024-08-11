import React from "react";

import DesignationSelect from "./DesignationSelect/DesignationSelect";
import DateSelect from "./DateSelect/DateSelect";
import TimeSelect from "./TimeSelect/TimeSelect";
import EmployeeSelect from "./EmployeeSelect/EmployeeSelect";
import { Button } from "@/components/Ui/button";

const SelectedEmployee = ({ designations }) => {
  return (
    <div className="flex  flex-wrap gap-4 py-10">
      <DesignationSelect designations={designations} />
      {/* Uncomment the components as needed */}
      <EmployeeSelect />
      <DateSelect />

      <TimeSelect />
      <TimeSelect />
      <Button className="bg-gray-200 h-auto border w-[180px]">Search</Button>
    </div>
  );
};

export default SelectedEmployee;
