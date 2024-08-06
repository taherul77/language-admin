import React from 'react';
import DataTable from './TableComponents/DataTable';
// import  {staticColumns}  from "./TableComponents/Columns";
import  tasks  from "./Data/task.json";

const Table = () => {
  
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <DataTable data={tasks}  />
    </div>
  );
};

export default Table;
