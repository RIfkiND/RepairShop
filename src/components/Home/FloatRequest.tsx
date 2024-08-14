import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FloatRequest() {
    return (
      <Dialog>
        <DialogTrigger asChild>
        <Button variant="default" className=" fixed right-20  bottom-20  m-5 rounded-full bg-indigo-600 dark:bg-indigo-600 text-white dark:text-white flex justify-end  items-end max-md:hidden">
            <Mail/>
        </Button>

        </DialogTrigger>
        <DialogContent className="sm:max-w-[650px] fixed" >
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you    re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col justify-center  gap-4">
              <Label htmlFor="name" className="text-left text-black dark:text-white">
                Name
              </Label>
              <Input
                id="name"
                placeholder="name.."
                className="col-span-3  text-black dark:text-white"
              />
            </div>
            <div className="flex flex-col justify-center  gap-4">
            <Label htmlFor="Email" className="text-left text-black dark:text-white">
                Email
              </Label>
              <Input
                id="email"
                placeholder="example@.gmail.com"
                className="col-span-3 text-black dark:text-white"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="Email" className="text-left text-black dark:text-white">
               Phone.Number
              </Label>
              <Input
                id="Phone Number"
                placeholder="+62"
                className="col-span-3 text-black dark:text-white"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="Email" className="text-left text-black dark:text-white">
              File
              </Label>
              <Input
                id="Phone Number"
                placeholder="+62"
                className="col-span-3 text-black dark:text-white"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="Email" className="text-left text-black dark:text-white">
               Deskirption  
              </Label>
              <Input
                id="Phone Number"
                placeholder="+62"
                className="col-span-3 text-black dark:text-white"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }