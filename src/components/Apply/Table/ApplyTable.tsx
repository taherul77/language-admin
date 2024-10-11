import React from "react";
import { DataTable } from "@/components/global/Table/DataTable";
import { applyColumns } from "@/components/global/Table/columns";

interface Apply {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  }

  interface ApplyTableProps {
    apply: Apply[];
  }
const ApplyTable = ({ apply }: ApplyTableProps) => {
 
// console.log("apply", apply);

  return (
    <div className="flex justify-center items-center">
      {apply.length > 0 ? (
        <DataTable columns={applyColumns} data={apply} />
      ) : (
        <div>No Address Information Available</div>
      )}
    </div>
  );
};

export default ApplyTable;
