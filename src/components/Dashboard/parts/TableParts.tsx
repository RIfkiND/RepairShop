"use client";
import { Repair } from "@/types/Repairs";
import { Mail, Eye, Trash, Pencil, Plus, MoreHorizontal } from "lucide-react";
import { Button, Dropdown, Menu } from "antd";
import { useState } from "react";
import { ModalRepairRequest } from "../Dialog/ModalRepairRequest";

const productData: Repair[] = [
  {
    name: "Apple Watch Series 7",
    type: "Watches",
    price: 296,
    status: "completed",
  },
];

const RepairHistoryTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRepair, setSelectedRepair] = useState<Repair | null>(null);

  const handleEditClick = (repair: Repair) => {
    setSelectedRepair(repair);
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setSelectedRepair(null);
    setIsOpen(false);
  };

  const handleMenuClick = (action: string, repair: Repair) => {
    if (action === "edit") {
      handleEditClick(repair);
    } else if (action === "view") {
      // Handle view action
    } else if (action === "delete") {
      // Handle delete action
    } else if (action === "email") {
      // Handle email action
    }
  };

  const menuItems = (repair: Repair) => (
    <Menu>
      <Menu.Item key="view" onClick={() => handleMenuClick("view", repair)}>
        View
      </Menu.Item>
      <Menu.Item key="edit" onClick={() => handleMenuClick("edit", repair)}>
        Edit
      </Menu.Item>
      <Menu.Item key="delete" onClick={() => handleMenuClick("delete", repair)}>
        Delete
      </Menu.Item>
      <Menu.Item key="email" onClick={() => handleMenuClick("email", repair)}>
        Email
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5 flex">
        <h4 className="flex flex-1 text-xl font-semibold text-black dark:text-white">
          Repair History
        </h4>
        <Button className="ml-4" onClick={() => { setSelectedRepair(null); setIsOpen(true); }}>
          <Plus /> Add Part
        </Button>
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
          <p className="font-medium">Actions</p>
        </div>
      </div>

      {productData.map((repair, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <p className="text-sm text-black dark:text-white">{repair.name}</p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">{repair.type}</p>
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
          <div className="col-span-1 flex items-center">
            <Dropdown overlay={menuItems(repair)} trigger={['click']} placement="bottomRight">
              <button className="hover:text-primary">
                <MoreHorizontal className="w-4" />
              </button>
            </Dropdown>
          </div>
        </div>
      ))}

      <ModalRepairRequest
        request={selectedRepair}
        isOpen={isOpen}
        setIsOpen={handleModalClose}
        onSuccess={handleModalClose}
      />
    </div>
  );
};

export default RepairHistoryTable;
