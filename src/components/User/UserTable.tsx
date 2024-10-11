import React from "react";
import { DataTable } from "@/components/global/Table/DataTable";
import {  userColumns } from "@/components/global/Table/columns";

interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  profile_pic: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface UserTableProps {
  user: User[];
}
const UserTable = ({ user }: UserTableProps) => {
  console.log("user", user);
  
  return (
    <div className="flex justify-center items-center">
      {user?.length > 0 ? (
        <DataTable columns={userColumns} data={user} />
      ) : (
        <div>No Address Information Available</div>
      )}
    </div>
  );
};

export default UserTable;
