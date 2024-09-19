import {z} from "zod"

export const PartsSchemas = z.object({
    name: z.string().min(1, {message : "Must 2 Charcter or more"}),
    brand_name :z.string().min(1,{message: "This Field Must Contain a type"}),
    model_name :z.string().min(1,{message: "This Field Must Contain a Model"}),
    cost: z
    .number({ invalid_type_error: "Cost must be a number" })
    .min(1, { message: "Cost must be 1 or greater." }).int(),
    stock: z.number({  invalid_type_error: "stock must be a number",required_error: "Stock Field Must no empty"}).int().min(1, { message: "Stock must be 1 or greater" }),
    image: z.string().min(1, {message : "This field must no empty"}),
    created_at: z.date().optional(), // Optional, as it's set automatically
    updated_at: z.date().optional(), // Optional, as it may not always be set
})

export type Parts = z.infer<typeof PartsSchemas>