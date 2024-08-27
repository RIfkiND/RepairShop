import Image from "next/image";
import { Repair } from "@/types/Repairs";
import { RepairModal } from "./Modal/RepairModal";
import { Mail ,Eye, Trash } from "lucide-react";
const productData: Repair[] = [
  {
    image: "/images/product/product-01.png",
    name: "Apple Watch Series 7",
    type: "Watches",
    price: 296,
    status:"completed"
  },

];

const RepairHistoryTable = () => {
  return (
    <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5 flex">
        <h4 className=" flex flex-1 text-xl font-semibold text-black dark:text-white">
          RepairHistory
        </h4>
        <RepairModal/>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Product Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Category</p>
        </div>
      
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Status</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">actions</p>
        </div>
      </div>

      {productData.map((repair, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <Image
                  src={repair.image}
                  width={60}
                  height={50}
                  alt="Product"
                />
              </div>
              <p className="text-sm text-black dark:text-white">
                {repair.name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {repair.type}
            </p>
          </div>
          <div className="col-span-2 flex items-center">
          <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                      repair.status === "completed"
                        ? "bg-success text-success"
                        : repair.status === "uncomplete"
                          ? "bg-danger text-danger"
                          : "bg-warning text-warning"
                    }`}
                  >
                    {repair.status}
                  </p>
          </div>
          <div className="col-span-1 flex items-center space-x-3.5">
          <button className="hover:text-primary">
                    <Eye className="w-4"/>
                    </button>
                    <button className="hover:text-primary">
                  <Trash className="w-4"/>
                    </button>
                    <button className="hover:text-primary">
                     <Mail className="w-4     "/>
                    </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepairHistoryTable;
