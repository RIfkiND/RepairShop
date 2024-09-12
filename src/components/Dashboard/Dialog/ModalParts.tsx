import React from 'react';
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from "@/components/ui/toast"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { InboxOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PartsSchemas } from "@/schemas/PartsSchema";

const { Dragger } = Upload;

type FormData = {
  name: string;
  brand: string;
  cost: number;
  model: string;
  stock: number;
  file: any;
};

export function ModalParts() {
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(PartsSchemas),
  });

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("brand_name", data.brand);
    formData.append("cost", data.cost.toString());
    formData.append("model_name", data.model);
    formData.append("stock", data.stock.toString());
    if (data.file.length > 0) {
      formData.append("file", data.file[0]);
    }

    try {
      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (response.ok) {
        message.success('File uploaded and data saved successfully!');
        console.log(result);
      } else {
        message.error(result.error || 'Failed to upload file.');
      }
    } catch (error) {
      message.error('An error occurred while uploading.');
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="z-999 mt-2 overflow-y-auto scrollbar-none dark:bg-boxdark-2 sm:max-h-[700px] sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Add Parts</DialogTitle>
          <DialogDescription>Form for Adding Parts</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 py-4">
          <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="name" className="text-left text-black dark:text-white">Name</Label>
            <Input
              id="name"
              placeholder="name.."
              {...register('name')}
              className="col-span-3 text-black dark:bg-white dark:text-black"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="brand" className="text-left text-black dark:text-white">Brand</Label>
            <Controller
              name="brand"
              control={control}
              render={({ field }) => (
                <Select {...field}>
                  <SelectTrigger>
                    <SelectValue className="text-black dark:text-white" />
                  </SelectTrigger>
                  <SelectContent className="z-999">
                    <SelectGroup>
                      <SelectLabel>Brand</SelectLabel>
                      <SelectItem value="samsung">Samsung</SelectItem>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="Shark">Shark</SelectItem>
                      <SelectItem value="ROG">ROG</SelectItem>
                      <SelectItem value="infinix">Infinix</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.brand && <p className="text-red-500">{errors.brand.message}</p>}
          </div>

          <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="cost" className="text-left text-black dark:text-white">Cost</Label>
            <Input
              id="cost"
              type="number"
              {...register('cost')}
              className="text-black dark:bg-white"
            />
            {errors.cost && <p className="text-red-500">{errors.cost.message}</p>}
          </div>

          <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="model" className="text-left text-black dark:text-white">Model</Label>
            <Controller
              name="model"
              control={control}
              render={({ field }) => (
                <Select {...field}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="z-999">
                    <SelectGroup>
                      <SelectLabel>Model</SelectLabel>
                      <SelectItem value="iphone X">iPhone X</SelectItem>
                      <SelectItem value="samsung A23">Samsung A23</SelectItem>
                      <SelectItem value="Infinix note 12">Infinix Note 12</SelectItem>
                      <SelectItem value="ROG Phone 12">ROG Phone 12</SelectItem>
                      <SelectItem value="Shark 12">Shark 12</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.model && <p className="text-red-500">{errors.model.message}</p>}
          </div>

          <div className="mb-30 flex flex-col justify-center gap-4">
            <Label htmlFor="stock" className="text-left text-black dark:text-white">Stock</Label>
            <Input
              id="stock"
              type="number"
              {...register('stock')}
              className="text-black dark:bg-white"
            />
            {errors.stock && <p className="text-red-500">{errors.stock.message}</p>}
          </div>

          <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="file" className="text-left text-black dark:text-white">File</Label>
            <Controller
              name="file"
              control={control}
              render={({ field }) => (
                <Dragger
                  {...field}
                  multiple={false}
                  customRequest={({ file, onSuccess }) => {
                    onSuccess?.({}, file);
                  }}
                  onChange={(info) => {
                    field.onChange(info.fileList);
                  }}
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="text-lg text-black dark:text-white">Click or drag file to this area to upload</p>
                  <p className="text-black opacity-70 dark:text-white">
                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.
                  </p>
                </Dragger>
              )}
            />
            {errors.file && <p className="text-red-500">{errors.file.message}</p>}
          </div>

          <DialogFooter className="mt-5">
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
