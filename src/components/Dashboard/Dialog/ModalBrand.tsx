import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Plus} from "lucide-react"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod'
import { ModelSchema } from "@/schemas/ModelSchma"

export function ModalBrand() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ModelSchema),
  });
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="ghost"><Plus/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white d ">
        <DialogHeader>
          <DialogTitle>Add Brand</DialogTitle>
          <DialogDescription>
           Tambahkan Brand
          </DialogDescription>
        </DialogHeader>
        <form action=""   >
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right text-black dark:text-white">
              image
            </Label>
            <Input  
              id="image"
              type= "file"
              defaultValue=""
              className="col-span-3  text-black dark:text-white"
             />
          <Label htmlFor="name" className="text-right text-black dark:text-white">
              Name
            </Label>
            <Input
              id="name"
              defaultValue=""
              className="col-span-3  text-black dark:text-white"
             />
          </div>
        </div>
        </form>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
