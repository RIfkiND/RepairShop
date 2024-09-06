import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../config/db";
import { getPaginationParams } from "@/lib/pagination";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const pageSize = parseInt(url.searchParams.get("pageSize") || "10");
  const search = url.searchParams.get("search") || "";

  const { skip, take } = getPaginationParams(page, pageSize);

  try {
    const [parts, totalParts]: [any[], number] = await Promise.all([
      db.parts.findMany({
        skip,
        take,
        orderBy: {
          brand_name: "asc",
        },
        where: {
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              brand_name: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              model_name: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        },
      }),
      db.parts.count({
        where: {
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              brand_name: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              model_name: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        },
      }),
    ]);

    const totalPages = Math.ceil(totalParts / pageSize);

    return NextResponse.json(
      { data: parts, totalPages, currentPage: page },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
