import { z } from "zod";

export const BrandSchema = z.object({
    name : z.string().min(1 ,{ message: "This Field Not Empty"}).max(50),
    image: z
    .any().optional(),
});


export type Brand = z.infer<typeof BrandSchema>