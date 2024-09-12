"use client";
import React from "react";
import { DataTable } from "../global/Table/DataTable";
import { seminarColumns } from "../global/Table/columns";

interface Author {
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

interface Seminar {
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

interface SeminarTableProps {
  seminar: Seminar[];
}

const SeminarTable = ({ seminar }: SeminarTableProps) => {
  return (
    <div className="flex justify-center items-center">
      {seminar.length > 0 ? (
        <DataTable columns={seminarColumns} data={seminar} />
      ) : (
        <div>No Seminar Information Available</div>
      )}
    </div>
  );
};

export default SeminarTable;
