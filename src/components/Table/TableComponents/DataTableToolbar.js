import { Button } from '@/components/Ui/button';
import { Input } from '@/components/Ui/input';
import { Cross2Icon } from '@radix-ui/react-icons';
import React from 'react';
import DataTableFacetedFilter from './DataTableFacetedFilter';
import DataTableViewOptions from './DataTableViewOptions';
import { Table } from "@tanstack/react-table";
import PropTypes from 'prop-types';

// Import statuses and priorities
import { gpsDataFlag} from '../Data/Data';

export function DataTableToolbar({ table }) {
    
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("id")?.getFilterValue() ?? "")}
          onChange={(event) =>
            table.getColumn("id")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[200px] lg:w-[300px]"
        /> 
        {table.getColumn("gpsDataFlag") && (
          <DataTableFacetedFilter
            column={table.getColumn("gpsDataFlag")}
            title="Active Status"
            className="bg-white"
            options={gpsDataFlag}
          />
        )}
       
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
      <DataTableViewOptions table={table} />
    </div>
  );
}

DataTableToolbar.propTypes = {
  table: PropTypes.object.isRequired,
};
