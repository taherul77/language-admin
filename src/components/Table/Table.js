import React from 'react';
import DataTable from './TableComponents/DataTable';

const Table = ({ data }) => {
  return (
    <div className="flex flex-col p-2">
      <DataTable data={data} />
    </div>
  );
};

export default Table;
