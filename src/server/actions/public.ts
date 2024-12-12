"use server"

import { getResolutions } from "@/server/db/procedures/resolutions"
import { getUser } from "@/server/db/procedures/users"

/**
 * Server action to get user's resolution.
 * - If the user already exists, an error is returned.
 * - If the user is successfully created, a verification email is sent.
 *
 * @param {string} userName - The username of the user
 * @returns {object} { error: {message: "Invalid username!"} } if username does not exist
 * @returns {object} { user: userObject, resolution: resolutionObject } if successful
 */
export const getUserResolution = async (userName: string, year: number) => {
  // Check if user exists
  const user = await getUser(userName)
  if (!user) {
    return { error: { message: "Invalid username!" } }
  }

  // Get user's resolution
  const resolution = await getResolutions(userName, year)

  return { user, resolution }
}
