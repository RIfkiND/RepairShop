import { z } from "zod";

export const SiginSchema = z.object({
    id: z.string(),
    email: z.string().email({message: "This Field must be an email"}).min(1, {message : "Must Contain At least one charcter"}),
    password: z.string().min(2, {message : "Must 2 Charcter or more"}),
})

export type Sigin = z.infer<typeof SiginSchema>