import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PartsSchemas } from "@/schemas/PartsSchema";
import z from "zod";
import { useEffect } from "react";

type PartsFormData = z.infer<typeof PartsSchemas>;

interface ModalPartsProps {
  onSuccess: () => void;
  part?: any;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void; 
}

export function ModalParts({ onSuccess, part, isOpen, setIsOpen }: ModalPartsProps) {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PartsFormData>({
    resolver: zodResolver(PartsSchemas),
  });

  useEffect(() => {
    if (part) {
      // Populate form with part data if part is provided
      setValue("name", part.name);
      setValue("brand_name", part.brand_name);
      setValue("model_name", part.model_name);
      setValue("cost", part.cost);
      setValue("stock", part.stock);
    }
  }, [part, setValue]);

  const handleCreateOrUpdate = async (data: PartsFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("brand_name", data.brand_name);
    formData.append("model_name", data.model_name);
    formData.append("cost", data.cost.toString());
    formData.append("stock", data.stock.toString());
    if (data.image) {
      formData.append("image", data.image[0]); // Only append if there's an image
    }

    const endpoint = part ? `/api/admin/parts/${part.id}` : "/api/admin/upload"; 
    const method = part ? "PUT" : "POST"; 

    try {
      const response = await fetch(endpoint, {
        method,
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to upload");
      }
      
      // toast({
      //   variant: "default",
      //   title: "Success",
      //   description: part ? "The part was successfully updated." : "The part was successfully added.",
      //   action: <ToastAction altText="close">Close</ToastAction>,
      // });
      setIsOpen(false);
      onSuccess();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="z-999 mt-2 overflow-y-auto scrollbar-none dark:bg-boxdark-2 sm:max-h-[700px] sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{part ? "Update Parts" : "Add Parts"}</DialogTitle>
          <DialogDescription>{part ? "Form for Updating Parts" : "Form for Adding Parts"}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleCreateOrUpdate)}>
          <div className="grid grid-cols-2 gap-4 py-4">
            {/* Name Field */}
            <div className="flex flex-col justify-center gap-4">
              <Label htmlFor="name" className="text-left text-black dark:text-white">Name</Label>
              <Input {...register("name")} id="name" placeholder="name..." className="col-span-3 text-black dark:bg-white dark:text-black" />
              {errors.name?.message && <p className="font-light text-red">{errors.name?.message}</p>}
            </div>

            {/* Brand Select */}
            <div className="flex flex-col justify-center gap-4">
              <Label htmlFor="brand" className="text-left text-black dark:text-white">Brand</Label>
              <Select onValueChange={(value) => setValue("brand_name", value)} defaultValue={part?.brand_name}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a brand" className="text-black dark:text-white" />
                </SelectTrigger>
                <SelectContent className="z-999">
                  <SelectGroup>
                    <SelectLabel>Brand</SelectLabel>
                    <SelectItem value="samsung">Samsung</SelectItem>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="xiaomi">Xiaomi</SelectItem>
                    <SelectItem value="oppo">Oppo</SelectItem>
                    <SelectItem value="infinix">Infinix</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.brand_name?.message && <p className="font-light text-red">{errors.brand_name.message}</p>}
            </div>

            {/* Cost Field */}
            <div className="flex flex-col justify-center gap-4">
              <Label htmlFor="cost" className="text-left text-black dark:text-white">Cost</Label>
              <Input {...register("cost", { valueAsNumber: true })} id="cost" type="number" className="text-black dark:bg-white" defaultValue={part?.cost} />
              {errors.cost?.message && <p className="font-light text-red">{errors.cost?.message}</p>}
            </div>

            {/* Model Select */}
            <div className="flex flex-col justify-center gap-4">
              <Label htmlFor="model" className="text-left text-black dark:text-white">Model</Label>
              <Select onValueChange={(value) => setValue("model_name", value)} defaultValue={part?.model_name}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent className="z-999">
                  <SelectGroup>
                    <SelectLabel>Model</SelectLabel>
                    <SelectItem value="iphone X">Iphone X</SelectItem>
                    <SelectItem value="samsung A23">Samsung A23</SelectItem>
                    <SelectItem value="Infinix note 12">Infinix note 12</SelectItem>
                    <SelectItem value="Rog Phone">Rog Phone</SelectItem>
                    <SelectItem value="Shark Phone">Shark Phone</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.model_name?.message && <p className="font-light text-red">{errors.model_name.message}</p>}
            </div>

            {/* Stock Field */}
            <div className="flex flex-col justify-center gap-4">
              <Label htmlFor="stock" className="text-left text-black dark:text-white">Stock</Label>
              <Input {...register("stock", { valueAsNumber: true })} id="stock" type="number" className="text-black dark:bg-white" defaultValue={part?.stock} />
              {errors.stock?.message && <p className="font-light text-red">{errors.stock?.message}</p>}
            </div>

            {/* File Input */}
            <div className="flex flex-col justify-center gap-4">
              <Label htmlFor="file" className="text-left text-black dark:text-white">File</Label>
              <Input {...register("image")} id="file" type="file" className="text-black dark:bg-white" />
            </div>
          </div>
          <DialogFooter className="mt-5">
            <Button type="submit">{part ? "Update" : "Save"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
