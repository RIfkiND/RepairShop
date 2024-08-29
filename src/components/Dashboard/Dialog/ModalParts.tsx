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
export function ModalParts() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-auto mt-10 scrollbar-none dark:bg-boxdark-2 sm:max-h-[700px] sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
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
            <select
              id="brand"
              className="text-black dark:bg-white dark:text-black"
            >
              <option value="">Select a brand</option>
              <option value="brand1">Brand 1</option>
              <option value="brand2">Brand 2</option>
              <option value="brand3">Brand 3</option>
            </select>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Label
              htmlFor="model"
              className="text-left text-black dark:text-white"
            >
              model
            </Label>
            <select
              id="model"
              className="text-black dark:bg-white dark:text-black"
            >
              <option value="">Select a model</option>
              <option value="model1">Model 1</option>
              <option value="model2">Model 2</option>
              <option value="model3">Model 3</option>
              {/* Add more options as needed */}
            </select>
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
            <Input
              id="picture"
              type="file"
              className="text-black  dark:bg-white"
            />
          </div>
        </div>
        <DialogFooter className="mt-5">
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
