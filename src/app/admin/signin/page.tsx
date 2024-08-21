import React from "react";
import Link from "next/link";
import Image from "next/image";
import SignIn from "@/components/auth/sigin"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Next.js Login Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Signin Page TailAdmin Dashboard Template",
};

const Login: React.FC = () => {
   return (
  
      <SignIn/>
    
  );
};

export default Login;
