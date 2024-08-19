import { rowSchema } from "@/components/Table/Data/Schema";
import { Button } from "@/components/Ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/Ui/dropdown-menu";
import useStore from "@/store/store";
import { useRouter } from "next/navigation";
const DataTableRowActions = ({ row }) => {
  const { setSingleData } = useStore();
  const router = useRouter();
  const parsedData = rowSchema.safeParse(row.original); // Use safeParse to avoid crashes
  const data = parsedData.data;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <></>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataTableRowActions;
