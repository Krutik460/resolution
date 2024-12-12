import { z } from "zod"

export const UserSchema = z.object({
  id: z.string().optional(),
  userName: z.string(),
  name: z.string().nullable(),
  password: z.string(),
})
