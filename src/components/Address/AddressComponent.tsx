import { AddressData } from "@/api";
import AddressTable from "./Table/AddressTable";

interface Address {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface AddressResponse {
  statusCode: number;
  message: string;
  meta: any;
  result: Address[];
}

export default async function AddressComponent() {
  const addressInfo: AddressResponse = await AddressData();

  if (!Array.isArray(addressInfo.result)) {
    console.error("Expected addressInfo.result to be an array");
    return <div>Error: Invalid data format</div>;
  }

  return (
    <div className="overflow-auto h-[90vh] px-4">
      <div className="flex justify-start items-center text-4xl bg-clip-text text-transparent bg-gradient-to-b from-[#118FC1] to-[#26794f] tracking-[0.05em]">
        Address Information
      </div>
      <div className="flex justify-center items-center w-full my-5">
        {/* Passing the array of addresses */}
        <AddressTable addresses={addressInfo.result} />
      </div>
    </div>
  );
}
