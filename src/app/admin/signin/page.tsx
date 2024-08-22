import React from "react";
import Link from "next/link";
import Image from "next/image";
import SignIn from "@/components/auth/sigin"
import { Metadata } from "next";
import { auth } from "../../../../auth/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Next.js Login Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Signin Page TailAdmin Dashboard Template",
};

export default async function Login() {
  const session = await auth()
  if(session){
    redirect('/admin/dashboard')
  }
   return (
    
      <SignIn/>
    
  );
};


