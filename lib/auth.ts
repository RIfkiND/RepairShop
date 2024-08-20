import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "./db";
import { signInSchema } from "@/schemas/UserSchemas";
import { saltAndHashPassword } from "../utils/helper";


export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    //credentials
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        const email = credentials.email as string;
        const hash = saltAndHashPassword(credentials.password);

        let user: any = await db.user.findUnique({
          where: {
            email,
          },
        });
          const isMatch = bcrypt.compareSync(
            credentials.password as string,
            user.hashedPassword
          );
          if (!isMatch) {
            throw new Error("Incorrect password.");
          }

        return user;
      },
    }),
  ],
});
// import NextAuth from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import Credentials from "next-auth/providers/credentials";
// import { ZodError } from "zod"
// import { db } from "./db";
// import { signInSchema } from "@/schemas/SigInSchema";
// import { saltAndHashPassword } from "../utils/helper";


// export const {
//   handlers: { GET, POST },
//   signIn,
//   signOut,
//   auth,
// } = NextAuth({
//   adapter: PrismaAdapter(db),
//   session: { strategy: "jwt" },
//   providers: [
//     //credentials
//     Credentials({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "email@example.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials) => {
//         try {
//           let user:any = null
 
//           const { email, password } = await signInSchema.parseAsync(credentials)
 
//           // logic to salt and hash password
//           const pwHash = saltAndHashPassword(password)
 
//           // logic to verify if the user exists
//          user = await db.user.findUnique({where:{
//             email
//           }})
 
//           if (!user) {
//             throw new Error("User not found.")
//           }
 
//           // return JSON object with the user data
//           return user
//         } catch (error) {
//           if (error instanceof ZodError) {
//             // Return `null` to indicate that the credentials are invalid
//             return null
//           }
//         }
//       },
//     }),
//   ],
// });