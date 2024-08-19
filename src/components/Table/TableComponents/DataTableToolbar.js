"use client";

import { Input } from "@/components/Ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import React from "react";
import DataTableFacetedFilter from "./DataTableFacetedFilter";
import DataTableViewOptions from "./DataTableViewOptions";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import { gpsDataFlag } from "../Data/Data";
import useStore from "@/store/store";
import { Button } from "@/components/Ui/button";

export function DataTableToolbar({ table, selectedRow }) {
  const { setSelectedRow } = useStore(); // Access setSelectedRow from Zustand store
  const router = useRouter();

  const isFiltered = table.getState().columnFilters.length > 0;



  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter employees..."
          value={table.getColumn("employeName")?.getFilterValue() ?? ""} // Use "employeName" instead of "id"
          onChange={(event) =>
            table.getColumn("employeName")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[200px] lg:w-[300px]"
        />

        {/* {table.getColumn("gpsDataFlag") && (
          <DataTableFacetedFilter
            column={table.getColumn("gpsDataFlag")}
            title="Active Status"
            className="bg-white"
            options={gpsDataFlag}
          />
        )} */}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
        
      </div>
      <div className="flex items-center space-x-2">
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}

DataTableToolbar.propTypes = {
  table: PropTypes.object.isRequired,
  selectedRow: PropTypes.array.isRequired, // Ensure selectedRow is an array
};
