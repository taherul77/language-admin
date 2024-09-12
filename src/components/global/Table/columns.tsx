"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Address, Apply, Mail, Seminar,User } from "../data/schema";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import DataTableRowActions from "./DataTableRowActions";
import Image from "next/image";

// Define columns using ColumnDef
export const addressColumns: ColumnDef<Address>[] = [

  {
    accessorKey: "slNo",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Sl. No" />
    ),
    cell: ({ row, table }) => {
      const pageIndex = table.getState().pagination.pageIndex;
      const pageSize = table.getState().pagination.pageSize;
      return (
        <div className="w-[40px]">{pageIndex * pageSize + row.index + 1}</div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div className="w-[250px]">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div className="w-full truncate">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
    cell: ({ row }) => <div>{row.getValue("phoneNumber")}</div>,
  },
  {
    accessorKey: "address",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => (
      <div className="w-[300px]">{row.getValue("address")}</div>
    ),
  },
  {
    id: "actions",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
];
export const applyColumns: ColumnDef<Apply>[] = [

  {
    accessorKey: "slNo",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Sl. No" />
    ),
    cell: ({ row, table }) => {
      const pageIndex = table.getState().pagination.pageIndex;
      const pageSize = table.getState().pagination.pageSize;
      return (
        <div className="w-[40px]">{pageIndex * pageSize + row.index + 1}</div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div className="w-[250px]">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div className="w-full truncate">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
    cell: ({ row }) => <div>{row.getValue("phoneNumber")}</div>,
  },
  {
    accessorKey: "message",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Message" />
    ),
    cell: ({ row }) => (
      <div className="w-[300px]">{row.getValue("message")}</div>
    ),
  },
  {
    id: "actions",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
];
const formatDate = (date: string | Date, locale = 'en-GB') => {
  return new Intl.DateTimeFormat(locale).format(new Date(date));
};





















export const mailColumns: ColumnDef<Mail>[] = [

  {
    accessorKey: "slNo",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Sl. No" />
    ),
    cell: ({ row, table }) => {
      const pageIndex = table.getState().pagination.pageIndex;
      const pageSize = table.getState().pagination.pageSize;
      return (
        <div className="w-[40px]">{pageIndex * pageSize + row.index + 1}</div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div className="w-[250px]">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div className="w-full truncate">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
    cell: ({ row }) => <div>{row.getValue("phoneNumber")}</div>,
  },
  {
    accessorKey: "message",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Message" />
    ),
    cell: ({ row }) => (
      <div className="w-[300px]">{row.getValue("message")}</div>
    ),
  },
  {
    id: "actions",
    header: ({ column }: { column: any }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
];
















export const seminarColumns: ColumnDef<Seminar>[] = [
  
  {
    accessorKey: "slNo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sl. No" />
    ),
    cell: ({ row, table }) => {
      const pageIndex = table.getState().pagination.pageIndex;
      const pageSize = table.getState().pagination.pageSize;
      return (
        <div className="w-[40px]">{pageIndex * pageSize + row.index + 1}</div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
 
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => <div className="w-[250px]">{row.getValue("title")}</div>,
  },                        
  {
    accessorKey: "content",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Content" />
    ),
    cell: ({ row }) => (
      <div className="w-full truncate">{row.getValue("content")}</div>
    ),
  },

  {
    accessorKey: "venue",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Venue" />
    ),
    cell: ({ row }) => <div>{row.getValue("venue")}</div>,
  },
  {
    accessorKey: "contact",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Contact" />
    ),
    cell: ({ row }) => <div>{row.getValue("contact")}</div>,
  },
  {
    accessorKey: "image",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Image" />
    ),
    cell: ({ row }) => (
      <Image
        src={row.getValue("image")}
        alt="seminar Image"
        height={50}
        width={50}
        style={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
      />
    ),
  },

  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
];
export const userColumns: ColumnDef<User>[] = [

  {
    accessorKey: "slNo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sl. No" />
    ),
    cell: ({ row, table }) => {
      const pageIndex = table.getState().pagination.pageIndex;
      const pageSize = table.getState().pagination.pageSize;
      return (
        <div className="w-[40px]">{pageIndex * pageSize + row.index + 1}</div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "first_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First Name" />
    ),
    cell: ({ row }) => <div className="w-[250px]">{row.getValue("first_name")}</div>,
  },                        
  {
    accessorKey: "last_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Name" />
    ),
    cell: ({ row }) => (
      <div className="w-full truncate">{row.getValue("last_name")}</div>
    ),
  },

  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => <div>{row.getValue("role")}</div>,
  },
  {
    accessorKey: "profile_pic",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Image" />
    ),
    cell: ({ row }) => (
      <Image
        src={row.getValue("profile_pic")}
        alt="Seminar Image"
        height={50}
        width={50}
        style={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
      />
    ),
  },
  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
];
