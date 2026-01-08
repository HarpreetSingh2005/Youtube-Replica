import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL is missing! Check your .env file and restart your terminal."
  );
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql);
