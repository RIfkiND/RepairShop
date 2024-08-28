import { NextResponse } from "next/server";
import { PartsSchemas } from "@/schemas/PartsSchema";
import {z} from "zod"
import { db } from "../../../../../config/db";

export async function GET(request:Request) {
   const partss = await db.parts.findMany({
    skip:10,
    take:10,
   }) 
   return NextResponse.json({
    success :true,
    data :partss,

   },{
    status:200,
   })
}
export async function POST(request:Request) {
    try {
        const body = await request.json()
        const validateddata = PartsSchemas.parse(body)

        const partss = await db.parts.create({
            data:{
                name:validateddata.name,
                brandId: validateddata.brandId,
                modelId :validateddata.modelId,
                cost: validateddata.cost,
                stock:validateddata.stock,
                image: validateddata.image
            }
        })
        return NextResponse.json(
            {
              success: true,
              message: 'Parts created successfully!',
              data: partss,
            },
            { status: 200 }
          );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
              { success: false, message: error.errors },
              { status: 400 }
            );
          }
          return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
          );
    }
}