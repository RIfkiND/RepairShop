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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PartsSchemas } from "@/schemas/PartsSchema";

export function ModalParts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PartsSchemas),
  });
    

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
          <DialogDescription>From For Adding Parts</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="flex flex-col justify-center  gap-4">
            <Label
              htmlFor="name"
              className="text-left text-black dark:text-white"
            >
              Name
            </Label>
            <Input
              id="name"
              placeholder="name.."
              className="col-span-3 text-black dark:bg-white dark:text-black"
            />
          </div>
          <div className="flex flex-col justify-center  gap-4">
            <Label
              htmlFor="brand"
              className="text-left text-black dark:text-white"
            >
              Brand
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue className="text-black dark:text-white" />
              </SelectTrigger>
              <SelectContent className="z-999  ">
                <SelectGroup>
                  <SelectLabel>Brand</SelectLabel>
                  <SelectItem value="samsung">Samsung</SelectItem>
                  <SelectItem value="apple">apple</SelectItem>
                  <SelectItem value="xiaomi">xiaomi</SelectItem>
                  <SelectItem value="oppo">oppo</SelectItem>
                  <SelectItem value="infinix">infinix</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Label
              htmlFor="file"
              className="text-left text-black dark:text-white"
            >
              cost
            </Label>
            <Input
              id="picture"
              type="number"
              className="text-black  dark:bg-white"
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Label
              htmlFor="model"
              className="text-left text-black dark:text-white"
            >
              model
            </Label>
            <Select  >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="z-999">
                <SelectGroup >
                  <SelectLabel >Fruits</SelectLabel>
                  <SelectItem value="iphone X">Iphone X</SelectItem>
                  <SelectItem value="samsung A23">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <Label
              htmlFor="file"
              className="text-left text-black dark:text-white"
            >
              stock
            </Label>
            <Input
              id="picture"
              type="number"
              className="text-black  dark:bg-white"
            />
          </div>
          <div className="flex flex-col justify-center gap-4">   
            <Label
              htmlFor="file"
              className="text-left text-black dark:text-white"
            >
              File
            </Label>
              <Input type="file"/>
          </div>
        </div>
        <DialogFooter className="mt-5">
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
