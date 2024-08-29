import { PrismaClient } from "@prisma/client"

 import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import _ from "lodash";
import { db } from "../../../../../config/db";

export async function GET(request:Request){
  const parts = await db.parts.findMany()

  return NextResponse.json({
    succes:true ,
    data:parts,
  },{status:200})
} 

