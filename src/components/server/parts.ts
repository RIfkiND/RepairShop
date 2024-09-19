"use server";

import { PartsSchemas } from "@/schemas/PartsSchema";
import { NextResponse } from "next/server";

export const CreateParts = async (formData: FormData) => {
  try {
    const res = await fetch("/api/admin/upload", {
      method: "POST",
      body: formData,
    });
    if (!res.ok) {
      return { message: "Error", details: await res.json() };
    }

    const responseData = await res.json();
    return { message: "successful", data: responseData };
  } catch (error) {
    console.error("Error in CreateParts:", error);
    return { message: "Error", error };
  }
};
