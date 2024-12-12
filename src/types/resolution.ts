import { z } from "zod"

export const ResolutionSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  title: z.string(),
  completed: z.date(),
  year: z.number(),
})
