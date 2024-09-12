import React from "react";
import { DataTable } from "@/components/global/Table/DataTable";
import { mailColumns } from "@/components/global/Table/columns";

interface Mail {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  }

  interface MailTableProps {
    mail: Mail[];
  }
const MailTable = ({ mail }: MailTableProps) => {
 

  return (
    <div className="flex justify-center items-center">
      {mail.length > 0 ? (
        <DataTable columns={mailColumns} data={mail} />
      ) : (
        <div>No Address Information Available</div>
      )}
    </div>
  );
};

export default MailTable;
