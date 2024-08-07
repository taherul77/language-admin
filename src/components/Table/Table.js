import React from 'react';
import DataTable from './TableComponents/DataTable';
// import  {staticColumns}  from "./TableComponents/Columns";
import  tasks  from "./Data/task.json";

const Table = () => {
  
  return (
    <div className=" flex flex-col p-8">
      <DataTable data={tasks}  />
    </div>
  );
};

export default Table;
