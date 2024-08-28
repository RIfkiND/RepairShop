import { NextResponse } from "next/server";
import { db } from "../../../../../../config/db";
import { ModelSchema } from "@/schemas/ModelSchma";
import { z } from "zod";

export async function GET(request: Request) {
  const models = await db.model.findMany();

  return NextResponse.json(
    {
      success: true,
      data: models,
    },
    {
      status: 200,
    },
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedata = ModelSchema.parse(body);

    const models = await db.model.create({
      data: {
        name: validatedata.name,
        image: validatedata.image,
      },
    });
    return NextResponse.json(
      {
        success: true,
        message: "Brand created successfully!",
        data: models,
      },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: error.errors },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
