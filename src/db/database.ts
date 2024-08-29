import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { schema } from "./schema";
import "dotenv/config";

const poolConnection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
  port: parseInt(process.env.MYSQL_PORT ?? "3306"),
  multipleStatements: true,
});

void (async () => {
  try {
    await poolConnection.query("SELECT 1");
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Could not connect to database", error);
  }
})();

export const db = drizzle(poolConnection, {
  schema,
  mode: "default",
});
