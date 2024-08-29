import { sql } from "drizzle-orm";
import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("int").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  password: varchar("password", { length: 150 }).notNull(),
  avatar: varchar("avatar", { length: 100 }),
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`current_timestamp()`),
  updatedAt: timestamp("updated_at")
    .notNull()
    .default(sql`current_timestamp()`),
});
