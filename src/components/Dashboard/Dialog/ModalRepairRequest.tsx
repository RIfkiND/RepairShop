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
import { RepairRequestSchema } from '@/schemas/RepairRequestSchema';
import z from "zod";
import { useEffect } from "react";

type RepairRequestFormData = z.infer<typeof RepairRequestSchema>;

interface ModalRepairRequestProps {
  onSuccess: () => void;
  part?: any;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void; 
}

export function ModalRepairRequest({ part, isOpen, setIsOpen }: ModalRepairRequestProps) {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RepairRequestFormData>({
    resolver: zodResolver(RepairRequestSchema),
  });

  useEffect(() => {
    if (part) {
      setValue("name", part.name);
      setValue("email", part.email);
      setValue("category", part.category);
      setValue("status", part.status);
      setValue("request_date", part.request_date);
      setValue("complete_date", part.complete_date);
    }
  }, [part, setValue]);

  const handleCreateOrUpdate = async (data: RepairRequestFormData) => {
    const endpoint = part ? `/api/admin/repair-requests/${part.id}` : "/api/admin/repair-requests"; 
    const method = part ? "PUT" : "POST"; 

    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast({
        variant: "default",
        title: "Success",
        description: part ? "The repair request was successfully updated." : "The repair request was successfully created.",
        action: <ToastAction altText="close">Close</ToastAction>,
      });

      setIsOpen(false);
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
          <DialogTitle>{part ? "Update Repair Request" : "Add Repair Request"}</DialogTitle>
          <DialogDescription>{part ? "Form for Updating Repair Request" : "Form for Adding Repair Request"}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleCreateOrUpdate)}>
          <div className="grid grid-cols-2 gap-4 py-4">
            {/* Name Field */}
            <div className="flex flex-col justify-center gap-4">
              <Label htmlFor="name" className="text-left text-black dark:text-white">Name</Label>
              <Input {...register("name")} id="name" placeholder="name..." className="col-span-3 text-black dark:bg-white dark:text-black" />
              {errors.name?.message && <p className="font-light text-red">{errors.name?.message}</p>}
            </div>

            {/* Email Field */}
            <div className="flex flex-col justify-center gap-4">
              <Label htmlFor="email" className="text-left text-black dark:text-white">Email</Label>
              <Input {...register("email")} id="email" placeholder="email..." className="col-span-3 text-black dark:bg-white dark:text-black" />
              {errors.email?.message && <p className="font-light text-red">{errors.email?.message}</p>}
            </div>

            {/* Category Select */}
            <div className="flex flex-col justify-center gap-4">
              <Label htmlFor="category" className="text-left text-black dark:text-white">Category</Label>
              <Select onValueChange={(value) => setValue("category", value)} defaultValue={part?.category}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" className="text-black dark:text-white" />
                </SelectTrigger>
                <SelectContent className="z-999">
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    <SelectItem value="Watches">Watches</SelectItem>
                    <SelectItem value="Phones">Phones</SelectItem>
                    <SelectItem value="Laptops">Laptops</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.category?.message && <p className="font-light text-red">{errors.category.message}</p>}
            </div>

            {/* Status Select */}
            <div className="flex flex-col justify-center gap-4">
              <Label htmlFor="status" className="text-left text-black dark:text-white">Status</Label>
              <Select onValueChange={(value) => setValue("status", value)} defaultValue={part?.status}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a status" className="text-black dark:text-white" />
                </SelectTrigger>
                <SelectContent className="z-999">
                  <SelectGroup>
                    <SelectLabel>Statuses</SelectLabel>
                    <SelectItem value="PENDING">Pending</SelectItem>
                    <SelectItem value="COMPLETED">Completed</SelectItem>
                    <SelectItem value="CANCELLED">Cancelled</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.status?.message && <p className="font-light text-red">{errors.status.message}</p>}
            </div>
            {/* Complete Date Field */}
            <div className="flex flex-col justify-center gap-4">
              <Label htmlFor="complete_date" className="text-left text-black dark:text-white">Complete Date</Label>
              <Input 
                type="datetime-local" 
                {...register("complete_date")} 
                id="complete_date" 
                className="col-span-3 text-black dark:bg-white dark:text-black" 
              />
              {errors.complete_date?.message && <p className="font-light text-red">{errors.complete_date?.message}</p>}
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
