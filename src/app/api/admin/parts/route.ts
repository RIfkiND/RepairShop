import { NextRequest, NextResponse } from "next/server";
import _ from "lodash";
import { db } from "../../../../../config/db";
import z from "zod"
import { getPaginationParams } from "@/lib/pagination";
import { Parts } from '../../../../schemas/PartsSchema';
const PartsSchema = z.object({
  id: z.string(),
  name : z.string(),
  image: z.string().optional(),
  brand_name : z.string(),
  cost: z.number(),
  model_name:z.string(),
  stock: z.number()
})

type partstype = z.infer<typeof PartsSchema>

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1');
  const pageSize = parseInt(url.searchParams.get('pageSize') || '10');

  const { skip, take } = getPaginationParams(page, pageSize);



  try {
    const [partss, totalpartss]: [partstype[], number] = await Promise.all([
      db.parts.findMany({
        skip,
        take,
        orderBy: { model_name: 'desc' },
      }),
      db.parts.count(),
    ]);

    const totalPages = Math.ceil(totalpartss / pageSize);

    return NextResponse.json({ data: partss, totalPages, currentPage: page }, { status: 200 });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}