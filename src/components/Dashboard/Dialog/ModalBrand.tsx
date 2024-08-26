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
export function ModalBrand() {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="ghost"><Plus/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]  ">
        <DialogHeader>
          <DialogTitle>Add Type</DialogTitle>
          <DialogDescription>
           Tambahkan Type
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
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
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
