"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import EditModal from "../Modal/EditModal/EditModal";
import axios from "axios";  // Import axios for API calls
import { usePathname } from "next/navigation"; // Import useRouter to get current route

interface RowData {
  _id: string; // Ensure _id is a string or the appropriate type
}

type DataTableRowActionsProps<TData extends RowData> = {
  row: {
    original: TData;
  };
};

const DataTableRowActions = <TData extends RowData>({ row }: DataTableRowActionsProps<TData>) => {
  const pathname = usePathname();  // Get the current path

  // Extract the dynamic page name from the route. Assuming the page name is the last part of the route.
  const currentPageName = pathname ? pathname.split("/").pop() : "defaultPageName"; // Add a fallback



  const handleEdit = () => {
    console.log("Edit row data:", row.original);
    // You can pass this row data to your modal for editing
  };

  const handleDelete = async () => {
    const id = row.original._id;  // Extract the ID from row data
    console.log("Delete row data:", row.original);
  
    try {
      // Add the token here (replace 'your-token' with the actual token or fetch it dynamically)
     const token = process.env.NEXT_PUBLIC_API_TOKEN;
      
      // Use the dynamic page name in the API URL
      const response = await axios.delete(`http://localhost:8000/api/v1/${currentPageName}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });
  
      console.log("Delete successful:", response.data);
      // Add any further actions, such as reloading the data or showing a success message
    } catch (error) {
      console.error("Error deleting the row:", error);
      // Handle the error, possibly by showing an error message to the user
    }
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onClick={handleEdit}>
          <EditModal ModalTitle="Edit Row" rowData={row.original}>Edit</EditModal>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDelete}>
          Delete
          <DropdownMenuShortcut>⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataTableRowActions;
