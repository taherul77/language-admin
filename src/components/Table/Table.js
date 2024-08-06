import Image from 'next/image'
import React from 'react'
import DataTable from './TableComponents/DataTable'

const Table = () => {
  return (
    <>
  
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
    
      <DataTable data={tasks} columns={columns} />
    </div>
  </>
  )
}

export default Table