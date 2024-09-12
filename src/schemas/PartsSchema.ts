import {z} from "zod"

export const PartsSchemas = z.object({
    name: z.string().min(1, {message : "Must 2 Charcter or more"}),
    brand_name :z.string().min(1,{message: "This Field Must Contain a type"}),
    model_name :z.string().min(1,{message: "This Field Must Contain a Model"}),
    cost: z.number().min(1,{message: "This Field Must Contain 2 Number or more"}),
    stock: z.number().min(1,{message: "This Field Must Contain at least 2 number"}),
    image: z.string().min(1, {message : "This field mus no empty"}),
})

export type Parts = z.infer<typeof PartsSchemas>