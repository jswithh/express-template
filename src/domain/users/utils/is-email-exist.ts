import { eq, sql } from "drizzle-orm";
import { db } from "../../../db/database"
import { users } from "../schema";

export const isEmailExist = async (input: any) => {
  const isExist = await db
    .select({ count: sql<number>`count(*)` })
    .from(users)
    .where(eq(users.email, input));
  if (isExist[0].count > 0) {
    return false;
  }
  return true;
};
