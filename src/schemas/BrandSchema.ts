import { z } from "zod";
export const MAX_FILE_SIZE =  1024 * 1024 * 5;
export const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];
export const BrandSchema = z.object({
    name : z.string().min(1 ,{ message: "This Field Not Empty"}).max(50),
    image: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    )
    .optional(),
});


export type Brand = z.infer<typeof BrandSchema>