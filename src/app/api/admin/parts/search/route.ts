import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../../config/db";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name") || "";
  try {
    const PartsSearch = await db.parts.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    });
if(!PartsSearch){
    return NextResponse.json({success: false, message:"Not Found"})
}
else{
    return NextResponse.json(
      { success: true, data: PartsSearch },
      {
        status: 200,
      },
    );
}
  } catch (err) {
    return NextResponse.json({err: "failed to fetch user"},{status:500})
  }
}
