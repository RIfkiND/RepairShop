
import { db } from "../../../../../../config/db";
import { useRouter } from 'next/navigation';
import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile ,unlink} from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import _ from "lodash";
import { request } from "http";



export async function GET(request:Request,{params}:{params :{id :string}}) {
   
    const id = params.id as string
    try {
        const parts = await db.parts.findUnique({
            where:{
                id:id,
            }
        })
        if(!parts){
            return NextResponse.json({
                success:false,
                massage:"There is No parts "
            },{
                status:404
            })
        }

        return NextResponse.json({
            success:true,
            data:parts
        },{
            status :200
        })
    } catch (error) {
        console.log(error);
    }
   
  };


  export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
      const formData = await request.formData();
      const name = formData.get("name") as string;
      const image = formData.get("image") as File | null;
      const model_name = formData.get("model_name") as string;
      const brand_name = formData.get("brand_name") as string;
      const cost = parseFloat(formData.get("cost") as string) || 0;
      const stock = parseInt(formData.get("stock") as string, 10) || 0;
  
      if (!image) {
        return NextResponse.json({ error: "Image is required." }, { status: 400 });
      }
  
      const buffer = Buffer.from(await image.arrayBuffer());
      const relativeUploadDir = `/uploads/parts/${new Date().toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).replace(/\//g, "-")}`;
  
      const uploadDir = join(process.cwd(), "public", relativeUploadDir);
  
      try {
        await stat(uploadDir);
      } catch (e: any) {
        if (e.code === "ENOENT") {
          await mkdir(uploadDir, { recursive: true });
        } else {
          console.error("Error while trying to create directory when uploading a file\n", e);
          return NextResponse.json({ error: "Failed to create upload directory." }, { status: 500 });
        }
      }
  
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const extension = mime.getExtension(image.type) || 'bin'; 
      const filename = `${image.name.replace(/\.[^/.]+$/, "")}-${uniqueSuffix}.${extension}`;
      const filePath = join(uploadDir, filename);
      await writeFile(filePath, buffer);
  
      const fileUrl = `${relativeUploadDir}/${filename}`;
      const id = params.id as string;
  
      const result = await db.parts.update({
        where: { id },
        data: {
          name,
          image: fileUrl,
          model_name,
          brand_name,
          cost,
          stock,
          updated_at: new Date(),
        },
      });
  
      return NextResponse.json({ part: result });
    } catch (e) {
      console.error("Error while trying to upload a file\n", e);
      return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
    }
  }


  export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = params.id as string;
  
    try {
      const part = await db.parts.findUnique({
        where: { id },
      });
  
      if (!part) {
        return NextResponse.json({ error: "Item not found." }, { status: 404 });
      }
  
      
      const imageFilePath = join(process.cwd(), 'public', part.image);
  
  
      try {
        await unlink(imageFilePath);
      } catch (fileError) {
        console.error("Error while trying to delete the image file\n", fileError);
     
      }
  

      await db.parts.delete({
        where: { id },
      });
  
      return NextResponse.json({ success: true }, { status: 202 });
    } catch (error) {
      console.error("Error while trying to delete the item\n", error);
      return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
    }
  }