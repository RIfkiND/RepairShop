"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { BrandSchema } from "@/schemas/BrandSchema";

// Type for form data
type BrandFormData = {
  name: string;
  image?: File; // Optional file field
};

export function ModalBrand() {
  const [file, setFile] = useState<File | null>(null);

  // Define form with React Hook Form
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<BrandFormData>({
    resolver: zodResolver(BrandSchema),
  });

  // Handle form submission
  const onSubmit = async (data: BrandFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    if (file) {
      formData.append("image", file); // Add the file to form data
    }

    try {
      const response = await fetch("/api/admin/parts/brand", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        alert(result.message);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the brand.");
    }
  };

  // Handle file change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      setValue("image", selectedFile); // Set value for React Hook Form
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost"><Plus /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Add Brand</DialogTitle>
          <DialogDescription>
            Add a new brand
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right text-black dark:text-white">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                {...register("name")}
                className="col-span-3 text-black dark:text-white"
              />
              {errors.name && <p className="col-span-4 text-red-600">{errors.name.message}</p>}

              <Label htmlFor="image" className="text-right text-black dark:text-white">
                Image
              </Label>
              <Input
                id="image"
                type="file"
                onChange={handleFileChange} // Handle file input changes
                className="col-span-3 text-black dark:text-white"
              />
              {errors.image && <p className="col-span-4 text-red-600">{errors.image.message}</p>}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
