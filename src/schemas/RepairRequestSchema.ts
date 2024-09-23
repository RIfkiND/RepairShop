import { z } from 'zod';

export const StatusEnum = z.enum(['PENDING', 'COMPLETED', 'PROSESS', 'CANCELLED']);

export const RepairRequestSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format').max(255, 'Email must be at most 255 characters').nonempty(),
  category: z.string().min(1, 'Category is required'),
  status: StatusEnum.default('PENDING'),
  request_date: z.date().default(() => new Date()), // Automatically sets to current date
  complete_date: z.date().nullable(), // Nullable if not completed
  repair: z.array(z.object({
    // Define fields of Repairs if necessary, or use a reference to another schema
    id: z.string().uuid(),
    description: z.string(),
    // Add more fields as needed
  })).optional(), // Optional array of repairs
});

// Type for TypeScript
export type RepairRequestSchema= z.infer<typeof RepairRequestSchema>;


