import { prisma } from ".."

/**
 * Get all resolutions for a user
 * @param {string} userName - The username of the user
 * @param {number} year - The year of the resolution
 * @returns {Promise} The user
 */
export const getResolutions = async (userId: string, year: number) => {
  return await prisma.resolution.findMany({
    where: { userId, year },
  })
}
