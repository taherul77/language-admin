import { MailData } from '@/api';
import React from 'react'
import MailTable from './MailTable';
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
interface MailResponse {
  statusCode: number;
  message: string;
  meta: any;
  result: Mail[];
}

export default async function MailComponent() {

  const mailInfo: MailResponse = await MailData();

  if (!Array.isArray(mailInfo.result)) {
    console.error("Expected applyInfo.result to be an array");
    return <div>Error: Invalid data format</div>;
  }


  return (
    <div className="overflow-auto h-[90vh] px-4">
    <div className="flex justify-start items-center text-4xl bg-clip-text text-transparent bg-gradient-to-b from-[#118FC1] to-[#26794f] tracking-[0.05em]">
      Mail Information
    </div>
    <div className="flex justify-center items-center w-full my-5">
      {/* Pass the array of applies correctly */}
      <MailTable mail={mailInfo.result} />
    </div>
  </div>
  )
}

