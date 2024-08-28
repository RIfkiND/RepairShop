import { NextResponse } from "next/server";
import { db } from "../../../../../../config/db";
import { BrandSchema } from "@/schemas/BrandSchema";
import { z } from "zod";



export async function GET(request: Request){
    const brands = await db.brand.findMany()

    return NextResponse.json({
        success :true,
        data:brands,
    },
    {
        status: 200,
      }
    )
}

export async function POST(request: Request){
    try {
      
        const body = await request.json();
        const parsedData = BrandSchema.parse(body);
    
        const brand = await db.brand.create({
          data: {
            name: parsedData.name,
            image: parsedData.image,
          },
        });
    
        return NextResponse.json(
          {
            success: true,
            message: 'Brand created successfully!',
            data: brand,
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