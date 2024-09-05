import { NextRequest, NextResponse } from "next/server";
import _ from "lodash";
import { db } from "../../../../../config/db";
import z from "zod"
import { getPaginationParams } from "@/lib/pagination";


export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1');
  const pageSize = parseInt(url.searchParams.get('pageSize') || '10');

  const { skip, take } = getPaginationParams(page, pageSize);



  try {
    const [partss, totalpartss]: [any[],number] = await Promise.all([
      db.parts.findMany({
        skip  ,
        take,
        orderBy: { 
          brand_name:"asc",
        },
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