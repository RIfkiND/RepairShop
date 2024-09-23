"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ModalParts } from "../Dialog/ModalParts";
import { Pencil,Plus } from "lucide-react";
import { Input } from "@/components/ui/input";import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast"
import { Button } from "@/components/ui/button";
interface Part {
  id: string;
  name: string;
  brand_name: string;
  model_name: string;
  image: string;
  cost: string;
  stock: number;
}

const TableParts= () => {
  const [parts, setParts] = useState<Part[]>([]);
  const [selectedPart, setSelectedPart] = useState<Part | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const pageSize = 10;
  const { toast } = useToast()
  const fetchParts = async (page: number, search: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/parts?search=${search}&page=${page}&pageSize=${pageSize}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.data) {
        setParts(data.data);
        setTotalPages(data.totalPages);
      } else {
        setError("Failed to fetch parts");
      }
    } catch (error) {
      setError("An error occurred while fetching data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParts(currentPage, search);
  }, [currentPage, search]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  }; 
  
  const deletePart = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this part?")) {
      try {
        const response = await fetch(`/api/admin/parts/${id}`, {
          method: "DELETE",
        });
        if (response.status === 200){
          toast({
            variant: "destructive",
            title: "Success",
            description: "The part was successfully deleted.",
            action: <ToastAction altText="close">Close</ToastAction>,
          });
        }
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        fetchParts(currentPage, search);
      } catch (error) {
        console.error("Failed to delete part:", error);
      }
    }
  }
  const handleEditClick = (part: Part) => {
    setSelectedPart(part);
    setIsModalOpen(true);
  };
  const handleAddClick = () => {
    setSelectedPart(null); // Set selected part to null for creating a new part
    setIsModalOpen(true); // Open the modal
  };

    return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="flex flex-1 text-xl font-semibold text-black dark:text-white">
          Parts
        </h4>
        <Input
          id="search"
          placeholder="search.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-lg border text-black dark:border-white dark:bg-boxdark dark:text-white"
        />
        <Button onClick={handleAddClick} className="ml-4">
          <Plus /> Add Part
        </Button>
        
         <ModalParts 
        onSuccess={() => fetchParts(currentPage, search)} 
        part={selectedPart} 
        isOpen={isModalOpen} // Pass isOpen
      setIsOpen={setIsModalOpen} // Pass setIsOpen
      />
      </div>

      <div className="grid grid-cols-7 gap-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center ">
          <p className="font-medium">Parts Name</p>
        </div>
        <div className="col-span-1 hidden items-center justify-center sm:flex">
          <p className="font-medium">Brand</p>
        </div>
        <div className="col-span-1 hidden items-center justify-center sm:flex">
          <p className="font-medium">Model</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">Price</p>
        </div>

        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">stock</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">actions</p>
        </div>
      </div>

      {parts.map((part, id) => (
        <div
          className="grid grid-cols-7 gap-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={id}
        >
          <div className="col-span-2 flex items-center ">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <Image src={part.image} width={60} height={50} alt="Product" />
              </div>
              <p className="text-sm text-black dark:text-white">{part.name}</p>
            </div>
          </div>
          <div className="col-span-1 hidden items-center justify-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {part.brand_name}
            </p>
          </div>
          <div className="col-span-1 hidden items-center justify-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {part.model_name}
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <p className="text-sm text-black dark:text-white">${part.cost}</p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <p className="text-sm text-black dark:text-white">{part.stock}</p>
          </div>
          <div className="col-span-1 flex items-center justify-center space-x-3.5">
            <button className="hover:text-primary" onClick={() => deletePart(part.id)}>
              <svg
                className="fill-current"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                  fill=""
                />
                <path
                  d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                  fill=""
                />
                <path
                  d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                  fill=""
                />
                <path
                  d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                  fill=""
                />
              </svg>
            </button>
            <button className="hover:text-primary" onClick={() => handleEditClick(part)}>
             <Pencil width={25} height={17} />
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-center py-4">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={page === currentPage}
              className={`mx-1 px-4 py-2 ${page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {page}
            </button>
          ),
        )}
      </div>
    </div>
    
  );
};

export default TableParts;
