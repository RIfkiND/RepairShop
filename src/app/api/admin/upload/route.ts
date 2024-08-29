import { PrismaClient } from "@prisma/client"


import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import _ from "lodash";
import { db } from "../../../../../config/db";



export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = formData.get("name") as string ;
  const image = formData.get("image") as File || null;
  const model_name = formData.get("model_name") as string ;
const brand_name = formData.get("brand_name") as string ;
const cost = parseFloat(formData.get("cost") as string) || 0;
const stock = parseInt(formData.get("stock") as string, 10) || 0;
  const buffer = Buffer.from(await image.arrayBuffer());
  const relativeUploadDir = `/uploads/parts/${new Date(Date.now())
    .toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-")}`;

  const uploadDir = join(process.cwd(), "public", relativeUploadDir);

  try {
    await stat(uploadDir);
  } catch (e: any) {
    if (e.code === "ENOENT") {
      
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n",
        e
      );
      return NextResponse.json(
        { error: "Something went wrong." },
        { status: 500 }
      );
    }
  }

  try {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${image.name.replace(
      /\.[^/.]+$/,
      ""
    )}-${uniqueSuffix}.${mime.getExtension(image.type)}`;
    await writeFile(`${uploadDir}/${filename}`, buffer);
    const fileUrl = `${relativeUploadDir}/${filename}`;

    // Save to database
    const result = await db.parts.create({
      data: {
        name,
        image: fileUrl,
        model_name,
        cost,
        brand_name,
        stock
      },
    });

    return NextResponse.json({ user: result });
  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}