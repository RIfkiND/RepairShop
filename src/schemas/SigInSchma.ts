import { z } from "zod";
//validasi signin
export const SiginSchema = z.object({
    email: z.string().min(1, {message : "Must Contain At least one charcter"}).email({message: "This Field must be an email"}),
    password: z.string().min(2, {message : "Must 2 Charcter or more"}),
})

export type Sigin = z.infer<typeof SiginSchema>