import React from "react";

import { DataTable } from "@/components/global/Table/DataTable";
import { addressColumns } from "@/components/global/Table/columns";

interface Address {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  createdAt: Date;  // Keep as Date
  updatedAt: Date;  // Keep as Date
  __v: number;
}

interface AddressTableProps {
  addresses: Address[];
}

const AddressTable = ({ addresses }: AddressTableProps) => {
 

  return (
    <div className="flex justify-center items-center">
      {addresses.length > 0 ? (
        <DataTable columns={addressColumns} data={addresses} />
      ) : (
        <div>No Address Information Available</div>
      )}
    </div>
  );
};

export default AddressTable;
