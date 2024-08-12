import { rowSchema } from "@/components/Table/Data/Schema";

import { Button } from "@/components/Ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/Ui/dropdown-menu";

const DataTableRowActions = ({ row }) => {
  const parsedData = rowSchema.safeParse(row.original); // Use safeParse to avoid crashes

  if (!parsedData.success) {
    console.error("Error parsing row data:", parsedData.error);
    return null;
  }

  const data = parsedData.data;

  // Your actions component logic
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* Your actions */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataTableRowActions;
