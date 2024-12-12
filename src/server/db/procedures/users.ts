import { prisma } from "src/server/db"
import { type z } from "zod"

import { type UserSchema } from "src/types/user"

/**
 * Get a user by username
 * @param {string} userName - The username of the user
 * @returns {Promise} The user
 */
export const getUser = async (userName: string) => {
  return await prisma.user.findUnique({
    where: { userName },
  })
}

/**
 * Create a new user in the database
 * @param {RegisterSchema} input - The user data
 * @returns {Promise} The created user
 */
export const createUser = async (input: z.infer<typeof UserSchema>) => {
  return await prisma.user.create({ data: input })
}
