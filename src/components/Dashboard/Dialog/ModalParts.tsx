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
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

export function ModalParts() {
  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" >
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-auto mt-2 z-999 scrollbar-none dark:bg-boxdark-2 sm:max-h-[700px] sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Add Parts</DialogTitle>
          <DialogDescription>
           From For Adding Parts
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="flex flex-col justify-center  gap-4">
            <Label              htmlFor="name"
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
            <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
          </div>
        </div>
        <DialogFooter className="mt-5">
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

