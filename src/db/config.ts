import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./src/domain/**/schema.ts",
  out: "./drizzle",
  dialect: "mysql",
  dbCredentials: {
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST ?? "",
    port: parseInt(process.env.MYSQL_PORT ?? "3306"),
    database: process.env.MYSQL_DATABASE ?? "",
  },
} satisfies Config;
