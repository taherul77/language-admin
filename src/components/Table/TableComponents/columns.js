/* eslint-disable react-hooks/rules-of-hooks */
// src/components/Table/TableComponents/columns.js
import { Checkbox } from "@/components/Ui/checkbox";
import DataTableColumnHeader from "./DataTableColumnHeader";
import { Badge } from "@/components/Ui/badge";
import DataTableRowActions from "./DataTableRowActions";
import Image from "next/image";
import { useState } from "react";
const defaultImage = "/image/drug-international-logo.png";
export const staticColumns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "slNo",
    accessorKey: "slNo",
    header: ({ table }) => <DataTableColumnHeader title="Sl. No" />,
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
    accessorKey: "mkgProfNo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Marketing Profile No" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("mkgProfNo")}</div>
    ),
  },
  {
    accessorKey: "empName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Employee Name" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("empName")}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "designationCode",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Designation Code" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("designationCode")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "ptgprofno",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Parent Code" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("ptgprofno")}</div>
    ),
  },
  {
    accessorKey: "activeStatusFlag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Active Status" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px]">
        {row.getValue("activeStatusFlag") === 1 ? (
          <Badge variant="outline">Active</Badge>
        ) : (
          <Badge variant="outline">Inactive</Badge>
        )}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "mkZmCode",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Marketing Zone Code" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("mkZmCode")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];



export const Columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <div className="flex justify-center items-center px-2">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "slNo",
    header: ({ table }) => <DataTableColumnHeader title="Sl. No" />,
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
    accessorKey: "mkgProfNo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="MKG Prof No" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("mkgProfNo")}</div>
    ),
  },
  {
    accessorKey: "employeName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Employee Name" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[200px] truncate font-medium">
        {row.getValue("employeName")}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "gpsDataTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GPS Data Time" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px]">{row.getValue("gpsDataTime")}</div>
    ),
  },
  {
    accessorKey: "gpslocalName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GPS Local Name" />
    ),
    cell: ({ row }) => (
      <div className="w-[200px]">{row.getValue("gpslocalName")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "profPhoto",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Profile Photo" />
    ),
    cell: ({ row }) => {
      const [imageSrc, setImageSrc] = useState(row.getValue("profPhoto"));

      const handleError = () => {
        setImageSrc(defaultImage);
      };

      return (
        <Image
          src={imageSrc}
          alt="Profile"
          height={50}
          width={50}
         
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            width: '40px',
            height: '40px',
            borderRadius: '50%',
          }}
          onError={handleError}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "bateryPct",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Battery Percentage" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px]">{row.getValue("bateryPct")}</div>
    ),
  },
  {
    accessorKey: "gpsDataFlag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GPS Data Flag" />
    ),
    cell: ({ row }) => {
      const value = row.getValue("gpsDataFlag");
      return (
        <div className="w-[100px]">
          {value === 1 ? "Active" : "Inactive"}
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  
  {
    accessorKey: "mlatitute",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Latitude" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px]">{row.getValue("mlatitute")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "mlongitute",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Longitude" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px]">{row.getValue("mlongitute")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];


