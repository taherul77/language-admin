
import { SeminarData } from "@/api";
import React from "react";
import SeminarTable from "./SeminarTable";

export interface Author {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  profile_pic: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Seminar {
  _id: string;
  title: string;
  content: string;
  venue: string;
  contact: string;
  date: Date;
  image: string;
  author: Author;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface SeminarResponse {
  result: Seminar[];
}
export default async function SeminarComponent() {
  const seminarInfo: SeminarResponse = await SeminarData();

  if (!Array.isArray(seminarInfo.result)) {
    console.error("Expected applyInfo.result to be an array");
    return <div>Error: Invalid data format</div>;
  }


  return (
    <div className=" px-4">
      <div className="flex justify-start  text-4xl bg-clip-text text-transparent bg-gradient-to-b from-[#118FC1] to-[#15acc7] tracking-[0.05em]">
        Seminar Information
      </div>
      <div className="flex justify-center items-center my-5">
        <SeminarTable seminar={seminarInfo.result}></SeminarTable>
      </div>
    </div>
  );
}
