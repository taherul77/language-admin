import React from 'react';
import { ApplyData } from "@/api";
import ApplyTable from './Table/ApplyTable';

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
interface ApplyResponse {
  statusCode: number;
  message: string;
  meta: any;
  result: Apply[];
}

export default async function ApplyComponent() {
  const applyInfo: ApplyResponse = await ApplyData();

  if (!Array.isArray(applyInfo.result)) {
    console.error("Expected applyInfo.result to be an array");
    return <div>Error: Invalid data format</div>;
  }

  return (
    <div className="overflow-auto h-[90vh] px-4">
      <div className="flex justify-start items-center text-4xl bg-clip-text text-transparent bg-gradient-to-b from-[#118FC1] to-[#26794f] tracking-[0.05em]">
        Apply Information
      </div>
      <div className="flex justify-center items-center w-full my-5">
        {/* Pass the array of applies correctly */}
        <ApplyTable apply={applyInfo.result} />
      </div>
    </div>
  );
}
