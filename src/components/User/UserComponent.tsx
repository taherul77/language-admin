import React from "react";
import { UserData } from "@/api";
import UserTable from "./UserTable";



export interface user {
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

interface UserResponse {
  statusCode: number;
  message: string;
  meta: any;
  result: user[];
}
export default async function UserComponent () {
  const userInfo: UserResponse = await UserData();
console.log("userInfo",userInfo);


  if (!Array?.isArray(userInfo.result)) {
    console.error("Expected applyInfo.result to be an array");
    return <div>Error: Invalid data format</div>;
  }
  return (
    <div className="container px-4">
      <div className="flex justify-start font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-b from-[#118FC1] to-[#0b9dd6] tracking-[0.05em]">
        User Component
      </div>


      <div className="flex justify-center items-center my-5">
      <UserTable user={userInfo?.result}></UserTable>
      </div>
    </div>
  );
};


