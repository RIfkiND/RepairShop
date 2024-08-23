"use server";
import { z } from "zod";
import { signIn,signOut } from "../../auth/auth";
import { db } from "../../config/db";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { SiginSchema } from '../schemas/SigInSchma';
const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};
export const loginWithCreds = async (formData: FormData) => {
  
  const rawFormData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    redirectTo: "/admin/dashboard",
  };

 
  const dataToValidate = {
    id: "", 
    email: rawFormData.email,
    password: rawFormData.password,
  };

 
  try {
    SiginSchema.parse(dataToValidate);
  } catch (error) {
   
    if (error instanceof z.ZodError) {
      return { error: error.errors.map(e => e.message).join(", ") };
    }
    return { error: "Validation failed." };
  }


  const existingUser = await getUserByEmail(rawFormData.email);
  console.log(existingUser);

  try {
    
    const result = await signIn("credentials", {
      redirect: false,
      email: rawFormData.email,
      password: rawFormData.password,
      redirectTo: rawFormData.redirectTo,
    });

    if (result?.error) {
      
      return { error: result.error };
    }
    revalidatePath("/");
    return { success: true };

  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
  
    throw error;
  }
};
