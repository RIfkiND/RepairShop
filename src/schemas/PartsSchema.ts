import {z} from "zod"

export const PartsSchemas = z.object({
    id: z.string(),
    name: z.string().min(2, {message : "Must 2 Charcter or more"}),
    brandId :z.string().min(1,{message: "This Field Must Contain a type"}),
    modelId :z.string().min(1,{message: "This Field Must Contain a Model"}),
    cost: z.number().int().min(2,{message: "This Field Must Contain 2 Number or more"}),
    stock: z.number().int().min(2,{message: "This Field Must Contain at least 2 number"}),
})

export type Parts = z.infer<typeof PartsSchemas>